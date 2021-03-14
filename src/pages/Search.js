import { useState, useEffect, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import queryString from "query-string";

import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";

import { key } from "../config";

const Search = (props) => {
  const [movies, setMovies] = useState([]);

  const { search } = useParams();
  const location = useLocation();

  const query = search;
  const page = queryString.parse(location.search).page || 1;

  // Get query results from API
  const searchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&include_adult=false&query=${query}&page=${page}`
    );
    const data = await response.json();
    if (!data.errors) {
      setMovies(data);
    } else {
      setMovies([]);
    }
  };

  // Smooth scroll to top of component after page or query change
  const refTop = useRef();
  const handleOnClick = () => {
    refTop.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    searchMovies();
    handleOnClick();
  }, [query, page]);

  return (
    <div className="main-content" ref={refTop}>
      <h1 className="query-h1">
        RESULTS FOR <span className="query-capi">{query}</span>
      </h1>
      <MovieList movies={movies} />
      <Pagination page={movies.page} totalPage={movies.total_pages} />
    </div>
  );
};

export default Search;
