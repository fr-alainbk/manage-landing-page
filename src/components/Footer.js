import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__left">
        <img className="footer__logo" src="../images/logo.svg" alt="logo" />
        <div className="footer__icons">
          <img
            src="../images/icon-facebook.svg"
            alt="facebook"
            className="footer__icon"
          />
          <img
            src="../images/icon-youtube.svg"
            alt="youtube"
            className="footer__icon"
          />
          <img
            src="../images/icon-twitter.svg"
            alt="twitter"
            className="footer__icon"
          />
          <img
            src="../images/icon-pinterest.svg"
            alt="pinterest"
            className="footer__icon"
          />
          <img
            src="../images/icon-instagram.svg"
            alt="instagram"
            className="footer__icon"
          />
        </div>
      </div>

      <div className="footer__middle1">
        <p className="footer__detail">Home</p>
        <p className="footer__detail">Pricing</p>
        <p className="footer__detail">Products</p>
        <p className="footer__detail">About Us</p>
      </div>
      <div className="footer__middle2">
        <p className="footer__detail">Careers</p>
        <p className="footer__detail">Community</p>
        <p className="footer__detail">Privacy Policy</p>
      </div>

      <div className="footer__right">
        <div className="footer__right-top">
          <input type="text" placeholder="Updates in your inbox..." />
          <button className="footer__button">Go</button>
        </div>
        <p className="footer__signature">
          Copyright {currentYear}. All Rights Reserved
        </p>
      </div>
      <p className="footer__signature-mb">
        Copyright {currentYear}. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
