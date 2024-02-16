type Props = {
  text: string;
  onClick?: () => void;
};

export default function Button({ text, onClick }: Props) {
  return (
    <button className="btn bg-pink" onClick={onClick}>
      {text}
    </button>
  );
}
