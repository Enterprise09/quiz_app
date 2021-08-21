import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import HtmlQuiz from "../routes/HtmlQuiz";
import CssQuiz from "../routes/CssQuiz";
import JsQuiz from "../routes/JsQuiz";
import Profile from "../routes/Profile";
import Home from "../routes/Home";
import Navigation from "./Navigation";
import Community from "../routes/Community";
const AppRouter = ({ isLogin, userObj, refreshUser }) => {
  return (
    <Router>
      {isLogin && <Navigation />}
      <Switch>
        {isLogin ? (
          <>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/html">
              <HtmlQuiz />
            </Route>
            <Route exact path="/css">
              <CssQuiz />
            </Route>
            <Route exact path="/js">
              <JsQuiz />
            </Route>
            <Route exact path="/community">
              <Community userObj={userObj} />
            </Route>
            <Route exact path="/profile">
              <Profile userObj={userObj} refreshUser={refreshUser} />
            </Route>
          </>
        ) : (
          <Route exact path="/">
            <Auth />
          </Route>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
