import { NavLink } from "react-router-dom";

const Navigation = ({ routeChange }) => {
  return (
    <nav>
      <ul className="nav-links">
        <li>
          <NavLink
            to="/popular"
            activeClassName="nav-active"
            onClick={routeChange}
          >
            Popular
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/top-rated"
            activeClassName="nav-active"
            onClick={routeChange}
          >
            Top Rated
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/upcoming"
            activeClassName="nav-active"
            onClick={routeChange}
          >
            Upcoming
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
