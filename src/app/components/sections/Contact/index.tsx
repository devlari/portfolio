import Image from "next/image";
import { PiArrowUpRight } from "react-icons/pi";
import { contacts } from "../../../data";
import Reveal from "../../ui/Reveal";

export default function Contact() {
  return (
    <section id="contato" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="relative grid items-center gap-10 overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-xl shadow-black/5 ring-1 ring-black/5 md:grid-cols-2 md:p-14">
            <div
              className="absolute -right-24 -top-24 size-96 rounded-full bg-brand-soft"
              aria-hidden="true"
            />

            <div className="relative">
              <span className="font-mono text-sm font-semibold text-brand-strong">
                &lt;contato /&gt;
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">
                Vamos conversar?
              </h2>
              <p className="mt-4 text-ink-soft">
                Entre em contato comigo através dos canais abaixo!
              </p>

              <ul className="mt-8 space-y-3">
                {contacts.map(({ label, value, href, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-4 rounded-2xl bg-surface p-4 ring-1 ring-black/5 transition hover:bg-brand hover:text-white"
                    >
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white transition group-hover:bg-white group-hover:text-brand-strong">
                        <Icon size={22} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-bold">{label}</span>
                        <span className="block truncate text-sm text-ink-soft transition group-hover:text-white/90">
                          {value}
                        </span>
                      </span>
                      <PiArrowUpRight
                        size={20}
                        className="shrink-0 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative hidden md:block">
              <Image
                src="/images/contato.png"
                alt="Ilustração de um celular com cartão de contato"
                width={2000}
                height={2000}
                sizes="(min-width: 1024px) 480px, 45vw"
                className="mx-auto w-full max-w-md animate-float-slow"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
