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

  const frame_width = 1200;
  const frame_style = {
    maxWidth: frame_width + "px",
    margin: "0 auto",
  };

  return (
    <div style={frame_style}>
      <Header max_width={frame_width + "px"} />
      <main style={font_style}>{children}</main>
      <Footer />
    </div>
  );
}
