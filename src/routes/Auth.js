import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../css/Auth.css";
import { authService, firebaseInstance } from "../Firebaseconfig";

const Auth = ({ isLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
      } else {
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      // console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSocialLoginClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    await authService.signInWithPopup(provider);
  };
  const toggleNewAccount = (prev) => setNewAccount((prev) => !prev);
  return (
    <>
      <div className="auth_container">
        <form className="auth_form" onSubmit={onSubmit}>
          <input
            type="text"
            name="email"
            className="client_input"
            placeholder="enterprise@naver.com"
            required
            value={email}
            onChange={onChange}
            autoFocus={true}
          />
          <input
            type="password"
            name="password"
            className="client_input"
            placeholder="Enter PW"
            required
            value={password}
            onChange={onChange}
          />
          {error && <span className="login_errorMsg">{error}</span>}
          <input
            type="submit"
            className="client_submit"
            value={newAccount ? "Create Account" : "Sign In"}
          />
          <span className="auth_switch" onClick={toggleNewAccount}>
            {newAccount ? "Sign In" : "Create Account"}
          </span>
        </form>

        <div className="social_login_container">
          <button
            type="button"
            className="social_login_google"
            name="google"
            onClick={onSocialLoginClick}
          >
            Login with Google <FontAwesomeIcon icon={faGoogle} />
          </button>
          <div className="social_login_empty"></div>
          <button
            type="button"
            className="social_login_github"
            name="github"
            onClick={onSocialLoginClick}
          >
            Login with Github <FontAwesomeIcon icon={faGithub} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Auth;
