import React from "react";

const MovieDetails = (props) => {
  const { movieDetail, genre } = props;

  return (
    <>
      <div className="div-container0">
        <div className="div-left-container0">
          <div className="div-left-top0">
            <div className="div-small-container10">
              <img
                src={
                  !movieDetail.poster_path
                    ? "https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg"
                    : `https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`
                }
                alt=""
              ></img>
            </div>
            <div className="div-info-container0">
              <h3>{movieDetail.original_title}</h3>
              <p>
                <b>Rating :{movieDetail.vote_average}</b>
              </p>
              <p>{movieDetail.runtime} mins</p>
              <p>Release Date:{movieDetail.release_date}</p>

              <small>
                <b>Genre : </b>
                {genre.map((e) => {
                  return (
                    <b style={{ color: "green" }} key={e.id}>
                      {e.name}
                      {"  "}
                    </b>
                  );
                })}
              </small>
            </div>
          </div>
          <div className="div-overview0">
            <b>Overview:</b>
            <p>{movieDetail.overview}</p>
          </div>
        </div>
        <div className=".div-big-img-container0">
          <img
            src={
              !movieDetail.backdrop_path
                ? "https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg"
                : `https://image.tmdb.org/t/p/w500/${movieDetail.backdrop_path}`
            }
            alt="MOM"
            width="800"
            height="400"
          ></img>
        </div>
      </div>
      <hr />
    </>
  );
};

export default MovieDetails;
