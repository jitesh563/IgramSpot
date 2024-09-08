import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import Message2 from "../logo/Message2.png";
import Send1 from "../logo/Send1.png";

const Template1 = ({ post , borderColor }) => {
  if (!post) return null;

  const backendBaseUrl = "http://127.0.0.1:8000";

  const profilePicUrl = `${backendBaseUrl}${post.owner_profile_pic}`;
  const postImageUrl = post.post_image
    ? `${backendBaseUrl}${post.post_image}`
    : null;
  const postVideoUrl = post.post_video
    ? `${backendBaseUrl}${post.post_video}`
    : null;

  return (
    <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 min-h-screen flex justify-center items-start py-10 px-8">
      {/* Card Container */}
      <div className={`max-w-sm w-full bg-white rounded-3xl overflow-hidden shadow-lg ${borderColor} p-4`}>{/* Header */}
      <div className="p-4 flex justify-between items-center">
        <div className="flex items-center ">
          <img
            src={profilePicUrl}
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover mr-3 shadow-md"
          />
          <h2 className="font-bold text-lg text-gray-900">
            {post.owner_full_name}
          </h2>
        </div>
        <BsThreeDotsVertical className="text-gray-600 shadow-sm" />
      </div>

      {/* Image/Video */}
      <div className="bg-gray-900 aspect-square border-l-2 border-r-2 border-white shadow-inner">
        {postImageUrl && (
          <img
            src={postImageUrl}
            alt="Post content"
            className="w-max h-auto object-cover shadow-md"
          />
        )}
        {postVideoUrl && (
          <video
            src={postVideoUrl}
            controls
            className="w-full h-full object-cover shadow-md"
          />
        )}
      </div>

      {/* Footer */}
      <div className="p-4 flex justify-between items-center">
        <div className="flex space-x-4">
          <AiOutlineHeart className="text-2xl text-pink-500 drop-shadow-md" />
          <img
            src={Message2}
            alt="Speech Bubble"
            className="  drop-shadow-md w-6 h-6 "
          />
          <img src={Send1} className=" w-6 h-6 " />
        </div>
        <BsBookmark className="text-2xl text-gray-800 drop-shadow-md" />
      </div>
    </div>
    </div>
  );
};

export default Template1;
