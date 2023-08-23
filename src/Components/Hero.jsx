import video from "../assets/Nike.mp4";

export default function Hero() {
  return (
    <div className="canvasContainer">
      <video src={video} autoPlay loop muted />
    </div>
  );
}
