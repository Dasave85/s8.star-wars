import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useMessage } from "./useMessage";
import { useUser } from "./useUser";
import { types } from "../types/types";

export const useRegisterPage = () => {
  const { userList, dispatch } = useContext(UserContext);

  const { user, setUserInput, clearInput } = useUser();

  const { message, showMessage } = useMessage();

  const handleInputChange = (e) => {
    setUserInput({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userExist = userList.find((usr) => usr.name === user.name);

    if (userExist) {
      showMessage(userExist);
      clearInput();
      return;
    }
    registerUser(user);
  };

  const registerUser = (user) => {
    if (!user.name || !user.password) {
      showMessage(user);
      return;
    }
    const action = {
      type: types.signin,
      payload: user,
    };

    showMessage("register");
    dispatch(action);
    clearInput();
  };

  return { user, message, onSubmit, handleInputChange };
};
