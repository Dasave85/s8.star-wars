import { useState } from "react";

export const useUser = () => {
  const initialUser = { name: "", password: "", logged: false };

  const [user, setUser] = useState(initialUser);

  const setUserInput = (userInput) => {
    setUser(userInput);
  };

  const clearInput = () => {
    setUser(initialUser);
  };

  return {
    user,
    setUserInput,
    clearInput,
  };
};
