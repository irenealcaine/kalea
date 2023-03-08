import React from "react";

const Menu = () => {
  return (
    <div id="menu" className="min-h-screen">
      <h2 className="text-3xl px-8 py-4 font-bold underline decoration-emerald-700 underline-offset-8">
        Especialidades
      </h2>
      <div className="w-11/12 mx-auto">
        <div className="border-2 border-emerald-700 rounded-tl-xxl rounded-br-xxl overflow-hidden">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"
            alt="imagen de la bebida"
          />
          <div class="text">
            <p className="text-center font-merienda pt-4 text-xl">Café</p>
            <p className="indent-4 text-justify px-4 py-2">
              El café es la bebida que se obtiene a partir de los granos
              tostados y molidos de los frutos de la planta del café (cafeto);
              es altamente estimulante por su contenido de cafeína,1​ una
              sustancia psicoactiva.2​ Es uno de los productos más
              comercializados a nivel mundial, además de estar entre las tres
              bebidas más consumidas por el ser humano (junto con el agua y el
              té).1
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
