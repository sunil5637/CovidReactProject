import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Registration from "./Registration";
import HomeContent from "./HomeContent";

class Home extends Component {
  render() {
    return (
      <>
        <HomeContent />
      </>
    );
  }
}

export default Home;
