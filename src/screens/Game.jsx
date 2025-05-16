import clsx from "clsx";
import { useState } from "react";
import onePieceLogo from "../assets/images/one_piece_logo.png";
import { scoreBoardText } from "../utils/common/utils";

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
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="">
      <GameHeader currentScore={score} bestScore={bestScore} />
    </div>
  );
}
