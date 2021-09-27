import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
// APP
import { SelectMD } from "./markdown";

function get_style(background_color, text_color, text_size, padding) {
  return {
    backgroundColor: background_color,
    color: text_color,
    fontSize: text_size,
    padding: padding,
    // fontFamily: "Raleway, -apple-system, Roboto, sans-serif, serif",
  };
}

export function TextIntro({
  background_color,
  text_color,
  text_size,
  padding,
  className,
}) {
  const style = get_style(background_color, text_color, text_size, padding);

  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/intro/" } }) {
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
          <SelectMD className={className} style={style} node={node} />
        ))}
        {/* {data_text.file.childPlainText.content} */}
      </div>
    );
  } else return null;
}

// export function TextIntro({
//   background_color,
//   text_color,
//   text_size,
//   padding,
//   className,
// }) {
//   const style = get_style(background_color, text_color, text_size, padding);

//   const data_text = useStaticQuery(
//     graphql`
//       query {
//         file(relativePath: { eq: "intro.txt" }) {
//           childPlainText {
//             content
//           }
//         }
//       }
//     `
//   );
//   return (
//     <div className={className} style={style}>
//       {data_text.file.childPlainText.content}
//     </div>
//   );
// }
