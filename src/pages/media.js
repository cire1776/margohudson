import React from "react";

import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import "./media.scss";

function Media() {
  return (
    <div className="container">
      <MainHeader barQuote="Something wise about media" />
      <main></main>
      <MainFooter />
    </div>
  );
}

export default Media;
