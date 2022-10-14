import { useState } from "react";

export const useMessage = () => {
  const [message, setMessage] = useState("");

  const showMessage = (usr) => {
    if (usr === "register") {
      setMessage("Usuario registrado");
      return;
    }
    if (!usr.name) {
      setMessage("Falta rellenar el campo del nombre");
      return;
    }
    if (!usr.password) {
      setMessage("Falta rellenar el campo del password");
      return;
    }
    if (usr) {
      setMessage(
        `El usuario ${usr.name} ya esta registrado, elige otro nombre`
      );
      return;
    }
  };
  return {
    message,
    showMessage,
  };
};
