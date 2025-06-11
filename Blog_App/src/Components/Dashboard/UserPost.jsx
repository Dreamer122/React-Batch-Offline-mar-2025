import React from 'react';
import { FilePenLine, Trash2, Calendar, Tag ,Eye} from 'lucide-react';
import { Link, useParams } from 'react-router';
import { Blogsnippet } from '../common/Blogsnippet';

export const UserPost = ({doc,deletePost}) => {
    const {id} = useParams();
    const {thumbnail, title, Category, published, content, $id, tags} = doc;
    
    return (
        <div className="relative bg-white border border-gray-100 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700 overflow-hidden group">
            <div className="relative overflow-hidden">
                <img 
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" 
                    src={thumbnail} 
                    alt={title}
                />
                <div className="absolute top-4 right-4">
                    <span className={`
                        inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
                        ${published === "Publish" 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                            : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                        }
                    `}>
                        {published}
                    </span>
                </div>
            </div>
            
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 dark:text-white">
                    {title}
                </h3>
                
                <div className="prose prose-sm max-w-none mb-4 text-gray-600 dark:text-gray-300 line-clamp-3" >
                  <Blogsnippet content={content}/>
                </div>
                
                <div className="space-y-3">
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <Tag className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">Category: </span>
                        <span className="text-sm ml-1">{Category}</span>
                    </div>
                    
                    {tags && tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag, index) => (
                                <span 
                                    key={index}
                                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
                
                <div className="flex gap-2 justify-end mt-6">
                    <Link to={`/viewblogpost/${$id}`}>
                    <Eye />
                    </Link>
                    <Link 
                        to={`/dashboard/${id}/edit/${$id}`}
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors duration-200 dark:bg-blue-900/50 dark:text-blue-300 dark:hover:bg-blue-900"
                    >
                        <FilePenLine className="w-5 h-5" />
                    </Link>
                    <Link 
                        onClick={()=>deletePost($id)}
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition-colors duration-200 dark:bg-red-900/50 dark:text-red-300 dark:hover:bg-red-900"
                    >
                        <Trash2 className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
};