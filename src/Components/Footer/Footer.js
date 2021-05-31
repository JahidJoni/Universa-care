import React from "react";
import logo from "../../images/UCLogo.svg";
import point from "../../images/bulletpoint.png";
import chap from "../../images/chap-foot.png";
import MWBE from "../../images/MWBE.png";
import facebook from "../../images/facebook.svg"
import instagram from "../../images/instagram.svg";
import linkedIn from "../../images/linkedin.svg";
import twitter from "../../images/twitter.svg";
import "./Footer.css";


const Footer = () => {
  return (
    <section className="container">
      <div className="row">
        <div className="col-md-3 col-sm-12 pt-5">
          <div>
            <p className="footer-title">
              <b>HEADQUARTERS</b>
            </p>
            <hr className="coloured-line"/>
            <p>246-50 57th Drive</p>
            <p>Douglaston, NY 11362</p>
            <p>hello@universacare.com</p>
            <p>P: (718) 224-3758</p>
            <p>F: 8777999065</p>
            <img
              className="img-fluid logos"
              src={logo}
              alt=""
            />
          </div>
        </div>
        <div className="col-md-5 col-sm-12">
          <div className="row g-0">
            <div className="col-md-6 col-sm-3 pt-5">
              <div className="">
                <p className="footer-title">
                  <b>SERVICES</b>
                </p>
                <hr className="coloured-line"/>
                <p>
                  <img className="pe-2" src={point} alt=""/>
                  Hourly Care
                </p>
                <p>
                  <img className="pe-2" src={point} alt=""/>
                  Daily Care
                </p>
                <p>
                  <img className="pe-2" src={point} alt=""/>
                  Hospital to Home
                </p>
                <p>
                  <img className="pe-2" src={point} alt=""/>
                  Respite Care
                </p>
                <p>
                  <img className="pe-2" src={point} alt=""/>
                  Specialized Care
                </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-3 pt-5">
              <div className="ps-2">
                <p className="footer-title">
                  <b>COMPANY</b>
                </p>
                <hr className="coloured-line"/>
                <p>
                  <img className="pe-2" src={point} alt=""/>
                  About us
                </p>
                <p>
                  <img className="pe-2" src={point} alt=""/>
                  Locations
                </p>
                <p>
                  <img className="pe-2" src={point} alt=""/>
                  Caregivers
                </p>
                <p>
                  <img className="pe-2" src={point} alt=""/>
                  News & Blog
                </p>
                <p>
                  <img className="pe-2" src={point} alt=""/>
                  Contact Us
                </p>
                <p>
                  <img className="pe-2" src={point} alt=""/>
                  FAQ
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 pt-5">
          <div className="px-5">
            <p className="sign-up">Sign up to receive the latest articles</p>
            <input
              type="text"
              className="form-control"
              placeholder="Your email address"
            />
            <div className="my-3">
              <button className="submit-btn px-4 py-2 rounded">Submit</button>
            </div>

            <div className="d-flex py-3 follow-us-style">
              <img className="img-fluid ps-4" src={chap} alt="" srcSet="" />
              <img className="px-4" src={MWBE} alt="" srcSet="" />
            </div>
            <div className="d-flex follow-us mt-1">
              <p className="bold follow-us-text">Follow Us</p>
              <div className="absolute-center">
                <img className="px-1 ms-3" src={facebook} alt=""/>
                <img className="px-1 ms-2" src={instagram} alt=""/>
                <img className="px-1 ms-2" src={linkedIn} alt=""/>
                <img className="px-1 ms-2" src={twitter} alt=""/>
              </div>
            </div>
          </div>
          <div className="g-0"></div>
        </div>
      </div>
      <hr className="w-100" style={{ border: "1px solid #C4C4C4" }} />
      <footer className="my-3 footer-text">
        Copyright 2020 <span style={{ color: '#FF8400', fontWeight: 'bold' }}> Universacare</span> -
        All right reserved.
      </footer>
    </section>
  );
};

export default Footer;