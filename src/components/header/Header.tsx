import * as React from "react";
import "./header.css";
import { SocialLinks } from "./SocialLinks";

export class Header extends React.Component<object, object> {
  render() {
    // const logo = require("../images/logo.webp");

    return (
      <div className="header-container">
        <SocialLinks />
        {/* <Image centered className="header-logo" src={logo} /> */}
      </div>
    );
  }
}
