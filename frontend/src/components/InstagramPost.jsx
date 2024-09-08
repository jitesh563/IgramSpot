import React, { useRef, useState } from "react";
import axios from "axios";
import ShowInstaPost from "./ShowInstaPost";
import { MdOutlineContentPaste } from "react-icons/md";

import { useSelector , useDispatch } from "react-redux";
import { setPostData , dataType } from "../redux/slice/postSlice";


const InstagramPost = () => {
  let [postUrl, setPostUrl] = useState("");
  const showInstaPostRef = useRef();
  
  const dispatch = useDispatch()
  const post = useSelector((state) => state.post.data)


  const handleSubmit = (event) => {
    event.preventDefault();
    getPost();
  };

  const getPost = async () => {
    try {
      const response = await axios.get(`/api/fetch/?post_url=${postUrl}`);
      dispatch(setPostData(response.data));
      dispatch(dataType(response.data.post_video ? 'video':'image'))
      // console.log("Post data:", response.data);
      setPostUrl("");
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  };

  
  return (
    <>
    <div className="min-h-screen bg-white flex flex-col ">
      
      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center  p-4 pb-0 text-center">
        <h2 className="mb-4 text-8xl font-extrabold tracking-tighter md:text-8xl leading-tighter ">
          Make 
          <span className="bg-gradient-to-r px-5 from-red-600 via-yellow-300 to-red-600 text-transparent bg-clip-text ">
            Insta
          </span>
           Post
        </h2>
        <h2 className="text-5xl md:text-6xl font-extrabold mb-8">
          <span className="bg-gradient-to-r from-red-400 via-blue-400 to-green-400 text-transparent bg-clip-text">
            Beautiful
          </span>
        </h2>
        <p className="text-gray-600 mb-2 max-w-md">
          Create beautiful post of insta with a single tap.
        </p>
       
      
      <div className="flex flex-col justify-center items-center ">
      <div className="m-7">
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          
          <div className="flex items-center">
            <input
              className="border-2 rounded-l-md w-96 pl-5 h-10 bg-slate-200 shadow-lg shadow-blue-500/50"
              type="text"
              value={postUrl}
              onChange={(e) => setPostUrl(e.target.value)}
              placeholder="Paste here"
            />
            <button
              type="submit"
              className="bg-pink-400 text-white py-2 px-4 rounded-r-md h-10 flex items-center justify-center"
            >
              <MdOutlineContentPaste size={24} />
            </button>
          </div>
        </form>
      </div>
      
      
    </div>
    </main>
      {/* Background Circles */}
      
      <div className="fixed top-0 right-0 w-64 h-64 bg-yellow-100 rounded-full -mt-32 -mr-32"></div>
    </div>
    
    
    </>
  );
};

export default InstagramPost;
