import video from "../assets/Nike.mp4";
import Modelslideshow from "./Modelslideshow";

export default function Hero() {
  return (
    <>
      <div className="videoContainer">
        <video src={video} muted />
      </div>
      <Modelslideshow />
    </>
  );
}
