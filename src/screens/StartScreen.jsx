import clsx from "clsx";
import { useState } from "react";
import backgroundVideo from "../assets/videos/bakcground_video.mp4";
import ControlPanel from "../components/ControlPanel";
import Header from "../components/Header";
import FetchData from "../services/FetchData";
import { buttonBase, buttonVariants } from "../utils/common/buttons";
import Game from "./Game";
import MatchLogScreen from "./MatchLogScreen";
import ModalAskName from "./ModalAskName";

function DifficultyChoicesButton({ setSelectedMode, setScreenStatus }) {
  const primary_btn_outline = clsx(
    buttonBase,
    buttonVariants["primaryOutline"]
  );

  function handleClick(e, status) {
    const mode = e.target.textContent;

    setSelectedMode(mode);
    setScreenStatus(status);
  }

  return (
    <div className="flex flex-col gap-[var(--size-32px)]">
      <button
        className={primary_btn_outline}
        type="button"
        onClick={(e) => handleClick(e, "game_started")}
      >
        Easy
      </button>
      <button
        className={primary_btn_outline}
        type="button"
        onClick={(e) => handleClick(e, "game_started")}
      >
        Medium
      </button>
      <button
        className={primary_btn_outline}
        type="button"
        onClick={(e) => handleClick(e, "game_started")}
      >
        Hard
      </button>
    </div>
  );
}

function StartButtonChoices({ setScreenStatus }) {
  const primary_btn_outline = clsx(
    buttonBase,
    buttonVariants["primaryOutline"]
  );

  return (
    <div className="flex flex-col gap-[var(--size-32px)]">
      <button
        className={primary_btn_outline}
        type="button"
        onClick={() => setScreenStatus("choose_mode")}
      >
        Start Game
      </button>
      <button
        className={primary_btn_outline}
        type="button"
        onClick={() => setScreenStatus("match_log")}
      >
        Match Log
      </button>
    </div>
  );
}

export default function StartScreen() {
  const [selectedMode, setSelectedMode] = useState(null);
  const [screenStatus, setScreenStatus] = useState("start");
  const [playerName, setPlayerName] = useState("");
  const [nameInput, setNameInput] = useState("");
  const { fetchAllPlayersData, isLoading } = FetchData();

  function handleNameSubmit(e) {
    e.preventDefault();
    if (nameInput.trim()) {
      setPlayerName(nameInput.trim());
    }
  }

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
        {screenStatus === "start" ? (
          <>
            <Header />
            <StartButtonChoices setScreenStatus={setScreenStatus} />
          </>
        ) : screenStatus === "game_started" ? (
          <Game
            mode={selectedMode}
            playerName={playerName}
            allPlayersData={fetchAllPlayersData}
          />
        ) : screenStatus === "match_log" ? (
          <MatchLogScreen
            playersData={fetchAllPlayersData}
            isLoading={isLoading}
          />
        ) : playerName === "" ? (
          <form
            onSubmit={handleNameSubmit}
            className="flex flex-col items-center gap-4"
          >
            <Header />
            <ModalAskName setNameInput={setNameInput} value={nameInput} />
          </form>
        ) : (
          <>
            <Header />
            <DifficultyChoicesButton
              setSelectedMode={setSelectedMode}
              setScreenStatus={setScreenStatus}
            />
          </>
        )}
      </div>
      <ControlPanel />
    </div>
  );
}
