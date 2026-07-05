import { useState } from "react";
import Button from "../../components/Button/Button";
import { MOCK_USER, getInitials } from "../../utils/constants";
import "./Profile.css";

function Profile() {
  const [formData, setFormData] = useState({
    name: MOCK_USER.name,
    email: MOCK_USER.email,
    role: MOCK_USER.role,
  });
  const [savedMessage, setSavedMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // TODO: persist to the backend once the profile API exists.
    setSavedMessage("Profile updated.");
    setTimeout(() => setSavedMessage(""), 2500);
  }

  return (
    <div className="profile">
      <div className="profile__identity">
        <div className="profile__avatar">{getInitials(formData.name)}</div>
        <div>
          <h2 className="profile__name">{formData.name}</h2>
          <p className="profile__role">{formData.role}</p>
        </div>
      </div>

      <div className="profile__grid">
        <form className="profile-card" onSubmit={handleSubmit}>
          <h3 className="profile-card__title">Personal details</h3>
          <p className="profile-card__subtitle">
            This information appears to other participants in your meetings.
          </p>

          <div className="form-field">
            <label htmlFor="name">Full name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-field">
            <label htmlFor="role">Role / title</label>
            <input
              id="role"
              name="role"
              type="text"
              value={formData.role}
              onChange={handleChange}
            />
          </div>

          <div className="profile-card__actions">
            {savedMessage && (
              <span className="profile-card__saved">{savedMessage}</span>
            )}
            <Button type="submit">Save changes</Button>
          </div>
        </form>

        <div className="profile-card">
          <h3 className="profile-card__title">Security</h3>
          <p className="profile-card__subtitle">
            Manage how you sign in to IntellMeet.
          </p>

          <div className="profile-row">
            <div>
              <p className="profile-row__label">Password</p>
              <p className="profile-row__value">Last changed 3 months ago</p>
            </div>
            <Button variant="outline" size="sm">
              Change
            </Button>
          </div>

          <div className="profile-row">
            <div>
              <p className="profile-row__label">Calendar sync</p>
              <p className="profile-row__value">
                Not connected · coming soon
              </p>
            </div>
            <Button variant="outline" size="sm" disabled>
              Connect
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;