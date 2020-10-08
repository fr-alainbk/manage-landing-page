import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h1>What they've said</h1>
      <div className="testimonials__section">
        <div className="testimonials__single">
          <div className="testimonials__avatar">
            <img src="../images/avatar-anisha.png" alt="" />
          </div>
          <div className="testimonials__author">
            <h4>Anisha Li</h4>
          </div>
          <div className="testimonials__text">
            “Manage has supercharged our team’s workflow. The ability to
            maintain visibility on larger milestones at all times keeps everyone
            motivated.”
          </div>
        </div>
        <div className="testimonials__single">
          <div className="testimonials__avatar">
            <img src="../images/avatar-ali.png" alt="" />
          </div>
          <div className="testimonials__author">
            <h4>Ali Bravo</h4>
          </div>
          <div className="testimonials__text">
            “We have been able to cancel so many other subscriptions since using
            Manage. There is no more cross-channel confusion and everyone is
            much more focused.”
          </div>
        </div>
        <div className="testimonials__single">
          <div className="testimonials__avatar">
            <img src="../images/avatar-richard.png" alt="" />
          </div>
          <div className="testimonials__author">
            <h4>Richard Watts</h4>
          </div>
          <div className="testimonials__text">
            “Manage allows us to provide structure and process. It keeps us
            organized and focused. I can’t stop recommending them to everyone I
            talk to!”
          </div>
        </div>
        <div className="testimonials__single">
          <div className="testimonials__avatar">
            <img src="../images/avatar-shanai.png" alt="" />
          </div>
          <div className="testimonials__author">
            <h4>Shanai Gough</h4>
          </div>
          <div className="testimonials__text">
            “Their software allows us to track, manage and collaborate on our
            projects from anywhere. It keeps the whole team in-sync without
            being intrusive.”
          </div>
        </div>
      </div>
      <button>Get Started</button>
    </div>
  );
};

export default Testimonials;
