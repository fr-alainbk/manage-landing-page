import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__left">
        <h1>Bring everyone together to build better products.</h1>
        <p>
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <button>Get Started</button>
      </div>
      <div className="intro__right">
        <img src="../images/illustration-intro.svg" alt="intro" />
      </div>
    </div>
  );
};

export default Intro;
