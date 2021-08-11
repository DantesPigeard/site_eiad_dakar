import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import partenaires from "../../media/partenaires.jpg";

const partenaires_style = {
  position: "relative",
  align: "auto",
};

export function Partenaires() {
  /*
                  fixed(width: 100, height: 100) {
                  ...GatsbyImageSharpFixed
                }
                */
  /*fluid(maxWidth: 400, maxHeight: 400) {
                  ...GatsbyImageSharpFluid
                }
                */
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "partenaires" } }) {
          edges {
            node {
              extension
              relativePath
              childImageSharp {
                fixed(width: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `
  );
  console.log("allFile", allFile);
  console.log("allFile.edges", allFile.edges);
  return (
    <div>
      <div style={{ position: "relative" }}>
        {allFile.edges.map(({ node }) => (
          // <div>
          <Img fixed={node.childImageSharp.fixed} />
          /* <Img fluid={node.childImageSharp.fluid} /> */
          // </div>
        ))}
      </div>
    </div>
    // <div className="partenaire">
    //   <img src={partenaires} alt="partenaires" />
    // </div>
  );
}
