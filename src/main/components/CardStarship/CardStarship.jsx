import React from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { getStarshipsByName } from "../helpers";
import { getIdFromUrl } from "../helpers/getIdFromUrl";
import "animate.css";
import { Container, ContainerCard } from "./CardStarshipStyled";

export const CardStarship = ({ starships }) => {
  const { nameParam } = useParams();
  const navigate = useNavigate();
  const backPage = () => navigate(-1);

  const arrayStarship = getStarshipsByName(starships, nameParam);
  const starship = arrayStarship[0];
  const {
    name,
    model,
    manufacturer,
    cost_in_credits,
    length,
    max_atmosphering_speed,
    crew,
    url,
  } = starship;

  const id = getIdFromUrl(url);
  return (
    <>
      <Container className="row pt-4">
        <ContainerCard className="card">
          <img
            src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
            className="card-img-top animate__animated animate__fadeInLeft"
            alt={name}
          ></img>
          <div className="card-body">
            <h1 className="card-title">{name}</h1>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              saepe sequi consequatur impedit ducimus et hic labore eum, cum
              odit eius, iure recusandae nesciunt vero perspiciatis quidem
              corrupti, aut molestias!
            </p>
            <div className="row">
              <div className="col-6">
                <p>Model: {model}</p>
              </div>
              <div className="col-6">
                <p>Manufacturer: {manufacturer}</p>
              </div>
              <div className="col-6">
                <p>Cost in credits: {cost_in_credits}</p>
              </div>
              <div className="col-6">
                <p>Length: {length}</p>
              </div>
              <div className="col-6">
                <p>Atmosphering speed: {max_atmosphering_speed}</p>
              </div>
              <div className="col-6">
                <p>Crew: {crew}</p>
              </div>
              <div className="col-6">
                <NavLink to={"./pilots"}>Pilots</NavLink>
              </div>
              <div className="col-6 ">
                <NavLink to={"./films"}>Films</NavLink>
              </div>
            </div>
            <button
              onClick={backPage}
              className="btn btn-outline-secondary mt-2"
            >
              Back
            </button>
          </div>
        </ContainerCard>
      </Container>
    </>
  );
};
