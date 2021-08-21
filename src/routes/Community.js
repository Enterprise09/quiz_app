import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../css/Community.css";

const Community = ({ userObj }) => {
  return (
    <div className="comm_container">
      <span>
        <FontAwesomeIcon icon={faUser} /> {userObj.displayName}
      </span>
      <div className="comm_chatBox">This place will be chating Box</div>
    </div>
  );
};

export default Community;
