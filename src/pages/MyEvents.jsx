import { NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faCalendarCheck,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import "./MyEvents.css";

function MyEvents() {
  return (
    <section className="my-events-page">
      <div className="my-events-header">
        <div>
          <span className="section-label">YOUR SPACE</span>
          <h1>My Events</h1>
          <p>Keep track of the events you care about.</p>
        </div>

        <FontAwesomeIcon icon={faBookmark} />
      </div>

      <nav className="my-events-tabs">
        <NavLink to="registered">
          <FontAwesomeIcon icon={faCalendarCheck} />
          Registered
        </NavLink>

        <NavLink to="saved">
          <FontAwesomeIcon icon={faHeart} />
          Saved
        </NavLink>
      </nav>

      <div className="nested-content">
        <Outlet />
      </div>
    </section>
  );
}

export default MyEvents;