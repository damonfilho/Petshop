import React from "react";
import imagem from "../assets/img/doguito404.svg";
import "../assets/css/404.css";

const Pagina404 = () => {
  return (
    <main className="container flex flex--centro flex--coluna">
      <img className="doquito-imagem" src={imagem} alt="ilustração doquito" />
      <p className="naoencontrado-texto">quer o que aqui arrombado au essa pagina não existe  </p>
    </main>
  );
};

export default Pagina404;
