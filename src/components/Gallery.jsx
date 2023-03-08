import React from "react";

const Gallery = () => {
  return (
    <div id="gallery" className="min-h-screen">
      <h2 className="text-3xl px-8 py-4 font-bold underline decoration-emerald-700 underline-offset-8">
        Nosotros
      </h2>
      <div className="w-11/12 mx-auto">
        <div>
          <p className="indent-4 text-justify">
            Si estás buscando una terraza llena de diversión, música y un
            ambiente inolvidable, no puedes perderte la oportunidad de visitar
            nuestro bar en Casinos, Valencia.{" "}
          </p>
          <p className="indent-4 text-justify">
            En nuestro local, te garantizamos una experiencia única en la que
            podrás probar deliciosos cócteles, conocer a gente nueva y disfrutar
            de la vibrante vida nocturna de nuestro pueblo. Ya sea que estés
            buscando relajarte después de un día de turismo o simplemente
            quieres pasar un buen rato, nuestro bar de copas es el lugar
            perfecto para ti.
          </p>{" "}
          <p className="indent-4 text-justify">
            Así que no lo pienses más y ¡únete a la fiesta! Te aseguramos que
            tendrás una noche que nunca olvidarás.
          </p>
        </div>
        <div>
          <div className="border border-emerald-400 relative rounded-xl px-4 py-2 bg-emerald-900/20">
            <p className="font-merienda indent-4">Nombre del cliente</p>
            <p>
              Esta es una opinión de un cliente. Esta es una opinión de un
              cliente.
            </p>
            <div className="absolute -top-3 right-2">🧡🧡🧡🧡🧡</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
