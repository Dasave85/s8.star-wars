import logo from "../../assets/logo/clipart1256436.png";
import { ContainerHeader, ContainerLogin, ContainerLogo } from "./HeaderStyled";
import "animate.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../auth/context/UserContext";

export const Header = () => {
  const navigate = useNavigate();
  const { login, logout, userLogged } = useContext(UserContext);

  return (
    <ContainerHeader className="row  pb-4">
      <ContainerLogo className="col-4 ">
        <img
          className="my-3 animate__animated animate__pulse"
          src={logo}
          alt=""
        />
      </ContainerLogo>
      <ContainerLogin className="col-4 ">
        {userLogged ? (
          <button onClick={logout} className="me-2 btn">
            LOG OUT
          </button>
        ) : (
          <button onClick={login} className="me-2 btn ">
            LOG IN
          </button>
        )}
        <p className="me-2 mb-0">{"//"}</p>
        <button onClick={() => navigate("/signup")} className="me-5 btn ">
          SIGN UP
        </button>
      </ContainerLogin>
    </ContainerHeader>
  );
};
