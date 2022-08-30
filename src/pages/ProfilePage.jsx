import React from "react";
import "../styles/Profile.css";

const ProfilePage = () => {
  return (
    <div className="main_profile">
      <div class="profile_1">
        <div class="profile-image">
          <img
            src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces"
            alt=""
          />
        </div>

        <div class="profile-user-settings">
          <h1 class="profile-user-name">user_name</h1>

          <button
            class="btn profile-settings-btn"
            aria-label="profile settings"
          >
            <i class="fas fa-cog" aria-hidden="true"></i>
          </button>
        </div>

        <div class="profile-bio">
          <p>
            <span class="profile-real-name">Real name</span> Lorem ipsum dolor
            sit, amet consectetur adipisicing elit 📷✈️🏕️
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
