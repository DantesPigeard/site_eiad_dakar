import * as React from "react";

import "../css/footer.css";

const links = [
  {
    content:
      "École internationale d'acteur.trice.s de Dakar - 4, rue Mariton 93400 Saint-Ouen-sur-Seine - France",
  },
  {
    text: "Juliette Nicot",
    url: "http://www.juliettenicot.com/",
    content: "Graphisme",
  },
  {
    text: "Stanislas Marçais",
    url: "https://www.knupel.art",
    content: "Développement",
  },
];

export function Footer() {
  const font_style = {
    fontFamily: "Raleway, -apple-system, Roboto, sans-serif, serif",
    fontWeight: "normal",
    color: "#066ea5",
  };

  return (
    <div className="f_bar" style={font_style}>
      {links.map((elem) => (
        // <div>{elem.content}</div>
        <section className="f_cell">
          <div key={elem.url}>
            <p>{elem.content}</p>
            <a
              rel="noreferrer"
              href={`${elem.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              target={"_blank"}
            >
              {elem.text}
            </a>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Footer;
