import { useState } from "react";
import GameStartScreen from "./screens/GameStartScreen";
import StartScreen from "./screens/StartScreen";

export default function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  return (
    <div className="">
      {isGameStarted ? (
        <GameStartScreen />
      ) : (
        <StartScreen setIsGameStarted={setIsGameStarted} />
      )}
    </div>
  );
}
