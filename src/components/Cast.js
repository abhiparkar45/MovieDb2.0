import React from "react";

const Cast = ({ cast }) => {
  return cast.map((e) => {
    return (
      <div key={e.cast_id} className="card">
        <div className="imgBx">
          <img
            src={
              !e.profile_path
                ? "https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg"
                : `https://image.tmdb.org/t/p/w500/${e.profile_path}`
            }
            alt="images"
          />
        </div>
        <div className="details">
          <h2>
            {e.original_name}
            <br />
            <span>
              <b>Character : </b>
              {e.character}
            </span>
          </h2>
        </div>
      </div>
    );
  });
};

export default Cast;
