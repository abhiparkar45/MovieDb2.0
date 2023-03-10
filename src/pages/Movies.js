import React, { useEffect, useState } from "react";
import store from "../redux/store";
import { fetchData } from "../redux/reducer";
import PropTypes from "prop-types";
import Moviecard from "../components/Moviecard";
import Pagination from "../components/Pagination";

const Movies = ({ SortBy }) => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [movie, setMovie] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  store.subscribe(() => {
    setMovie(store.getState().Data);
    setIsDataLoaded(true);
  });

  //const setData = async () => {};
  useEffect(() => {
    store.dispatch(
      fetchData({
        SortBy: SortBy,
        pageNumber: pageNumber,
      })
    );
    window.scrollTo(0, 0);
  }, [SortBy, pageNumber]);

  return (
    <>
      {isDataLoaded ? (
        <div className="resrow">
          {movie.map((e) => (
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
      ) : (
        <div className="lds-ring"></div>
      )}
      <div className="flex-center">
        <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
      </div>
    </>
  );
};
Movies.defaultProps = {
  SortBy: "popular",
  pageNumber: 1,
};
Movies.prototypes = {
  SortBy: PropTypes.string,
  pageNumber: PropTypes.number,
};
export default Movies;
