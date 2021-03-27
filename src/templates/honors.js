import React from "react";
import { graphql } from "gatsby";

import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import "./honors.scss";

export default function Honors({ data }) {
  const { honors } = data;
  return (
    <div className="container">
      <MainHeader barQuote="Something wise about honors" />
      <main>
        <section className="honors">
          <figure></figure>
          <h1>Honors That I Have Received</h1>
          <article>
            <div dangerouslySetInnerHTML={{ __html: honors.html }}></div>
          </article>
        </section>
      </main>
      <MainFooter />
    </div>
  );
}

export const pageQuery = graphql`
  {
    honors: markdownRemark(frontmatter: { slug: { eq: "honors" } }) {
      html
    }
  }
`;
