import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Main from "../components/main";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} />
        <Route path="/active" component={Main} />
        <Route path="/completed" component={Main} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};
