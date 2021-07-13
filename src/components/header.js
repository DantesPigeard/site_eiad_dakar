import * as React from "react";
import logo from "../../media/EIAD_logo_bleu.svg";

console.log("logo", logo);

const logo_style = {
  margin: "0",
  padding: "0.5em",
  width: "15%",
};

export function Header() {
  return (
    <div>
      <img src={logo} alt="logo EIAD" style={logo_style} />
    </div>
  );
}
