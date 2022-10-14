import { useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { init, userListReducer } from "../helpers";
import { types } from "../types";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [userList, dispatch] = useReducer(userListReducer, [], init);

  const userLogged = userList.find((user) => user.logged);

  const login = () => {
    navigate("/login");
  };

  const logout = () => {
    const action = {
      type: types.logout,
    };
    dispatch(action);
    navigate("./");
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(userList));
  }, [userList]);

  useEffect(() => {
    userList.length > 0 && console.log({ Users_register: userList });
  }, [userList]);

  return (
    <UserContext.Provider
      value={{ userList, dispatch, login, logout, userLogged }}
    >
      {children}
    </UserContext.Provider>
  );
};
