"use client";
import React, { useState } from "react";
import Image from "next/image";
import { DropdownItem, ItemProps } from "./item";
import { RxCaretDown } from "react-icons/rx";
import { RxCaretUp } from "react-icons/rx";

type Props = {
  title: string;
  items: ItemProps[];
  icon: string;
};

export default function Dropdown({ title, items, icon }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown">
      <button className="dropdown-title" onClick={() => setOpen(!open)}>
        <div>
          <Image src={icon} alt="icon" width={64} height={64} />

          <span
            className="fw-bold ms-2 p-1"
            style={{
              fontSize: "1.2rem",
            }}
          >
            {title}
          </span>
        </div>

        {open ? (
          <RxCaretUp size={64} color="#FB6F92" />
        ) : (
          <RxCaretDown size={64} color="#FB6F92" />
        )}
      </button>
      {open && (
        <ul>
          {items.map((item, index) => (
            <DropdownItem {...item} key={index} />
          ))}
        </ul>
      )}
    </div>
  );
}
