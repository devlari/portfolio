import Image from "next/image";
import styles from "./SobrePage.module.css";

export default function SobrePage() {
  return (
    <section className={styles.sobre} id="sobre">
      <h2 className="text-center fw-bold mb-5">Sobre mim</h2>

      <div className={styles.sobreContent}>
        <div className={styles.left}>
          <Image src="/images/eu.png" alt="Minha foto" width={300} height={300} unoptimized />
        </div>

        <div className={styles.right}>
          <div className={styles.boxSobre}>
            <div className={styles.boxSobreText}>
              <p>
                Olá, eu sou a <strong>Larissa Sousa</strong>, desenvolvedora
                <strong> full-stack</strong> apaixonada por tecnologia e criação de soluções
                digitais.
              </p>
              <p>
                Minha jornada começou em 2018, no curso técnico de Informática da
                <strong> ETEC Professor Horácio Augusto da Silveira</strong>, onde tive meu primeiro
                contato com programação e desenvolvimento de sistemas.
              </p>
              <p>
                Em 2021, iniciei a graduação em
                <strong> Análise e Desenvolvimento de Sistemas</strong> e, em 2025, concluí a
                pós-graduação em
                <strong> Engenharia de Software com Métodos Ágeis</strong>, aprofundando meus
                conhecimentos em boas práticas de desenvolvimento.
              </p>
              <p>
                Atualmente, atuo principalmente com <strong>Next.js</strong>,
                <strong> Node.js</strong> e <strong>React Native</strong>, criando aplicações
                modernas, escaláveis e focadas na melhor experiência para o usuário.
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
    </section>
  );
}
