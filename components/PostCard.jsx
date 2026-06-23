import React from "react";
import service from '../Appwrite/config';
import { Link } from "react-router-dom";

export default function PostCard ({ $id, title, featuredImage, ft_img }) {
    
    
    const imageId = ft_img || featuredImage;

    return (
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-gray-100 rounded-xl p-4">
                <div className="w-full justify-center mb-4">
                    
                    {imageId ? (
                        <img 
                            src={service.getFilePreview(imageId)} 
                            alt={title} 
                            className="w-full h-full object-contain"
                            style={{ maxHeight: '200px' }}
                        />
                    ) : (
                        <div className="h-40 bg-gray-200 rounded-xl flex items-center justify-center">
                            No Image
                        </div>
                    )}
                </div>
                <h2 className="text-xl font-bold text-black w-50">{title}</h2>
            </div>
        </Link>
    )
}