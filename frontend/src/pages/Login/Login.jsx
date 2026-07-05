import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import "../../styles/auth-form.css";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [remember, setRemember] = useState(true);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // TODO: replace with a real authentication call once the API exists.
    navigate("/dashboard");
  }

  return (
    <div className="auth-card">
      <p className="auth-card__eyebrow">Welcome back</p>
      <h1 className="auth-card__title">Log in to IntellMeet</h1>
      <p className="auth-card__subtitle">
        Enter your details to access your meetings and schedule.
      </p>

      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="email">Work email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@company.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <div className="form-field__row">
            <label htmlFor="password">Password</label>
            <a href="#forgot" className="auth-form__link">
              Forgot password?
            </a>
          </div>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={6}
          />
        </div>

        <label className="auth-form__checkbox">
          <input
            type="checkbox"
            checked={remember}
            onChange={(event) => setRemember(event.target.checked)}
          />
          Keep me signed in on this device
        </label>

        <Button type="submit" fullWidth size="lg">
          Log in
        </Button>
      </form>

      <p className="auth-card__footer-text">
        New to IntellMeet? <Link to="/signup">Create an account</Link>
      </p>
    </div>
  );
}

export default Login;