import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <span className={styles.footerText}>2025 ©️ devlari.vercel.app</span>
        <a className={styles.footerBrand} href="#home">
          <span className="text-black">&lt; Dev</span>
          <span className="text-white">Lari /&gt;</span>
        </a>
      </div>
    </footer>
  );
}
