"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Header() {
  const [show, setShow] = useState(false);
  const [menuWhite, setMenuWhite] = useState(false);

  function toggleMenu() {
    setShow(!show);
  }

  useEffect(() => {
    console.log("aqui");

    function handleScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > 100) {
        setMenuWhite(true);
      } else {
        setMenuWhite(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar sticky-top navbar-expand-md onTop ${
        menuWhite && "bg-white shadow-sm"
      } `}
    >
      <div className="container-fluid">
        <a className="navbar-brand fw-bold p-3" href="#Home">
          <span className="text-black">&lt; Dev</span>
          <span className="pink">Lari /&gt;</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse justify-content-end ${
            show && "show"
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav" id="navbarNav">
            <li className="nav-item">
              <a
                className={`nav-link ${menuWhite && "text-black"}`}
                href="#sobre"
              >
                Sobre
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${menuWhite && "text-black"}`}
                href="#habilidades"
              >
                Habilidades
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${menuWhite && "text-black"}`}
                href="#projetos"
              >
                Projetos
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${menuWhite && "text-black"}`}
                href="#contato"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
