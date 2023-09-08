import React from "react";
import video from "../assets/Nike.mp4";
import "./video.css";

function Video() {
  return (
    <>
      <header className="home-titleContainer">
        <h1 className="home-header">Hoop Dream</h1>
      </header>
      <section className="video-container">
        <video src={video} />
      </section>
    </>
  );
}

export default Video;
