import React from "react";

import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import "./events.scss";

function Events() {
  return (
    <div className="container">
      <MainHeader barQuote="Something wise about events" />
      <main></main>
      <MainFooter />
    </div>
  );
}

export default Events;
