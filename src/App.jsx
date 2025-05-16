import { useState } from "react";
import StartScreen from "./screens/StartScreen";

export default function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  return (
    <div className="">
      <StartScreen
        isGameStarted={isGameStarted}
        setIsGameStarted={setIsGameStarted}
      />
    </div>
  );
}
