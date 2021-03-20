import * as React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import "./home.scss";

const IndexPage = () => {
  return (
    <div className="container">
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <header>
        <h1>Margo Hudson</h1>
        <nav>
          <ul>
            <li>About Margo</li>
            <li>Honors</li>
            <li>Photo Gallery</li>
            <li>Events</li>
            <li>Books</li>
            <li>Media</li>
            <li>Resources</li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="five-tips">
          <figure></figure>
          <article>
            <h1>
              <span class="drop-cap">5</span>
              Tips
              <br />
              for
              <br />
              Success
            </h1>
            <Link to="/five-tips">Read More</Link>
          </article>
        </section>
        <aside className="call-to-action">
          <h2>
            <a href="https://www.seedsofliteracy.org/be-a-student/why-enroll/">
              Become a Student
            </a>
          </h2>
          <h2>
            <a href="https://www.seedsofliteracy.org/get-involved/volunteer/tutor/">
              Become a Tutor
            </a>
          </h2>
          <h2>
            <a href="https://www.seedsofliteracy.org/get-involved/donate/">
              Donate
            </a>
          </h2>
        </aside>

        <section className="speaker">
          <h1>Moving Motivational Speaker</h1>
          <article className="life-story">
            <p>
              {" "}
              Margo Hudson is passionate about learning. She earned her GED® in
              2012 from{" "}
              <a href="http://seedsofliteracty.org">Seeds of Literacy</a> in
              Cleveland, Ohio
            </p>
            <p>
              She spent 11 years studying and took the text 6 times before
              finally passing.
            </p>
            <p>
              Margo now tutors twice a week at Seeds, helping students like
              herself. She is an inspirational example of what is possible when
              you persevere.
            </p>
          </article>
          <article className="quotation">
            <quote>
              <figure></figure>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              quibusdam ex nam minus blanditiis maxime similique quo ipsa, ipsum
              maiores vitae praesentium veniam earum eligendi
            </quote>
            <p>John Smith, CEO of John Smith, Inc.</p>
          </article>
          <div className="availability">
            <a href="#">Check Availability</a>{" "}
          </div>
        </section>
      </main>

      <footer>
        <p>(216) 334-6644 • hudsonmargo@yahoo.com</p>
        <aside>
          Copyright 2021 Margo Hudson. Created by Alpha-Pegasus Media using
          Gatsby.
        </aside>
      </footer>
    </div>
  );
};

export default IndexPage;
