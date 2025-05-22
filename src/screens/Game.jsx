import clsx from "clsx";
import _ from "lodash";
// import { useEffect, useMemo, useState } from "react";
import onePieceLogo from "../assets/images/one_piece_logo.png";
import WantedCard from "../components/WantedCard";
import { useGameEngine } from "../customHooks/useGameEngine";
import { scoreBoardText } from "../utils/common/utils";
import GameResultScreen from "./GameResultScreen";

function GameHeader({ currentScore, bestScore }) {
  const score_text_style = clsx(scoreBoardText);

  return (
    <div className="flex w-screen justify-between p-5 ">
      <img className="w-[12rem]" src={onePieceLogo} alt="one piece png logo" />
      <div className="flex flex-col gap-[var(--size-4px)]">
        <div className="flex gap-2">
          <p className={score_text_style}>Score: </p>
          <p className={score_text_style}>{currentScore}</p>
        </div>
        <div className="flex gap-2">
          <p className={score_text_style}>Best Score: </p>
          <p className={score_text_style}>{bestScore}</p>
        </div>
      </div>
    </div>
  );
}

export default function Game({ mode }) {
  const {
    score,
    setScore,
    setBestScore,
    bestScore,
    filteredData,
    gameRounds,
    cardClickCount,
    setCardClickCount,
    setFilteredData,
    character_data,
    cardClicks,
    setCardClicks,
    gameStatus,
    setGameStatus,
  } = useGameEngine(mode);

  return (
    <div className="">
      <GameHeader currentScore={score} bestScore={bestScore} />
      <WantedCard
        characterData={filteredData}
        gameRounds={gameRounds}
        setCardClickCount={setCardClickCount}
        cardClickCount={cardClickCount}
        setFilteredData={setFilteredData}
        mode={mode}
        shuffledData={character_data}
        cardClicks={cardClicks}
        setCardClicks={setCardClicks}
        score={score}
        setScore={setScore}
        gameStatus={gameStatus}
        setGameStatus={setGameStatus}
      />
      {gameStatus === "lose" ? (
        <GameResultScreen result="Lose" />
      ) : gameStatus === "win" ? (
        <GameResultScreen result="Win" />
      ) : null}
    </div>
  );
}
