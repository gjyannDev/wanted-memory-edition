import _ from "lodash";
import { useEffect, useMemo, useState } from "react";
import FetchData from "../services/FetchData";
import { filteredCharacters, selected_characters } from "../utils/utility";

export function useGameEngine(mode) {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const { fetchCharacterDetails } = FetchData();
  const [filteredData, setFilteredData] = useState([]);
  const character_data = useMemo(
    () => filteredCharacters(fetchCharacterDetails, selected_characters),
    [fetchCharacterDetails]
  );

  useEffect(() => {
    const shuffled_data = _.shuffle(character_data);

    if (mode === "Easy") {
      setFilteredData(shuffled_data.slice(0, 3));
    }
  }, [character_data, mode]);

  return {
    score,
    setScore,
    bestScore,
    setBestScore,
    filteredData,
  };
}
