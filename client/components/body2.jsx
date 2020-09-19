import React from "react";
import nurse from "../assets/img/adapt_icon/nurse.png"
import tech from "../assets/img/adapt_icon/technology.png"
import doctor from "../assets/img/adapt_icon/doctor.png"
import regs from "../assets/img/adapt_icon/ielts-register.jpg"
import prep from "../assets/img/adapt_icon/test-preparation.png"
import abroad from "../assets/img/adapt_icon/study-abroad.png"
// import './scss/style.scss';

export default function body2() {
  return (
    <div className="choose-best choose-padding" id="who we are">
      <div className="container">
        {/* <!-- Section-tittle --> */}
        <div className="row d-flex justify-content-center">
          <div className="col-lg-7">
            <div className="section-tittle text-center">
              <h2> Who We Are</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-choose text-center mb-30">
              <div className="do-icon">
              <img src={doctor} alt=""/>
              </div>
              <div className="do-caption">
                <h4>MEDICAL EDUCATION</h4>
                <ul>
                  <p>
                    MBBS (IOM & BPKIHS), BDS, Premedical entrance preparation.
                  </p>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-choose active text-center mb-30">
              <div className="do-icon">
                <img src={nurse} alt="" />
              </div>
              <div className="do-caption">
                <h4>BSC NURSING</h4>
                <ul>
                  <p></p>
                  <p>
                    Entrance Preparation course for the Bachelor's Degree in
                    Nursing. <br />
                  </p>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-choose text-center mb-30">
              <div className="do-icon">
                <img src={tech} alt="" />
              </div>
              <div className="do-caption">
                <h4>Science & Technology</h4>
                <ul>
                  <p>
                    Entrance preparation for B. Sc. in Agriculture, Forestry,
                    Veterinery and Husbundary.
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-choose text-center mb-30">
              <div className="do-icon">
                <img src={regs} alt="" />
              </div>
              <div className="do-caption">
                <h4>Exclusive IELTS Partner</h4>
                <ul>
                  <p>
                    We are exclusive IELTS partner of British Council Nepal to{" "}
                  </p>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-choose active text-center mb-30">
              <div className="do-icon">
                <img src={prep} alt="" />
              </div>
              <div className="do-caption">
                <h4>Test Preparation</h4>
                <ul>
                  <p></p>
                  <p>
                    IELTS, TOEFL, PTE, SAT, GRE, GMAT, English Language,
                    Japanese Language <br />
                  </p>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-choose text-center mb-30">
              <div className="do-icon">
                <img src={abroad} alt="" />
              </div>
              <div className="do-caption">
                <h4>Study Abroad</h4>
                <ul>
                  <p>
                    USA, UK, Australia, New Zealand, Ireland, Japan, Cyprus,
                    Canada, Germany
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
