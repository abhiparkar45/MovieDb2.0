import React, { useEffect } from "react";
import store from "../redux/store";
import { useParams } from "react-router-dom";
import { fetchSearchResults } from "../redux/reducer";
import { useState } from "react";
import Moviecard from "../components/Moviecard";

import Pagination from "../components/Pagination";

const MovieSearchDetails = () => {
  const { movie_name } = useParams();
  const [searchedMovieResult, setSearchMovieResult] = useState({});
  const [resultPage, setResultPage] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  store.subscribe(() => {
    setSearchMovieResult(store.getState().searchedMovies);
    setResultPage(store.getState().searchedMovies.results);
  });
  const getSearchResults = async () => {};

  useEffect(() => {
    // getSearchResults();
    store.dispatch(
      fetchSearchResults({
        movie_name: movie_name,
        pageNumber: pageNumber,
      })
    );
  }, [pageNumber, movie_name]);

  return (
    <>
      <div className="resrow">
        {resultPage.map((e) => (
          <div key={e.id} className="cardcolumn">
            <Moviecard
              movieID={e.id}
              movieName={e.original_title}
              rating={e.vote_average}
              posterUrl={e.poster_path}
            />
          </div>
        ))}
      </div>
      <div className="flex-center">
        <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
      </div>
    </>
  );
};

export default MovieSearchDetails;
