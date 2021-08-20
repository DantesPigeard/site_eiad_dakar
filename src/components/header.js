import * as React from "react";
import { navigate } from "gatsby";
import PropTypes from "prop-types";

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

export function Header() {
  const font_style = {
    fontFamily: "Raleway, -apple-system, Roboto, sans-serif, serif",
    fontWeight: "normal",
    color: "#066ea5",
  };
  return (
    <div className="h_bar">
      <div className="h_bar_logo">
        <Button where="/">
          <div className="logo_style">
            <img src={logo} alt="logo EIAD" />
          </div>
        </Button>
      </div>
      <div className="h_bar_text" style={font_style}>
        <div className="h_cell">
          <Button where="/inscription">
            <div className="h_text">s'inscrire</div>
          </Button>
        </div>
        <div className="h_cell">
          <Button where="/about">
            <div className="h_text">à propos</div>
          </Button>
        </div>
      </div>
    </div>
  );
}
