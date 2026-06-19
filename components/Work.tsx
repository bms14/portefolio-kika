import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Work() {
  return (
    <section id="work" className="py-20 px-6 md:px-12">
      <p className="text-xs font-bold uppercase tracking-widest mb-10">
        Work
      </p>
      <div className="flex flex-wrap gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
