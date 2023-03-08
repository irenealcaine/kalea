import React from "react";

const FrontPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="font-bold text-3xl">KALEA</h1>
      <nav>
        <ul className="flex gap-2">
          <li>
            <a href="#contact">Contacto</a>
          </li>
          <li>
            <a href="#menu">Especialidades</a>
          </li>
          <li>
            <a href="#gallery">Nosotros</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default FrontPage;
