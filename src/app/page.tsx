import Header from "./components/ui/Header";
import Image from "next/image";
import Dropdown from "./components/ui/Dropdown";
import Carousel from "./components/ui/Carousel";
import Footer from "./components/ui/Footer";
import Link from "./components/ui/Link";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="container" id="home">
        <div className="row">
          <div className="col-md-6 col-11 offset-1 offset-md-0 d-flex align-items-center">
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
              <a className="btn bg-pink" href="#projetos">
                Conheça meus projetos
              </a>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-block d-flex justify-content-center">
            <Image
              src="/images/PC.png"
              alt="PC"
              width={0}
              height={0}
              sizes="80vw"
              style={{ width: "90%", height: "auto" }}
              unoptimized
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
              unoptimized
            />
          </div>
          <div className="col-md-6 col-12 d-flex align-items-center">
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
              <a
                href="/assets/curriculo.pdf"
                download="cv-larissa-sousa"
                target="_blank"
                rel="noreferrer"
                className="btn bg-pink"
              >
                Baixe meu currículo
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container" id="habilidades">
        <h2 className="text-center fw-bold mt-5">Habilidades</h2>
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <Dropdown
              icon="/images/icons/browsers.svg"
              title="Front-end"
              items={[
                { name: "HTML", percent: 90 },
                { name: "CSS", percent: 90 },
                { name: "JavaScript", percent: 90 },
                { name: "Typescript", percent: 80 },
                { name: "React", percent: 80 },
                { name: "Next.js", percent: 80 },
                { name: "React Native", percent: 75 },
              ]}
            />
            <Dropdown
              icon="/images/icons/layout.svg"
              title="Designer"
              items={[{ name: "Figma", percent: 80 }]}
            />
            <Dropdown
              icon="/images/icons/hard-drives.svg"
              title="Back-end"
              items={[
                { name: "Node", percent: 80 },
                { name: "Express", percent: 80 },
                { name: "MySQL", percent: 80 },
                { name: "PostgreSQL", percent: 80 },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="container-fluid" id="projetos">
        <h2 className="text-center fw-bold mt-5 mb-4">Projetos</h2>
        <Carousel
          items={[
            {
              image: "/images/projects/pokeapi.png",
              title: "Pokedex",
              description:
                "Desenvolvida com Next.js, consome a PokeAPI. É uma SPA que lista pokémons, e pode ser filtrada por nome ou ID.",
              linkGithub: "https://github.com/devlari/pokeapi",
              linkSite: "https://pokeapi-devlari.vercel.app/",
              linkFigma:
                "https://www.figma.com/file/Gx8ItNOh7KGNM07fH67qCJ/PokeAPI?type=design&node-id=0%3A1&mode=design&t=5mgzSzh5IYXXR484-1",
            },
            {
              image: "/images/projects/gamechoose.png",
              title: "GameChoose",
              description:
                "Site fictício de compra de jogos online, incialmente feito com HTML, CSS, Javascript e Bulma.",
              linkFigma:
                "https://www.figma.com/file/e3IuNTvejzuZRgU8mxBpi3/GameChoose?type=design&mode=design&t=GwXB0myPS3MMVnYS-1",
              linkGithub: "https://github.com/devlari/gamechoose",
            },
          ]}
        />
      </div>

      <div className="container" id="contato">
        <h2 className="text-center fw-bold mt-5">Contato</h2>
        <p className="text-center">
          Entre em contato comigo através dos botões abaixo!
        </p>
        <div className="image-contato">
          <Image
            src="/images/contato.png"
            alt="Celular"
            layout="responsive"
            className="d-block mx-auto"
            width={0}
            height={0}
            unoptimized
          />
        </div>
        <div className="d-flex justify-content-evenly">
          <Link
            icon="/images/icons/envelope.svg"
            text="E-mail"
            href="mailto:lrss.sousa.silva@gmail.com"
          />

          <Link
            icon="/images/icons/linkedin-logo-white.svg"
            text="Linkedin"
            href="https://www.linkedin.com/in/larissa-sousa-silva-491893204/"
          />

          <Link
            icon="/images/icons/github-logo-white.svg"
            text="Github"
            href="https://github.com/devlari"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
