// REACT
import React from "react";
import styled from "styled-components";
// GATSBY
import BackgroundImage from "gatsby-background-image";
// UTILS
import { useCanvas } from "../hook/hook";
import { str_unit_to_number } from "../utils/misc";

/**
 * Background media
 * v 0.1.0
 * 2021-2021
 */

function height_calc(value, str) {
  // console.log("background_media", str);
  if (str !== undefined) {
    if (str.includes("px")) {
      return Math.floor(str_unit_to_number("px", str));
    }
    if (str.includes("n")) {
      return str_unit_to_number("n", str) * value;
    }
    if (str.includes("%")) {
      return str_unit_to_number("%", str) * 0.01 * value;
    }
  }
  return value;
}

// https://www.gatsbyjs.com/plugins/gatsby-background-image/

const BackgroundSection = ({ children, height, data_query, style_txt }) => {
  let h = useCanvas().height;
  if (height !== undefined) {
    h = height_calc(h, height);
  }
  // let h = useCanvas().height * height;
  const bg_img_hd = data_query.bg_hd.childImageSharp.fluid;

  return (
    <BackgroundImage
      Tag="section"
      fluid={bg_img_hd}
      backgroundColor={`#040e18`}
    >
      <div
        style={{
          height: h,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className={style_txt}>{children}</div>
      </div>
    </BackgroundImage>
  );
};

const BackgroundMedia = styled(BackgroundSection)`
  width: 100%;
  background-position: center center;
  background-repeat: repeat-y;
  background-size: cover;
`;

export default BackgroundMedia;
