import { useState } from "react";
import onePieceLogo from "../assets/images/one_piece_logo.png";

function GameHeader({ currentScore, bestScore }) {
  return (
    <div className="">
      <img src={onePieceLogo} alt="one piece png logo" />
      <div className="">
        <div className="">
          <p>Score: </p>
          <p>{currentScore}</p>
        </div>
        <div className="">
          <p>Best Score: </p>
          <p>{bestScore}</p>
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
