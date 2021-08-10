import * as React from "react";

import { Layout } from "../components/layout";
import BackgroundMedia from "../components/background_media";
import { LatinText } from "../components/content_misc";
import "../css/global.css";

import { graphql, useStaticQuery } from "gatsby";

// FONT
// https://fonts.google.com/specimen/Raleway?category=Sans+Serif&preview.text=SOON&preview.text_type=custom
// https://www.npmjs.com/package/@fontsource/raleway
// https://www.gatsbyjs.com/docs/how-to/styling/using-web-fonts/

// CHARTE COULEUR
// bleu juliette #066ea5
// bleu clair #a3d0eb
// le jaune #feec04

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
    <Layout>
      <BackgroundMedia normal_height="0.5" data_query={data_home}>
        APPEL À CANDIDATURES JUSQU'AU 22 AOÛT
      </BackgroundMedia>
      {/* <LatinText text_color="#066ea5" /> */}
    </Layout>
  );
};

export default IndexPage;
