type Props = {
  className?: string;
  accent?: "pink" | "white";
};

export default function Logo({ className = "", accent = "pink" }: Props) {
  return (
    <a
      href="#home"
      className={`text-lg font-extrabold tracking-tight ${className}`}
      aria-label="DevLari - voltar ao início"
    >
      <span className="text-ink">&lt; Dev</span>
      <span className={accent === "pink" ? "text-brand" : "text-white"}>
        Lari /&gt;
      </span>
    </a>
  );
}
