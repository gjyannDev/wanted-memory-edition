import { useEffect, useState } from "react";
import { getAnimeCharacterDetails, getPlayerData } from "./apiService";

export default function FetchData() {
  const [fetchCharacterDetails, setFetchCharacterDetails] = useState({});
  const [fetchAllPlayersData, setFetchAllPlayersData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const get_character_details = await getAnimeCharacterDetails();
        setFetchCharacterDetails(get_character_details.data || {});

        const get_all_players_data = await getPlayerData();
        setFetchAllPlayersData(get_all_players_data || {});
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return {
    fetchCharacterDetails,
    setFetchCharacterDetails,
    fetchAllPlayersData,
    setFetchAllPlayersData,
    isLoading,
  };
}
