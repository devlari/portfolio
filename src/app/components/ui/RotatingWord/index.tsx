"use client";

import { useEffect, useState } from "react";

type Props = {
  words: string[];
  interval?: number;
};

export default function RotatingWord({ words, interval = 2500 }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((current) => (current + 1) % words.length),
      interval
    );
    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span className="inline-block text-brand" aria-live="polite">
      <span key={words[index]} className="inline-block animate-word">
        {words[index]}
      </span>
    </span>
  );
}
