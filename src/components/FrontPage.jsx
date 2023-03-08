import React from "react";

const FrontPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-8">
      <h1 className="">KALEA</h1>
      <nav>
        <ul className="flex flex-col items-center gap-4 font-merienda text-2xl">
          <li className="hover:underline hover:decoration-emerald-700">
            <a href="#menu">Especialidades</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
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
