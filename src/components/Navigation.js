import { NavLink } from "react-router-dom";

import popcorn from "../img/popcorn.svg";

const Navigation = () => {
  return (
    <nav>
      <button className="hamburger">
        <img src={popcorn} />
      </button>
      <ul className="nav-links">
        <li>
          <NavLink to="/popular" activeClassName="nav-active">
            Popular
          </NavLink>
        </li>
        <li>
          <NavLink to="/top-rated" activeClassName="nav-active">
            Top Rated
          </NavLink>
        </li>
        <li>
          <NavLink to="/upcoming" activeClassName="nav-active">
            Upcoming
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
