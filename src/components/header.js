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

  return <div onClick={where_are_you_going}>{children}</div>;
}

export function Header() {
  const font_style = {
    fontFamily: "Raleway, -apple-system, Roboto, sans-serif, serif",
    fontWeight: "normal",
    color: "#066ea5",
  };
  return (
    <div className="h_bar" style={font_style}>
      <section className="h_cell">
        <Button where="/">
          <img src={logo} alt="logo EIAD" />
        </Button>
      </section>
      <section className="h_cell">
        <Button where="/inscription">s'inscrire</Button>
      </section>
      <section className="h_cell">
        <Button where="/contact">contact</Button>
      </section>
      <section className="h_cell">
        <Button where="/about">à propos</Button>
      </section>
    </div>
  );
}
