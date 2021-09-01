import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "../css/Community.css";
import { dbService, storageService } from "../Firebaseconfig";
import SendMessage from "../components/SendMessage";
import DisplayMessage from "../components/DisplayMessage";

const Community = ({ userObj }) => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    dbService.collection("message").onSnapshot((snapshot) => {
      const messageArr = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(messageArr);
    });
  }, []);
  return (
    <div className="comm_container">
      <span className="comm_userName">
        <FontAwesomeIcon icon={faUser} /> {userObj.displayName}
      </span>
      <SendMessage userObj={userObj} />
      <div className="comm_chatcontainer">
        {messages.map((message) => (
          <DisplayMessage key={message.id} message={message} />
        ))}
      </div>
    </div>
  );
};

export default Community;
