/**
 *  Index 
 * 2021-2022
 * v 0.2.0
 * */

// REACT
import * as React from "react";
// GATSBY
import { graphql } from 'gatsby';
// APP
import { useWidth } from "../hook/canvas";
// EIAD
import { Layout } from "../components/layout";
import BackgroundMedia from "../components/background_media";
import { TextIntro } from "../components/text_intro";
import { Slogan } from "../components/slogan_intro";
import "../css/global.css";
import { QueryHome } from "../img_query/bg_hd_home";
import { QueryTrameBleue } from "../img_query/bg_hd_trame_bleue";
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
const IndexPage = (props) => {
  const bg_home = QueryHome();
  const bg_trame_bleue = QueryTrameBleue();

  const content_node = props.data.allContentfulHome.nodes[0];
  const content_slogan = props.data.allContentfulHome.nodes[0].slogan;


  let height_intro = "320px";
  if (useWidth() < 650) {
    height_intro = "450px";
  }
  if (useWidth() < 500) {
    height_intro = "550px";
  }

  if (useWidth() < 400) {
    height_intro = "700px";
  }

  return (
    <Layout>
      <BackgroundMedia
        height="0.5n"
        data_query={bg_home}
        gatsby_image_data={bg_home}
        className="bg_img_txt"
        default_color="pink"
      >
        {/* <Slogan className="slogan"/> */}
        <Slogan className="slogan" content={content_slogan}/>
      </BackgroundMedia>
      <BackgroundMedia
        height={height_intro}
        data_query={bg_trame_bleue}
        className="bg_img"
        default_color="#066ea5"
      >
        <TextIntro className="text_intro_inside" node={content_node}/>
      </BackgroundMedia>
    </Layout>
  );
};

export default IndexPage;


export const content_query = graphql
`
query {
  allContentfulHome {
    nodes {
      contenu {
        id
        contenu
        childMarkdownRemark {
          html
          frontmatter {
            title
          }
        }
      }
      slogan
    }
  }
}
`
