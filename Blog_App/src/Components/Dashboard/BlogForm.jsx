import React, { useEffect, useState } from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import { blogTags, blogCategories } from '../../data/blogcat';
import { useForm } from 'react-hook-form';
import { ImagePlus } from 'lucide-react';

export const BlogForm = ({isEdit=false, defaultValue=null,loading=false, Onsubmit }) => {
    const { handleSubmit, register, setValue, watch,reset } = useForm(
        {
            defaultValues:defaultValue
        }
    );
    const [tags, setTags] = useState([]);
    const [thumbnailpreview, setThumbnailPreview] = useState("");

    const editorContent = (content) => {
        setValue("blogDescription", content);
    };

    const setTagValue = (tag) => {
        let updatedTags;
        if (tags.includes(tag)) {
            updatedTags = tags.filter((t) => t !== tag);
        } else if (tags.length < 5) {
            updatedTags = [...tags, tag];
        } else {
            updatedTags = [...tags];
        }
        setTags(updatedTags);
        setValue("tags", updatedTags);
    };

    const thumbnail = watch("thumbnail");

    useEffect(() => {
        const thumbnailPreview = () => {
            console.log(thumbnail)
             const selectedFile = thumbnail?.[0];

            if (selectedFile instanceof File) {
                const fileReader = new FileReader();
                fileReader.onloadend = () => {
                    setThumbnailPreview(fileReader.result);
                };
            
                    fileReader.readAsDataURL(thumbnail[0]);

                
            }
            else if (defaultValue?.thumbnail && typeof defaultValue.thumbnail === "string") {
                setThumbnailPreview(defaultValue.thumbnail); // Show old image if editing
            }
    }
        
        thumbnailPreview();
    }, [thumbnail]);

    useEffect(()=>{
        console.log("default value",defaultValue)
        reset(defaultValue)
         if (defaultValue?.tags) {
        setTags(defaultValue.tags);
    }
    
    },[defaultValue])

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{isEdit?"Update Blog Post":"Create New Blog Post"}</h2>
                
                <form onSubmit={handleSubmit(Onsubmit)} className="space-y-6">
                    {/* Title Input */}
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                            Blog Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            {...register("title")}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            placeholder="Enter your blog title"
                        />
                    </div>

                    {/* Thumbnail Upload */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Thumbnail Image
                        </label>
                        <div className="flex items-center space-x-4">
                            <div className="relative">
                                <input
                                    type="file"
                                    {...register("thumbnail")}
                                    className="hidden"
                                    id="thumbnail"
                                />
                                <label
                                    htmlFor="thumbnail"
                                    className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-green-50 transition-colors"
                                >
                                    <ImagePlus className="w-5 h-5 text-green-600 mr-2" />
                                    <span className="text-sm text-gray-600">{watch("thumbnail")?.[0]?.name || "Choose Image"}
</span>
                                </label>
                            </div>
                            {thumbnailpreview && (
                                <div className="relative">
                                    <img
                                        src={thumbnailpreview}
                                        alt="Thumbnail preview"
                                        className="w-16 h-16 rounded-lg object-cover"
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Tags Selection */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Select Tags {tags.length}/5
                        </label>
                        <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto p-2 border border-gray-200 rounded-lg">
                            {blogTags.map((tag) => (
                                <button
                                    type="button"
                                    key={tag}
                                    onClick={() => setTagValue(tag)}
                                    className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                                        tags.includes(tag)
                                            ? "bg-green-600 text-white"
                                            : "bg-green-100 text-green-800 hover:bg-green-200"
                                    }`}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                        {tags.length >= 5 && (
                            <p className="text-red-600 text-sm">Maximum 5 tags allowed</p>
                        )}
                    </div>

                    {/* Category Selection */}
                    <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                            Category
                        </label>
                        <select
                            id="category"
                            {...register("Category")}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                            {blogCategories.map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Rich Text Editor */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Blog Content
                        </label>
                        <SunEditor
            //              getSunEditorInstance={(sunEditor) => {
            //         editorRef.current = sunEditor;
            // }}
            setContents={defaultValue?.content || ""}
                            onChange={editorContent}
                           
                            setOptions={{
                                buttonList: [
                                    ['undo', 'redo'],
                                    ['font', 'fontSize', 'formatBlock'],
                                    ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                                    ['removeFormat'],
                                    '/',
                                    ['fontColor', 'hiliteColor'],
                                    ['indent', 'outdent'],
                                    ['align', 'horizontalRule', 'list', 'table'],
                                    ['link', 'image', 'video'],
                                    ['fullScreen', 'showBlocks', 'codeView'],
                                ],
                                minHeight: '300px'
                            }}
                        />
                    </div>

                    {/* Publishing Status */}
                    <div>
                        <label htmlFor="published" className="block text-sm font-medium text-gray-700 mb-1">
                            Publishing Status
                        </label>
                        <select
                            id="published"
                            {...register("published")}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                            <option value="Draft">Draft</option>
                            <option value="Publish">Publish</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                            {
                                isEdit?loading?"updating...":"Update Blog post ":
                            loading?"creating...":"Create Blog Post"
                            }
                            
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};