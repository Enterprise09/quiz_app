import React, { useState } from "react";
import "../css/Profile.css";

const Profile = ({ userObj }) => {
  const [newUserName, setNewUserName] = useState("");
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewUserName(value);
  };

  const onSubmit = () => {};

  const onLogoutClick = () => {};
  return (
    <div className="profile_container">
      <form className="profile_update_form" onSubmit={onSubmit}>
        <input
          className="profile_updateText"
          onChange={onChange}
          type="text"
          value={newUserName}
          placeholder="Display Name"
        />
        <input className="profile_updateBtn" type="submit" value="Update" />
      </form>
      <hr />
      <button
        className="profile_logoutBtn"
        onClick={onLogoutClick}
        type="button"
      >
        LogOut
      </button>
    </div>
  );
};

export default Profile;
