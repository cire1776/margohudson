import React from "react";
import { graphql } from "gatsby";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import "./life-story.scss";

export default function Template({ data }) {
  const { lifeStory } = data;
  const { html } = lifeStory;
  return (
    <div className="container">
      <MainHeader barQuote="Something wise about margo" />
      <main className="margos-story">
        <figure></figure>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </main>
      <MainFooter />
    </div>
  );
}
export const pageQuery = graphql`
  {
    lifeStory: markdownRemark(frontmatter: { slug: { eq: "life-story" } }) {
      html
    }
  }
`;
