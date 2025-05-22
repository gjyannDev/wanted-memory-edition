import { arrayUnion, updateDoc } from "firebase/firestore";
import { user_ref } from "./firebaseClient";

export async function getAnimeCharacterDetails() {
  try {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${21}/characters?`);
    const data = res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function addPlayerData(playerData) {
  try {
    const res = await updateDoc(
      user_ref,
      { playerData: arrayUnion(playerData) },
      { merge: true }
    );

    return res;
  } catch (error) {
    console.error(error);
  }
}
