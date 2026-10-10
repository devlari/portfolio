import Reveal from "../Reveal";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionTitle({ eyebrow, title, description }: Props) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center">
      <span className="font-mono text-sm font-semibold text-brand-strong">&lt;{eyebrow} /&gt;</span>
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-ink-soft">{description}</p>}
    </Reveal>
  );
}
