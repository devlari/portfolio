"use client";
import React, { useState } from "react";
import Image from "next/image";
import { DropdownItem, ItemProps } from "./item";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import styles from "./Dropdown.module.css";

type Props = {
  title: string;
  items: ItemProps[];
  icon: string;
};

export default function Dropdown({ title, items, icon }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.dropdown}>
      <button className={styles.dropdownTitle} onClick={() => setOpen(!open)}>
        <div>
          <Image src={icon} alt="icon" width={64} height={64} unoptimized />
          <span className="fw-bold" style={{ fontSize: "1.2rem" }}>
            {title}
          </span>
        </div>
        {open ? <RxCaretUp size={64} color="#FB6F92" /> : <RxCaretDown size={64} color="#FB6F92" />}
      </button>

      {open && (
        <ul className={styles.dropdownList}>
          {items.map((item, index) => (
            <DropdownItem {...item} key={index} />
          ))}
        </ul>
      )}
    </div>
  );
}
