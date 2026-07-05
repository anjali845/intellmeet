import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__card">
        <span className="not-found__code">404</span>
        <h1 className="not-found__title">This meeting doesn't exist</h1>
        <p className="not-found__text">
          The page you're looking for was moved, renamed, or never
          scheduled in the first place.
        </p>
        <Link to="/dashboard">
          <Button size="lg">Back to dashboard</Button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;