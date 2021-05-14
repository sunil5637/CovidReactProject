import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Registration from "./Registration";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <switch>
          <Route exact path="/" component={Home} />
        </switch>
        <Switch>
          <Route path="/Registration" component={Registration} />
        </Switch>
      </Router>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
