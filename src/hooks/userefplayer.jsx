import {useState} from "react";
import { useRef } from "react";
import tailwindConfig from "../../tailwind.config";


const Userefplayer = () => {
    const videoRef=useRef();
   
  const handlePlay = () => {
      videoRef.current.play();  
  };
  const handlePause = () => {
    videoRef.current.pause();
  };
  return (
    <>
    
      <div>
        <button className="btn" onClick={handlePlay}>
          Play
        </button>
        <button className="btn-pause" onClick={handlePause}>
          Pause
        </button>
     
       

      </div>
      <video width="600" height="400" ref={videoRef}>
        <source src="/Videos/video.mp4" />
      </video>
    </>
  );
};

export default Userefplayer;
