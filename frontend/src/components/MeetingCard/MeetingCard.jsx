import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import "./MeetingCard.css";

const STATUS_LABEL = {
  live: "Live now",
  upcoming: "Upcoming",
  ended: "Ended",
};

function MeetingCard({ meeting }) {
  const navigate = useNavigate();
  const { id, title, host, date, time, durationMins, participants, status } =
    meeting;

  return (
    <article className={`meeting-card meeting-card--${status}`}>
      <div className="meeting-card__main">
        <div className="meeting-card__status">
          <span
            className={`status-dot ${status === "live" ? "status-dot--live" : ""}`}
          />
          {STATUS_LABEL[status] ?? "Scheduled"}
        </div>

        <h3 className="meeting-card__title">{title}</h3>

        <p className="meeting-card__meta">
          {date} &middot; {time} &middot; {durationMins} min
        </p>

        <div className="meeting-card__footer">
          <span className="meeting-card__host">Hosted by {host}</span>
          <span className="meeting-card__participants">
            {participants} joining
          </span>
        </div>
      </div>

      <div className="meeting-card__stub">
        <span className="meeting-card__stub-label">Code</span>
        <span className="meeting-card__code">{id}</span>
        <Button
          size="sm"
          variant={status === "live" ? "secondary" : "outline"}
          disabled={status === "ended"}
          fullWidth
          onClick={() => navigate(`/meeting/${id}`)}
        >
          {status === "ended" ? "Closed" : status === "live" ? "Join" : "Open"}
        </Button>
      </div>
    </article>
  );
}

export default MeetingCard;