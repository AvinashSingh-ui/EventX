import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./NotFound.css";

function NotFound() {
  return (
    <section className="not-found-page">
      <FontAwesomeIcon icon={faCompass} />

      <span>404</span>

      <h1>Page Not Found</h1>

      <p>
        The page you're looking for doesn't exist or has been moved.
      </p>

      <Link to="/">
        <FontAwesomeIcon icon={faArrowLeft} />
        Back to Home
      </Link>
    </section>
  );
}

export default NotFound;