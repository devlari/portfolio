"use client";
import { useRef } from "react";
import CardCarousel, { ItemCard } from "./Card";
import { RxCaretLeft } from "react-icons/rx";
import { RxCaretRight } from "react-icons/rx";
type Props = {
  items: ItemCard[];
};

export default function Carousel({ items }: Props) {
  const carousel = useRef<HTMLDivElement>(null);
  const quantity = items.length;

  const handleLeftClick = () => {
    if (carousel.current) {
      carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
  };

  const handleRightClick = () => {
    if (carousel.current) {
      carousel.current.scrollLeft += carousel.current.offsetWidth;
    }
  };

  return (
    <>
      <div className="container carousel" ref={carousel}>
        {items.map((item, index) => (
          <CardCarousel item={item} key={index} />
        ))}
      </div>
      {quantity > 3 && (
        <>
          <div className="buttons">
            <button className="btn" onClick={handleLeftClick}>
              <RxCaretLeft size={64} color="#FB6F92" />
            </button>
            <button className="btn" onClick={handleRightClick}>
              <RxCaretRight size={64} color="#FB6F92" />
            </button>
          </div>
        </>
      )}
    </>
  );
}
