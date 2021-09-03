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
    setNewAttachmentUrl(message.attachmentUrl);
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
  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishEvent) => {
      const {
        currentTarget: { result },
      } = finishEvent;
      setNewAttachmentUrl(result);
    };
    reader.readAsDataURL(theFile);
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
              <img className="comm_editingimg" src={newAttachmentUrl} />
            )}
            <div className="comm_edit_btnBox">
              {newAttachmentUrl ? (
                <button
                  onClick={onClearButtonClick}
                  className="comm_editClearBtn"
                  type="button"
                >
                  Clear Photo
                </button>
              ) : (
                <>
                  <label
                    className="comm_addphotoBtn"
                    htmlFor="comm_update_photoBtn"
                  >
                    Add Photo
                  </label>
                  <input
                    className="comm_addphotoInput"
                    id="comm_update_photoBtn"
                    type="file"
                    accept="image/*"
                    onChange={onFileChange}
                  />
                </>
              )}

              <input
                type="submit"
                className="comm_edit_submitBtn"
                value="Update"
              />
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
