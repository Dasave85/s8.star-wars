export const getStarships = async (counter = 1, setStarships) => {
  const resp = await fetch(
    `https://swapi.py4e.com/api/starships?page=${counter}`
  );
  const { results } = await resp.json();
  localStorage.setItem("starships", JSON.stringify(results));
  setStarships(results);
};
