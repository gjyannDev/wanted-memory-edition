import backgroundVideo from "../assets/videos/bakcground_video.mp4";
import Header from "../components/Header";

export default function StartScreen() {
  return (
    <div className="flex h-screen border justify-center">
      <video
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        src={backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
      ></video>
    <Header />
    </div>
  );
}
