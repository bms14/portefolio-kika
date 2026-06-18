"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="block flex-shrink-0 w-[300px] md:w-[380px]"
    >
      <div
        className="relative overflow-hidden w-full"
        style={{ aspectRatio: "4/5" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover transition-opacity duration-300"
          style={{ opacity: hovered ? 0 : 1 }}
          sizes="(max-width: 768px) 300px, 380px"
        />
        <Image
          src={project.hoverImage}
          alt={project.title}
          fill
          className="object-cover transition-opacity duration-300"
          style={{ opacity: hovered ? 1 : 0 }}
          sizes="(max-width: 768px) 300px, 380px"
        />
      </div>
      <p className="mt-3 text-sm font-medium">{project.title}</p>
    </Link>
  );
}
