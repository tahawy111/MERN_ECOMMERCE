import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Add from "./components/Add";
import Edit from "./components/Edit";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route path={"/add/:id"} component={Add} />
        <Route path={"/edit/:id"} component={Edit} />
      </Switch>
    </>
  );
};

export default App;
