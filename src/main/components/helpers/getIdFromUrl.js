export const getIdFromUrl = (url) => {
  const split = url.split("/");

  const id = split[5];
  return id;
};
