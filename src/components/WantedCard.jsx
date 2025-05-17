export default function WantedCard({ characterData }) {
  return (
    <div className="flex justify-center">
      {characterData.map((data) => (
        <div className="w-[11.25rem] h-[16.25rem] bg-[var(--card-bg)] flex flex-col items-center gap-3 pt-2 pb-2">
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
  );
}
