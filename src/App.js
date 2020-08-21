import React, { useState, Component } from "react";
import "./App.css";
import CardEditor from "./Components/CardEditor";
import CardViwer from "./Components/CardViewer";
import Header from "./Components/Header";
import Homepage from "./Components/Homepage";
import { dark } from "@material-ui/core/styles/createPalette";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeDash from "./Components/HomeDash";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/create" component={CardEditor} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
