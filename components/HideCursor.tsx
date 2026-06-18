"use client";

import { useEffect } from "react";

export default function HideCursor() {
  useEffect(() => {
    document.documentElement.classList.add("hide-cursor");
    return () => document.documentElement.classList.remove("hide-cursor");
  }, []);

  return null;
}
