import React, { useState } from "react";

const DisplayMessage = ({ message }) => {
  const [editing, setEditing] = useState(false);
  const onChatBoxClick = () => {
    setEditing((prev) => !prev);
  };
  const onClearButtonClick = () => {
    message.attachmentUrl = "";
  };
  const onUpdateButtonClick = () => {};
  return (
    <>
      {editing ? (
        <>
          <div className="comm_chateditingBox" onClick={onChatBoxClick}>
            <span className="comm_chateditingText">{message.text}</span>
            {message.attachmentUrl ? (
              <img className="comm_editingimg" src={message.attachmentUrl} />
            ) : (
              <img
                className="comm_editingimg"
                style={{ visibility: "hidden" }}
              />
            )}
            <div className="comm_edit_btnBox">
              <button
                onClick={onClearButtonClick}
                className="comm_editClearBtn"
              >
                Clear Photo
              </button>
              <button className="comm_edit_submitBtn">Update</button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="comm_chatBox" onClick={onChatBoxClick}>
            <span className="comm_chatText">{message.text}</span>
            {message.attachmentUrl ? (
              <img
                className="comm_img"
                src={message.attachmentUrl}
                height="60px"
              />
            ) : (
              <img
                className="comm_img"
                style={{ visibility: "hidden" }}
                height="60px"
              />
            )}
          </div>
        </>
      )}
    </>
  );
};

export default DisplayMessage;
