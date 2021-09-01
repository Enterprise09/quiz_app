import React, { useState } from "react";
import { dbService } from "../Firebaseconfig";

const DisplayMessage = ({ message }) => {
  const [editing, setEditing] = useState(false);
  const [newTextMessage, setNewTextMessage] = useState(message.text);
  const [newAttachmentUrl, setNewAttachmentUrl] = useState(
    message.attachmentUrl
  );
  const toggleEditing = () => {
    setEditing((prev) => !prev);
  };
  const onClearButtonClick = () => {
    message.attachmentUrl = "";
  };
  const onSubmit = (event) => {
    event.preventDefault();
    // await dbService.doc(`message/${message.id}`).update({
    //   text: newTextMessage,
    //   attachmentUrl: newAttachmentUrl,
    // });
  };
  const onChange = (event) => {
    const {
      target: { data },
    } = event;
    setNewTextMessage(data);
  };
  return (
    <>
      {editing ? (
        <>
          <form className="comm_chateditingBox" onSubmit={onSubmit}>
            <input
              type="text"
              className="comm_chateditingText"
              value={newTextMessage}
              onChange={onChange}
            />
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
                type="button"
              >
                Clear Photo
              </button>
              <button className="comm_edit_submitBtn" type="submit">
                Update
              </button>
              <button
                className="comm_edit_cancelBtn"
                type="button"
                onClick={toggleEditing}
              >
                Cancel
              </button>
            </div>
          </form>
        </>
      ) : (
        <>
          <div className="comm_chatBox" onClick={toggleEditing}>
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
