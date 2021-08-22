import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../css/Profile.css";
import { authService } from "../Firebaseconfig";

const Profile = ({ userObj, refreshUser }) => {
  const history = useHistory();
  const [newUserName, setNewUserName] = useState(userObj.displayName);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewUserName(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== newUserName) {
      // console.log(userObj.displayName);
      // console.log(newUserName);
      await userObj.updateProfile({
        displayName: newUserName,
      });
      refreshUser();
      alert("이름 변경에 성공했습니다.");
    }
  };

  const onLogoutClick = () => {
    authService.signOut();
    history.push("/");
  };
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
      <hr className="profile_hr" />
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
