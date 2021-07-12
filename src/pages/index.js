import * as React from "react";

import { Header } from "../components/header";
import { Footer } from "../components/footer";
// import { BackgroundMedia } from "../components/background_media";
import BackgroundMedia from "../components/background_media";
import Image from "../components/image_media";
import "../css/global.css";

import { graphql, useStaticQuery } from "gatsby";

// // styles
const global_style = {
  backgroundColor: "cyan",
  color: "white",
  // margin: "0",
  // padding: "1rem",
  // border: 0,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

// markup
const IndexPage = () => {
  // const data_bg = useStaticQuery(
  //   graphql`
  //     query {
  //       bg_hd: file(relativePath: { eq: "fond_rose_trame.jpg" }) {
  //         childImageSharp {
  //           fluid(quality: 90, maxWidth: 1920) {
  //             ...GatsbyImageSharpFluid_withWebp
  //           }
  //         }
  //       }
  //     }
  //   `
  // );

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
        Pour en savoir plus à propos de l'école
      </BackgroundMedia>

      <Footer />
    </main>
  );
};

export default IndexPage;
