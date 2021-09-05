import React, { useEffect, useState } from "react";
import { dbService, storageService } from "../Firebaseconfig";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEraser,
  faHeart,
  faPhotoVideo,
  faTrash,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";
import ReplyMessage from "./ReplyMessage";

const DisplayMessage = ({ message, userObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newTextMessage, setNewTextMessage] = useState(message.text);
  const [newAttachmentUrl, setNewAttachmentUrl] = useState(
    message.attachmentUrl
  );
  const [love, setLove] = useState(message.love);
  useEffect(() => {
    dbService.doc(`message/${message.id}`).onSnapshot((snapshot) => {
      const { love } = snapshot.data();
      console.log(love);
      setLove(love);
    });
  }, []);
  const toggleEditing = () => {
    setEditing((prev) => !prev);
    setNewAttachmentUrl(message.attachmentUrl);
    setNewTextMessage(message.text);
  };
  const onClearButtonClick = () => {
    const ok = window.confirm("사진을 삭제하시겠습니까?");
    if (ok) {
      setNewAttachmentUrl("");
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    let attachmentUrl = message.attachmentUrl;
    if (newAttachmentUrl !== message.attachmentUrl && newAttachmentUrl !== "") {
      const photoRef = storageService.ref().child(`${userObj.uid}/${uuidv4()}`);
      const response = await photoRef.putString(newAttachmentUrl, "data_url");
      attachmentUrl = await response.ref.getDownloadURL();
    } else if (newAttachmentUrl === "") {
      attachmentUrl = newAttachmentUrl;
    }
    await dbService.doc(`message/${message.id}`).update({
      text: newTextMessage + "",
      attachmentUrl,
      updateAt: Date.now(),
    });
    toggleEditing();
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewTextMessage(value);
  };
  const onDeleteButtonClick = async () => {
    const ok = window.confirm(
      "이 게시글을 삭제하시겠습니까? 복구할 수 없습니다."
    );
    if (ok) {
      await dbService.doc(`message/${message.id}`).delete();
      await storageService.refFromURL(message.attachmentUrl).delete();
    }
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
  const onHerartClick = async () => {
    await setLove((prev) => prev + 1);
    await dbService.doc(`message/${message.id}`).update({
      love: love,
    });
  };
  console.log(isOwner);
  return (
    <>
      {editing ? (
        <>
          {isOwner ? (
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
                <div className="comm_edit_loveBox">
                  <FontAwesomeIcon icon={faHeart} color="#FF0000" />{" "}
                  <span>{love}</span>
                </div>
                {newAttachmentUrl ? (
                  <button
                    onClick={onClearButtonClick}
                    className="comm_editClearBtn"
                    type="button"
                  >
                    <FontAwesomeIcon icon={faEraser} />
                  </button>
                ) : (
                  <>
                    <label
                      className="comm_addphotoBtn"
                      htmlFor="comm_update_photoBtn"
                    >
                      <FontAwesomeIcon icon={faPhotoVideo} />
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
                <button
                  className="comm_edit_cancelBtn"
                  type="button"
                  onClick={toggleEditing}
                >
                  <FontAwesomeIcon icon={faUndo} />
                </button>
                <button
                  type="button"
                  className="comm_edit_deleteBtn"
                  onClick={onDeleteButtonClick}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
                <input
                  type="submit"
                  className="comm_edit_submitBtn"
                  value="&rarr;"
                />
              </div>
            </form>
          ) : (
            <div className="comm_chateditingBox" onSubmit={onSubmit}>
              <span className="comm_chat_prev">{message.text}</span>
              {newAttachmentUrl && (
                <img className="comm_editingimg" src={newAttachmentUrl} />
              )}
              <div className="comm_edit_btnBox">
                <div className="comm_edit_loveBox">
                  <button
                    type="button"
                    onClick={onHerartClick}
                    className="comm_edit_loveBtn"
                  >
                    <FontAwesomeIcon icon={faHeart} color="#FF0000" />{" "}
                    <span>{message.love}</span>
                  </button>
                </div>
                <button
                  className="comm_edit_cancelBtn"
                  type="button"
                  onClick={toggleEditing}
                >
                  <FontAwesomeIcon icon={faUndo} />
                </button>
              </div>
              <ReplyMessage />
            </div>
          )}
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
