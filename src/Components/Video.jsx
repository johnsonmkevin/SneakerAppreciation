import React from "react";
import video from "../assets/Nike.mp4";
import "./video.css";
import ModelSlider from "./ModelSlider";

function Video() {
  return (
    <>
      <header className="home-titleContainer">
        <h1 className="header">Hoop Dream</h1>
      </header>
      <section>
        <video src={video} /*autoPlay muted loop*/ />
      </section>
      <ModelSlider />
    </>
  );
}

export default Video;
