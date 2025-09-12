import Image from "next/image";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <section className={styles.home} id="home">
      <div className={styles.homeContent}>
        <div className={styles.left}>
          <header className={styles.intro}>
            <span className="fw-bold">Oi, meu nome é</span>
            <h1 className={`fw-bold ${styles.titleHome}`}>Larissa Sousa</h1>
            <h2 className={`fw-bold ${styles.subtitleHome}`}>
              Eu desenvolvo <span className="pink">websites</span>
            </h2>
          </header>
          <p>
            Estou na área de desenvolvimento desde 2021, e possuo experiência com diversas
            linguagens e frameworks.
          </p>
          <a className="btn bg-pink" href="#projetos">
            Conheça meus projetos
          </a>
        </div>

        <div className={styles.right}>
          <figure>
            <Image
              src="/images/PC.png"
              alt="PC"
              width={0}
              height={0}
              sizes="80vw"
              style={{ width: "90%", height: "auto" }}
              unoptimized
            />
            <figcaption className="visually-hidden">Imagem de um computador</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
