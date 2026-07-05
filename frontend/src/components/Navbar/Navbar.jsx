import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MOCK_USER } from "../../utils/constants";
import Button from "../Button/Button";
import "./Navbar.css";

function Navbar({ title = "Dashboard", onMenuClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  function handleNewMeeting() {
    const roomId = Math.random().toString(36).slice(2, 10);
    navigate(`/meeting/${roomId}`);
  }

  function handleLogout() {
    setMenuOpen(false);
    navigate("/");
  }

  return (
    <header className="navbar">
      <div className="navbar__left">
        <button
          type="button"
          className="navbar__menu-btn"
          aria-label="Toggle navigation menu"
          onClick={onMenuClick}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className="navbar__title">{title}</h1>
      </div>

      <div className="navbar__right">
        <Button size="sm" onClick={handleNewMeeting}>
          + New meeting
        </Button>

        <div className="navbar__user">
          <button
            type="button"
            className="navbar__avatar"
            onClick={() => setMenuOpen((open) => !open)}
            aria-haspopup="true"
            aria-expanded={menuOpen}
          >
            {MOCK_USER.initials}
          </button>

          {menuOpen && (
            <div className="navbar__dropdown">
              <p className="navbar__dropdown-name">{MOCK_USER.name}</p>
              <p className="navbar__dropdown-email">{MOCK_USER.email}</p>
              <hr />
              <button
                type="button"
                className="navbar__dropdown-link"
                onClick={() => {
                  setMenuOpen(false);
                  navigate("/profile");
                }}
              >
                View profile
              </button>
              <button
                type="button"
                className="navbar__dropdown-link navbar__dropdown-link--danger"
                onClick={handleLogout}
              >
                Log out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;