import ThemedImage from "../../ui/ThemedImage";
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
          <ThemedImage
            src="/images/eu.png"
            darkSrc="/images/eu-dark.png"
            alt="Foto de Larissa Sousa"
            width={1505}
            height={1505}
            sizes="(min-width: 768px) 384px, 90vw"
            className="w-full animate-float-slow"
          />
          <span className="absolute -right-2 top-8 rounded-2xl bg-card px-4 py-2 font-mono text-sm font-bold shadow-lg ring-1 ring-line">
            <span className="text-brand">&lt;/&gt;</span> Full-Stack
          </span>
          <span className="absolute -left-2 bottom-10 rounded-2xl bg-ink px-4 py-2 text-sm font-bold text-surface shadow-lg">
            Next.js · Node · React Native
          </span>
        </Reveal>

        <Reveal delay={150}>
          <span className="font-mono text-sm font-semibold text-brand-strong">&lt;sobre /&gt;</span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">Sobre mim</h2>

          <div className="mt-6 space-y-4 border-l-4 border-brand pl-6 leading-relaxed text-ink-soft [&_strong]:font-bold [&_strong]:text-ink">
            <p>
              Olá, eu sou a <strong>Larissa Sousa</strong>, desenvolvedora
              <strong> full-stack</strong> apaixonada por tecnologia e criação de soluções digitais.
            </p>
            <p>
              Minha jornada começou em 2018, no curso técnico de Informática da
              <strong> ETEC Professor Horácio Augusto da Silveira</strong>, onde tive meu primeiro
              contato com programação e desenvolvimento de sistemas.
            </p>
            <p>
              Em 2021, iniciei a graduação em
              <strong> Análise e Desenvolvimento de Sistemas</strong> e, em 2025, concluí a
              pós-graduação em
              <strong> Engenharia de Software com Métodos Ágeis</strong>, aprofundando meus
              conhecimentos em boas práticas de desenvolvimento.
            </p>
            <p>
              Atualmente, atuo principalmente com <strong>Next.js</strong>,<strong> Node.js</strong>{" "}
              e <strong>React Native</strong>, criando aplicações modernas, escaláveis e focadas na
              melhor experiência para o usuário.
            </p>
          </div>

          <dl className="mt-8 grid grid-cols-3 gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-card p-4 text-center shadow-sm ring-1 ring-line"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-extrabold text-brand-strong">{stat.value}</dd>
                <dd className="mt-1 text-xs font-semibold text-ink-soft">{stat.label}</dd>
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
