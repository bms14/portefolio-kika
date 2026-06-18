import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return { title: project ? `${project.title} — Francisca Alemão` : "Project" };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const midImages = project.images.slice(0, 2);
  const rightImages = project.images.slice(2);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Back button */}
      <div className="px-6 md:px-12 pt-8 pb-4">
        <Link
          href="/#work"
          className="text-sm hover:opacity-50 transition-opacity"
        >
          ← Back
        </Link>
      </div>

      {/* 3-column layout */}
      <div className="px-6 md:px-12 pb-24 grid grid-cols-1 md:grid-cols-[30%_1fr_1fr] gap-8 md:gap-6 items-start">
        {/* Left — sticky on desktop. No self-start: cell stretches to grid height so sticky lasts full scroll */}
        <div className="md:sticky md:top-0 flex flex-col justify-center py-8 md:pr-8 md:min-h-screen md:overflow-hidden">
          <h1 className="text-3xl md:text-[2.2rem] font-extrabold leading-tight mb-6">
            {project.title}
          </h1>
          <p className="text-sm font-medium leading-relaxed mb-8 max-w-prose">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="border border-black px-3 py-1 text-xs font-medium tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Middle column */}
        <div className="flex flex-col gap-4">
          {midImages.map((img, i) => (
            <div
              key={i}
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "4/5" }}
            >
              <Image
                src={img}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 35vw"
              />
            </div>
          ))}
        </div>

        {/* Right column — offset */}
        <div className="flex flex-col gap-4 md:mt-20">
          {rightImages.map((img, i) => (
            <div
              key={i}
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "4/5" }}
            >
              <Image
                src={img}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 35vw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
