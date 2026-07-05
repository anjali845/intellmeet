import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import "./AuthLayout.css";

function AuthLayout() {
  return (
    <div className="auth-layout">
      <div className="auth-layout__brand">
        <div className="auth-layout__brand-content">
          <div className="auth-layout__logo">
            <span className="auth-layout__logo-mark">IM</span>
            <span className="auth-layout__logo-name">IntellMeet</span>
          </div>

          <h2 className="auth-layout__tagline">
            One link. Every time zone. <br /> Meetings that actually start
            on time.
          </h2>

          <p className="auth-layout__sub">
            Schedule, host, and manage video meetings from a single,
            distraction-free workspace.
          </p>

          <div className="auth-layout__nodes" aria-hidden="true">
            <span className="auth-layout__node auth-layout__node--1" />
            <span className="auth-layout__node auth-layout__node--2" />
            <span className="auth-layout__node auth-layout__node--3" />
            <svg className="auth-layout__lines" viewBox="0 0 320 220">
              <line x1="40" y1="170" x2="160" y2="60" />
              <line x1="160" y1="60" x2="270" y2="120" />
              <line x1="40" y1="170" x2="270" y2="120" />
            </svg>
          </div>
        </div>
      </div>

      <div className="auth-layout__form-side">
        <div className="auth-layout__form-wrap">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default AuthLayout;