import { useEffect, useState } from "react";

export const useRegisterPage = () => {
  const initialUser = { name: "", password: "", logged: false };

  const [user, setUser] = useState(initialUser);
  const [userList, setUserList] = useState(() => {
    const data = localStorage.getItem("users");
    return data ? JSON.parse(data) : [];
  });
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userExist = userList.find((usr) => usr.name === user.name);

    if (userExist) {
      setMessage(
        `El usuario ${userExist.name} ya esta registrado, elige otro nombre`
      );
      setUser(initialUser);
      return;
    }
    registerUser(user);
  };

  const registerUser = (user) => {
    if (!user.name) {
      setMessage("Falta rellenar el campo del nombre");
      return;
    }
    if (!user.password) {
      setMessage("Falta rellenar el campo del password");
      return;
    }
    setMessage("Usuario registrado");
    setUserList([...userList, user]);
    setUser(initialUser);
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(userList));
  }, [userList]);

  useEffect(() => {
    userList.length > 0 && console.log({ Users_register: userList });
  }, [userList]);

  return { user, message, onSubmit, handleInputChange };
};
