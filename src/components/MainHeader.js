import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

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
          <li>About Margo</li>
          <li>Photo Gallery</li>
          <li>Events</li>
          <li>Books</li>
          <li>Media</li>
          <li>Resources</li>
        </ul>
      </nav>
      {barQuote && <aside>{barQuote}</aside>}
    </header>
  );
}

export default MainHeader;
