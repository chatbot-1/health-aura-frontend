import React from "react";
import "./profile.css";

const Profile = () => {
  return (
    <div className="profile section">
      <div className="profile-container container">
        <p className="user-profile">Hello User</p>
        <div className="matters">
          <p>Personal Information</p>
          <p>Personal Health Data</p>
          <p>Saved Cards</p>
          <p>Security & Privacy</p>
          <p>Terms & Conditions</p>
          <p>User Licence</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
