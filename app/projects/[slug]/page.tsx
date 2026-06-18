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

      {/* ── DESKTOP LAYOUT ── */}
      <div className="hidden md:block">
        {/* Fixed left panel — never moves */}
        <div className="fixed top-0 left-0 w-[30%] h-screen flex flex-col justify-center px-12 z-10">
          <Link
            href="/#work"
            className="text-sm mb-12 hover:opacity-50 transition-opacity block"
          >
            ← Back
          </Link>
          <h1 className="text-[2.2rem] font-extrabold leading-tight mb-6">
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

        {/* Scrollable images — offset by left panel width */}
        <div className="ml-[30%] pb-24 grid grid-cols-2 gap-4 px-8 pt-20">
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
                  sizes="35vw"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 mt-20">
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
                  sizes="35vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── MOBILE LAYOUT ── */}
      <div className="md:hidden px-6 pb-24">
        <div className="pt-8 pb-6">
          <Link
            href="/#work"
            className="text-sm hover:opacity-50 transition-opacity"
          >
            ← Back
          </Link>
        </div>
        <h1 className="text-3xl font-extrabold leading-tight mb-4">
          {project.title}
        </h1>
        <p className="text-sm font-medium leading-relaxed mb-6">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-10">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-black px-3 py-1 text-xs font-medium tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {project.images.map((img, i) => (
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
                sizes="100vw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
