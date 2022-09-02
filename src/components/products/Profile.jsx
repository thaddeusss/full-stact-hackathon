import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Profile.css";

const ProfilePage = () => {
  const navigate = useNavigate();
  return (
    <div className="main_profile">
      <div className="profile_1">
        <div className="profile-image">
          <img
            src="https://img-9gag-fun.9cache.com/photo/aP78xdV_460s.jpg"
            alt="people"
          />
        </div>

        <div className="profile-user-settings">
          <h1 className="profile-user-name">user_name</h1>
        </div>

        <div className="profile-bio">
          <span className="profile-real-name">Real name</span>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
            expedita consequuntur illo, eveniet id aspernatur, magnam nisi
            similique facere ratione laboriosam animi nihil laudantium vero est
            dolorum provident magni rem nemo aliquid! Maxime dolorum earum
            commodi? Optio alias ex accusantium obcaecati reiciendis laudantium
            odit vel et, veniam odio nobis iste.
          </p>
        </div>
        <div className="profile_add">
          <a onClick={() => navigate(`/add`)} className="prof_addbut">
            Добавить
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
