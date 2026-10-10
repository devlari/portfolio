"use client";

import { useEffect, useState } from "react";
import { PiList, PiX } from "react-icons/pi";
import Logo from "../Logo";
import ThemeToggle from "../ThemeToggle";

const links = [
  { id: "sobre", label: "Sobre" },
  { id: "habilidades", label: "Habilidades" },
  { id: "projetos", label: "Projetos" },
  { id: "contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    ["home", ...links.map((link) => link.id)].forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // No topo da página (telas lg+) os links ficam sobre os círculos do hero
  const overBlobs = !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "bg-card/75 shadow-sm shadow-black/5 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo />

        <div className="flex items-center gap-1">
          <ThemeToggle
            className={`text-ink md:order-2 md:ml-2 ${
              overBlobs ? "lg:text-white lg:hover:bg-white/15" : ""
            }`}
          />

          <button
            type="button"
            className="rounded-full p-2 text-ink transition hover:bg-brand-soft md:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="menu-principal"
            onClick={() => setOpen(!open)}
          >
            {open ? <PiX size={26} /> : <PiList size={26} />}
          </button>

          <ul
            id="menu-principal"
            className={`${
              open ? "flex" : "hidden"
            } absolute inset-x-4 top-full flex-col md:order-1 gap-1 rounded-2xl bg-card p-3 shadow-xl md:static md:flex md:flex-row md:gap-2 md:bg-transparent md:p-0 md:shadow-none`}
          >
            {links.map((link) => {
              const isActive = active === link.id;
              const color = isActive ? "text-brand-strong" : "text-ink hover:text-brand-strong";
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "true" : undefined}
                    className={`group relative block rounded-xl px-4 py-2 font-bold transition-colors ${color} ${
                      overBlobs ? "lg:text-white lg:hover:text-white" : ""
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute inset-x-4 -bottom-0.5 hidden h-0.5 origin-left rounded-full bg-brand transition-transform duration-300 md:block ${
                        overBlobs ? "lg:bg-white" : ""
                      } ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
