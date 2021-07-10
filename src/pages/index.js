import * as React from "react";

import { Header } from "../components/header";
import { Footer } from "../components/footer";
// import { BackgroundMedia } from "../components/background_media";
import BackgroundMedia from "../components/background_media";
import "../css/global.css";
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
  return (
    <main style={global_style}>
      <Header />
      <BackgroundMedia>Truc et encore</BackgroundMedia>
      <Footer />
    </main>
  );
};

export default IndexPage;
