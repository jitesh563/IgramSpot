import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
// import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import heart from "../logo/heart.png"
import Send1 from "../logo/Send1.png"
import Message4 from "../logo/Message4.png";



const Template2 = ({ post , borderColor }) => {
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
      <div className={`max-w-sm w-full bg-white rounded-3xl overflow-hidden shadow-lg ${borderColor} p-4`}> <div className="p-4">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img
              src={profilePicUrl}
              alt="Owner profile"
              className="w-8 h-8 rounded-full object-cover mr-3 shadow-md"
            />
            <div>
            <span className="font-semibold text-gray-900 text-sm">{post.owner_full_name}</span>
            <p className="text-gray-500 text-xs">@{post.owner_username}</p>
            </div>
            
          </div>
          <BsThreeDotsVertical className="text-gray-500" />
        </div>

        {/* Post Image/Video Section */}
        <div className="mb-4 bg-gray-900  shadow-lg">
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

        {/* Footer Section */}
        <div className="flex justify-center ">
          <div className="flex space-x-4">
            <img src={heart} className="w-7 h-7" />
            <img src={Message4} className="w-7 h-7" />
            <img src={Send1} className="w-7 h-7 " />
          </div>
          
        </div>
      </div>
    </div>
    </div>
  );
};

export default Template2;
