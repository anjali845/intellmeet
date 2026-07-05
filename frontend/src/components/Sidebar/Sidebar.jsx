import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const NAV_ITEMS = [
  { to: "/dashboard", label: "Dashboard", icon: "grid" },
  { to: "/profile", label: "Profile", icon: "user" },
];

const SOON_ITEMS = [
  { label: "Recordings", icon: "play" },
  { label: "Settings", icon: "gear" },
];

function Icon({ name }) {
  switch (name) {
    case "grid":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="3" width="8" height="8" rx="1.5" />
          <rect x="13" y="3" width="8" height="8" rx="1.5" />
          <rect x="3" y="13" width="8" height="8" rx="1.5" />
          <rect x="13" y="13" width="8" height="8" rx="1.5" />
        </svg>
      );
    case "user":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="8" r="3.4" />
          <path d="M5 20c0-3.6 3.1-6.2 7-6.2s7 2.6 7 6.2" />
        </svg>
      );
    case "play":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="9" />
          <path d="M10 9l5 3-5 3z" fill="currentColor" stroke="none" />
        </svg>
      );
    case "gear":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="3" />
          <path d="M19 13a7 7 0 0 0 0-2l2-1.4-2-3.4-2.3.8a7 7 0 0 0-1.7-1L14.6 4H9.4L9 6a7 7 0 0 0-1.7 1l-2.3-.8-2 3.4L5 11a7 7 0 0 0 0 2l-2 1.4 2 3.4 2.3-.8a7 7 0 0 0 1.7 1l.4 2h5.2l.4-2a7 7 0 0 0 1.7-1l2.3.8 2-3.4z" />
        </svg>
      );
    default:
      return null;
  }
}

function Sidebar({ isOpen = false, onClose }) {
  return (
    <>
      {isOpen && <div className="sidebar__overlay" onClick={onClose} />}

      <aside className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
        <div className="sidebar__brand">
          <span className="sidebar__brand-mark">IM</span>
          <span className="sidebar__brand-name">IntellMeet</span>
        </div>

        <nav className="sidebar__nav">
          <p className="sidebar__section-label">Menu</p>
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `sidebar__link ${isActive ? "sidebar__link--active" : ""}`
                  }
                >
                  <span className="sidebar__icon">
                    <Icon name={item.icon} />
                  </span>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <p className="sidebar__section-label">Coming soon</p>
          <ul>
            {SOON_ITEMS.map((item) => (
              <li key={item.label}>
                <span className="sidebar__link sidebar__link--disabled">
                  <span className="sidebar__icon">
                    <Icon name={item.icon} />
                  </span>
                  {item.label}
                  <span className="sidebar__badge">Soon</span>
                </span>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar__footer-note">
          <p>IntellMeet</p>
          <p>v0.1 · Day 1 build</p>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;