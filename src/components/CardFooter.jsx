import React from "react";
import { motion } from "framer-motion";

const CardFooter = () => {
  return (
    <div className="relative w-full h-[120vh]">
      {/* GIF de fondo */}
      <img
        src="https://static.wixstatic.com/media/31a184_96bb8cd44b7e475db6135f9648ec9b06~mv2.gif"
        alt="Fondo"
        className="w-full h-full object-cover"
      />

      {/* Overlay negro semitransparente + degradado arriba y abajo */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>

      {/* Contenido encima del GIF */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        {/* Imagen centrada encima del texto */}
        <img src="/Aegis.png" alt="Aegis" className="w-65 md:w-60 mb-18" />

        {/* 👇 H1 animado con framer-motion */}
        <motion.h1
          className="text-5xl md:text-8xl font-bold text-center"
          style={{ fontFamily: "Cinzel, serif", fontWeight: 600 }}
          initial={{ opacity: 0, y: 80 }} // empieza invisible y desplazado
          whileInView={{ opacity: 1, y: 0 }} // aparece cuando entra al viewport
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }} // se repite al scrollear
        >
          <span className="text-white/50">¿Serás digno</span> <br />
          de reclamar el aegis?
        </motion.h1>

        <div className="w-24 h-[4px] bg-red-400 mt-6 mb-6"></div>

        <div className="max-w-3xl">
          <p
            className="text-lg mb-6"
            style={{ fontFamily: "Fira Sans, sans-serif", fontWeight: 400 }}
          >
            Durante 4 semanas, los mejores jugadores del país se enfrentan en
            intensos combates de Dota 2. Cada partida es una prueba de
            estrategia, habilidad y trabajo en equipo, donde cada punto puede
            marcar la diferencia. Al final de la liga, solo aquel que sume más
            victorias se consagrará como campeón y reclamará el Aegis.
          </p>
        </div>

        <button
          className="mt-1 flex pl-6 pr-6 items-center gap-4 p-3 border-3 border-gray-400 rounded-lg text-white hover:border-white transition"
          style={{ fontFamily: "Fira Sans, sans-serif", fontWeight: 400 }}
        >
          <div>
            <i className="fa-brands fa-discord w-7 h-7 text-2xl"></i>
          </div>
          <div className="text-left">
            <span className="block text-2xl font-medium">JUEGA GRATIS</span>
            <span className="block text-sm text-gray-400">
              ENTRA AL DISCORD
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default CardFooter;
