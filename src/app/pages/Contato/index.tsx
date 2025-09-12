import Link from "../../components/ui/Link";
import Image from "next/image";
import styles from "./ContatoPage.module.css";

export default function ContatoPage() {
  return (
    <div className="container" id="contato">
      <h2 className="text-center fw-bold mt-5">Contato</h2>
      <p className="text-center">Entre em contato comigo através dos botões abaixo!</p>
      <div className={styles.imageContato}>
        <Image
          src="/images/contato.png"
          alt="Celular"
          className="d-block mx-auto"
          width={300}
          height={300}
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
  );
}
