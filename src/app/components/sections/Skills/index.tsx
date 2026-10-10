import { skillGroups } from "../../../data";
import Reveal from "../../ui/Reveal";
import SectionTitle from "../../ui/SectionTitle";

export default function Skills() {
  return (
    <section id="habilidades" className="bg-card py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="habilidades"
          title="Habilidades"
          description="Tecnologias com as quais trabalho no dia a dia, do layout ao banco de dados."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 120} className="h-full">
              <div className="h-full rounded-3xl bg-surface p-7 ring-1 ring-line transition duration-300 hover:-translate-y-1 hover:ring-brand/40">
                <div className="flex items-center gap-3">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-brand text-white shadow-lg shadow-brand/30">
                    <group.icon size={26} />
                  </span>
                  <h3 className="text-xl font-extrabold">{group.title}</h3>
                </div>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="inline-flex items-center gap-2 rounded-full bg-card px-3.5 py-2 text-sm font-bold shadow-sm ring-1 ring-line transition hover:bg-brand-soft hover:text-brand-strong"
                    >
                      <skill.icon size={16} className="text-brand" />
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
