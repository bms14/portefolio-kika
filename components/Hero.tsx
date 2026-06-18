"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const targetPos = useRef({ x: -300, y: -300 });
  const currentPos = useRef({ x: -300, y: -300 });
  const rafRef = useRef<number>(0);
  const moveCountRef = useRef(0);
  const [isTouch, setIsTouch] = useState(true);
  const [visible, setVisible] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    setIsTouch(
      window.matchMedia("(hover: none) and (pointer: coarse)").matches
    );
  }, []);

  // Lerp animation loop
  const tick = useCallback(() => {
    const thumb = thumbRef.current;
    if (thumb) {
      currentPos.current.x +=
        (targetPos.current.x - currentPos.current.x) * 0.1;
      currentPos.current.y +=
        (targetPos.current.y - currentPos.current.y) * 0.1;
      thumb.style.transform = `translate(${currentPos.current.x}px, ${currentPos.current.y}px)`;
    }
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    if (isTouch) return;
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isTouch, tick]);

  // Cursor hide + thumbnail logic — scoped to hero section only
  useEffect(() => {
    if (isTouch) return;
    const section = sectionRef.current;
    if (!section) return;
    const html = document.documentElement;

    const onEnter = () => html.classList.add("hero-cursor-active");

    const onLeave = () => {
      html.classList.remove("hero-cursor-active");
      setVisible(false);
    };

    const onMove = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("[data-text]")) {
        setVisible(false);
        return;
      }
      setVisible(true);
      // Centre the 180×240 thumbnail on the cursor
      targetPos.current = { x: e.clientX - 90, y: e.clientY - 120 };

      moveCountRef.current++;
      if (moveCountRef.current % 18 === 0) {
        setImgIndex((i) => (i + 1) % projects.length);
      }
    };

    section.addEventListener("mouseenter", onEnter);
    section.addEventListener("mouseleave", onLeave);
    section.addEventListener("mousemove", onMove);

    return () => {
      section.removeEventListener("mouseenter", onEnter);
      section.removeEventListener("mouseleave", onLeave);
      section.removeEventListener("mousemove", onMove);
      html.classList.remove("hero-cursor-active");
    };
  }, [isTouch]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      style={!isTouch ? { cursor: "none" } : undefined}
    >
      <motion.div
        data-text=""
        className="text-center select-none z-10 px-6"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <h1 className="text-[clamp(2.8rem,9vw,9rem)] font-extrabold leading-none tracking-tighter">
          Francisca Alemão
        </h1>
        <p className="mt-5 text-base md:text-lg font-medium tracking-wide">
          Graphic Designer based in [City].
        </p>
      </motion.div>

      {/* Floating image thumbnail — desktop only */}
      {!isTouch && (
        <div
          ref={thumbRef}
          className="fixed top-0 left-0 w-[180px] h-[240px] pointer-events-none z-40 overflow-hidden"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.2s ease",
            willChange: "transform",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={projects[imgIndex].coverImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </section>
  );
}
