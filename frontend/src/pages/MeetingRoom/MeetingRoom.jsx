import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getInitials } from "../../utils/constants";
import "./MeetingRoom.css";

const PLACEHOLDER_PARTICIPANTS = [
  { name: "Aditi Sharma", micOn: true, camOn: true, isSelf: true },
  { name: "Rohan Mehta", micOn: false, camOn: false },
  { name: "Neha Kapoor", micOn: true, camOn: false },
  { name: "Karan Verma", micOn: false, camOn: false },
];

function formatElapsed(totalSeconds) {
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function MeetingRoom() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(true);
  const [elapsed, setElapsed] = useState(0);

  // Lightweight call timer — purely visual until a real session exists.
  useEffect(() => {
    const interval = setInterval(() => setElapsed((s) => s + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  function handleLeave() {
    navigate("/dashboard");
  }

  return (
    <div className="meeting-room">
      <header className="meeting-room__topbar">
        <div className="meeting-room__info">
          <span className="status-dot status-dot--live" />
          <span className="meeting-room__code">{id}</span>
          <span className="meeting-room__divider">·</span>
          <span className="meeting-room__timer">{formatElapsed(elapsed)}</span>
        </div>
        <span className="meeting-room__participant-count">
          {PLACEHOLDER_PARTICIPANTS.length} in this meeting
        </span>
      </header>

      <main className="meeting-room__grid">
        {PLACEHOLDER_PARTICIPANTS.map((participant) => {
          const isMicOn = participant.isSelf ? micOn : participant.micOn;
          const isCamOn = participant.isSelf ? camOn : participant.camOn;

          return (
            <div className="participant-tile" key={participant.name}>
              {isCamOn ? (
                <div className="participant-tile__video-placeholder">
                  <span>Camera preview will appear here</span>
                </div>
              ) : (
                <div className="participant-tile__avatar">
                  {getInitials(participant.name)}
                </div>
              )}

              <div className="participant-tile__footer">
                <span className="participant-tile__name">
                  {participant.name} {participant.isSelf && "(You)"}
                </span>
                {!isMicOn && (
                  <span className="participant-tile__muted" title="Muted">
                    Muted
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </main>

      <footer className="meeting-room__controls">
        <button
          type="button"
          className={`control-btn ${micOn ? "" : "control-btn--off"}`}
          onClick={() => setMicOn((on) => !on)}
        >
          {micOn ? "Mic on" : "Mic off"}
        </button>

        <button
          type="button"
          className={`control-btn ${camOn ? "" : "control-btn--off"}`}
          onClick={() => setCamOn((on) => !on)}
        >
          {camOn ? "Camera on" : "Camera off"}
        </button>

        <button type="button" className="control-btn">
          Participants
        </button>

        <button type="button" className="control-btn">
          Chat
        </button>

        <button
          type="button"
          className="control-btn control-btn--leave"
          onClick={handleLeave}
        >
          Leave
        </button>
      </footer>
    </div>
  );
}

export default MeetingRoom;