import * as React from "react";

import { Header } from "../components/header";
import { Footer } from "../components/footer";
import BackgroundMedia from "../components/background_media";
import { LatinText } from "../components/content_misc";
import "../css/global.css";

import { graphql, useStaticQuery } from "gatsby";

// FONT
// https://fonts.google.com/specimen/Raleway?category=Sans+Serif&preview.text=SOON&preview.text_type=custom
// https://www.npmjs.com/package/@fontsource/raleway
// https://www.gatsbyjs.com/docs/how-to/styling/using-web-fonts/

// le bleu #066ea5
// le jaune #feec04

// // styles
const global_style = {
  backgroundColor: "white",
  color: "white",
  fontFamily: "Raleway, -apple-system, Roboto, sans-serif, serif",
};

// markup
const IndexPage = () => {
  const data_home = useStaticQuery(
    graphql`
      query {
        bg_hd: file(relativePath: { eq: "fond_rose_tete.jpg" }) {
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
    <main style={global_style}>
      <Header />
      <BackgroundMedia normal_height="0.5" data_query={data_home}>
        Site en construction
      </BackgroundMedia>
      <LatinText text_color="#066ea5" />

      <Footer background_color="#066ea5" text_color="white" text_size="0.7em" />
    </main>
  );
};

export default IndexPage;
