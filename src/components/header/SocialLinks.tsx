import * as React from "react";
import "./sociallinks.css";
import { NavLink } from "react-router-dom";

export class SocialLinks extends React.Component<object, object> {
  render() {
    const facebook = require("./assets/facebook.webp");
    const instagram = require("./assets/instagram.webp");

    return (
      <div className="header-social">
        <ul className="header-social-ul">
          <li className="header-social-li">
            <a href="https://instagram.com/tabbywellsphotography">
              IN
              {/* <Image src={instagram} /> */}
            </a>
          </li>
          <li className="header-social-li">
            <a href="http://www.facebook.com/tabbywellsphotography">
              FB
              {/* <Image src={facebook} /> */}
            </a>
          </li>
          <li><NavLink className="nav-link" to="/login" href="/login">Admin Login</NavLink></li>
        </ul>
      </div>
    );
  }
}
