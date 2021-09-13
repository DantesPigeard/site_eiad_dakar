//REACT
import * as React from "react";
// MISC
import PropTypes from "prop-types";
// GATSBY
import { navigate } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
// UTILS
import { useCanvas } from "../hook/hook";
import BackgroundMedia from "../components/background_media";
// EIAD
import logo from "../../media/EIAD_logo_bleu.svg";
// le bleu #066ea5
// le jaune #feec04

import "../css/header.css";

function Button({ where, children }) {
  const where_are_you_going = (event) => {
    event.preventDefault();
    if (typeof where === "string" || where instanceof String) {
      if (where === "/back") {
        navigate(-1);
      } else {
        navigate(where);
      }
    }
  };

  return (
    <div className="button_style" onClick={where_are_you_going}>
      {children}
    </div>
  );
}

export function Header({ max_width }) {
  const font_style = {
    fontFamily: "Raleway, -apple-system, Roboto, sans-serif, serif",
    fontWeight: "normal",
    color: "#066ea5",
  };

  let w = useCanvas().width;
  if (w >= max_width) {
    w = max_width;
  }

  // console.log("frame width", w, max_width);
  const style_h_bar = {
    width: w + "px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const bg_header = useStaticQuery(
    graphql`
      query {
        bg_hd: file(relativePath: { eq: "trame_jaune.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  return (
    <BackgroundMedia height="140px" data_query={bg_header}>
      <div style={style_h_bar}>
        <div className="h_bar_logo">
          <Button where="/">
            <div className="logo_style">
              <img src={logo} alt="logo EIAD" />
            </div>
          </Button>
        </div>
        <div className="h_bar_text" style={font_style}>
          <div className="h_cell">
            <Button where="/about">
              <div className="h_text">À PROPOS</div>
            </Button>
          </div>
          <div className="h_cell">
            <Button where="/inscription">
              <div className="h_text">S'INSCRIRE À EIAD-NOMAD</div>
            </Button>
          </div>
        </div>
      </div>
    </BackgroundMedia>
  );
}
