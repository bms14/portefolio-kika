import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";
import ArrowIcon from "@/components/ArrowIcon";
import ProjectMedia from "@/components/ProjectMedia";
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

  return (
    <div className="min-h-screen bg-white text-black">

      {/* ── DESKTOP: fixed left panel ── */}
      <div className="hidden md:block">
        <div className="fixed top-0 left-0 w-[30%] h-screen flex flex-col justify-center px-12 z-10">
          <Link
            href="/#work"
            className="text-sm mb-12 hover:opacity-50 transition-opacity block"
          >
            <ArrowIcon direction="left" size={22} />
          </Link>
          <h1 className="text-[2.2rem] font-extrabold leading-tight mb-6">
            {project.title}
          </h1>
          {project.description && (
            <p className="text-sm font-medium leading-relaxed mb-8 max-w-prose">
              {project.description}
            </p>
          )}
          {project.tags && project.tags.length > 0 && (
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
          )}
        </div>
      </div>

      {/* ── MOBILE: header ── */}
      <div className="md:hidden px-6 pt-8 pb-6">
        <Link
          href="/#work"
          className="text-sm hover:opacity-50 transition-opacity block mb-6"
        >
          <ArrowIcon direction="left" size={22} />
        </Link>
        <h1 className="text-3xl font-extrabold leading-tight mb-4">
          {project.title}
        </h1>
        {project.description && (
          <p className="text-sm font-medium leading-relaxed mb-6">
            {project.description}
          </p>
        )}
        {project.tags && project.tags.length > 0 && (
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
        )}
      </div>

      {/* ── Media grid (handles both desktop + mobile internally) ── */}
      <ProjectMedia media={project.media} />
    </div>
  );
}
