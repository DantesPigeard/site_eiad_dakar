import * as React from "react";

const footer_style = {
  color: "black",
  display: "grid",
  gridTemplateColumns: `repeat(auto-fill, minmax(200px, 1fr))`,
};

const link_style = {
  color: "#232129",
  fontSize: "0.8em",
  margin: 0,
};

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
  return (
    <div style={footer_style}>
      {links.map((link) => (
        <div key={link.url} style={link_style}>
          <a
            style={link_style}
            rel="noreferrer"
            href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
            target={"_blank"}
          >
            {link.text}
          </a>

          <p>{link.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Footer;
