import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

import { useState, useEffect } from "react";

import BackgroundImage from "gatsby-background-image";

import { useCanvas } from "../hook/hook";

// https://www.gatsbyjs.com/plugins/gatsby-background-image/
const BackgroundSection = ({ children, className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "fond_rose_trame.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  const h = useCanvas().height / 2;

  // Set ImageData.
  const bg_img = data.desktop.childImageSharp.fluid;

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={bg_img}
      backgroundColor={`#040e18`}
    >
      <div style={{ height: h }}>
        <h2>{children}</h2>
      </div>
    </BackgroundImage>
  );
};

const BackgroundMedia = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`;

export default BackgroundMedia;
