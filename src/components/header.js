import * as React from "react";
import logo from "../../media/EIAD_logo.svg";

console.log("logo", logo);

// import { ReactComponent as YourSvg } from "../../media/EIAD-logo.svg";

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
