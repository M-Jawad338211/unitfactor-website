"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  value: string;
  duration?: number;
  className?: string;
};

export default function CountUp({
  value,
  duration = 1300,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const initialValue = value.replace(/^(\d+)/, "0");
  const [displayValue, setDisplayValue] = useState(initialValue);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const match = value.match(/^(\d+)(.*)$/);
    if (!match) return;

    const target = Number(match[1]);
    const suffix = match[2] ?? "";
    let frame = 0;
    let startTime = 0;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(`${Math.round(target * eased)}${suffix}`);

      if (progress < 1) {
        frame = window.requestAnimationFrame(animate);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        frame = window.requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [duration, value]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
