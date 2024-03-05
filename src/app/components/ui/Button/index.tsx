import Image from "next/image";
import { ButtonHTMLAttributes } from "react";

type Props = {
  text: string;
  icon?: string;
  wide?: boolean;
  onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ text, onClick, icon, wide, ...props }: Props) {
  return (
    <button
      className="btn bg-pink d-flex align-items-center fw-bold"
      onClick={onClick}
      {...props}
    >
      {icon && (
        <Image
          src={icon}
          alt={text}
          width={32}
          height={32}
          style={{
            marginRight: wide ? "15px" : "0px",
          }}
        />
      )}
      <span
        style={{
          marginRight: wide ? "15px" : "0px",
        }}
      >
        {text}
      </span>
    </button>
  );
}
