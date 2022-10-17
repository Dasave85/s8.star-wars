import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CardPilots } from "../CardPilots/CardPilots";
import { getStarshipsByName } from "../helpers";
import { PilotsPageStyled } from "./PilotsPageStyled";

export const PilotsPage = ({ starships }) => {
  const navigate = useNavigate();
  const [pilot, setPilot] = useState([]);
  const { nameParam } = useParams();
  const arrayStarship = getStarshipsByName(starships, nameParam);
  const arrUrlPilots = arrayStarship[0].pilots;

  const getPilot = async () => {
    const data = await Promise.all(
      arrUrlPilots.map((url) => fetch(url).then((resp) => resp.json()))
    );
    setPilot(data);
  };

  useEffect(() => {
    arrUrlPilots.length > 0 && getPilot();
  }, []);

  return (
    <PilotsPageStyled className="row p-5">
      {pilot.map((pilot) => {
        return <CardPilots key={pilot.url} pilot={pilot} />;
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
