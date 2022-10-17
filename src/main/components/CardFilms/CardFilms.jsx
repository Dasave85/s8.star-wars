export const CardFilms = ({ film }) => {
  return (
    <div className="col-6">
      <div className="card m-5 border-2 " style={{ width: "25rem" }}>
        <div className="card-body">
          <h5 className="card-title my-3">Title: {film.title}</h5>
          <hr />
          <p className="card-text col-6">Director: {film.director}</p>
          <p className="card-text col-6">Producer: {film.producer}</p>
          <p className="card-text col-6">Relace data: {film.relace_data}</p>
          <p className="card-text col-6">Episode: {film.episode_id}</p>
        </div>
      </div>
    </div>
  );
};
