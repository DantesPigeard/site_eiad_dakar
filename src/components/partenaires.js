import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import partenaires from "../../media/partenaires.jpg";
const partnaire_container = {
  position: "relative",
  maxWidth: "850px",
  margin: "0 auto",
  alignItems: "center",
};
const partenaires_style = {
  position: "relative",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};

const elem_style = {
  padding: "0.1em",
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
                fixed(height: 45) {
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
    <div style={partnaire_container}>
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
