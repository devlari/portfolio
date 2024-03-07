import Image from "next/image";

type Props = {
  href: string;
  text: string;
  icon: string;
};

export default function Link({ href, text, icon }: Props) {
  return (
    <a className="btn bg-pink" href={href} target="_blank">
      <Image src={icon} alt={text} width={32} height={32} unoptimized />
      <span style={{ marginLeft: "8px" }}>{text}</span>
    </a>
  );
}
