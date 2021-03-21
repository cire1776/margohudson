import React from "react";

import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import "./gallery.scss";

function Gallery() {
  return (
    <div className="container">
      <MainHeader barQuote="Something wise about images" />
      <main></main>
      <MainFooter />
    </div>
  );
}

export default Gallery;
