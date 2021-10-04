import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import "../css/partenaires.css";

// const partnaire_container = {
//   position: "relative",
//   maxWidth: "850px",
//   margin: "0 auto",
//   alignItems: "center",
// };
// const partenaires_style = {
//   position: "relative",
//   display: "flex",
//   flexDirection: "row",
//   alignItems: "center",
//   justifyContent: "space-between",
// };

const elem_style = {
  paddingBottom: "0.6em",
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
                gatsbyImageData(height: 45, layout: FIXED)
              }
            }
          }
        }
      }
    `
  );

  return (
    <div className="partnaire_container">
      <div className="partenaires_style">
        {allFile.edges.map(({ node }) => {
          const img = getImage(node.childImageSharp.gatsbyImageData);
          return (
            <div style={elem_style}>
              <GatsbyImage image={img} alt="partenaires" />
              {/* <Img fixed={node.childImageSharp.fixed} /> */}
            </div>
          );
        })}
      </div>
    </div>
  );

  // return (
  //   <div style={partnaire_container}>
  //     <div style={partenaires_style}>
  //       {allFile.edges.map(({ node }) => {
  //         const img = getImage(node.childImageSharp.gatsbyImageData);
  //         return (
  //           <div style={elem_style}>
  //             <GatsbyImage image={img} alt="partenaires" />
  //             {/* <Img fixed={node.childImageSharp.fixed} /> */}
  //           </div>
  //         );
  //       })}
  //     </div>
  //   </div>
  // );
}
