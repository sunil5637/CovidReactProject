import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home";
import VaccineReg from "./components/VaccineReg";
import AboutUs from "./components/AboutUs";
import Advisory from "./components/Advisory";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Symptoms from "./components/Symptoms";
import VaccineData from "./components/VaccineData";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Switch>
          <Route path="/VaccineReg" component={VaccineReg} />
        </Switch>
        <Switch>
          <Route path="/aboutus" component={AboutUs} />
        </Switch>
        <Switch>
          <Route path="/symptoms" component={Symptoms} />
        </Switch>
        <Switch>
          <Route path="/advisory" component={Advisory} />
        </Switch>
        <Switch>
          <Route path="/faq" component={Faq} />
        </Switch>
        <Switch>
          <Route path="/contactus" component={Contact} />
        </Switch>
        <Switch>
          <Route path="/AllVaccineRecords" component={VaccineData} />
        </Switch>
      </Router>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
