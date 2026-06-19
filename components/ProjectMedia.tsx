"use client";

import { useState } from "react";
import { MediaItem } from "@/data/projects";
import MediaBlock from "./MediaBlock";
import Lightbox from "./Lightbox";

export default function ProjectMedia({ media }: { media: MediaItem[] }) {
  const [active, setActive] = useState<MediaItem | null>(null);

  // Split evenly: left gets even indices, right gets odd indices
  const left = media.filter((_, i) => i % 2 === 0);
  const right = media.filter((_, i) => i % 2 === 1);

  return (
    <>
      {/* Desktop 2-col grid */}
      <div className="hidden md:grid grid-cols-2 gap-4 px-8 pt-20 pb-24 ml-[30%]">
        <div className="flex flex-col gap-4">
          {left.map((item, i) => (
            <button
              key={i}
              onClick={() => setActive(item)}
              className="block w-full text-left cursor-zoom-in"
            >
              <MediaBlock item={item} sizes="35vw" />
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-4 mt-20">
          {right.map((item, i) => (
            <button
              key={i}
              onClick={() => setActive(item)}
              className="block w-full text-left cursor-zoom-in"
            >
              <MediaBlock item={item} sizes="35vw" />
            </button>
          ))}
        </div>
      </div>

      {/* Mobile single column */}
      <div className="md:hidden flex flex-col gap-4 pb-24">
        {media.map((item, i) => (
          <button
            key={i}
            onClick={() => setActive(item)}
            className="block w-full text-left cursor-zoom-in"
          >
            <MediaBlock item={item} sizes="100vw" />
          </button>
        ))}
      </div>

      {active && <Lightbox item={active} onClose={() => setActive(null)} />}
    </>
  );
}
