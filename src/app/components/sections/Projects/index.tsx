import { projects } from "../../../data";
import ProjectCard from "../../ui/ProjectCard";
import Reveal from "../../ui/Reveal";
import SectionTitle from "../../ui/SectionTitle";

export default function Projects() {
  return (
    <section id="projetos" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="projetos"
          title="Projetos"
          description="Alguns trabalhos que desenvolvi, do protótipo no Figma ao site no ar."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={(index % 3) * 120} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
