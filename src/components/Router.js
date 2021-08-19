import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Auth from "./Auth";
import Navigation from "./Navigation";
import Html_quiz from "./Html_quiz";
import Css_quiz from "./Css_quiz";
import Js_quiz from "./Js_quiz";
import Profile from "./Profile";

const AppRouter = ({ isLogin }) => {
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
              <Html_quiz />
            </Route>
            <Route exact path="/css">
              <Css_quiz />
            </Route>
            <Route exact path="/js">
              <Js_quiz />
            </Route>
            <Route exact path="/profile">
              <Profile />
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
