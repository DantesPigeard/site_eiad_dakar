import * as React from "react";
// app
import { Layout } from "../components/layout";
import { SelectMD } from "../components/markdown";
// gatsby
import { useStaticQuery, graphql } from "gatsby";

export default function About() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
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
