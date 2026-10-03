import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import "./MyEventsEmpty.css";

function SavedEvents() {
  return (
    <div className="empty-event-state">
      <FontAwesomeIcon icon={faHeart} />

      <h2>No Saved Events</h2>

      <p>
        Save interesting events and find them here later.
      </p>

      <a href="/events">
        Explore Events
        <FontAwesomeIcon icon={faArrowRight} />
      </a>
    </div>
  );
}

export default SavedEvents;