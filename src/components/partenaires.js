import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import partenaires from "../../media/partenaires.jpg";

const partenaires_style = {
  position: "relative",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
};

const elem_style = {
  padding: "0.2em",
};

export function Partenaires() {
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "partenaires" } }) {
          edges {
            node {
              extension
              relativePath
              childImageSharp {
                fixed(height: 50) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `
  );

  return (
    <div>
      <div style={partenaires_style}>
        {allFile.edges.map(({ node }) => (
          <div style={elem_style}>
            <Img fixed={node.childImageSharp.fixed} />
          </div>
        ))}
      </div>
    </div>
  );
}
