import React from "react";

import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import "./about.scss";

function About() {
  return (
    <div className="container">
      <MainHeader barQuote="Something wise about margo" />
      <main></main>
      <MainFooter />
    </div>
  );
}

export default About;
