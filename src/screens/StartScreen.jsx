import clsx from "clsx";
import backgroundVideo from "../assets/videos/bakcground_video.mp4";
import ControlPanel from "../components/ControlPanel";
import Header from "../components/Header";
import { buttonBase, buttonVariants } from "../utils/common/buttons";

function StartButtonChoices({ setIsGameStarted }) {
  const primary_btn_outline = clsx(
    buttonBase,
    buttonVariants["primaryOutline"]
  );

  return (
    <div className="flex flex-col gap-[var(--size-32px)]">
      <button
        className={primary_btn_outline}
        type="button"
        onClick={() => {
          setIsGameStarted(true);
        }}
      >
        Start Game
      </button>
      <button className={primary_btn_outline} type="button">
        Match Log
      </button>
    </div>
  );
}

export default function StartScreen({ setIsGameStarted }) {
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
        <StartButtonChoices setIsGameStarted={setIsGameStarted} />
      </div>
      <ControlPanel />
    </div>
  );
}
