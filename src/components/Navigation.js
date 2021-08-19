import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "../css/Navigation.css";

const Navigation = () => {
  return (
    <div className="nav_container">
      <ul className="nav_ul">
        <Link to="/">
          <li className="nav_li">
            <FontAwesomeIcon icon={faHome} />
          </li>
        </Link>
        <Link to="/html">
          <li className="nav_li">HTML</li>
        </Link>
        <Link to="/css">
          <li className="nav_li">CSS</li>{" "}
        </Link>
        <Link to="/js">
          <li className="nav_li">JS</li>{" "}
        </Link>
        <Link to="/profile">
          <li className="nav_li">
            <FontAwesomeIcon icon={faUser} />
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navigation;
