import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import "./MyEventsEmpty.css";

function RegisteredEvents() {
  return (
    <div className="empty-event-state">
      <FontAwesomeIcon icon={faCalendarCheck} />

      <h2>No Registered Events</h2>

      <p>
        Events you register for will appear in this section.
      </p>

      <a href="/events">
        Explore Events
        <FontAwesomeIcon icon={faArrowRight} />
      </a>
    </div>
  );
}

export default RegisteredEvents;