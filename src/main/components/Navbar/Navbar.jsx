import React from "react";
import { NavLink } from "react-router-dom";
import { ContainerNavbar, DivLink } from "./NavbarStyled";

export const Navbar = () => {
  return (
    <ContainerNavbar className="row">
      <DivLink className="col-2 col-lg-1 px-3 py-1">
        <NavLink to={"/home"}>HOME</NavLink>
      </DivLink>
      <DivLink className="col-2 col-lg-1 px-3 py-1">
        <NavLink to={"/starships"}>STARSHIPS</NavLink>
      </DivLink>
    </ContainerNavbar>
  );
};
