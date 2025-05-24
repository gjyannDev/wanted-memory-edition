import _ from "lodash";
import { useEffect, useMemo, useState } from "react";
import FetchData from "../services/FetchData";
import {
  filteredCharacters,
  getBestScore,
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
  const [cardClicks, setCardClicks] = useState([]);
  const [gameStatus, setGameStatus] = useState("playing");
  const character_data = useMemo(
    () => filteredCharacters(fetchCharacterDetails, selected_characters),
    [fetchCharacterDetails]
  );
  const { fetchAllPlayersData, isLoading } = FetchData();

  useEffect(() => {
    if (mode === "Easy") {
      setFilteredData(shuffleCharacterData(character_data, mode));
      setGameRounds(5);
    } else if (mode === "Medium") {
      setFilteredData(shuffleCharacterData(character_data, mode));
      setGameRounds(8);
    } else if (mode === "Hard") {
      setFilteredData(shuffleCharacterData(character_data, mode));
      setGameRounds(12);
    }
  }, [character_data, mode]);

  useEffect(() => {
    if (!isLoading && fetchAllPlayersData && mode) {
      setBestScore(getBestScore(fetchAllPlayersData, mode, isLoading));
    }
  }, [fetchAllPlayersData, isLoading, mode]);

  console.log("bestScore: ", bestScore);

  function restartGame() {
    setScore(0);
    setCardClicks([]);
    setCardClickCount(0);
    setGameStatus("playing");
    setFilteredData(shuffleCharacterData(character_data, mode));
    setBestScore(getBestScore(fetchAllPlayersData, mode, isLoading));
  }

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
    cardClicks,
    setCardClicks,
    gameStatus,
    setGameStatus,
    restartGame,
  };
}
