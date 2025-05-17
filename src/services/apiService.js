export async function getAnimeCharacterDetails() {
  try {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${21}/characters?`);
    const data = res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}
