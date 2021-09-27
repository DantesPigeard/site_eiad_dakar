// REACT
import * as React from "react";
// GATSBY
import { graphql, useStaticQuery } from "gatsby";
// EIAD
import { Layout } from "../components/layout";
import BackgroundMedia from "../components/background_media";
import { TextLatin } from "../components/text_latin";
import { TextIntro } from "../components/text_intro";
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
// bleu clair #8ec0e9;
// le jaune #feec04

// markup
const IndexPage = () => {
  const bg_home = QueryHome();
  const bg_trame_bleue = QueryTrameBleue();

  const style_slogan = {
    fontSize: "1.1em",
    margin: "0 auto",
    textAlign: "center",
  };

  return (
    <Layout>
      <BackgroundMedia
        height="0.5n"
        data_query={bg_home}
        className="bg_img_txt"
      >
        <div style={style_slogan}>APPEL À CANDIDATURES JUSQU'AU 18 OCTOBRE</div>
      </BackgroundMedia>
      <BackgroundMedia
        height="0.75n"
        data_query={bg_trame_bleue}
        className="outside"
      >
        <TextIntro className="inside" />
      </BackgroundMedia>
    </Layout>
  );
};

export default IndexPage;
