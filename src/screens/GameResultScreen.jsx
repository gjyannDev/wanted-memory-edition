export default function GameResultScreen({ result }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-around bg-[rgba(42,54,59,0.58)] backdrop-blur-sm">
      <h1 className="font-merriweather-bold text-[var(--text-secondary)] text-7xl">
        {result === "Win" ? "You Win" : "Game Over"}
      </h1>
      <h3
        className={`font-bangers ${
          result === "Lose" ? "text-red-400" : "text-orange-300"
        } text-2xl`}
      >
        Press R To Restart
      </h3>
    </div>
  );
}
