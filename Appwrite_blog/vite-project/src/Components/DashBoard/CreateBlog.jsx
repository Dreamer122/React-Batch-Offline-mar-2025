import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ID } from "appwrite";
import { storage, databases } from "./"; // adjust path if needed
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const userData = useSelector((state) => state.auth.userData);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [status, setStatus] = useState("draft");
  const [loading, setLoading] = useState(false);

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!title || !content || !thumbnail) {
      return alert("Please fill in all fields and upload a thumbnail.");
    }

    setLoading(true);
    try {
      // Upload thumbnail to Appwrite Storage
      const file = await storage.createFile("your-bucket-id", ID.unique(), thumbnail);
      const fileId = file.$id;

      // Get thumbnail URL
      const fileUrl = storage.getFilePreview("your-bucket-id", fileId).href;

      // Create post document in Appwrite
      const newPost = await databases.createDocument(
        "your-database-id",
        "posts",
        ID.unique(),
        {
          title,
          content,
          thumbnail: fileUrl,
          userId: userData.$id,
          status,
          likes: [],
          comments: [],
        }
      );

      console.log("Blog created:", newPost);
      navigate("/blogs"); // Redirect to blog page after success
    } catch (error) {
      console.error("Error creating blog:", error);
      alert("Something went wrong while creating the blog.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Create a New Blog</h1>

      <form onSubmit={handleCreate} className="space-y-6">
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            className="w-full border px-4 py-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter blog title"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Content</label>
          <textarea
            className="w-full border px-4 py-2 rounded min-h-[150px]"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your blog content..."
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Thumbnail Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setThumbnail(e.target.files[0])}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Status</label>
          <select
            className="w-full border px-4 py-2 rounded"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-cyan-600 text-white px-6 py-2 rounded hover:bg-cyan-700"
          disabled={loading}
        >
          {loading ? "Creating..." : "Create Blog"}
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
