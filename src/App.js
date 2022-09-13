import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Movies from "./pages/Movies";
import "./styles/Header.scss";
import ShowMovieDetails from "./pages/ShowMovieDetails";
import MovieSearchDetails from "./pages/MovieSearchDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Movies key="popular" SortBy="popular" />} />

          <Route
            path="/top_rated"
            element={<Movies key="top_rated" SortBy="top_rated" />}
          />
          <Route
            path="/upcoming"
            element={<Movies key="upcoming" SortBy="upcoming" />}
          />
          <Route path="/movie/:id" element={<ShowMovieDetails />} />
          <Route path="/search/:movie_name" element={<MovieSearchDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
// <Route path="/search/:movie_name" element={<MovieSearchResults />} />

export default App;
