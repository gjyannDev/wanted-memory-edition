import { useEffect, useState } from "react";
import { getAnimeCharacterDetails } from "./apiService";

export default function FetchData() {
  const [fetchCharacterDetails, setFetchCharacterDetails] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const get_character_details = await getAnimeCharacterDetails();
        setFetchCharacterDetails(get_character_details.data || {});
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    fetchData();
  }, []);

  return {
    fetchCharacterDetails,
    setFetchCharacterDetails,
  };
}
