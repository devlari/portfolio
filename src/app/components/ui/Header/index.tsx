"use client";

import React, { useState } from "react";

export default function Header() {
  const [show, setShow] = useState(false);

  function toggleMenu() {
    setShow(!show);
  }

  return (
    <nav className="navbar sticky-top navbar-expand-md onTop">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold mt-3" href="#Home">
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
              <a className="nav-link" href="#sobre">
                Sobre
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#habilidades">
                Habilidades
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projetos">
                Projetos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contato">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
