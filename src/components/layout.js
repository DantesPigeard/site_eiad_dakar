import React from "react";
import "../css/layout.css";

import { Header } from "../components/header";
import { Footer } from "../components/footer";

export function Layout({ children }) {
  // the font must be loaded here, not in the global layout.css
  const font_style = {
    fontFamily: "Raleway, -apple-system, Roboto, sans-serif, serif",
    fontWeight: "normal",
    color: "white",
  };
  return (
    <>
      <Header />
      <main style={font_style}>{children}</main>
      <Footer />
    </>
  );
}
