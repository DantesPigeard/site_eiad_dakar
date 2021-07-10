import React from "react";

import { useState, useEffect } from "react";

export function useCanvas() {
  // https://usehooks.com/useWindowSize/
  const [canvas, set_canvas] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function resize_canvas() {
      set_canvas({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener("resize", resize_canvas);
    resize_canvas();
    return () => window.removeEventListener("resize", resize_canvas);
  }, []);
  return canvas;
}
