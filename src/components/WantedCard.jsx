import { shuffleCharacterData } from "../utils/utility";

export default function WantedCard({
  characterData,
  gameRounds,
  setCardClickCount,
  cardClickCount,
  setFilteredData,
  mode,
  shuffledData,
  cardClicks,
  setCardClicks,
  score,
  setScore,
  gameStatus,
  setGameStatus,
}) {
  function handleCardClick(e) {
    if (gameStatus !== "playing") return;

    const card_id = e.currentTarget.getAttribute("id");
    const isAlreadyClicked = cardClicks.includes(card_id);

    if (isAlreadyClicked) {
      setGameStatus("lose");
      return;
    }

    setCardClicks((prev) => [...prev, card_id]);
    setScore((prev) => prev + 1);
    setCardClickCount((prev) => prev + 1);
    setFilteredData(shuffleCharacterData(shuffledData, mode));

    if (score + 1 === gameRounds) {
      setGameStatus("win");
    }
  }

  return (
    <div className="flex flex-col gap-9 justify-center items-center h-full">
      <div className={`flex ${mode === "Hard" ? "gap-5" : "gap-10"}`}>
        {characterData.map((data) => (
          <div
            key={data.mal_id}
            className="w-[11.25rem] h-[16.25rem] bg-[var(--card-bg)] flex flex-col items-center gap-3 pt-2 pb-2"
            onClick={handleCardClick}
            id={data.mal_id}
          >
            <div className="flex flex-col gap-1.5">
              <p className="text-2xl text-center font-merriweather-bold text-[var(--wanted-text-clr)]">
                WANTED
              </p>
              <img
                className="w-[140px] h-[110px] border border-[var(--outline-img)] object-cover"
                src={data.images.jpg.image_url}
                alt="luffy image jpeg"
              />
            </div>
            <div className="flex flex-col gap-2.5">
              <p className="text-base text-center font-merriweather-medium text-[var(--wanted-text-clr)]">
                DEAD OR ALIVE
              </p>
              <p className="text-lg text-center tracking-tight font-merriweather-bold text-[var(--wanted-text-clr)]">
                {data.name.toUpperCase()}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="font-merriweather-bold text-[var(--text-secondary)] text-3xl">
        {`${cardClickCount} / ${gameRounds}`}
      </p>
    </div>
  );
}
