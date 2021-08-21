import { faCss3, faHtml5, faJs } from "@fortawesome/free-brands-svg-icons";
import { faComment, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
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
            <FontAwesomeIcon icon={faHome} size="2x" />
          </li>
        </Link>
        <Link to="/html">
          <li className="nav_li">
            <FontAwesomeIcon icon={faHtml5} size="2x" color="#F37745" />
          </li>
        </Link>
        <Link to="/css">
          <li className="nav_li">
            <FontAwesomeIcon icon={faCss3} size="2x" color="#33A9DC" />
          </li>
        </Link>
        <Link to="/js">
          <li className="nav_li">
            <FontAwesomeIcon icon={faJs} size="2x" color="#FFD936" />
          </li>
        </Link>
        <Link to="/community">
          <li className="nav_li">
            <FontAwesomeIcon icon={faComment} size="2x" />
          </li>
        </Link>
        <Link to="/profile">
          <li className="nav_li">
            <FontAwesomeIcon icon={faUser} size="2x" />
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navigation;
