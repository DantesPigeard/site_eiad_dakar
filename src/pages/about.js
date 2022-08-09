/**
 * About
 * v 0.2.0
 * 2021-2022
 */
import * as React from "react";
// app
import { Layout } from "../components/layout";
import { SelectMD } from "../components/markdown";
// gatsby
import { useStaticQuery, graphql } from "gatsby";


export default function About() {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulAbout {
          nodes {
            contenu {
              childMarkdownRemark {
                html
                frontmatter {
                  title
                }
              }
            }
          }
        }
      }
    `
  );
  if (data !== undefined) {
    return (
      <>
        <Layout>
          <div className="md_container">
            <SelectMD className="md_style" node={data.allContentfulAbout.nodes[0].contenu.childMarkdownRemark} />
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
