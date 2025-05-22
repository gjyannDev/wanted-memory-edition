import { useEffect } from "react";

export default function ModalAskName({ setNameInput, value, onSubmit }) {
  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all">
      <div className="h-[var(--size-256px)] flex flex-col justify-center gap-3 bg-[var(--base-black)] rounded-xl shadow-xl p-6 w-[90%] max-w-sm space-y-4 animate-fade-in">
        <h2 className="text-2xl font-merriweather-semibold text-center text-gray-800 dark:text-white">
          What's your name?
        </h2>
        <input
          type="text"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your name"
          value={value}
          onChange={(e) => setNameInput(e.target.value)}
          autoFocus
        />
        <button
          onClick={onSubmit}
          className="w-full py-2 rounded-lg bg-[var(--secondary-clr)] text-white font-merriweather-medium"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
