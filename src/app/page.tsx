import HomePage from "./pages/Home";
import Header from "./components/ui/Header";
import Image from "next/image";
import Carousel from "./components/ui/Carousel";
import Footer from "./components/ui/Footer";
import Link from "./components/ui/Link";
import SobrePage from "./pages/Sobre";
import HabilidadesPage from "./pages/Habilidades";

export default function Home() {
  return (
    <div>
      <Header />

      <HomePage />

      <SobrePage />

      <HabilidadesPage />

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
            {
              image: "/images/projects/prounion.png",
              title: "ProUnion - Landing Page",
              description:
                "Landing page da empresa de tecnologia ProUnion, feita com HTML, CSS e Javascript.",
              linkSite: "https://prounion.com.br/",
            },
            {
              image: "/images/projects/proc.png",
              title: "Sistema PROC - Landing Page",
              description:
                "Landing page do SAAS (Software as a Service) PROC, feita com HTML, CSS e Javascript.",
              linkSite: "https://sistemaproc.com.br/",
            },
            {
              image: "/images/projects/wikiproc.png",
              title: "Wiki PROC",
              description: "Blog de tutoriais e dicas sobre o software PROC, feito com Wordpress.",
              linkSite: "https://wiki.sistemaproc.com.br/",
            },
          ]}
        />
      </div>

      <div className="container" id="contato">
        <h2 className="text-center fw-bold mt-5">Contato</h2>
        <p className="text-center">Entre em contato comigo através dos botões abaixo!</p>
        <div className="image-contato">
          <Image
            src="/images/contato.png"
            alt="Celular"
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
