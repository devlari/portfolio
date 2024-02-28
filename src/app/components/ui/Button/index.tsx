import Image from "next/image";

type Props = {
  text: string;
  icon?: string;
  wide?: boolean;
  onClick?: () => void;
};

export default function Button({ text, onClick, icon, wide }: Props) {
  return (
    <button
      className="btn bg-pink d-flex align-items-center fw-bold"
      onClick={onClick}
    >
      {icon && (
        <Image
          src={icon}
          alt={text}
          width={32}
          height={32}
          style={{
            marginRight: wide ? "40px" : "10px",
          }}
        />
      )}
      <span
        style={{
          marginRight: wide ? "40px" : "10px",
        }}
      >
        {text}
      </span>
    </button>
  );
}
