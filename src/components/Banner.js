import { useState, useEffect } from "react";

import { key, poster } from "../config";

const Banner = () => {
  const [backdrop, setBackdrop] = useState();

  // Get backdrop from API for header
  const getBackdrop = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US`
    );
    const data = await response.json();
    const banner = await data.results[
      Math.floor(Math.random() * data.results.length)
    ].backdrop_path;
    setBackdrop(banner);
  };

  useEffect(() => {
    getBackdrop();
  }, []);

  return (
    <>
      {
        <div
          className="backdrop"
          style={{
            backgroundImage: `linear-gradient(0deg,
        rgba(255,255,255,1) 0%, rgba(255,255,255,0) 80%), ${
          backdrop != undefined
            ? `url(${poster + "/" + backdrop})`
            : `backgroundColor: "lightpink"`
        }`,
          }}
        ></div>
      }
    </>
  );
};

export default Banner;

{
  /* <>
{backdrop != undefined ? (
  <div
    className="backdrop"
    style={{
      backgroundImage: `linear-gradient(0deg,
  rgba(255,255,255,1) 0%, rgba(255,255,255,0) 80%), url(${
    poster + "/" + backdrop
  })`,
    }}
  ></div>
) : null}
</> */
}
