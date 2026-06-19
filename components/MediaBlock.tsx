import Image from "next/image";
import { MediaItem } from "@/data/projects";

export default function MediaBlock({
  item,
  sizes,
}: {
  item: MediaItem;
  sizes?: string;
}) {
  if (item.type === "image") {
    return (
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4/5" }}>
        <Image
          src={item.src}
          alt=""
          fill
          className="object-cover"
          sizes={sizes ?? "50vw"}
        />
      </div>
    );
  }

  if (item.type === "gif") {
    // Use plain <img> so the animation is preserved (next/image strips it)
    return (
      <div className="w-full overflow-hidden" style={{ aspectRatio: "4/5" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.src}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  if (item.type === "video") {
    return (
      <div className="w-full overflow-hidden" style={{ aspectRatio: "4/5" }}>
        <video
          src={item.src}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  if (item.type === "embed") {
    return (
      <div className="w-full overflow-hidden" style={{ aspectRatio: "4/5" }}>
        <iframe
          src={item.url}
          className="w-full h-full border-0"
          allowFullScreen
        />
      </div>
    );
  }

  return null;
}
