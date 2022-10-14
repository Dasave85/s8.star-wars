export const init = () => {
  const data = localStorage.getItem("users");
  return data ? JSON.parse(data) : [];
};
