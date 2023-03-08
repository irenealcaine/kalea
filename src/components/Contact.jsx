import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen">
      <h2 className="text-3xl px-8 py-4 font-bold underline decoration-emerald-700 underline-offset-8">
        Contacto
      </h2>
      <div className="w-11/12 mx-auto">
        <div>
          <p>📞 +34 654 32 16 35</p>
          <p>🌍 Calle Vicente nº4, bajo</p>
          <p>✉ kalea@kalea.es</p>
        </div>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d912.6581921916197!2d-0.7067110553166821!3d39.69911043508285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd608dd767593b93%3A0x6762e43fb7924b13!2sKlea%2033!5e0!3m2!1ses!2ses!4v1675760875709!5m2!1ses!2ses"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
