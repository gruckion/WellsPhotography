import * as React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <div className="footer-container">
      <p className="footer-paragraph">Wells Photography</p>
      <p className="footer-paragraph"> Photographer in Chatham, Medway, Kent</p>
      <p className="footer-paragraph">
        <a href="mailto:tabbywellsphotography@gmail.com" className="footer-link">tabbywellsphotography@gmail.com</a>
      </p>
      <p className="footer-paragraph">
      <a href="tel:07864894504" className="footer-link">07864894504</a>
      </p>
    </div>
  );
};
