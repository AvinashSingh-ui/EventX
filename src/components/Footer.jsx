import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <FontAwesomeIcon icon={faCalendarDays} />
        <strong>EventHub</strong>
      </div>

      <p>
        Discover events. Build connections. Create experiences.
      </p>

      <div className="footer-copy">
        &copy;2026 EventHub
      </div>
    </footer>
  );
}

export default Footer;