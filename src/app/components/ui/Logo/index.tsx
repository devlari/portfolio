type Props = {
  className?: string;
  accent?: "brand" | "white";
};

export default function Logo({ className = "", accent = "brand" }: Props) {
  return (
    <a
      href="#home"
      className={`text-lg font-extrabold tracking-tight ${className}`}
      aria-label="DevLari - voltar ao início"
    >
      <span className={accent === "brand" ? "text-ink" : "text-black/80"}>
        &lt; Dev
      </span>
      <span className={accent === "brand" ? "text-brand" : "text-white"}>
        Lari /&gt;
      </span>
    </a>
  );
}
