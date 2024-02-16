import Button from "./components/ui/Button";
import Header from "./components/ui/Header";
import Image from "next/image";

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
              style={{ width: "80%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
