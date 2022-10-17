import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CardFilms } from "../CardFilms";

import { getStarshipsByName } from "../helpers";
import { PilotsPageStyled } from "../PilotsPage";

export const FilmsPage = ({ starships }) => {
  const navigate = useNavigate();
  const [films, setFilms] = useState([]);
  const { nameParam } = useParams();
  const arrayStarship = getStarshipsByName(starships, nameParam);
  const arrUrlFilms = arrayStarship[0].films;

  const getFilm = async () => {
    const data = await Promise.all(
      arrUrlFilms.map((url) => fetch(url).then((resp) => resp.json()))
    );
    setFilms(data);
  };

  useEffect(() => {
    arrUrlFilms.length > 0 && getFilm();
  }, []);

  return (
    <PilotsPageStyled className="row p-5">
      {films.map((film) => {
        return <CardFilms key={film.url} film={film} />;
      })}

      <div className="col-12">
        <button
          onClick={() => navigate(-1)}
          className="btn btn-outline-secondary ms-5"
        >
          Back
        </button>
      </div>
    </PilotsPageStyled>
  );
};
