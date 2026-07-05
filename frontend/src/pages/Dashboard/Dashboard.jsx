import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MeetingCard from "../../components/MeetingCard/MeetingCard";
import Button from "../../components/Button/Button";
import { MOCK_MEETINGS, MOCK_USER } from "../../utils/constants";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  const [joinCode, setJoinCode] = useState("");

  const liveCount = MOCK_MEETINGS.filter((m) => m.status === "live").length;
  const upcomingCount = MOCK_MEETINGS.filter(
    (m) => m.status === "upcoming"
  ).length;

  const firstName = MOCK_USER.name.split(" ")[0];

  function handleNewMeeting() {
    const roomId = Math.random().toString(36).slice(2, 10);
    navigate(`/meeting/${roomId}`);
  }

  function handleJoinByCode(event) {
    event.preventDefault();
    if (joinCode.trim()) {
      navigate(`/meeting/${joinCode.trim()}`);
    }
  }

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <div>
          <h2 className="dashboard__greeting">Welcome back, {firstName}</h2>
          <p className="dashboard__subtitle">
            Here's what's scheduled across your workspace today.
          </p>
        </div>

        <form className="dashboard__join-form" onSubmit={handleJoinByCode}>
          <input
            type="text"
            placeholder="Enter a meeting code"
            value={joinCode}
            onChange={(event) => setJoinCode(event.target.value)}
            aria-label="Meeting code"
          />
          <Button type="submit" variant="outline" size="md">
            Join
          </Button>
          <Button type="button" size="md" onClick={handleNewMeeting}>
            + New meeting
          </Button>
        </form>
      </div>

      <div className="dashboard__stats">
        <div className="stat-card">
          <p className="stat-card__value">{MOCK_MEETINGS.length}</p>
          <p className="stat-card__label">Total meetings</p>
        </div>
        <div className="stat-card stat-card--accent">
          <p className="stat-card__value">{liveCount}</p>
          <p className="stat-card__label">Live right now</p>
        </div>
        <div className="stat-card">
          <p className="stat-card__value">{upcomingCount}</p>
          <p className="stat-card__label">Upcoming</p>
        </div>
        <div className="stat-card">
          <p className="stat-card__value">24</p>
          <p className="stat-card__label">Minutes saved this week</p>
        </div>
      </div>

      <section className="dashboard__section">
        <div className="dashboard__section-head">
          <h3>Your meetings</h3>
          <button type="button" className="dashboard__see-all">
            See all
          </button>
        </div>

        <div className="dashboard__grid">
          {MOCK_MEETINGS.map((meeting) => (
            <MeetingCard key={meeting.id} meeting={meeting} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;