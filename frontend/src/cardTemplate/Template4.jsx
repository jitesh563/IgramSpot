import React from "react";
import heart from "../logo/heart.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import Insta from "../logo/Insta.png";
import Save from "../logo/Save.png";
import Message from "../logo/Message.png";
import Send from "../logo/Send.png";

const Template4 = ({ post, borderColor }) => {
  const backendBaseUrl = "http://127.0.0.1:8000"; // Django backend URL

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
      <div className={`max-w-sm w-full bg-white rounded-3xl overflow-hidden shadow-lg ${borderColor} p-4`}>
        {/* Header Section */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img
              src={profilePicUrl}
              alt="Owner profile"
              className="w-10 h-10 rounded-full object-cover mr-3 shadow-md"
            />
            <div>
              <h2 className="font-semibold text-lg text-gray-900">
                {post.owner_full_name}
              </h2>
              <p className="text-gray-600 text-sm">@{post.owner_username}</p>
            </div>
          </div>
          <div className="flex items-center">
            <BsThreeDotsVertical className="text-gray-600 text-xl" />
          </div>
        </div>

        {/* Post Image/Video Section */}
        <div className="mb-4">
          {postImageUrl && (
            <img
              src={postImageUrl}
              alt="Instagram post"
              className="w-full h-auto rounded-lg shadow-sm"
            />
          )}
          {postVideoUrl && (
            <video
              src={postVideoUrl}
              controls
              className="w-full h-auto rounded-lg shadow-sm"
            />
          )}
        </div>

        {/* Footer Section */}
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <img src={heart} alt="heart" className="w-8 h-9" />
            <img src={Message} alt="message" className="w-8 h-8" />
            <img src={Send} alt="send" className="w-8 h-8" />
          </div>
          <img src={Save} alt="save" className="w-9 h-9" />
        </div>
      </div>
    </div>
  );
};

export default Template4;
