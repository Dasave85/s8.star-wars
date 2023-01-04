export const getStarshipsByName = (starships = [], name) => {
  const starship = starships.filter((starship) => starship.name === name);
  return starship;
};
