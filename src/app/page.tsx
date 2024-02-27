import { Browsers } from "@phosphor-icons/react";
import Button from "./components/ui/Button";
import Header from "./components/ui/Header";
import Image from "next/image";
import Dropdown from "./components/ui/Dropdown";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="container" id="home">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <div className="box-home">
              <span className="fw-bold">Oi, meu nome é</span>
              <h1 className="title-home fw-bold">Larissa Sousa</h1>
              <h2 className="subtitle-home fw-bold">
                Eu desenvolvo <span className="pink">websites</span>
              </h2>
              <p>
                Estou na área de desenvolvimento desde 2021, e possuo
                experiência com diversas linguagens e frameworks.
              </p>
              <Button text="Conheça meus projetos" />
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <Image
              src="/images/PC.png"
              alt="PC"
              width={0}
              height={0}
              sizes="80vw"
              style={{ width: "90%", height: "auto" }}
            />
          </div>
        </div>
      </div>

      <div className="container-fluid" id="sobre">
        <h2 className="text-center fw-bold mb-5">Sobre mim</h2>
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center">
            <Image
              src="/images/eu.png"
              alt="Minha foto"
              width={300}
              height={300}
            />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div className="box-sobre">
              <div className="box-sobre-text">
                <p>
                  Olá e seja bem-vindo! Meu nome é Larissa, tenho 21 anos e sou
                  desenvolvedora full-stack.
                </p>
                <p>
                  Iniciei em 2018, no ensino técnico de informática na ETEC
                  Professor Horácio Augusto da Silveira.
                </p>
                <p>
                  Em 2021, iniciei graduação em Análise e Desenvolvimento de
                  Sistemas e atualmente estou na minha pós-graduação em
                  Engenharia de Software com Métodos Ágeis.
                </p>
                <p>
                  Hoje, trabalho principalmente com Next.js, Node e React
                  Native!
                </p>
              </div>
              <Button text="Baixe meu currículo" />
            </div>
          </div>
        </div>
      </div>

      <div
        className="container"
        style={{
          height: "5000px",
        }}
        id="habilidades"
      >
        <h2 className="text-center fw-bold mb-5">Habilidades</h2>
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <Dropdown
              icon="/images/icons/browsers.svg"
              title="Front-end"
              items={[
                { name: "HTML", percent: 90 },
                { name: "CSS", percent: 90 },
                { name: "JavaScript", percent: 90 },
              ]}
            />
            <Dropdown
              icon="/images/icons/layout.svg"
              title="Designer"
              items={[{ name: "Figma", percent: 90 }]}
            />
            <Dropdown
              icon="/images/icons/hard-drives.svg"
              title="Back-end"
              items={[
                { name: "Node", percent: 90 },
                { name: "Express", percent: 90 },
                { name: "MongoDB", percent: 90 },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
