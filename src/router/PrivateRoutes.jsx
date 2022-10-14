import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../auth/context/UserContext";

export const PrivateRoutes = ({ children }) => {
  const { userLogged } = useContext(UserContext);
  return userLogged ? children : <Navigate to={"/login"} replace={true} />;
};
