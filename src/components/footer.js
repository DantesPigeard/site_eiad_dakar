// REACT
import * as React from "react";
// GATSBY
import { navigate } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
// UTILS
import { useCanvas } from "../hook/canvas";
import BackgroundMedia from "../components/background_media";
import { style_hex_to_filter } from "../utils/color";
// EIAD
import "../css/footer.css";
import picto_facebook from "../../media/picto/facebook_2021.svg";

function FooterJu({ picto_facebook, picto_style, max_width, margin }) {
  let w = useCanvas().width;
  if (w >= max_width) {
    w = max_width;
  }

  const f_bar_ju = {
    width: w + "px",
    margin: margin,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontFamily: "Raleway, -apple-system, Roboto, sans-serif, serif",
    fontWeight: "normal",
    color: "white",
    fontSize: "0.7em",
  };

  const f_group_ju_1 = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    paddingLeft: w / 2.7 + "px",
  };

  const f_group_ju_2 = {
    paddingRight: "0.5em",
    paddingTop: "40px",
    fontWeight: "400",
    fontSize: "0.8em",
  };

  return (
    <div style={f_bar_ju}>
      <div style={f_group_ju_1}>
        <a className="text" href="mailto:dakar.eiad@gmail.com">
          <strong>CONTACTEZ-NOUS</strong>
        </a>
        {/* <LinkPage class_name="text" where="/contact">
          <strong>CONTACTEZ-NOUS via formulaire</strong>
        </LinkPage> */}
        <ButtonPicto
          src={picto_facebook}
          stylePicto={picto_style}
          classNameContainer="picto_container"
          alt="facebook"
          href="https://www.facebook.com/eiad.dakar"
        />
      </div>
      <div style={f_group_ju_2}>
        <LinkPage class_name="text" where="/legal">
          <strong>MENTIONS LÉGALES</strong>
        </LinkPage>
      </div>
    </div>
  );
}

function ButtonPicto({
  src,
  classNamePicto,
  stylePicto,
  classNameContainer,
  styleContainer,
  alt,
  href,
}) {
  return (
    <div className={classNameContainer} style={styleContainer}>
      <div className={classNamePicto} style={stylePicto}>
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

export function Footer({ max_width, margin }) {
  const bg_footer = useStaticQuery(
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

  const style_filter_data = style_hex_to_filter("#066ea5");

  const picto_style = {
    width: "25px",
    transform: "translate(12%, 25%)",
    filter: style_filter_data,
  };

  const font_style = {
    fontFamily: "Raleway, -apple-system, Roboto, sans-serif, serif",
    fontWeight: "normal",
    color: "white",
    fontSize: "0.7em",
  };

  // https://stackoverflow.com/questions/63782544/react-open-mailto-e-mail-client-onclick-with-body-from-textarea
  const send_email = (event) => {
    event.preventDefault();
  };

  return (
    <BackgroundMedia
      height="140px"
      data_query={bg_footer}
      default_color="#feec04"
    >
      <FooterJu
        picto_facebook={picto_facebook}
        picto_style={picto_style}
        max_width={max_width}
        margin={margin}
      />
    </BackgroundMedia>
  );
}

export default Footer;
