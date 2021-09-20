import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

function get_style(background_color, text_color, text_size, padding) {
  return {
    backgroundColor: background_color,
    color: text_color,
    fontSize: text_size,
    padding: padding,
    // fontFamily: "Raleway, -apple-system, Roboto, sans-serif, serif",
  };
}
export function LatinText({
  background_color,
  text_color,
  text_size,
  padding,
  className,
}) {
  const style = get_style(background_color, text_color, text_size, padding);

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
  return (
    <div className={className} style={style}>
      {data_text.file.childPlainText.content}
    </div>
  );
}
