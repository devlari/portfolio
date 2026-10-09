import { PiArrowUp } from "react-icons/pi";
import { contacts } from "../../../data";
import Logo from "../Logo";

export default function Footer() {
  return (
    <footer className="bg-brand text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-1 md:items-start">
          <Logo accent="white" />
          <span className="text-sm font-semibold text-white/90">
            {new Date().getFullYear()} © devlari.vercel.app
          </span>
        </div>

        <ul className="flex items-center gap-3">
          {contacts.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex size-11 items-center justify-center rounded-full bg-white/15 transition hover:-translate-y-0.5 hover:bg-white hover:text-brand-strong"
              >
                <Icon size={22} />
              </a>
            </li>
          ))}
          <li>
            <a
              href="#home"
              aria-label="Voltar ao topo"
              className="flex size-11 items-center justify-center rounded-full bg-ink text-white transition hover:-translate-y-0.5"
            >
              <PiArrowUp size={22} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
