import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const ReplyMessage = () => {
  const [replyText, setReplyText] = useState("");
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setReplyText(value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form className="comm_reply_form" onSubmit={onSubmit}>
      <input
        className="comm_reply_text"
        type="text"
        placeholder="reply message!"
        onChange={onChange}
      />
      <button className="comm_reply_submitBtn">
        <FontAwesomeIcon icon={faPaperPlane} color="#4C6EF5" />
      </button>
    </form>
  );
};

export default ReplyMessage;
