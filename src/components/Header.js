import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Navigation from "./Navigation";
import SearchBox from "./SearchBox";

const Header = () => {
  const [handleTransparent, setHandleTransparent] = useState();

  useEffect(() => {
    transparentNav();
  }, []);

  // Make navbar black when scrolling
  const transparentNav = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 130) {
        setHandleTransparent(true);
      } else {
        setHandleTransparent(false);
      }
    });
  };

  return (
    <header
      style={handleTransparent ? { backgroundColor: "rgb(0, 0, 0)" } : null}
    >
      <div className="logo">
        <Link to="/popular" className="hover-color">
          <h1 className="logo-h1">&#x1F39F; MAUVIE</h1>
        </Link>
      </div>
      <div className="nav-wrapper">
        <Navigation />
        <SearchBox />
      </div>
    </header>
  );
};
export default Header;
