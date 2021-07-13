import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

export function LatinText({ background_color, text_color, text_size }) {
  const style = {
    backgroundColor: background_color,
    color: text_color,
    padding: "1em",
    fontFamily: "Raleway, -apple-system, Roboto, sans-serif, serif",
  };

  const data_text = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "latin.txt" }) {
          childPlainText {
            content
          }
        }
      }
    `
  );
  return <div style={style}>{data_text.file.childPlainText.content}</div>;
}
