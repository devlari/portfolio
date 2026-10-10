import ThemedImage from "../../ui/ThemedImage";
import { PiArrowRight, PiDownloadSimple } from "react-icons/pi";
import { contacts } from "../../../data";
import { buttonStyles } from "../../ui/Button";
import RotatingWord from "../../ui/RotatingWord";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-svh items-center pb-16 pt-28"
    >
      {/* Mesmos círculos do antigo background.png, agora em SVG.
          Não é cortado pelo hero: o último círculo desce até o "Sobre". */}
      <svg
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden w-full lg:block"
        viewBox="0 0 1440 1060"
        aria-hidden="true"
      >
        <g className="fill-brand-light">
          <circle cx="933" cy="82" r="267" />
          <circle cx="1200" cy="362" r="267" />
          <circle cx="1407" cy="642" r="277" />
          <circle cx="1440" cy="900" r="150" />
          <rect x="933" y="0" width="507" height="362" />
          <rect x="1200" y="0" width="240" height="642" />
        </g>
      </svg>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-1.5 text-sm font-bold text-ink shadow-sm ring-1 ring-line">
            <span className="size-2 rounded-full bg-brand" />
            Desenvolvedora Full-Stack
          </span>

          <p className="mt-6 font-bold text-ink-soft">Oi, meu nome é</p>
          <h1 className="mt-1 text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
            Larissa Sousa
          </h1>
          <h2 className="mt-3 text-2xl font-bold md:text-3xl lg:text-4xl">
            Eu desenvolvo{" "}
            <RotatingWord words={["websites", "aplicativos", "sistemas"]} />
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            Estou na área de desenvolvimento desde 2021, e possuo experiência
            com diversas linguagens e frameworks.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a className={buttonStyles("primary")} href="#projetos">
              Conheça meus projetos
              <PiArrowRight size={20} />
            </a>
            <a
              className={buttonStyles("outline")}
              href="/assets/curriculo.pdf"
              download="cv-larissa-sousa"
              target="_blank"
              rel="noreferrer"
            >
              <PiDownloadSimple size={20} />
              Currículo
            </a>
          </div>

          <ul className="mt-10 flex items-center gap-3">
            {contacts.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex size-11 items-center justify-center rounded-full bg-card text-ink shadow-sm ring-1 ring-line transition hover:-translate-y-0.5 hover:bg-brand hover:text-white"
                >
                  <Icon size={22} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden justify-center md:flex">
          <ThemedImage
            src="/images/PC.png"
            darkSrc="/images/PC-dark.png"
            alt="Ilustração de um computador com código na tela"
            width={1707}
            height={1707}
            sizes="(min-width: 1024px) 520px, 45vw"
            priority
            className="w-full max-w-[520px] animate-float drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
