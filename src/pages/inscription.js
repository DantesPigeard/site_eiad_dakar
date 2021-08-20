import React from "react";
// app
import { Layout } from "../components/layout";
import { Partenaires } from "../components/partenaires";
import { SelectMD } from "../components/markdown";
// gatsby
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

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
  if (data !== undefined) {
    return (
      <>
        <Layout>
          <div className="md_container">
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <SelectMD className="md_style" node={node} />
            ))}
          </div>
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
