import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Articles from "./pages/Articles";
import Saved from "./pages/Saved";
import Nav from "./component/Nav";

const App = () => (
  <Router>
      <div className="App">
        <Nav />
        <Switch>
        <Route exact path="/" component={Articles} />
        <Route exact path="/saved/articles" component={Saved} />
        </Switch>
      </div>
  </Router>
);

export default App;
