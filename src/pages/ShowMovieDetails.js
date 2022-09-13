import React, { useEffect, useState } from "react";
import MovieDetails from "../components/MovieDetails";
import { useParams } from "react-router-dom";
import store from "../redux/store";
import { fetchMovieCast, fetchMovieDetails } from "../redux/reducer";
import Cast from "../components/Cast";

function ShowMovieDetails() {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);
  const [genre, setGenre] = useState([]);
  const [cast, setCast] = useState([]);

  store.subscribe(() => {
    setMovieDetail(store.getState().movieDetail.movie);
    setGenre(store.getState().movieDetail.movie.genres);
    setCast(store.getState().movieDetail.cast);
  });

  const getMovie = async () => {
    await store.dispatch(
      fetchMovieDetails({
        id: id,
      })
    );
    await store.dispatch(
      fetchMovieCast({
        id: id,
      })
    );
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      <MovieDetails movieDetail={movieDetail} genre={genre}></MovieDetails>
      <div className="box">
        <Cast cast={cast} />
      </div>
    </>
  );
}

export default ShowMovieDetails;
