import React from "react";
import "../css/Auth.css";

const Auth = () => {
  return (
    <>
      <div className="auth_container">
        <form className="auth_form">
          <input
            type="text"
            className="client_input"
            placeholder="Enter ID"
            autoFocus="true"
          />
          <input
            type="password"
            className="client_input"
            placeholder="Enter PW"
          />
          <span className="login_errorMsg">error message</span>
          <input type="submit" className="client_submit" value="Login" />
        </form>
        <div className="social_login_container">
          <button className="social_login_google">Continue with Google</button>
          <div className="social_login_empty"></div>
          <button className="social_login_github">Continue with Github</button>
        </div>
      </div>
    </>
  );
};

export default Auth;
