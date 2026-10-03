import { memo } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faLocationDot,
  faUsers,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import "./EventCard.css";

const EventCard = memo(function EventCard({ event }) {
  return (
    <article className="event-card">
      <div className="event-image-wrapper">
        <img src={event.image} alt={event.title} />

        <span className="event-category">
          {event.category}
        </span>
      </div>

      <div className="event-card-body">
        <span className="event-mode">{event.mode}</span>

        <h3>{event.title}</h3>

        <p className="event-organizer">
          By {event.organizer}
        </p>

        <div className="event-meta">
          <span>
            <FontAwesomeIcon icon={faCalendarDays} />
            {event.date}
          </span>

          <span>
            <FontAwesomeIcon icon={faLocationDot} />
            {event.location}
          </span>

          <span>
            <FontAwesomeIcon icon={faUsers} />
            {event.attendees} attendees
          </span>
        </div>

        <Link
          to={`/events/${event.id}`}
          className="event-details-link"
        >
          View Details
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
    </article>
  );
});

export default EventCard;