import { apiGet } from "../misc/config";

const apiKey = "c45a857c193f6302f2b5061c3b85e743";

export const fetchData = ({ SortBy, pageNumber }) => {
  return async (dispatch) => {
    const Data = await apiGet(
      `/3/movie/${SortBy}?api_key=${apiKey}&language=en-US&page=${pageNumber}`
    ).then((e) => e.results);
    dispatch(fetchDataSuccess(Data));
  };
};

export const fetchMovieCast = ({ id }) => {
  return async (dispatch) => {
    const castData = await apiGet(
      `/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`
    ).then((e) => e.cast);
    dispatch(fetchCastSuccess(castData));
  };
};

export const fetchMovieDetails = ({ id }) => {
  return async (dispatch) => {
    const MovieData = await apiGet(
      `/3/movie/${id}?api_key=${apiKey}&language=en-US`
    );
    dispatch(fetchSingleMovie(MovieData));
  };
};
export const fetchSearchResults = ({ movie_name, pageNumber }) => {
  return async (dispatch) => {
    const searchMovieDetails = await apiGet(
      `/3/search/movie?api_key=${apiKey}&language=en-US&query=${movie_name}&page=${pageNumber}`
    );
    dispatch(fetchResult(searchMovieDetails));
  };
};
const fetchResult = (data) => {
  return {
    type: "SearchedMovies",
    payload: data,
  };
};
const fetchCastSuccess = (data) => {
  return {
    type: "FetchCast",
    payload: data,
  };
};
const fetchDataSuccess = (data) => {
  return {
    type: "LoadData",
    payload: data,
  };
};
const fetchSingleMovie = (data) => {
  return {
    type: "LoadSingleMovie",
    payload: data,
  };
};
export const reducer = (
  state = {
    Data: [],
    movieDetail: { movie: {}, cast: [] },
    searchedMovies: [],
    isDataLoading: true,
  },
  action
) => {
  switch (action.type) {
    case "LoadData":
      return { ...state, Data: action.payload, isDataLoading: false };
    case "LoadSingleMovie":
      return {
        ...state,
        movieDetail: { ...state.movieDetail, movie: action.payload },
        isDataLoading: false,
      };
    case "FetchCast":
      return {
        ...state,
        movieDetail: { ...state.movieDetail, cast: action.payload },
        isDataLoading: false,
      };
    case "SearchedMovies":
      return {
        ...state,
        searchedMovies: action.payload,
        isDataLoading: false,
      };
    default:
      return state;
  }
};

//const fetchUsersSuccess = (users) => {
//return {
// type: FETCH_USERS_SUCCESS,
//  payload: users,
//};
//};
