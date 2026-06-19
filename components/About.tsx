"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const info = [
  { label: "BASED IN", value: "Porto, Portugal" },
  {
    label: "EDUCATION",
    value:
      "Master's in Data Visualization and Information Design, SHIFTA by Elisava (2023–2024)\nBA in Communication Design, ESAD Matosinhos (2019–2022)",
  },
  {
    label: "EXPERIENCE",
    value:
      "Student Support Office, ESAD Matosinhos\nVisual Arts Teacher, Colégio INED\nCultural Support, Porto Design Biennale 2025\nGraphic Design freelance",
  },
  {
    label: "LANGUAGES",
    value: "Portuguese (native), English (advanced), Spanish (intermediate)",
  },
  {
    label: "SOFTWARE",
    value:
      "Adobe Illustrator, InDesign, Photoshop, After Effects, Figma, Notion",
  },
];

const fade = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 max-w-6xl">
        {/* Photo placeholder */}
        <motion.div
          className="relative aspect-[3/4] max-w-sm overflow-hidden"
          initial={fade.initial}
          whileInView={fade.animate}
          transition={fade.transition}
          viewport={{ once: true, margin: "-80px" }}
        >
          <Image
            src="/cv/me.JPG"
            alt="Francisca Alemão"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </motion.div>

        {/* Info */}
        <motion.div
          className="flex flex-col justify-center"
          initial={fade.initial}
          whileInView={fade.animate}
          transition={{ ...fade.transition, delay: 0.1 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="text-sm font-medium leading-relaxed mb-10 max-w-prose">
            Communication Designer with a background in Data Visualization and
            Information Design. Experience in graphic design, editorial
            production, and working directly with people across cultural,
            educational, and institutional contexts.
          </p>

          {/* Info table */}
          <div className="divide-y divide-black/10 mb-10">
            {info.map(({ label, value }) => (
              <div key={label} className="flex gap-8 py-4 text-sm">
                <span className="font-bold tracking-widest text-xs text-black/40 flex-shrink-0 w-28 pt-0.5">
                  {label}
                </span>
                <span className="font-medium leading-relaxed whitespace-pre-line">
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* CV buttons */}
          <div className="flex gap-4">
            <a
              href="/cv/CV — Francisca Alemão.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black px-5 py-2 text-sm font-medium hover:bg-black hover:text-white transition-colors duration-200"
            >
              View CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
