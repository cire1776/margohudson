import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import "./MainHeader.scss";

function MainHeader({ barQuote }) {
  const checkbox = React.useRef(null);

  function closeNavBar() {
    checkbox.current.checked = false;
  }

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
        <label htmlFor="hamburger">&#9776;</label>
        <input type="checkbox" id="hamburger" ref={checkbox} />
        <div className="screen" onClick={closeNavBar}></div>
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
