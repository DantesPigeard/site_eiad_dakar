import React from "react";
import styled from "styled-components";

import BackgroundImage from "gatsby-background-image";
import { useCanvas } from "../hook/hook";

// https://www.gatsbyjs.com/plugins/gatsby-background-image/
const BackgroundSection = ({
  children,
  normal_height,
  data_query,
  style_txt,
}) => {
  const h = useCanvas().height * normal_height;
  const bg_img_hd = data_query.bg_hd.childImageSharp.fluid;

  return (
    <BackgroundImage
      Tag="section"
      // className={class_name_img}
      fluid={bg_img_hd}
      backgroundColor={`#040e18`}
    >
      <div
        // className={class_name_txt}
        style={{
          height: h,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className={style_txt}>{children}</div>
        {/* <h2>{children}</h2> */}
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
