"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function SmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (prefersReducedMotion.matches) return;

    const lenis = new Lenis({
      autoRaf: true,
      anchors: {
        offset: -92,
        duration: 1.2,
      },
      lerp: 0.075,
      smoothWheel: true,
      syncTouch: true,
      wheelMultiplier: 0.78,
      touchMultiplier: 0.9,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
