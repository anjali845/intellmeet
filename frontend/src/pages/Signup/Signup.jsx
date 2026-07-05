import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import "../../styles/auth-form.css";

const INITIAL_FORM = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // TODO: replace with a real "create account" API call once it exists.
    navigate("/dashboard");
  }

  return (
    <div className="auth-card">
      <p className="auth-card__eyebrow">Get started</p>
      <h1 className="auth-card__title">Create your account</h1>
      <p className="auth-card__subtitle">
        Set up your workspace in less than a minute.
      </p>

      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="fullName">Full name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Aditi Sharma"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

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
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="At least 6 characters"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={6}
          />
        </div>

        <div className="form-field">
          <label htmlFor="confirmPassword">Confirm password</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Re-enter your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            minLength={6}
          />
          {error && <span className="form-field__hint">{error}</span>}
        </div>

        <p className="auth-form__terms">
          By creating an account, you agree to IntellMeet's{" "}
          <a href="#terms">Terms of Service</a> and{" "}
          <a href="#privacy">Privacy Policy</a>.
        </p>

        <Button type="submit" fullWidth size="lg">
          Create account
        </Button>
      </form>

      <p className="auth-card__footer-text">
        Already have an account? <Link to="/">Log in</Link>
      </p>
    </div>
  );
}

export default Signup;