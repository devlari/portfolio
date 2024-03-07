import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-8">
            <span className="fw-bold">2024 ©️ devlari.vercel.app</span>
          </div>
          <div className="col-4 d-flex justify-content-end">
            <a className="navbar-brand fw-bold" href="#Home">
              <span className="text-black">&lt; Dev</span>
              <span className="text-white">Lari /&gt;</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
