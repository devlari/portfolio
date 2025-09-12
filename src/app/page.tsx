import HomePage from "./pages/Home";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import SobrePage from "./pages/Sobre";
import HabilidadesPage from "./pages/Habilidades";
import ProjetosPage from "./pages/Projetos";
import ContatoPage from "./pages/Contato";

export default function Home() {
  return (
    <div>
      <Header />

      <HomePage />

      <SobrePage />

      <HabilidadesPage />

      <ProjetosPage />

      <ContatoPage />

      <Footer />
    </div>
  );
}
