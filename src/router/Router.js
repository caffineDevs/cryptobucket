import { Switch, Route } from "react-router-dom";
import React from "react";
import Currencies from "../currencies/Currencies";
import Home from "../Components/Home/Home";

function Router() {
  return (
    <Switch>
      {/* <Route path="/about">
        <About />
      </Route> */}
      <Route path="/currencies/:id">
        <Currencies />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default Router;
