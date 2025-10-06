import React from "react";
import { motion } from "framer-motion";

const Unete = () => {
  return (
    <div>
      {/* Imagen con difuminado arriba y abajo */}
      <div
        className="relative bg-cover bg-no-repeat text-white h-[70vh]"
        style={{
          backgroundImage: "url('/Unete.jpg')", // 👈 imagen desde la carpeta public
          backgroundPosition: "center 90%", // mueve la imagen hacia abajo
        }}
      >
        {/* Overlay negro semitransparente + degradado arriba y abajo */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/50"></div>{" "}
          {/* oscuridad general */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>{" "}
          {/* difuminado */}
        </div>

        {/* Contenido centrado al final de la imagen */}
        <div className="relative flex flex-col justify-end items-center h-full px-4">
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-center"
            style={{ fontFamily: "Cinzel, serif", fontWeight: 600 }}
            initial={{ opacity: 0, y: 80 }} // 👈 inicia invisible y desplazado
            whileInView={{ opacity: 1, y: 0 }} // 👈 aparece al entrar en vista
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }} // 👈 se ejecuta cada vez que entra al viewport
          >
            <span className="text-white/50">Unete a</span> <br /> argentina dota
            league
          </motion.h1>

          <div className="w-24 h-[4px] bg-red-400 mt-6 mb-6"></div>
        </div>
      </div>

      {/* Sección negra abajo */}
      <div className="bg-black text-white flex flex-col items-center text-center px-4">
        <div className="max-w-3xl">
          <p
            className="text-base sm:text-lg mb-6"
            style={{ fontFamily: "Fira Sans, sans-serif", fontWeight: 400 }}
          >
            Cada semana, los mejores jugadores de Argentina se enfrentan en
            intensos combates de 5 contra 5 en nuestra liga de Dota. Con más de
            cien héroes para elegir, cada partida es una prueba de estrategia,
            habilidad y trabajo en equipo. Nuestra liga reúne el talento más
            destacado del país, ofreciendo enfrentamientos emocionantes que
            siempre dejan algo nuevo por descubrir. ¡Sumate y vive la
            experiencia del Dota argentino al máximo!
          </p>

          <button
            className="mt-8 flex px-6 py-3 items-center gap-4 border-3 border-gray-400 rounded-lg text-white hover:border-white transition mx-auto"
            style={{ fontFamily: "Fira Sans, sans-serif", fontWeight: 400 }}
          >
            <span className="text-2xl font-medium">VER EL PODIO</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Unete;
