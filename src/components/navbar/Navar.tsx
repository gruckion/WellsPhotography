import * as React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <nav className="nav-container">
      <NavLink className="nav-link" to="/" href="/">Home</NavLink>
      <NavLink className="nav-link" to="/portfolio" href="/portfolio">Portfolio</NavLink>
      <NavLink className="nav-link" to="/services" href="/services">Services</NavLink>
      <NavLink className="nav-link" to="/pricing" href="/pricing">Pricing</NavLink>
      <NavLink className="nav-link" to="/contact" href="/contact">Contact</NavLink>
      <NavLink className="nav-link" to="/about" href="/about">About Us</NavLink>
    </nav>
  );
};
