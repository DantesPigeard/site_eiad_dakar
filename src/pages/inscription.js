/**
 * Subscribe
 * v 0.2.0
 * 2021-2022
 */
import React from "react";

// gatsby
import { useStaticQuery, graphql } from "gatsby";
// app
import { Layout } from "../components/layout";
import { Partenaires } from "../components/partenaires";
import { SelectMD } from "../components/markdown";

export default function Inscription() {
  const data = useStaticQuery(graphql`
  query {
    allContentfulSubscribe {
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
  `);

  if (data !== undefined) {
    return (
      <>
        <Layout>
          <div className="md_container">
            <SelectMD className="md_style" node={data.allContentfulSubscribe.nodes[0].contenu.childMarkdownRemark} />
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

