import React, { Component } from "react";
import { Link } from "react-scroll";
import Logo from "../assets/img/logo/logo.png";
import { Link as L, BrowserRouter as Router } from "react-router-dom";

export default class header extends Component {
  render() {
    return (
      <Router>
        <div className="header-area header-transparrent ">
          <div className="main-header header-sticky">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-2 col-md-1">
                  <div className="logo">
                    <a href="index.jsx">
                      <img src={Logo} alt="logo" />
                    </a>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-8 col-md-8">
                  <div className="main-menu f-right d-none d-lg-block">
                    <nav>
                      <ul id="navigation">
                        <li>
                          <L to="/">Home</L>
                        </li>
                        <li>
                          <a href="#">About us</a>
                          <ul className="submenu">
                            <li>
                              <Link to="who we are">Who we are</Link>
                            </li>
                            <li>
                              <L to="/vis">Our Vision & Mission</L>
                              {/* <a href="/vision">Our Vision & Mission</a> */}
                            </li>
                            <li>
                              <Link to="who we are">Why Us</Link>
                            </li>
                            <li>
                              <a href="elements.html">Work With Us</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Services</a>
                          <ul className="submenu">
                            <li>
                              <a href="elements.html">Medical Education</a>
                            </li>
                            <li>
                              <a href="elements.html">BSC Nursing</a>
                            </li>
                            <li>
                              <a href="elements.html">Science & Technology</a>
                            </li>
                            <li>
                              <a href="elements.html">
                                IELTS Exam Registration
                              </a>
                            </li>
                            <li>
                              <a href="elements.html">Test Preparation</a>
                            </li>
                            <li>
                              <a href="elements.html">Study Abroad</a>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <a href="contact.html">Gallery</a>
                          <ul className="submenu">
                            <li>
                              <a href="elements.html">Photo Gallery</a>
                            </li>
                            <li>
                              <a href="elements.html">Video Gallery</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="newsevents">News & Events</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-3">
                  <div className="header-right-btn f-right d-none d-lg-block">
                    <a href="#" className="btn header-btn">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
