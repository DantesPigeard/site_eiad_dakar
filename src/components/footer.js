import * as React from "react";
import { navigate } from "gatsby";
import "../css/footer.css";

import picto_facebook from "../../media/picto/facebook_2021.svg";

function ButtonPicto({ src, cssPicto, cssPictoContainer, alt, href }) {
  return (
    <div className={cssPictoContainer}>
      <div className={cssPicto}>
        <a href={href} target="_blank">
          <img src={src} alt={alt} />
        </a>
      </div>
    </div>
  );
}

function LinkPage({ class_name, where, children }) {
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
    <div className={class_name} onClick={where_are_you_going}>
      {children}
    </div>
  );
}

export function Footer() {
  const font_style = {
    fontFamily: "Raleway, -apple-system, Roboto, sans-serif, serif",
    fontWeight: "normal",
    color: "white",
    fontSize: "0.7em",
  };

  return (
    <div className="f_bar" style={font_style}>
      {/* <div className="f_cell_a">Copyright © 2021 EIAD |</div> */}

      <LinkPage class_name="text" where="/legal">
        Mentions légales
      </LinkPage>
      <ButtonPicto
        src={picto_facebook}
        cssPicto="picto"
        cssPictoContainer="picto_container"
        alt="facebook"
        href="https://www.facebook.com/eiad.dakar"
      />
    </div>
  );
}

export default Footer;
