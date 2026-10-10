type Variant = "primary" | "outline";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-bold transition duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white shadow-lg shadow-brand/30 hover:bg-brand-deep hover:shadow-brand/40",
  outline: "border-2 border-brand text-brand-strong hover:bg-brand hover:text-white",
};

export function buttonStyles(variant: Variant = "primary", className = "") {
  return `${base} ${variants[variant]} ${className}`;
}
