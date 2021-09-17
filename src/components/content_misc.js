import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

function get_style(background_color, text_color, text_size, padding) {
  return {
    backgroundColor: background_color,
    color: text_color,
    fontSize: text_size,
    padding: padding,
    fontFamily: "Raleway, -apple-system, Roboto, sans-serif, serif",
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

export function LegalContent({ background_color, text_color, text_size }) {
  const style = get_style(background_color, text_color, text_size);
  return (
    <div style={style}>
      École internationale d'acteur.trice.s de Dakar
      <br />
      4, rue Mariton 93400 Saint-Ouen-sur-Seine
      <br />
      France
      <br />
      Graphisme: Juliette Nicot
      <br />
      Développement: Stanislas Marçais
      <br />
      Hébergement: Netlify 2325 3rd Street, Suite 296, San Francisco, California
      94107
      <br />
    </div>
  );
}
