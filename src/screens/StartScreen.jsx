import clsx from "clsx";
import backgroundVideo from "../assets/videos/bakcground_video.mp4";
import Header from "../components/Header";
import ControlPanel from "../components/ControlPanel";
import { buttonBase, buttonVariants } from "../utils/common/button";

function StartButtonChoices() {
  const primary_btn_outline = clsx(buttonBase, buttonVariants["primaryOutline"]);

  return (
    <div className="flex flex-col gap-[var(--size-32px)]">
      <button
        className={primary_btn_outline}
        type="button"
      >
        Start Game
      </button>
      <button
        className={primary_btn_outline}
        type="button"
      >
        Match Log
      </button>
    </div>
  );
}

export default function StartScreen() {
  return (
    <div className="flex flex-col h-screen justify-baseline">
      <video
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        src={backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
      ></video>
      <div className="flex flex-col gap-[var(--size-80px)] items-center h-[560px]">
        <Header />
        <StartButtonChoices />
      </div>
      <ControlPanel />
    </div>
  );
}
