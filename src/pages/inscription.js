import React from "react";

// gatsby
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
// app
import { Layout } from "../components/layout";
import { Partenaires } from "../components/partenaires";
import { SelectMD } from "../components/markdown";

export default function Inscription() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/inscription/" } }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              title
              author
              date
            }
          }
        }
      }
    }
  `);

  const partnaire_img = {
    position: "relative",
    maxWidth: "850px",
    margin: "0 auto",
    alignItems: "center",
    border: "solid 1px black",
  };

  if (data !== undefined) {
    return (
      <>
        <Layout>
          <div className="md_container">
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <SelectMD className="md_style" node={node} />
            ))}
          </div>
          {/* <div style={partnaire_img}>
            <StaticImage src="../../media/partenaires.jpg" alt="partenaires" />
          </div> */}

          <Partenaires />
        </Layout>
      </>
    );
  } else {
    return (
      <>
        <Layout />
      </>
    );
  }
}
