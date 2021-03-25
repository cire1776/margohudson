import React from "react";
import { graphql } from "gatsby";

import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import "./gallery.scss";

export default function Gallery({ data }) {
  const { gallery } = data;
  const images = gallery.nodes;
  console.log(images);
  return (
    <div className="container">
      <MainHeader barQuote="Something wise about galleries" />
      <main>
        <section className="gallery">
          {images.map((image) => {
            const imageActual = getImage(image.frontmatter.image);
            return (
              <figure key="a">
                <GatsbyImage
                  image={imageActual}
                  alt={image.frontmatter.title}
                />
                <figcaption>
                  <div dangerouslySetInnerHTML={{ __html: image.html }}></div>
                </figcaption>
              </figure>
            );
          })}
        </section>
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
        html
        frontmatter {
          title
          date
          credits
          image {
            childImageSharp {
              gatsbyImageData(
                width: 400
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
