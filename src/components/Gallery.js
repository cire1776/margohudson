import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { chunk, sum } from "lodash";
import React from "react";

const Gallery = ({ images, itemsPerRow }) => {
  // Split images into groups of the given size
  const rows = chunk(images, itemsPerRow);

  return (
    <div>
      <section className="gallery">
        {rows.map((row) => {
          // Sum aspect ratios of images in the given row
          const rowAspectRatioSum = sum(row.map((image) => image.aspectRatio));
          return (
            // <div className="row">
            <>
              {row.map((image) => {
                const imageActual = getImage(image.frontmatter.image);
                return (
                  <figure key={image.id}>
                    <GatsbyImage
                      image={imageActual}
                      placeholder="blurred"
                      alt={image.frontmatter.title}
                    />
                    <figcaption>
                      <div
                        dangerouslySetInnerHTML={{ __html: image.html }}
                      ></div>
                    </figcaption>
                  </figure>
                );
              })}
            </>
          );
        })}
      </section>
    </div>
  );
};

export default Gallery;
