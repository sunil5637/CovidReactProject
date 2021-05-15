import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../style.css";

class Header extends Component {
  render() {
    return (
      <>
        <header id="header" class="fixed-top">
          <div class="container d-flex align-items-center">
            <h1 class="logo me-auto">
              <a href="#">
                <span>Covid Ca</span>re Portal
              </a>
            </h1>

            <nav id="navbar" class="navbar order-last order-lg-0">
              <ul>
                <li>
                  <NavLink to="/" activeClassName="selected">
                    Home
                  </NavLink>
                </li>
                <li class="dropdown">
                  <NavLink to="/" activeClassName="selected">
                    <span> Registration</span>{" "}
                    <i class="bi bi-chevron-down"></i>
                  </NavLink>
                  <ul>
                    <li>
                      <NavLink to="/VaccineReg" activeClassName="selected">
                        Vaccination
                      </NavLink>
                    </li>
                    <li>
                      <a href="#">Plasma Donation</a>
                    </li>
                    <li>
                      <a href="#">Quarantine Centre</a>
                    </li>
                  </ul>
                </li>
                <li class="dropdown">
                  <a href="#">
                    <span>About</span> <i class="bi bi-chevron-down"></i>
                  </a>
                  <ul>
                    <li>
                      <NavLink to="/aboutus">About Us</NavLink>
                    </li>
                    <li>
                      <a asp-area="" asp-controller="Home" asp-action="Index">
                        Team
                      </a>
                    </li>
                    <li>
                      <a asp-area="" asp-controller="Home" asp-action="Index">
                        Testimonials
                      </a>
                    </li>
                    <li class="dropdown">
                      <a href="#">
                        <span>Feedbacks</span>{" "}
                        <i class="bi bi-chevron-right"></i>
                      </a>
                      <ul>
                        <li>
                          <a href="#">Vaccine Feedback</a>
                        </li>
                        <li>
                          <a href="#">Portal Efficiency</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li>
                  <NavLink to="/symptoms">Symptoms Check</NavLink>
                </li>
                <li>
                  <NavLink to="/advisory">Advisory</NavLink>
                </li>
                <li>
                  <NavLink to="/faq">FAQ</NavLink>
                </li>
                <li>
                  <NavLink to="/contactus">Contact Us</NavLink>
                </li>
              </ul>
              <i class="bi bi-list mobile-nav-toggle"></i>
            </nav>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
