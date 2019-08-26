import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/Navar";
import { Home } from "./components/home/Home";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Services } from "./components/services/Services";
import { Pricing } from "./components/pricing/Pricing";
import { Contact } from "./components/contact/Contact";
import { About } from "./components/about/About";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import "./app.css";

const App = () => {
  return (
    <HashRouter>
      <div className="app-parent-container">
        <div className="app-child-container">
          <Header />
          <Navbar />
          <div className="app-main-container">
            <Route exact path="/" component={Home} />
            <Route path="/Portfolio" component={Portfolio} />
            <Route path="/services" component={Services} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
          </div>
          <Footer />
        </div>
      </div>
    </HashRouter>
  );
}

export { App };
