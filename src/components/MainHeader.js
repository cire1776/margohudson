import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import "./MainHeader.scss";

function MainHeader({ barQuote }) {
  return (
    <header>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <h1>
        <Link to="/">Margo Hudson</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/life-story">About Margo</Link>
          </li>
          <li>
            <Link to="/gallery">Photo Gallery</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/media">Media</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
        </ul>
      </nav>
      {barQuote && <aside>{barQuote}</aside>}
    </header>
  );
}

export default MainHeader;
