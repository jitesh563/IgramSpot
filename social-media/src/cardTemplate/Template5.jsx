import React from 'react';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { BsBookmark, BsInstagram } from "react-icons/bs";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Heart2 from "../logo/Heart2.png"
import Save from "../logo/Save.png"

const Template5 = ({ post , borderColor }) => {
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
      {/* Card Container */}
      <div className={`max-w-sm w-full bg-white rounded-3xl overflow-hidden shadow-lg ${borderColor} p-4`}> {/* Header */}
      <div className="flex justify-between items-center p-2">
        <HiOutlineDotsHorizontal />
        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        <BsInstagram className="text-xl text-gray-800" />
      </div>

      {/* Image/Video Container */}
      <div className="aspect-square bg-gray-200">
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

      {/* Footer Icons */}
      <div className="flex  justify-center p-4">
        <div className="flex space-x-4 ">
          <FaRegComment className="text-2xl text-gray-800" />
          <img src={Heart2} className="h-7 w-7 " />
          <img src={Save} className="w-7 h-7" />
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default Template5;
