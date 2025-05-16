import luffyImage from ".././assets/images/luffy_image.jpg";

export default function WantedCard() {
  return (
    <div className="flex justify-center">
      <div className="w-[14.25rem] h-[21.25rem] bg-[var(--card-bg)] flex flex-col items-center gap-3.5 pt-2.5 pb-2.5">
        <div className="flex flex-col gap-2">
          <p className="text-4xl text-center font-merriweather-bold text-[var(--wanted-text-clr)]">
            WANTED
          </p>
          <img
            className="w-[188px] h-[156px] border border-[var(--outline-img)]"
            src={luffyImage}
            alt="luffy image jpeg"
          />
        </div>
        <div className="flex flex-col gap-3.5">
          <p className="text-2xl text-center font-merriweather-medium text-[var(--wanted-text-clr)]">
            DEAD OR ALIVE
          </p>
          <p className="text-2xl text-center tracking-tighter font-merriweather-bold text-[var(--wanted-text-clr)]">
            MONKEY D LUFFY
          </p>
        </div>
      </div>
    </div>
  );
}
