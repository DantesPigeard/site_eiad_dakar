/**
 * Text Intro
 * v 0.2.0
 * 2021-2022
 */
import * as React from "react";
// APP
import { SelectMD } from "./markdown";

function get_style(background_color, text_color, text_size, padding) {
  return {
    backgroundColor: background_color,
    color: text_color,
    fontSize: text_size,
    padding: padding,
    // fontFamily: "Raleway, -apple-system, Roboto, sans-serif, serif",
  };
}


export function TextIntro({
  background_color,
  text_color,
  text_size,
  padding,
  className,
  node,
}) {
  const style = get_style(background_color, text_color, text_size, padding);

    return (
      <div>
        <SelectMD className={className} style={style} node={node.contenu.childMarkdownRemark} />
      </div>
    );
}
