export function filteredCharacters(charactersData, selectedCharacters) {
  if (!charactersData || !Array.isArray(charactersData)) return [];

  return charactersData
    .filter((data) => selectedCharacters.includes(data.character.name))
    .map((data) => data.character);
}
