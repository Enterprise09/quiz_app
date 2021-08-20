import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Auth from "./Auth";
import Navigation from "./Navigation";
import HtmlQuiz from "./HtmlQuiz";
import CssQuiz from "./CssQuiz";
import JsQuiz from "./JsQuiz";
import Profile from "./Profile";

const AppRouter = ({ isLogin, userObj }) => {
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
            <Route exact path="/profile">
              <Profile userObj={userObj} />
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
