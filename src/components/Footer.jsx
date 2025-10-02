import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Nombre de la liga */}
        <h1
          className="text-xl sm:text-2xl font-bold"
          style={{ fontFamily: "Cinzel, serif" }}
        >
          ADL Dota 2
        </h1>

        {/* Enlace a Discord */}
        <a
          href="https://discord.com" // reemplaza con tu link de invitación
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-300 hover:text-white transition"
          style={{ fontFamily: "Fira Sans, sans-serif", fontWeight: 400 }}
        >
          <i className="fa-brands fa-discord text-2xl"></i>
          <span className="text-sm sm:text-base">Entrá a nuestro Discord</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
