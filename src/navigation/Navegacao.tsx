import { useState } from "react";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";

type NavegacaoProps = {
  onLogout: () => void;
};

export default function Navegacao({ onLogout }: NavegacaoProps) {
  const [telaAtual, setTelaAtual] = useState("Home");

  if (telaAtual === "Sobre") {
    return <AboutPage onBack={() => setTelaAtual("Home")} />;
  }

  if (telaAtual === "Contato") {
    return <ContactPage onBack={() => setTelaAtual("Home")} />;
  }

  return (
    <HomePage
      onNavigate={(proximaTela) => setTelaAtual(proximaTela)}
      onLogout={onLogout}
    />
  );
}
