import video from "../assets/Nike.mp4";

export default function Hero() {
  return (
    <div className="videoContainer">
      <video src={video} autoPlay loop muted />
    </div>
  );
}
