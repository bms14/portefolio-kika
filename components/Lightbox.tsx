"use client";

import { useEffect } from "react";
import { MediaItem } from "@/data/projects";

export default function Lightbox({
  item,
  onClose,
}: {
  item: MediaItem;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        className="absolute top-5 right-6 text-white text-3xl font-light leading-none hover:opacity-60 transition-opacity"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>

      <div
        className="max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {(item.type === "image" || item.type === "gif") && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.src}
            alt=""
            className="max-w-full max-h-[90vh] object-contain"
          />
        )}
        {item.type === "video" && (
          <video
            src={item.src}
            autoPlay
            muted
            loop
            playsInline
            controls
            className="max-w-full max-h-[90vh]"
          />
        )}
        {item.type === "embed" && (
          <iframe
            src={item.url}
            className="w-full h-[80vh] border-0"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
}
