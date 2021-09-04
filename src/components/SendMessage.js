import React, { useState } from "react";
import { dbService, storageService } from "../Firebaseconfig";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faPlus } from "@fortawesome/free-solid-svg-icons";

const SendMessage = ({ userObj }) => {
  const [message, setMessage] = useState("");
  const [attachment, setAttachment] = useState("");
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setMessage(value);
  };
  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };
  const onClearPhoto = () => {
    setAttachment("");
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    let attachmentUrl = "";
    if (attachment !== "") {
      const photoRef = storageService.ref().child(`${userObj.uid}/${uuidv4()}`);
      const response = await photoRef.putString(attachment, "data_url");
      attachmentUrl = await response.ref.getDownloadURL();
    }
    const messageObj = {
      text: message,
      createAt: Date.now(),
      creatorId: userObj.uid,
      attachmentUrl,
    };
    await dbService.collection("message").add(messageObj);
    setMessage("");
    setAttachment("");
  };
  return (
    <form className="comm_chatForm" onSubmit={onSubmit}>
      <div className="comm_formBox">
        <input
          type="text"
          className="comm_input"
          placeholder="hi there!"
          value={message}
          onChange={onChange}
        />
        <button type="submit" className="comm_submit">
          <FontAwesomeIcon icon={faPaperPlane} color="#4C6EF5" />
        </button>
      </div>
      <label className="comm_photoLabel" htmlFor="attach_photo">
        <span className="comm_photoText">Add Photo</span>{" "}
        <FontAwesomeIcon icon={faPlus} color="#4C6EF5" />
      </label>
      {/* 실제로 label를 클릭했을 때 실행되는 input은 
        attach_photo이지만 깔끔한 디자인을 위해서 attach_photo input박스를 
        display: none으로 사용자에 눈에는 보이지 않도록 처리한다. */}
      <input
        className="comm_photo"
        id="attach_photo"
        type="file"
        accept="image/*"
        onChange={onFileChange}
      />
      {attachment && (
        <div className="comm_photoPrevBox">
          <img className="comm_prevImage" src={attachment} />
          <button className="photo_prevClearBtn" onClick={onClearPhoto}>
            Clear Photo
          </button>
        </div>
      )}
    </form>
  );
};

export default SendMessage;
