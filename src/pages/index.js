// REACT
import * as React from "react";
// GATSBY
import { graphql, useStaticQuery } from "gatsby";
// EIAD
import { Layout } from "../components/layout";
import BackgroundMedia from "../components/background_media";
import { LatinText } from "../components/content_misc";
import "../css/global.css";
import { QueryHome } from "../img_query/bg_hd_home";
import { QueryTrameBleue } from "../img_query/bg_hd_trame_bleue";
// EIAD
// EIAD
import "../css/index.css";

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
  const bg_home = QueryHome();
  const bg_trame_bleue = QueryTrameBleue();

  return (
    <Layout>
      <BackgroundMedia
        height="0.5n"
        data_query={bg_home}
        className="bg_img_txt"
      ></BackgroundMedia>
      <BackgroundMedia
        height="0.3n"
        data_query={bg_trame_bleue}
        className="outside"
      >
        <LatinText className="inside" />
      </BackgroundMedia>
    </Layout>
  );
};

export default IndexPage;
