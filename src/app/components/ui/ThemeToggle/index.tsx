"use client";

import { useEffect, useState } from "react";
import { PiMoon, PiSun } from "react-icons/pi";

type Theme = "light" | "dark";

type Props = {
  className?: string;
};

export default function ThemeToggle({ className = "" }: Props) {
  // O tema real já foi aplicado no <html> pelo script do layout
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme as Theme);

    // Sem escolha salva, acompanha mudanças no tema do sistema
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    function handleChange(event: MediaQueryListEvent) {
      if (localStorage.getItem("theme")) return;
      applyTheme(event.matches ? "dark" : "light");
    }

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  function applyTheme(next: Theme) {
    document.documentElement.dataset.theme = next;
    setTheme(next);
  }

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    applyTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Ativar modo claro" : "Ativar modo escuro"}
      title={isDark ? "Modo claro" : "Modo escuro"}
      className={`rounded-full p-2 transition hover:bg-brand-soft ${className}`}
    >
      {/* Evita ícone errado antes de saber o tema */}
      <span className={theme ? "" : "invisible"}>
        {isDark ? <PiSun size={24} /> : <PiMoon size={24} />}
      </span>
    </button>
  );
}
