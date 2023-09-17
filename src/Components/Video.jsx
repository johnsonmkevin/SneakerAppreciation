import React from "react";
import video from "../assets/Nike.mp4";
import "./video.css";
import ModelSlider from "./ModelSlider";

function Video() {
  return (
    <>
      <header className="home-titleContainer">
        <h1 className="header">Sneaker Head</h1>
      </header>
      <section className="video-section">
        <div className="video-container">
          <video src={video} autoPlay muted loop />
        </div>
      </section>
      <ModelSlider />
    </>
  );
}

export default Video;
