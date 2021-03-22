import React from "react";
import { graphql } from "gatsby";

import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import "./media.scss";

function Media({ data }) {
  const { media } = data;
  return (
    <div className="container">
      <MainHeader barQuote="Something wise about media" />
      <main className="media">
        <figure></figure>
        <div dangerouslySetInnerHTML={{ __html: media.html }}></div>
      </main>
      <MainFooter />
    </div>
  );
}

export default Media;

export const pageQuery = graphql`
  {
    media: markdownRemark(frontmatter: { slug: { eq: "media" } }) {
      html
    }
  }
`;
