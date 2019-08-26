import * as React from "react";
import { NavLink } from "react-router-dom";
import "./about.css";
// const ReactBingmaps = require("react-bingmaps");

export const About = () => {
  return (
    <div className="about-container">
      <p className="about-paragraph">
        Hi, we are Christopher and Tabitha Wells, a husband and wife team
        working as photographers in Medway, Kent.
      </p>

      <p className="about-paragraph">
        We offer outdoor location shoots and also run a small studio from home.
        Utilising a mixture of hand made props and outfits, we can tailor themes
        to make each session unique.
      </p>

      <p className="about-paragraph">
        Please feel free to
        <NavLink className="about-link" to="/contact" href="/contact">
          contact
        </NavLink>
        us if you have any questions, we hope to hear from you soon!
      </p>

      {/* <ReactBingmaps
        bingmapKey="Am8FuQ0Cb89c4sYQJydE0IG4TfoiDY_SuzbvXXwL5lEunJDLIasJaftbJsdQKVix"
        center={[51.3618195, 0.5295269000000644]}
      /> */}
    </div>
  );
};