import Image from "next/image";
import { PiDownloadSimple } from "react-icons/pi";
import { CAREER_START_YEAR, projects } from "../../../data";
import { buttonStyles } from "../../ui/Button";
import Reveal from "../../ui/Reveal";

export default function About() {
  const stats = [
    {
      value: `${new Date().getFullYear() - CAREER_START_YEAR}+`,
      label: "anos como dev",
    },
    { value: "Pós", label: "em Eng. de Software" },
    { value: `${projects.length}`, label: "projetos no portfólio" },
  ];

  return (
    // relative: fica acima da forma rosa que desce do hero
    <section id="sobre" className="relative py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-2">
        <Reveal className="relative isolate mx-auto w-full max-w-sm">
          <div className="absolute inset-4 -z-10 rotate-6 rounded-[3rem] bg-brand-soft" />
          <Image
            src="/images/eu.png"
            alt="Foto de Larissa Sousa"
            width={1505}
            height={1505}
            sizes="(min-width: 768px) 384px, 90vw"
            className="w-full animate-float-slow"
          />
          <span className="absolute -right-2 top-8 rounded-2xl bg-white px-4 py-2 font-mono text-sm font-bold shadow-lg ring-1 ring-black/5">
            <span className="text-brand">&lt;/&gt;</span> Full-Stack
          </span>
          <span className="absolute -left-2 bottom-10 rounded-2xl bg-ink px-4 py-2 text-sm font-bold text-white shadow-lg">
            Next.js · Node · React Native
          </span>
        </Reveal>

        <Reveal delay={150}>
          <span className="font-mono text-sm font-semibold text-brand-strong">
            &lt;sobre /&gt;
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">
            Sobre mim
          </h2>

          <div className="mt-6 space-y-4 border-l-4 border-brand pl-6 leading-relaxed text-ink-soft">
            <p>
              Olá e seja bem-vindo! Meu nome é Larissa, tenho 23 anos e sou
              desenvolvedora full-stack.
            </p>
            <p>
              Iniciei em 2018, no ensino técnico de informática na ETEC
              Professor Horácio Augusto da Silveira.
            </p>
            <p>
              Em 2021, iniciei graduação em Análise e Desenvolvimento de
              Sistemas e em 2025 concluí pós-graduação em Engenharia de
              Software com Métodos Ágeis.
            </p>
            <p>
              Hoje, trabalho principalmente com Next.js, Node e React Native!
            </p>
          </div>

          <dl className="mt-8 grid grid-cols-3 gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-white p-4 text-center shadow-sm ring-1 ring-black/5"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-extrabold text-brand-strong">
                  {stat.value}
                </dd>
                <dd className="mt-1 text-xs font-semibold text-ink-soft">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>

          <a
            href="/assets/curriculo.pdf"
            download="cv-larissa-sousa"
            target="_blank"
            rel="noreferrer"
            className={buttonStyles("primary", "mt-8")}
          >
            <PiDownloadSimple size={20} />
            Baixe meu currículo
          </a>
        </Reveal>
      </div>
    </section>
  );
}
