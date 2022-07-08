import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
// APP
import { SelectMD } from "./markdown";

export function Slogan({
  style,
	className,
}) {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/slogan/" } }) {
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
    `
  );

  if (data !== undefined) {
    return (
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
					<SelectMD className={className} node={node} />
        ))}
      </div>
    );
  } else return null;
}
