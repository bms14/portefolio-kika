"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
const landingImages = [
  "2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg",
  "10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg",
  "18.png","19.png","20.png","21.png","22.jpg","23.jpg","24.jpg","25.JPG",
  "26.JPG","27.JPG","28.JPG","29.png","30.jpg","31.jpg","32.jpg","33.jpg",
  "34.png","35.png","36.png","37.png","38.png",
].map((f) => `/images/landing_images/${f}`);
import ArrowIcon from "./ArrowIcon";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const targetPos = useRef({ x: -300, y: -300 });
  const currentPos = useRef({ x: -300, y: -300 });
  const rafRef = useRef<number>(0);
  const lastSwapRef = useRef(0);
  const [isTouch, setIsTouch] = useState(true);
  const [thumbVisible, setThumbVisible] = useState(false);
  const [arrowVisible, setArrowVisible] = useState(false);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const [currentCover, setCurrentCover] = useState(landingImages[0]);
  const lastCoverRef = useRef(landingImages[0]);

  useEffect(() => {
    setIsTouch(
      window.matchMedia("(hover: none) and (pointer: coarse)").matches
    );
  }, []);

  // Show arrow only when at the very top of the page
  useEffect(() => {
    const check = () => setArrowVisible(window.scrollY < 50);
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

  // Fit name to fill the full viewport width minus left/right padding.
  useEffect(() => {
    const el = nameRef.current;
    if (!el) return;
    const fit = () => {
      // Make inline-block at a known size so offsetWidth = pure text width
      el.style.display = "inline-block";
      el.style.fontSize = "100px";
      const textWidth = el.offsetWidth;
      el.style.display = "";
      const vw = document.documentElement.clientWidth;
      const isDesktop = vw >= 768;
      // px-6 = 24px/side on mobile, px-12 = 48px/side on desktop
      const totalPadding = isDesktop ? 96 : 48;
      const available = vw - totalPadding;
      if (textWidth > 0 && available > 0) {
        el.style.fontSize = `${(available / textWidth) * 100}px`;
      }
    };
    document.fonts.ready.then(fit);
    window.addEventListener("resize", fit);
    fit();
    return () => window.removeEventListener("resize", fit);
  }, []);

  const scrollToWork = () => {
    const el = document.getElementById("work");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

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

  // Cursor hide + thumbnail — hero section only
  useEffect(() => {
    if (isTouch) return;
    const section = sectionRef.current;
    if (!section) return;
    const html = document.documentElement;

    const onEnter = () => html.classList.add("hero-cursor-active");
    const onLeave = () => {
      html.classList.remove("hero-cursor-active");
      setThumbVisible(false);
    };
    const onMove = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("[data-text]")) {
        setThumbVisible(false);
        return;
      }
      setThumbVisible(true);
      targetPos.current = { x: e.clientX - 90, y: e.clientY - 120 };
      const now = Date.now();
      if (now - lastSwapRef.current > 400) {
        lastSwapRef.current = now;
        // Pick a random image different from the current one
        const pool = landingImages.filter((c) => c !== lastCoverRef.current);
        const next = pool[Math.floor(Math.random() * pool.length)];
        lastCoverRef.current = next;
        setCurrentCover(next);
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
      className="relative h-screen w-full overflow-hidden"
      style={!isTouch ? { cursor: "none" } : undefined}
    >
      {/* Description — top left, below navbar */}
      <motion.p
        data-text=""
        className="absolute top-24 left-6 md:left-12 text-sm font-medium text-left select-none flex flex-col gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span>Communication Designer — Porto.</span>
        <span>Graphic design, editorial, data viz.</span>
        <span>Sometimes more than that.</span>
      </motion.p>

      {/* Name — full width, bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        {/* motion.div handles fade/slide; h1 is plain so ResizeObserver controls font-size freely */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* padding wrapper — clientWidth is the target fill width */}
          <div className="px-6 md:px-12">
            {/* h1 has NO padding so scrollWidth = pure text width */}
            <h1
              ref={nameRef}
              data-text=""
              className="font-extrabold leading-none tracking-tighter select-none whitespace-nowrap"
            >
              Francisca Alemão
            </h1>
          </div>
        </motion.div>

        {/* Down arrow — centred below name, fades out on scroll */}
        <AnimatePresence>
          {arrowVisible && (
            <motion.button
              key="scroll-arrow"
              onClick={scrollToWork}
              className="w-full flex justify-center py-5"
              aria-label="Scroll to work"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowIcon direction="down" size={28} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Floating image thumbnail — desktop only */}
      {!isTouch && (
        <div
          ref={thumbRef}
          className="fixed top-0 left-0 pointer-events-none z-40"
          style={{
            opacity: thumbVisible ? 1 : 0,
            transition: "opacity 0.2s ease",
            willChange: "transform",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={currentCover}
            alt=""
            style={{ maxWidth: "260px", maxHeight: "320px", display: "block" }}
          />
        </div>
      )}
    </section>
  );
}
