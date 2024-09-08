import React from 'react';
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";

const Template6 = ({ post }) => {
  if (!post) return null;

  const backendBaseUrl = "http://127.0.0.1:8000";
  const profilePicUrl = `${backendBaseUrl}${post.owner_profile_pic}`;
  const postImageUrl = post.post_image ? `${backendBaseUrl}${post.post_image}` : null;

  return (
    <div className="inline-block">
      <div className="bg-white rounded-lg shadow-lg border-2 border-gray-300 p-4">
        {/* Header */}
        <div className="flex items-center mb-2">
          <img src={profilePicUrl} alt="Profile" className="w-8 h-8 rounded-full object-cover mr-2" />
          <span className="font-semibold">{post.owner_username}</span>
        </div>

        {/* Image */}
        <div className="aspect-square w-full mb-2">
          {postImageUrl && (
            <img src={postImageUrl} alt="Post content" className="w-full h-full object-cover rounded-md" />
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <AiOutlineHeart className="text-2xl text-gray-600" />
            <FaRegComment className="text-2xl text-gray-600" />
            <FiSend className="text-2xl text-gray-600" />
          </div>
          <BsBookmark className="text-2xl text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default Template6;