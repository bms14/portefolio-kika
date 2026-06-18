"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-white transition-all duration-300 ${
          scrolled ? "border-b border-black" : ""
        }`}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-sm font-bold tracking-tight hover:opacity-60 transition-opacity"
        >
          Francisca Alemão
        </button>

        <ul className="hidden md:flex items-center gap-8 text-sm">
          <li>
            <button
              onClick={() => scrollTo("work")}
              className="hover:opacity-60 transition-opacity"
            >
              Work
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollTo("about")}
              className="hover:opacity-60 transition-opacity"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollTo("footer")}
              className="hover:opacity-60 transition-opacity"
            >
              Contact
            </button>
          </li>
        </ul>

        <button
          className="md:hidden flex flex-col gap-[5px] w-6"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span className="block h-px w-full bg-black" />
          <span className="block h-px w-full bg-black" />
        </button>
      </nav>

      {/* Mobile full-screen overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-white flex flex-col justify-center items-center transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          className="absolute top-5 right-6 text-3xl font-light leading-none"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          ×
        </button>
        <ul className="flex flex-col items-center gap-10 text-3xl font-medium">
          <li>
            <button onClick={() => scrollTo("work")}>Work</button>
          </li>
          <li>
            <button onClick={() => scrollTo("about")}>About</button>
          </li>
          <li>
            <button onClick={() => scrollTo("footer")}>Contact</button>
          </li>
        </ul>
      </div>
    </>
  );
}
