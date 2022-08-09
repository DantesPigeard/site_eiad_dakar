/**
 * Slogan
 * v 0.2.0
 * 2021-2022
 */
import * as React from "react";

export function Slogan({
  style,
	className,
  content,
}) {

    return (
      <div className={className}>
        {content}
      </div>
    );
}
