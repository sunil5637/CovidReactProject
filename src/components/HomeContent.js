import React, { Component } from "react";
import "../style.css";
import Carousel from "react-bootstrap/Carousel";

import A from "../assets/C1.jpg";
import B from "../assets/C3.jpg";
import C from "../assets/C5.jpg";

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
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}

export default HomeContent;
