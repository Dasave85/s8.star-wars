export const CardPilots = ({ pilot }) => {
  return (
    <div className="col-6">
      <div className="card m-5 border-2 " style={{ width: "25rem" }}>
        <div className="card-body">
          <h5 className="card-title my-3">Pilot: {pilot.name}</h5>
          <hr />
          <p className="card-text col-6">Height: {pilot.height}</p>
          <p className="card-text col-6">Birth Year: {pilot.birth_year}</p>
          <p className="card-text col-6">Mass: {pilot.mass}</p>
          <p className="card-text col-6">Hair Color: {pilot.hair_color}</p>
        </div>
      </div>
    </div>
  );
};
