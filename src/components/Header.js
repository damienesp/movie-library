import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Navigation from "./Navigation";
import SearchBox from "./SearchBox";
import popcorn from "../img/popcorn.svg";

const Header = () => {
  const [handleTransparent, setHandleTransparent] = useState();
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    transparentNav();
    hideOverflow();
  });

  // Make navbar black when scrolling test 2
  const transparentNav = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 130) {
        setHandleTransparent(true);
      } else {
        setHandleTransparent(false);
      }
    });
  };

  // Change state mobile menu
  const handleOnClick = () => {
    setMobileMenu(!mobileMenu);
  };

  // Handle route change on link click or search submit
  const handleRouteChange = () => {
    setMobileMenu(false);
  };

  // Avoid scrolling during mobile menu display
  const hideOverflow = () => {
    const body = document.querySelector("body");
    if (mobileMenu) {
      body.style.overflow = "hidden";
    } else body.style.overflow = "";
  };

  return (
    <header
      style={handleTransparent ? { backgroundColor: "rgb(0, 0, 0)" } : null}
    >
      <div className="logo">
        <Link to="/popular" className="hover-color" onClick={handleRouteChange}>
          <h1 className="logo-h1">&#x1F39F; MAUVIE</h1>
        </Link>
      </div>
      <button
        className={`hamburger ${mobileMenu ? "active" : null}`}
        onClick={handleOnClick}
      >
        <img src={popcorn} />
      </button>
      <div className={`nav-wrapper ${mobileMenu ? "active" : null}`}>
        <Navigation routeChange={handleRouteChange} />
        <SearchBox routeChange={handleRouteChange} />
      </div>
    </header>
  );
};
export default Header;
