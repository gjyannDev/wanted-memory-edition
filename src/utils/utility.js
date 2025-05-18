import _ from "lodash";

export function filteredCharacters(charactersData, selectedCharacters) {
  if (!charactersData || !Array.isArray(charactersData)) return [];

  return charactersData
    .filter((data) => selectedCharacters.includes(data.character.name))
    .map((data) => data.character);
}

export function shuffleCharacterData(character_data, mode) {
  const shuffled_data = _.shuffle(character_data);
  let result = [];

  if (mode === "Easy") {
    result = shuffled_data.slice(0, 3);
  }

  return result
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
