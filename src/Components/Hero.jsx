import video from "../assets/Nike.mp4";
import Sneakersection from "./Sneakersection";
import Modelslideshow from "./Modelslideshow";

export default function Hero() {
  return (
    <>
      <Sneakersection />
      <div className="videoContainer">
        <video src={video} muted />
      </div>
      <Modelslideshow />
    </>
  );
}
