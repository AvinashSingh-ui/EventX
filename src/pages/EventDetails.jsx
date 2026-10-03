import { useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCalendarDays,
  faLocationDot,
  faUsers,
  faLaptop,
  faBuilding,
  faUserTie,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import events from "../data/data";
import "./EventDetails.css";

function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const event = useMemo(
    () => events.find((item) => item.id === Number(id)),
    [id]
  );

  if (!event) {
    return (
      <section className="details-not-found">
        <h1>Event Not Found</h1>
        <p>This event does not exist.</p>
        <Link to="/events">Explore Events</Link>
      </section>
    );
  }

  return (
    <section className="details-page">
      <button
        className="details-back"
        onClick={() => navigate(-1)}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        Back to Events
      </button>

      <div className="details-card">
        <div className="details-image">
          <img src={event.image} alt={event.title} />
          <span>{event.category}</span>
        </div>

        <div className="details-content">
          <span className="details-mode">{event.mode}</span>

          <h1>{event.title}</h1>

          <p className="details-organizer">
            <FontAwesomeIcon icon={faUserTie} />
            Organized by {event.organizer}
          </p>

          <div className="details-info-grid">
            <div>
              <FontAwesomeIcon icon={faCalendarDays} />
              <span>
                <small>Date</small>
                {event.date}
              </span>
            </div>

            <div>
              <FontAwesomeIcon icon={faLocationDot} />
              <span>
                <small>Location</small>
                {event.location}
              </span>
            </div>

            <div>
              <FontAwesomeIcon
                icon={event.mode === "Online" ? faLaptop : faBuilding}
              />
              <span>
                <small>Mode</small>
                {event.mode}
              </span>
            </div>

            <div>
              <FontAwesomeIcon icon={faUsers} />
              <span>
                <small>Participants</small>
                {event.attendees}
              </span>
            </div>
          </div>

          <div className="details-description">
            <h3>About this event</h3>
            <p>{event.description}</p>
          </div>

          <button className="register-btn">
            Register Now
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default EventDetails;