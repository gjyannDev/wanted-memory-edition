import clsx from "clsx";

export const buttonBase = clsx(
  'font-bangers text-[var(--text-secondary)] text-3xl ',
  'rounded-md pr-10 pl-10 pt-2 pb-2',
);

export const controlPanelButton = clsx(
  'w-10 h-10',
  'flex items-center justify-center',
  'rounded-full bg-[var(--secondary-clr)] text-[var(--base-black)]',
)

export const buttonVariants = {
  primaryOutline: 'outline-2 outline-[var(--base-white)] ',
};