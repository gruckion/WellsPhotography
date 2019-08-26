import * as React from "react";
import facebook from "./assets/facebook.webp";
import instagram from "./assets/instagram.webp";
import "./sociallinks.css";

export class SocialLinks extends React.Component<object, object> {
  render() {
    return (
      <div className="header-social">
        <ul className="header-social-ul">
          <li className="header-social-li">
            <a href="https://instagram.com/tabbywellsphotography">
              <img src={instagram} alt="instagram" />
            </a>
          </li>
          <li className="header-social-li">
            <a href="http://www.facebook.com/tabbywellsphotography">
              <img src={facebook} alt="facebook" />
            </a>
          </li>
          {/* <li><NavLink className="nav-link" to="/login" href="/login">Admin Login</NavLink></li> */}
        </ul>
      </div>
    );
  }
}
