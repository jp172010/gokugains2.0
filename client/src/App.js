import React from "react";
import "./App.css";
import Home from "./components/Home";
import CreateAccount from "./components/createAccount";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/createAccount">
          <CreateAccount />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}
