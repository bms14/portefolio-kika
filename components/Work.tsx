import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Work() {
  return (
    <section id="work" className="py-20 px-6 md:px-12">
      <p className="text-xs font-bold uppercase tracking-widest mb-10">
        Work
      </p>
      <div className="flex flex-nowrap gap-5 overflow-x-auto pb-4 no-scrollbar">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
