import React, { useState } from "react";
import axios from "axios";
import "../css/Home.css";

const Home = () => {
  const [clientIp, setClientIp] = useState();

  const getClientIp = async () => {
    try {
      const {
        data: { ip },
      } = await axios.get("https://api.ipify.org?format=json");
      setClientIp(ip);
      console.log(clientIp);
    } catch (error) {
      console.error(error);
    }
  };
  getClientIp();

  return (
    <div className="home_container">
      <h2>뭐하는 사이트 일까 ?</h2>
      <p>
        프로그래밍, 코딩, 프로그래머
        <br />
        모두 한 번씩은 들어본 단어라고 생각합니다.
        <br />
        <h4 style={{ color: "red" }}>"코딩은 어려워, 배우기도 어렵지"</h4>
      </p>
      <hr />
      <p>
        제가 만나본 많은 분들이 '코딩은 어렵다'
        <br />
        이런 선입견을 많이 가지고 계신 것을 보았습니다.
      </p>
      <p>
        하지만 제가 경험한 소위{" "}
        <span style={{ color: "red", fontWeight: "bold" }}>'코딩'</span>
        이라고 하는
        <br />
        활동은 취미 활동으로도 적합할 정도로
        <br />
        너무 재미있고 차근차근 배운다면
        <br />
        누구라도 <span style={{ color: "red", fontWeight: "bold" }}>
          쉽게
        </span>{" "}
        앱을 만들 수 있다고 생각합니다.
      </p>
      <hr />
      <p>
        위와 같은 생각으로
        <br />
        코딩에 대한 기본적인 지식을
        <br />
        누구라도 쉽고 재미있게
        <br />
        배워보자는 의미에서
        <br />
        <span style={{ color: "blue", fontWeight: "bold" }}>Quiz앱</span>을
        제작하게 되었습니다.
      </p>
      <hr />
      <p>
        이 앱에서 재미있고, 쉽게 문제를 풀다보면
        <br />
        어느새 나만의 사이트를 만들 수 있을 정도의
        <br />
        어떻게 보면{" "}
        <span style={{ color: "red", fontWeight: "bold" }}>수준급의 실력</span>
        을 갖출 수 있도록
        <br />
        차근차근 함께 공부해 가도록 하겠습니다.
      </p>
      <h3>Everybody Fighting!!!</h3>
    </div>
  );
};

export default Home;
