import Image from "next/image";
import { ButtonHTMLAttributes } from "react";

type Props = {
  text: string;
  onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ text, onClick, ...props }: Props) {
  return (
    <button
      className="btn bg-pink d-flex align-items-center fw-bold"
      onClick={onClick}
      {...props}
    >
      <span>{text}</span>
    </button>
  );
}
