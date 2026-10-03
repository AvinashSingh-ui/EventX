import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faUsers,
  faLocationDot,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./About.css";

function About() {
  const navigate = useNavigate();

  return (
    <section className="about-page">
      <div className="about-intro">
        <span className="section-label">ABOUT EVENTHUB</span>

        <h1>
          One place to discover
          <span> meaningful events.</span>
        </h1>

        <p>
          EventHub makes it easier to discover workshops,
          conferences and communities around you. Find
          experiences that match your interests and connect
          with people who share them.
        </p>

        <button onClick={() => navigate("/events")}>
          Explore Events
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>

      <div className="about-features">
        <div>
          <FontAwesomeIcon icon={faCalendarDays} />
          <h3>Discover</h3>
          <p>Explore events across different categories.</p>
        </div>

        <div>
          <FontAwesomeIcon icon={faUsers} />
          <h3>Connect</h3>
          <p>Meet communities and people with similar interests.</p>
        </div>

        <div>
          <FontAwesomeIcon icon={faLocationDot} />
          <h3>Experience</h3>
          <p>Find online and offline experiences around you.</p>
        </div>
      </div>
    </section>
  );
}

export default About;