import React from "react";
import Logo from '../assets/img/logo/logo.png'

export default function footer() {
 
  return (
    <div
      className="footer-main"
      data-background="assets/img/shape/footer_bg.png"
    >
      <div className="footer-area footer-padding">
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="col-lg-3 col-md-4 col-sm-8">
              <div className="single-footer-caption mb-50">
                <div className="single-footer-caption mb-30">
                  {/* <!-- logo --> */}
                  <div className="footer-logo">
                    <a href="index.html">
                      <img src={Logo}  />
                    </a>
                  </div>
                  <div className="footer-tittle">
                    <div className="footer-pera">
                      <b>Orbit Medical Entrance Preparation</b>
                      <p className="info1">
                        Putalisadak, Kathmandu, Nepal
                        <br />{" "}
                      </p>

                      <p className="info5"> Phone: +977-1-4433231, 4420530 </p>

                      <p className="info2">
                        Email:
                        <a href="mailto:info@orbitmbbs.com">
                          info@orbitmbbs.com{" "}
                        </a>
                        <br />
                        Web:{" "}
                        <a href="https://www.orbitmbbs.com">
                          www.orbitmbbs.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="footer-social">
                    <a href="https://fb.com/palsnet">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-5">
              <div className="single-footer-caption mb-50">
                <div className="footer-tittle">
                  <h4>Quick Links</h4>
                  <ul>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="about.html">Services</a>
                    </li>
                    <li>
                      <a href="single-blog.html">Packages</a>
                    </li>
                    <li>
                      <a href="blog.html">News & Events</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-7">
              <div className="single-footer-caption mb-50">
                <div className="footer-tittle">
                  <h4>Support</h4>
                  <ul>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="#"> Sitemap</a>
                    </li>
                    <li>
                      <a href="#">FAQs</a>
                    </li>
                    <li>
                      <a href="#">News & Events</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-5">
              <div className="single-footer-caption mb-50">
                <div className="footer-tittle">
                  <h4>Services</h4>
                  <ul>
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
                      <a href="elements.html">IELTS Exam Registration</a>
                    </li>
                    <li>
                      <a href="elements.html">Test Preparation</a>
                    </li>
                    <li>
                      <a href="elements.html">Study Abroad</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- footer-bottom aera --> */}
      <div className="footer-bottom-area footer-bg">
        <div className="container">
          <div className="footer-border">
            <div className="row d-flex align-items-center">
              <div className="col-xl-12 ">
                <div className="footer-copy-right text-center">
                  <p>
                    {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                    Copyright &copy;
                    <script>
                      document.write(new Date().getFullYear());
                    </script>{" "}
                    ORBIT Medical Entrance Preparation. All rights reserved
                    {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <!-- We Create End -->
  );
}
