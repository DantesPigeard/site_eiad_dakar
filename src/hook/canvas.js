/**
 * Hook canvas, window...
 * 2021-2021
 * v 0.1.0
 */

// REACT
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

export function useHeight() {
  return useCanvas().height;
}

export function useWidth() {
  return useCanvas().width;
}
