import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCalendarDays,
  faLocationDot,
  faUsers,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";
import events from "../data/data";
import EventCard from "../components/EventCard";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const featuredEvents = useMemo(
    () => events.slice(0, 3),
    []
  );

  const stats = useMemo(
    () => [
      { icon: faCalendarDays, value: "500+", label: "Events" },
      { icon: faUsers, value: "20K+", label: "Participants" },
      { icon: faLocationDot, value: "50+", label: "Cities" },
    ],
    []
  );

  return (
    <>
      <section className="home-hero">
        <div className="hero-overlay" />

        <div className="hero-content">
          <div className="hero-badge">
            <FontAwesomeIcon icon={faBolt} />
            Discover what's happening
          </div>

          <h1>
            Find Events.
            <br />
            <span>Build Connections.</span>
          </h1>

          <p>
            Discover workshops, conferences, meetups and
            communities designed to help you learn, connect
            and grow.
          </p>

          <div className="hero-actions">
            <button
              className="hero-primary"
              onClick={() => navigate("/events")}
            >
              Explore Events
              <FontAwesomeIcon icon={faArrowRight} />
            </button>

            <button
              className="hero-secondary"
              onClick={() => navigate("/about")}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section className="stats-section">
        {stats.map((stat) => (
          <div className="stat-item" key={stat.label}>
            <FontAwesomeIcon icon={stat.icon} />
            <div>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          </div>
        ))}
      </section>

      <section className="home-section">
        <div className="section-heading">
          <div>
            <span className="section-label">EXPLORE</span>
            <h2>Featured Events</h2>
            <p>Discover experiences worth attending.</p>
          </div>

          <button
            className="view-all"
            onClick={() => navigate("/events")}
          >
            View all
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>

        <div className="home-event-grid">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;