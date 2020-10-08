import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <div className="features">
      <div className="features__left">
        <h1>What's different about Manage?</h1>
        <p>
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
        <img
          className="features__bg-image"
          src="../images/bg-tablet-pattern.svg"
          alt="background"
        />
      </div>
      <div className="features__right">
        <div className="features__feature">
          <div className="features__top">
            <button className="features__number">01</button>
            <div className="features__title">Track company-wide progress</div>
          </div>

          <p className="features__bottom">
            See how your day-to-day tasks fit into the wider vision. Go from
            tracking progress at the milestone level all the way done to the
            smallest of details. Never lose sight of the bigger picture again.
          </p>
        </div>
        <div className="features__feature">
          <div className="features__top">
            <button className="features__number">02</button>
            <div className="features__title">Advanced built-in reports</div>
          </div>

          <p className="features__bottom">
            Set internal delivery estimates and track progress toward company
            goals. Our customisable dashboard helps you build out the reports
            you need to keep key stakeholders informed.
          </p>
        </div>
        <div className="features__feature">
          <div className="features__top">
            <button className="features__number">03</button>
            <div className="features__title">
              Everything you need in one place
            </div>
          </div>

          <p className="features__bottom">
            Stop jumping from one service to another to communicate, store
            files, track tasks and share documents. Manage offers an all-in-one
            team productivity solution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
