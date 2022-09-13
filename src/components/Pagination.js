import React from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";

const Pagination = (props) => {
  let { pageNumber, setPageNumber } = props;
  const arr = [2, 1];
  const setPageNumberFunc = (event) => {
    setPageNumber(event.target.value);
  };

  return (
    <>
      <div className="pagination" style={{ margin: "auto" }}>
        <button
          onClick={() => {
            if (pageNumber <= 1) {
              return;
            } else {
              setPageNumber(--pageNumber);
            }
          }}
        >
          &laquo; Previous
        </button>
        {pageNumber > 2 ? (
          <>
            {arr.map((e) => (
              <input
                className="other"
                type="button"
                value={pageNumber - e}
                key={e}
                onClick={setPageNumberFunc}
              />
            ))}
          </>
        ) : (
          <></>
        )}
        <input
          className="thisPage"
          type="button"
          value={pageNumber}
          onClick={setPageNumberFunc}
        />

        <input
          className="other"
          type="button"
          value={++pageNumber}
          onClick={setPageNumberFunc}
        />
        <input
          className="other"
          type="button"
          value={++pageNumber}
          onClick={setPageNumberFunc}
        />

        <button
          onClick={() => {
            setPageNumber(++pageNumber);
          }}
        >
          Next &raquo;
        </button>
      </div>
    </>
  );
};

Pagination.defaultProps = {
  pageNumber: 1,
};
Pagination.prototypes = {
  pageNumber: PropTypes.number,
};
export default Pagination;
