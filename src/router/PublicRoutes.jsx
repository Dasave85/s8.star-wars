import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../auth/context/UserContext";

export const PublicRoutes = ({ children }) => {
  const { userLogged } = useContext(UserContext);
  return !userLogged ? children : <Navigate to={"/starships"} replace={true} />;
};
