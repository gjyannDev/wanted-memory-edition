import onePieceLogo from "../assets/images/one_piece_logo.png";

export default function Header() {
  return (
    <div className="flex">
      <div className="flex flex-col items-center gap-4 mt-[var(--size-40px)]">
        <img
          className="w-[23.25rem]"
          src={onePieceLogo}
          alt="one piece logo"
        />
        <h1 className="font-bangers text-[var(--text-secondary)] text-outline text-4xl">
          Wanted: Memory Edition
        </h1>
      </div>
    </div>
  );
}
