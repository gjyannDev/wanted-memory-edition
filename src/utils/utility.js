import FetchData from "../services/FetchData";

export function filteredCharacters(charactersData, selectedCharacters) {
  if (!charactersData || !Array.isArray(charactersData)) return [];

  return charactersData
    .filter((data) => selectedCharacters.includes(data.character.name))
    .map((data) => data.character);
}

export const selected_characters = [
  "Monkey D., Luffy",
  "Sanji",
  "Jinbe",
  "Brook",
  "Usopp",
  "Nami",
  "Roronoa, Zoro",
  "Franky",
  "Vegapunk",
  "Nico, Robin",
  "Tony Tony, Chopper",
  "Shanks",
  "Shirahoshi",
  "Nefertari Vivi",
  "Portgas D,. Ace",
  "Sabo",
  "Boa Hancock",
];
