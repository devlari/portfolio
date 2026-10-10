import Image from "next/image";
import type { IconType } from "react-icons";
import { PiFigmaLogo, PiGithubLogo, PiGlobe } from "react-icons/pi";
import type { Project } from "../../../data";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const links: { href?: string; label: string; icon: IconType }[] = [
    { href: project.linkSite, label: "Site", icon: PiGlobe },
    { href: project.linkGithub, label: "Código", icon: PiGithubLogo },
    { href: project.linkFigma, label: "Figma", icon: PiFigmaLogo },
  ];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-card shadow-sm shadow-black/5 ring-1 ring-line transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand/15">
      <div className="relative aspect-[1858/924] overflow-hidden bg-brand-soft">
        <Image
          src={project.image}
          alt={`Captura de tela do projeto ${project.title}`}
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-extrabold">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{project.description}</p>

        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tecnologias">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-brand-soft px-3 py-1 text-xs font-bold text-brand-strong"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2 border-t border-line pt-5">
          {links
            .filter((link) => link.href)
            .map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-line px-3 py-1.5 text-sm font-bold transition hover:border-brand hover:bg-brand hover:text-white"
              >
                <Icon size={16} />
                {label}
              </a>
            ))}
        </div>
      </div>
    </article>
  );
}
