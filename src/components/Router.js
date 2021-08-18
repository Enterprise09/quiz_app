import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Loading from "./Auth";

const AppRouter = ({ isLogin }) => {
  return isLogin ? <Home /> : <Loading />;
};

export default AppRouter;
