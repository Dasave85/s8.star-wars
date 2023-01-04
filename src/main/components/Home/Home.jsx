import React from "react";
import { HomeStyled } from "./HomeStyled";

export const Home = () => {
  return (
    <>
      <HomeStyled className="row ">
        <div className="col-8">
          <h1>Bienvenido Usuario</h1>
          <h3>
            Desde esta web podras consultar las naves de STAR WARS, para ello
            primero deberas registrarte y logearte.
          </h3>
        </div>
      </HomeStyled>
    </>
  );
};
