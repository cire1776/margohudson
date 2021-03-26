import * as React from "react";
import { Link } from "gatsby";

import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import CallToAction from "../components/CallToAction";
import "./home.scss";

const IndexPage = () => {
  return (
    <div className="container">
      <MainHeader />

      <main>
        <section className="five-tips-intro">
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

        <CallToAction />

        <section className="speaker">
          <h1>Moving Motivational Speaker</h1>
          <article className="life-story">
            <p>
              {" "}
              Margo Hudson is passionate about learning. She earned her GED
              <sup>®</sup> in 2012 from{" "}
              <a href="http://seedsofliteracy.org">Seeds of Literacy</a> in
              Cleveland, Ohio.
            </p>
            <p>
              She spent 11 years studying and took the text 6 times before
              finally passing.
            </p>
            <p>
              Margo now tutors several times a week at Seeds, helping students
              like herself. She is an inspirational example of what is possible
              when you persevere.
            </p>
            <Link className="read-more" to="/about">
              Read More
            </Link>
          </article>
          <blockquote>
            <figure></figure>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            quibusdam ex nam minus blanditiis maxime similique quo ipsa, ipsum
            maiores vitae praesentium veniam earum eligendi
            <p>John Smith, CEO of John Smith, Inc.</p>
          </blockquote>
          <div className="availability">
            <a href="#">Check Availability</a>{" "}
          </div>
        </section>
      </main>
      <MainFooter />
    </div>
  );
};

export default IndexPage;
