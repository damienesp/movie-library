import tmdb from "../img/tmdb.svg";

const Footer = () => {
  return (
    <div className="footer">
      <a
        className="repository-link"
        href="https://github.com/damienesp/movie-library"
      >
        <svg
          className="git-svg"
          width="26.6px"
          height="25.8px"
          viewBox="0 0 32.6 31.8"
        >
          <path
            className="st0"
            d="M32.6,16.3c0,7.2-4.7,13.3-11.1,15.5c-0.8,0.2-1.1-0.3-1.1-0.8c0-0.5,0-2.3,0-4.5c0-1.5-0.5-2.5-1.1-3
	c3.6-0.4,7.4-1.8,7.4-8c0-1.8-0.6-3.2-1.7-4.4c0.2-0.4,0.7-2.1-0.2-4.3c0,0-1.4-0.4-4.5,1.7c-1.3-0.4-2.7-0.5-4.1-0.5
	c-1.4,0-2.8,0.2-4.1,0.5C9.1,6.3,7.7,6.8,7.7,6.8C6.8,9,7.4,10.7,7.6,11.1c-1,1.1-1.7,2.6-1.7,4.4c0,6.2,3.8,7.6,7.4,8.1
	c-0.5,0.4-0.9,1.1-1,2.2c-0.9,0.4-3.3,1.1-4.7-1.4c0,0-0.9-1.6-2.5-1.7c0,0-1.6,0-0.1,1c0,0,1.1,0.5,1.8,2.4c0,0,1,3.2,5.5,2.2
	c0,1.4,0,2.4,0,2.8c0,0.4-0.3,0.9-1.1,0.8C4.7,29.6,0,23.5,0,16.3C0,7.3,7.3,0,16.3,0C25.3,0,32.6,7.3,32.6,16.3z"
          />
        </svg>
      </a>
      <a href="https://www.themoviedb.org/">
        <img className="tmdb-logo" src={tmdb} alt="The Movie DB" />
      </a>
    </div>
  );
};

export default Footer;
