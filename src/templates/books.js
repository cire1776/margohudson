import React from "react";
import { graphql } from "gatsby";

import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import "./books.scss";

export default function Books({ data }) {
  const { reading, recommended } = data;
  console.log(reading);

  return (
    <div className="container">
      <MainHeader barQuote="Something wise about books" />
      <main>
        <section className="what-am-i-reading">
          <figure></figure>
          <article>
            <h1>What Am I Reading Right Now?</h1>
            <div dangerouslySetInnerHTML={{ __html: reading.html }}></div>
          </article>
        </section>
        <section className="books-i-recommend">
          <h1>Books I Recommend</h1>
          <div dangerouslySetInnerHTML={{ __html: recommended.html }}></div>
        </section>
      </main>
      <MainFooter />
    </div>
  );
}

export const pageQuery = graphql`
  {
    reading: markdownRemark(
      frontmatter: { slug: { eq: "what-am-i-reading" } }
    ) {
      html
    }

    recommended: markdownRemark(
      frontmatter: { slug: { eq: "recommended-books" } }
    ) {
      html
    }
  }
`;
