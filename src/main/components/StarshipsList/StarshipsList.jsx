import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { getStarships } from "../helpers";
import { ContainerItem, ContainerStarshipsList } from "./StarshipsListStyled";

export const StarshipsList = ({ starships, setStarships }) => {
  const [counter, setCounter] = useState(() => {
    const initialState = localStorage.getItem("counter");
    return initialState ? JSON.parse(initialState) : 1;
  });

  const addCounter = () => {
    if (starships.length > 0 && starships.length < 10) {
      setCounter(1);
      return;
    }
    setCounter(counter + 1);
  };

  useEffect(() => {
    localStorage.setItem("counter", JSON.stringify(counter));
  }, [counter]);

  useEffect(() => {
    getStarships(counter, setStarships);
  }, [counter]);

  return (
    <ContainerStarshipsList className="row pt-2">
      <div className="col-8">
        {starships.map((starship) => (
          <ContainerItem className="p-2 m-2" key={starship.url}>
            <NavLink className="m-2" to={`./${starship.name}`}>
              {starship.name}
            </NavLink>

            <p className="ms-2">{starship.model}</p>
          </ContainerItem>
        ))}
        <button onClick={addCounter} className="m-2">
          view more...
        </button>
      </div>
    </ContainerStarshipsList>
  );
};
