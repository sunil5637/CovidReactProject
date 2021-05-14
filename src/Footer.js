import React, { Component } from "react";
import "./style.css";

class Footer extends Component {
  render() {
    return (
      <>
        <footer id="footer">
          <div class="footer-top">
            <div class="container">
              <div class="row">
                <div class="col-lg-3 col-md-6 footer-contact">
                  <h3>Covid Care</h3>
                  <p>
                    <br />
                    <strong>Helpline Number:</strong> +91-11-23978046
                    <br />
                    <strong>Toll Free:</strong> 1075
                    <br />
                    <strong>Email:</strong> ncov2019@gov.in
                    <br />
                  </p>
                </div>

                <div class="col-lg-2 col-md-6 footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                    <li>
                      <i class="bx bx-chevron-right"></i>{" "}
                      <a href="https://www.mohfw.gov.in/pdf/COVID19ProningforSelfcare3.pdf">
                        Proning for self care
                      </a>
                    </li>
                    <li>
                      <i class="bx bx-chevron-right"></i>{" "}
                      <a href="https://www.covid19india.org/">Covid 19 India</a>
                    </li>
                    <li>
                      <i class="bx bx-chevron-right"></i>{" "}
                      <a href="https://www.who.int/docs/default-source/searo/thailand/12myths-final099bfbf976c54d5fa3407a65b6d9fa9d.pdf">
                        Covid 19 Mythbusters
                      </a>
                    </li>
                    <li>
                      <i class="bx bx-chevron-right"></i>{" "}
                      <a asp-area="" asp-controller="Home" asp-action="FAQ">
                        FAQ
                      </a>
                    </li>
                    <li>
                      <i class="bx bx-chevron-right"></i>{" "}
                      <a
                        asp-area=""
                        asp-controller="Contact"
                        asp-action="Contact"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 footer-links"></div>

                <div class="col-lg-4 col-md-6 footer-newsletter">
                  <h4>Join Our Newsletter</h4>
                  <p>Submit your mail id to get latest updates.</p>
                  <form action="" method="post">
                    <input type="email" name="email" />
                    <input type="submit" value="Subscribe" />
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div class="container d-md-flex py-4">
            <div class="me-md-auto text-center text-md-start">
              <div class="copyright">
                &copy; Copyright{" "}
                <strong>
                  <span>Covid Care</span>
                </strong>
                . All Rights Reserved
              </div>
              <div class="credits"></div>
            </div>
          </div>
        </footer>

        <a
          href="#"
          class="back-to-top d-flex align-items-center justify-content-center"
        >
          <i class="bi bi-arrow-up-short"></i>
        </a>
      </>
    );
  }
}

export default Footer;
