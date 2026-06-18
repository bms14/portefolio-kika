"use client";

import { motion } from "framer-motion";

const timeline = [
  { period: "2022–Present", role: "Designer at Studio X" },
  { period: "2020–2022", role: "Junior Designer at Agency Y" },
  { period: "2018–2022", role: "BA Graphic Design, University Z" },
];

const skills = [
  "Brand Identity",
  "Editorial",
  "Typography",
  "Packaging",
  "Digital",
];

const inView = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 max-w-6xl">
        {/* Photo */}
        <motion.div
          className="aspect-[3/4] bg-black/[0.07] flex items-center justify-center text-xs tracking-[0.2em] uppercase text-black/30 max-w-sm"
          initial={inView.initial}
          whileInView={inView.animate}
          transition={inView.transition}
          viewport={{ once: true, margin: "-80px" }}
        >
          Photo
        </motion.div>

        {/* Text */}
        <motion.div
          className="flex flex-col justify-center"
          initial={inView.initial}
          whileInView={inView.animate}
          transition={{ ...inView.transition, delay: 0.1 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Francisca Alemão
          </h2>

          <p className="text-sm font-medium leading-relaxed mb-10 max-w-prose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <div className="space-y-4 mb-10">
            {timeline.map((item) => (
              <div key={item.period} className="flex gap-8 text-sm font-medium">
                <span className="text-black/40 flex-shrink-0 w-32">
                  {item.period}
                </span>
                <span>{item.role}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {skills.map((skill) => (
              <span
                key={skill}
                className="border border-black px-3 py-1 text-xs font-medium tracking-wide"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href="/cv/francisca-alemao-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black px-5 py-2 text-sm font-medium hover:bg-black hover:text-white transition-colors duration-200"
            >
              View CV
            </a>
            <a
              href="/cv/francisca-alemao-cv.pdf"
              download
              className="border border-black px-5 py-2 text-sm font-medium hover:bg-black hover:text-white transition-colors duration-200"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
