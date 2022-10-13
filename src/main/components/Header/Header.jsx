import logo from "../../assets/logo/clipart1256436.png";
import { ContainerHeader, ContainerLogin, ContainerLogo } from "./HeaderStyled";
import "animate.css";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
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
        <button className="me-2 btn ">LOG IN</button>
        <p className="me-2 mb-0">{"//"}</p>
        <button onClick={() => navigate("/signup")} className="me-5 btn ">
          SIGN UP
        </button>
      </ContainerLogin>
    </ContainerHeader>
  );
};
