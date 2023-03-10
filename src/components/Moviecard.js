import React from "react";
import { useNavigate } from "react-router-dom";
//import img from "../images/img.png";

const Moviecard = ({ movieID, movieName, rating, posterUrl }) => {
  const navigate = useNavigate();
  const img = `https://image.tmdb.org/t/p/w500/${posterUrl}`;
  //const defaultSrc = (e) => {
  // const img2 = "../images/img.png";
  //};

  return (
    <>
      <div
        className="cardz"
        onClick={() => {
          navigate(`/movie/${movieID}`);
        }}
      >
        <img
          className="overflow-hidden"
          src={
            !posterUrl
              ? "https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg"
              : img
          }
          alt="Avatar"
          style={{ width: "100%" }}
        />
        <div className="containerz overflow-auto">
          <h4>
            <div style={{ width: "max-content" }}>
              <b>{movieName}</b>
              <br></br>
              <b>{rating}</b>
            </div>
          </h4>
        </div>
      </div>
    </>
  );
};

export default Moviecard;
