import React from "react";
import { graphql } from "gatsby";

import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import Gallery from "../components/Gallery";

import "./gallery.scss";

export default function GalleryPage({ data }) {
  const { gallery } = data;
  const images = gallery.nodes;
  return (
    <div className="container">
      <MainHeader barQuote="Something wise about galleries" />
      <main>
        <Gallery images={images} itemsPerRow={3} />
      </main>
      <MainFooter />
    </div>
  );
}

export const pageQuery = graphql`
  {
    gallery: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/gallery/" } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      nodes {
        id
        html
        frontmatter {
          title
          date
          credits
          image {
            childImageSharp {
              resize {
                aspectRatio
              }
              gatsbyImageData(
                layout: CONSTRAINED
                width: 500
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`;
