"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    setIsTouch(
      window.matchMedia("(hover: none) and (pointer: coarse)").matches
    );
  }, []);

  useEffect(() => {
    if (isTouch) return;
    const dot = dotRef.current;
    if (!dot) return;

    const onMove = (e: MouseEvent) => {
      dot.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <div
      ref={dotRef}
      className="fixed top-0 left-0 w-[10px] h-[10px] bg-black rounded-full pointer-events-none z-[9999]"
      style={{ transform: "translate(-20px, -20px)" }}
    />
  );
}
