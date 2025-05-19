import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { databases } from "../../appwriteConfig"; // assuming this is your Appwrite config
import { Link } from "react-router-dom"; // make sure you're using react-router-dom
import { Query } from "appwrite";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [statusFilter, setStatusFilter] = useState("published");
  const userData = useSelector((state) => state.auth.userData); // adjust if needed

  useEffect(() => {
    if (userData?.$id) {
      fetchBlogs(statusFilter);
    }
  }, [statusFilter, userData]);

  const fetchBlogs = async (status) => {
    try {
      const response = await databases.listDocuments(
        "your-database-id", // replace with your DB ID
        "posts", // your collection
        [
          Query.equal("userId", userData.$id),
          Query.equal("status", status),
          Query.orderDesc("$createdAt"),
        ]
      );
      setBlogs(response.documents);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">My Blogs</h1>

      {/* Filter Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setStatusFilter("published")}
          className={`px-4 py-2 rounded ${statusFilter === "published" ? "bg-cyan-600 text-white" : "bg-gray-300"}`}
        >
          Published
        </button>
        <button
          onClick={() => setStatusFilter("draft")}
          className={`px-4 py-2 rounded ${statusFilter === "draft" ? "bg-cyan-600 text-white" : "bg-gray-300"}`}
        >
          Drafts
        </button>
      </div>

      {/* Blog Cards */}
      {blogs.length === 0 ? (
        <p className="text-gray-500">No {statusFilter} blogs found.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <div key={blog.$id} className="bg-white rounded-xl shadow p-4">
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="text-sm text-gray-600">{new Date(blog.$createdAt).toLocaleDateString()}</p>
              <p className="mt-2 text-gray-700 line-clamp-3">{blog.content}</p>

              <div className="mt-4 flex justify-between items-center">
                <span
                  className={`px-2 py-1 rounded text-sm ${
                    blog.status === "published" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {blog.status}
                </span>
                <Link
                  to={`/edit-blog/${blog.$id}`}
                  className="text-cyan-600 hover:underline text-sm"
                >
                  Edit
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogPage;
