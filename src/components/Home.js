import React, { useState } from "react";
import axios from "axios";

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

  return <h1>home : {clientIp}</h1>;
};

export default Home;
