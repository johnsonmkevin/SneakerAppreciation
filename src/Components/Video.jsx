import React from "react";
import video from "../assets/Nike.mp4";
import "./video.css";

function Video() {
  return (
    <>
      <div className="video-container">
        <video src={video} />
      </div>
    </>
  );
}

export default Video;
