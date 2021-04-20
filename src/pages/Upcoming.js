import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

import Loading from "../components/Loading";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";

import { key } from "../config";

const Upcoming = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const page = queryString.parse(location.search).page || 1;

  // Get upcoming movies from API
  const getMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=${page}`
    );
    const data = await response.json();
    setMovies(data);
    setLoading(false);
  };

  // Smooth scroll to top of component after page change
  const refTop = useRef();
  const handleOnClick = () => {
    refTop.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    getMovies();
    handleOnClick();
  }, [page, location]);

  if (loading) {
    return (
      <div className="main-content" ref={refTop}>
        <Loading />
      </div>
    );
  }

  return (
    <div className="main-content" ref={refTop}>
      <h1 className="upcoming-h1">UPCOMING MOVIES</h1>
      <MovieList movies={movies} />
      <Pagination page={movies.page} totalPage={movies.total_pages} />
    </div>
  );
};

export default Upcoming;
