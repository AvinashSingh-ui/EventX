import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCalendarDays,
  faBookmark,
  faCircleInfo,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="navbar-logo">
        <span className="logo-mark">E</span>
        <span>EventHub</span>
      </NavLink>

      <nav className="navbar-links">
        <NavLink to="/" end>
          <FontAwesomeIcon icon={faHouse} />
          <span>Home</span>
        </NavLink>

        <NavLink to="/events">
          <FontAwesomeIcon icon={faCalendarDays} />
          <span>Events</span>
        </NavLink>

        <NavLink to="/my-events">
          <FontAwesomeIcon icon={faBookmark} />
          <span>My Events</span>
        </NavLink>

        <NavLink to="/about">
          <FontAwesomeIcon icon={faCircleInfo} />
          <span>About</span>
        </NavLink>
      </nav>

      <NavLink to="/events" className="navbar-cta">
        Explore
        <FontAwesomeIcon icon={faArrowRight} />
      </NavLink>
    </header>
  );
}

export default Navbar;