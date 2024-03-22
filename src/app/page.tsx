'use client'

import Image from "next/image";
import LittleLogo from "./components/nav/logo";
import LittleMenu from "./components/nav/menu";
import LittleMobile from "./components/nav/mobile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faMessage, faMicrophone, faMicrophoneAltSlash, faStar, faVideo, faX } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [showMenu, setShowMenu] = useState(false)
  const [theirMike, setTheirMike] = useState(false)
  const mainVideoRef:any = useRef(null);
  const smallVideoRef:any = useRef(null);
  const fullscreenRef:any = useRef(null);
  const [videoStreams, setVideoStreams] = useState(new Array(10).fill(null)); // Example with 10 dummy streams

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((stream: any) => {
        // Populate the entire videoStreams array with the same stream
        setVideoStreams(new Array(10).fill(stream));
  
        // Assign the media stream to main video element
        if (mainVideoRef.current) mainVideoRef.current.srcObject = stream;
      })
      .catch(error => {
        console.error("Error accessing media devices:", error);
      });
  }, []);
  
  

  const toggleFullScreen = () => {
    if (fullscreenRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        fullscreenRef.current.requestFullscreen();
      }
    }
  };
  return (
    <div className="w-screen h-screen fixed bg-[#0a1629] flex flex-col">
      {/* dashboard */}
      {/* nav bar */}
      <div className="w-full h-fit border-b flex justify-between">
        <LittleLogo />
        {/* menu button on responsive */}
        <div onClick={() => setShowMenu(true)} className="w-[40px] flex flex-col mr-[10px] justify-center items-center ">
          <LittleMenu />
        </div>
        {/* desktop menu */}
      </div>

        {/* responsive menu */}
        {showMenu && <div className="w-screen h-screen fixed z-40 bg-[#333333dd] top-0">
          <FontAwesomeIcon
                   onClick={() => setShowMenu(false)}
                  className="w-[30px] h-[30px] rounded-[50%] absolute right-4 top-6" 
                  icon={faX} color="#37cbdf" />
          <LittleMobile />
        </div>}
        {/* this div should cover the rest of the page */}
      <div ref={fullscreenRef} className="flex-grow bg-black flex flex-col justify-center items-center">
        {/* Your video */}
        <div className="w-[90%] h-[95%]">
        <video 
          style={{ transform: "scaleX(-1)" }}
          className="w-full h-full object-cover rounded-md bg-white" ref={mainVideoRef} autoPlay={true} muted />
        <div className="absolute bottom-[32%] z-10 text-white w-[90%] flex justify-between">
          <p className="w-fit bg-[#717171] p-1 rounded-md ml-4">Mutangana Edgar</p>
          <FontAwesomeIcon 
          onClick={toggleFullScreen}
            className="w-[30px] h-[30px] rounded-[50%] mr-4" 
            icon={faExpand} color="#37cbdf" />
        </div>
        </div>
        {/* Video elements */}

        <div className="absolute bottom-[10%] w-full h-[20%] flex overflow-auto hide-scrollbar flex-nowrap pl-2">
          {videoStreams.map((stream, index) => (
            <div key={index} className="relative w-[250px] h-full mr-2 flex-shrink-0">
              <video 
                style={{ transform: "scaleX(-1)" }}
                className="w-full h-full object-cover rounded-md bg-[#e3e3e3]" 
                ref={el => el && (el.srcObject = stream)} // Assign the stream
                autoPlay 
                muted 
              />
              <div className="absolute bottom-[5%] z-10 text-white w-[97%] flex justify-between">
                
                <FontAwesomeIcon
                  onClick={() => setTheirMike(!theirMike)}
                  className={`w-[20px] h-[20px] ${theirMike?"bg-black":"bg-red-800"} p-2 rounded-[50%] ml-4`}
                  icon={theirMike?faMicrophone:faMicrophoneAltSlash} color="white" />
                <p className="w-fit h-fit bg-[#717171] p-1 mt-1 rounded-md text-xs">Mutangana Edgar</p>
              </div>

              <div className="absolute top-1 right-2 z-10 text-white flex justify-between">
                
                <FontAwesomeIcon
                  className={`w-[20px] h-[20px] hover:bg-[#e8c40f] p-2 rounded-[50%]  ml-4`}
                  icon={faStar} color="black" />
              </div>
            </div>
          ))}
        </div>
        <div className="w-[80%] h-fit absolute bottom-[4%] flex flex-row justify-center items-center">
          <FontAwesomeIcon
              className={`w-[20px] h-[20px] bg-[#20c3d9] p-2 rounded-[50%] ml-4`}
              icon={faMicrophone} color="bg-[#ddd]" />
          <FontAwesomeIcon
              className={`w-[20px] h-[20px] bg-[#20c3d9] p-2 rounded-[50%] ml-4`}
              icon={faVideo} color="bg-[#ddd]" />
          <p className="bg-[#d83c18] w-fit h-fit p-2 rounded-xl ml-4 text-white">End Call</p>
          <FontAwesomeIcon
              className={`w-[20px] h-[20px] bg-[#20c3d9] p-2 rounded-[50%] ml-4`}
              icon={faMessage} color="bg-[#ddd]" />  
        </div>
      </div>
    </div>
  );
}
