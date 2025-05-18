import _ from "lodash";
import { useEffect, useMemo, useState } from "react";
import FetchData from "../services/FetchData";
import {
  filteredCharacters,
  selected_characters,
  shuffleCharacterData,
} from "../utils/utility";

export function useGameEngine(mode) {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const { fetchCharacterDetails } = FetchData();
  const [filteredData, setFilteredData] = useState([]);
  const [gameRounds, setGameRounds] = useState(0);
  const [cardClickCount, setCardClickCount] = useState(0);
  const character_data = useMemo(
    () => filteredCharacters(fetchCharacterDetails, selected_characters),
    [fetchCharacterDetails]
  );

  useEffect(() => {
    if (mode === "Easy") {
      setFilteredData(shuffleCharacterData(character_data, mode));
      setGameRounds(5);
    }
  }, [character_data, mode]);

  return {
    score,
    setScore,
    bestScore,
    setBestScore,
    filteredData,
    setFilteredData,
    gameRounds,
    cardClickCount,
    setCardClickCount,
    character_data,
  };
}
