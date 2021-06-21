import React, { Component } from "react";
import "../style.css";
import Carousel from "react-bootstrap/Carousel";
import { NavLink } from "react-router-dom";

import A from "../assets/C1.jpg";
import B from "../assets/C3.jpg";
import C from "../assets/C5.jpg";
import RealTimeData from "./RealTimeData";

class HomeContent extends Component {
  render() {
    return (
      <>
        <Carousel fade>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={A}
              alt="First slide"
              style={{ width: "100%", height: 720 }}
            />
            <Carousel.Caption>
              <div class="carousel-container">
                <div class="carousel-content animate__animated animate__fadeInUp">
                  <h2>
                    Covid Care<span>Portal</span>
                  </h2>
                  <p></p>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={C}
              alt="Second slide"
              style={{ width: "100%", height: 720 }}
            />

            <Carousel.Caption>
              <h3>Always Wear Mask when going outside</h3>
              <div>
                <button className="btn btn-success">
                  <NavLink to="/advisory">Check Advisory</NavLink>
                </button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={B}
              alt="Third slide"
              style={{ width: "100%", height: 720 }}
            />

            <Carousel.Caption>
              <h3>Get Vaccinated</h3>
              <div>
                <button className="btn btn-success">
                  <NavLink to="/VaccineReg">Register for Vaccination</NavLink>
                </button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div>
          <RealTimeData />
        </div>
      </>
    );
  }
}

export default HomeContent;
