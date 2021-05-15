import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import VaccineReg from "./components/VaccineReg";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <switch>
          <Route exact path="/" component={Home} />
        </switch>
        <Switch>
          <Route path="/VaccineReg" component={VaccineReg} />
        </Switch>
      </Router>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
