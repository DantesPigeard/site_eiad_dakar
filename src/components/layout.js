import React from "react";
import "../css/layout.css";

import { Header } from "../components/header";
import { Footer } from "../components/footer";

export function Layout({ children }) {
  const frame_width = 1200;
  const margin = "0 auto";
  const frame_style = {
    maxWidth: frame_width + "px",
    margin: "0 auto",
  };

  const children_style = {
    fontFamily: "Raleway, -apple-system, Roboto, sans-serif, serif",
    color: "white",
    // maxWidth: frame_style.maxWidth,
    margin: frame_style.margin,
  };

  return (
    <div>
      <Header max_width={frame_width} margin={margin} />
      <main style={children_style}>{children}</main>
      <Footer max_width={frame_width} margin={margin} />
    </div>
  );
}
