import * as React from "react";

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

export function Footer({ background_color, text_size, text_color }) {
  const link_style = {
    background: background_color,
    color: text_color,
    fontSize: text_size,
    margin: 0,
    padding: "1em",
  };

  const footer_style = {
    display: "flex",
    justifyContent: "space-between",
    background: background_color,
  };

  return (
    <div>
      <div style={footer_style}>
        {links.map((link) => (
          <div key={link.url} style={link_style}>
            <p>{link.content}</p>
            <a
              style={link_style}
              rel="noreferrer"
              href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              target={"_blank"}
            >
              {link.text}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
