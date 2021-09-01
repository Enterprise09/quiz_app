import React, { useEffect, useState } from "react";
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
    const ok = window.confirm("사진을 삭제하시겠습니까?");
    if (ok) {
      setNewAttachmentUrl("");
    }
  };
  const onSubmit = (event) => {
    event.preventDefault();
  };
  const onChange = (event) => {
    const {
      target: { data },
    } = event;
    setNewTextMessage(data);
  };
  const onAddPhotoClick = () => {};
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
            {newAttachmentUrl && (
              <img className="comm_editingimg" src={message.attachmentUrl} />
            )}
            {/* {message.attachmentUrl ? (
              <img className="comm_editingimg" src={message.attachmentUrl} />
            ) : (
              <img
                className="comm_editingimg"
                style={{ visibility: "hidden" }}
              />
            )} */}
            <div className="comm_edit_btnBox">
              {message.attachmentUrl ? (
                <button
                  onClick={onClearButtonClick}
                  className="comm_editClearBtn"
                  type="button"
                >
                  Clear Photo
                </button>
              ) : (
                <button type="button" onClick={onAddPhotoClick}>
                  Add Photo
                </button>
              )}

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
