import React from "react";

import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import "./resources.scss";

function Resources() {
  return (
    <div className="container">
      <MainHeader barQuote="Something wise about resources" />
      <main></main>
      <MainFooter />
    </div>
  );
}

export default Resources;
