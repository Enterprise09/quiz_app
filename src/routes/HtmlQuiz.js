import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "../css/HtmlQuiz.css";

const HtmlQuiz = () => {
  return (
    <div className="htmlQuiz_container">
      <span>
        <FontAwesomeIcon icon={faHtml5} color="#F37745" /> HTML퀴즈!
      </span>
      <ul className="htmlQuiz_ul">
        {/* 문제를 미리 Firebase에 저장하고 가져와서 map함수로 Link를 만들예정 */}
        <Link to="html/quiz1">
          <li className="htmlQuiz_li">quiz1</li>
        </Link>
        <Link to="html/quiz2">
          <li className="htmlQuiz_li">quiz2</li>
        </Link>
        <Link to="html/quiz3">
          <li className="htmlQuiz_li">quiz3</li>
        </Link>
        <Link to="html/quiz4">
          <li className="htmlQuiz_li">quiz4</li>
        </Link>
      </ul>
    </div>
  );
};

export default HtmlQuiz;
