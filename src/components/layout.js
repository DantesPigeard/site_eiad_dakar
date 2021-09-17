import React from "react";
import "../css/layout.css";

import { Header } from "../components/header";
import { Footer } from "../components/footer";

export function Layout({ children }) {
  const frame_width = 1200;
  const frame_style = {
    maxWidth: frame_width + "px",
    margin: "0 auto",
  };

  return (
    <div style={frame_style}>
      <Header max_width={frame_width} />
      <main className="children">{children}</main>
      <Footer max_width={frame_width} />
    </div>
  );
}
