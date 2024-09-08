import React from 'react';
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const Template3 = ({ post , borderColor }) => {
  if (!post) return null;

  const backendBaseUrl = "http://127.0.0.1:8000";

  const postImageUrl = post.post_image
    ? `${backendBaseUrl}${post.post_image}`
    : null;
  const postVideoUrl = post.post_video
    ? `${backendBaseUrl}${post.post_video}`
    : null;

  return (
    <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 min-h-screen flex justify-center items-start py-10 px-8">
    <div className={`max-w-sm mx-auto mt-7 shadow-lg shadow-blue-500/50 transform transition-all duration-300 hover:scale-105 hover:rotate-1 hover:shadow-blue-500/80 neon-border ${borderColor}`}>
      <div className="bg-white p-3 shadow-2xl border-8 border-white relative">
        {/* Main content area */}
        <div className="aspect-square bg-gray-200 overflow-hidden relative">
          {postImageUrl && (
            <img
              src={postImageUrl}
              alt="Instagram post"
              className="w-max h-auto object-cover"
            />
          )}
          {postVideoUrl && (
            <video
              src={postVideoUrl}
              controls
              className="w-full h-full object-cover"
            />
          )}
        </div>
        
        {/* Icons positioned half on image, half on template */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-6 translate-y-1/2">
          <div className="bg-pink-500 rounded-full p-3 shadow-md transform transition-all duration-200 hover:scale-110">
            <AiOutlineHeart className="text-3xl text-white" />
          </div>
          <div className="bg-blue-500 rounded-full p-3 shadow-md transform transition-all duration-200 hover:scale-110">
            <FaRegComment className="text-3xl text-white" />
          </div>
          <div className="bg-cyan-500 rounded-full p-3 shadow-md transform transition-all duration-200 hover:scale-110">
            <FiSend className="text-3xl text-white" />
          </div>
        </div>

        {/* Spacer to account for icons overlapping */}
        <div className="h-8"></div>

        
      </div>
    </div>
    </div>
  );
};

export default Template3;
