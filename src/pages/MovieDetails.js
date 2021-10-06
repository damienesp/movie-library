import { useState, useEffect, useRef } from "react";

import Recommendations from "../components/Recommendations";

import { key, posterWidth500 } from "../config";

const MovieDetails = (props) => {
  const [movie, setMovie] = useState([]);
  const [trailer, setTrailer] = useState("");

  // Get ID of the movie from router match
  const movieId = props.match.params.id;

  // Get movie details from API
  const getMovie = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US`
    );
    const data = await response.json();
    setMovie(data);
  };

  // Get trailer link from API
  const getTrailer = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${key}&language=en-US`
    );
    const data = await response.json();
    if (data.results.length !== 0) {
      setTrailer(data.results[0].key);
    }
  };

  // Transform min runtime to 00h00min format
  const getHourMin = (runtime) => {
    return `${Math.floor(runtime / 60)}h${Math.round(
      ((runtime / 60) % 1) * 60
    )}min`;
  };

  // Get the year of release
  const year = new Date(movie.release_date).getFullYear();

  // Smooth scroll to top of component after id change
  const refTop = useRef();
  const handleOnClick = () => {
    refTop.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    getMovie();
    getTrailer();
    handleOnClick();
  }, [movieId]);

  return (
    <div ref={refTop}>
      <div className="content-movie-details">
        <div className="movie-details">
          <div className="poster-details">
            {movie.poster_path ? (
              <img
                className="poster-details-img"
                src={posterWidth500 + movie.poster_path}
              />
            ) : (
              <div className="poster-details-missing">&#x1F3A5;</div>
            )}
          </div>

          <div className="details">
            <h1 className="details-h1">{movie.title}</h1>
            <h3 className="details-h3">{movie.tagline}</h3>
            <p className="details-p">
              {year} • {getHourMin(movie.runtime)}
            </p>

            <div className="synopsis">
              <h2 className="synopsis-h2">SYNOPSIS</h2>
              <p className="synopsis-p">{movie.overview}</p>
            </div>
            {trailer ? (
              <div className="trailer">
                <a
                  href={`https://www.youtube.com/watch?v=${trailer}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="trailer-button">Watch Trailer</button>
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <Recommendations props={props} movie={movie} />
    </div>
  );
};

export default MovieDetails;
