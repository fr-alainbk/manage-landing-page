import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [showHeaderInfos, setShowHeaderInfos] = useState(false);
  return (
    <>
      <img
        className="bg-image"
        src="../images/bg-tablet-pattern.svg"
        alt="background"
      />
      <header className="header">
        <div className="header__logo">
          <img src="../images/logo.svg" alt="logo" />
        </div>
        <div className="header__infos">
          <p className="header__info">Pricing</p>
          <p className="header__info">Product</p>
          <p className="header__info">About Us</p>
          <p className="header__info">Careers</p>
          <p className="header__info">Community</p>
        </div>

        <button className="header__button">Get Started</button>

        <img
          onClick={() => setShowHeaderInfos(!showHeaderInfos)}
          className="header__icon"
          src={
            showHeaderInfos
              ? "../images/icon-close.svg"
              : "../images/icon-hamburger.svg"
          }
          alt="hamburger"
        />
      </header>
      {showHeaderInfos && (
        <div className="header__infos-mb">
          <p className="header__info-mb">Pricing</p>
          <p className="header__info-mb">Product</p>
          <p className="header__info-mb">About Us</p>
          <p className="header__info-mb">Careers</p>
          <p className="header__info-mb">Community</p>
        </div>
      )}
    </>
  );
};

export default Header;
