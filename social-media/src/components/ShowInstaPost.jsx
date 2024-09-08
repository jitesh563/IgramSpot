import React, { useState , useEffect } from "react";
import html2canvas from "html2canvas";
import Template1 from "../cardTemplate/Template1.jsx";
import Template2 from "../cardTemplate/Template2.jsx";
import Template3 from "../cardTemplate/Template3.jsx";
import Template4 from "../cardTemplate/Template4.jsx";
import Template5 from "../cardTemplate/Template5.jsx";
import { selectTemplate } from "../redux/slice/templateSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import  "./ShowInstaPostCSS.css"
import axios from "axios";
import Template6 from "../cardTemplate/Template6.jsx";

const ShowInstaPost = ({ post }) => {
  console.log("Post data in ShowInstaPost:", post);
  if (!post) return "No post available";

  const dispatch = useDispatch();
  const selectedTemplate = useSelector(
    (state) => state.template.selectTemplate
  );
  

  const dataType = useSelector((state) => state.post.dataType);

  const selectedTemplateRef = useRef();
  
  // Neon color apply
  const[borderColor , setBorderColor]= useState('')

  const neonColors = [
    { name: 'neon-pink', bg: '#ff00de' },
    { name: 'neon-blue', bg: '#00f7ff' },
    { name: 'neon-green', bg: '#39ff14' },
    { name: 'neon-orange', bg: '#ff9900' },
    { name: 'neon-purple', bg: '#9d00ff' }
  ];

  

  const downloadCard = () => {
    if (selectedTemplateRef.current) {
      const element = selectedTemplateRef.current;
      const { clientWidth, clientHeight } = element;
  
      html2canvas(element, {
        useCORS: true, // Handle cross-origin issues
        scale: 3, // Adjust scale to match desired output resolution
        backgroundColor: null, // Preserve the original background
        logging: true, // Enable logging for debugging
        
        width: clientWidth, // Ensure correct width
        height: clientHeight, // Ensure correct height
        scrollX: 0, // Prevent scrolling issues
        scrollY: 0,
        usePixelRatio: true // Ensure proper resolution
      })
        .then((canvas) => {
          const link = document.createElement("a");
          link.href = canvas.toDataURL("image/png");
          link.download = "instagram-post.png";
          link.click();
        })
        .catch((error) => console.error("Error capturing card:", error));
    }
  };
  

  const downloadVideo = async () => {
    if (post?.post_video) {
      // Use optional chaining to handle null post
      try {
        const videoResponse = await axios.get(
          `http://127.0.0.1:8000${post.post_video}`,
          { responseType: "blob" }
        );

        const url = window.URL.createObjectURL(new Blob([videoResponse.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "instagram-post.mp4"); // Specify MP4 format
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // Clean up
      } catch (error) {
        console.error("Error downloading video:", error);
      }
    }
  };

  const handleDownload = () => {
    if (dataType === "video") {
      downloadVideo();
    } else {
      downloadCard();
    }
  };

  const handleSetTemplate = (template) => {
    dispatch(selectTemplate(template));
  };

  // Function to determine button classes
  const getButtonClasses = (templateName) => {
    const baseClasses = "text-white px-6 py-2 rounded-full shadow-lg transition duration-300";
    const activeClasses = "bg-pink-500 shadow-pink-800/50";
    const inactiveClasses = "bg-pink-400 shadow-pink-400/50 hover:bg-pink-500";
    
    return `${baseClasses} ${selectedTemplate === templateName ? activeClasses : inactiveClasses}`;
  };

  return (
    <div className="flex flex-col items-center">
      {/* New container for color buttons, template, and neon button */}
      <div className="flex justify-center items-start space-x-8 my-9 -ml-36">
        {/* Color Selection Buttons */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-gray-500 text-center font-semibold -ml-8">Neon Border Color</h4>
          {neonColors.map(color => (
            <button
              key={color.name}
              className={`w-14 h-14 rounded-full border-2 shadow-lg`}
              style={{ backgroundColor: color.bg }}
              onClick={() => setBorderColor(color.name)}
            />
          ))}
        </div>

        {/* Template and Neon Button Container */}
        <div className="flex items-center space-x-4">
          {/* Template Display Section */}
          <div ref={selectedTemplateRef}>
            {selectedTemplate === "template1" && <Template1 post={post} borderColor={borderColor} />}
            {selectedTemplate === "template2" && <Template2 post={post} borderColor={borderColor} />}
            {selectedTemplate === "template3" && <Template3 post={post} borderColor={borderColor} />}
            {selectedTemplate === "template4" && <Template4 post={post} borderColor={borderColor} />}
            {selectedTemplate === "template5" && <Template5 post={post} borderColor={borderColor} />}
            {selectedTemplate === "template6" && <Template6 post={post} borderColor={borderColor} />}

          </div>

          
        </div>
      </div>

      {/* {Download Button} */}
      <div className="flex my-9 justify-center items-center">
        {post && (
          <button
            onClick={handleDownload}
            className={`neon-button ${borderColor} bg-pink-400 px-4 py-2 rounded-full flex items-center`}
          >
            Download {dataType === "video" ? "Video" : "Image"}
          </button>
        )}
      </div>
      

      

      {/* Button Section */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          className={getButtonClasses("template1")}
          onClick={() => handleSetTemplate("template1")}
        >
          Template 1
        </button>
        <button
          className={getButtonClasses("template2")}
          onClick={() => handleSetTemplate("template2")}
        >
          Template 2
        </button>
        <button
          className={getButtonClasses("template3")}
          onClick={() => handleSetTemplate("template3")}
        >
          Template 3
        </button>
        <button
          className={getButtonClasses("template4")}
          onClick={() => handleSetTemplate("template4")}
        >
          Template 4
        </button>
        <button
          className={getButtonClasses("template5")}
          onClick={() => handleSetTemplate("template5")}
        >
          Template 5
        </button>
        <button
          className={getButtonClasses("template6")}
          onClick={() => handleSetTemplate("template6")}
        >
          Template 6
        </button>
      </div>
    </div>
  );
};

export default ShowInstaPost;
