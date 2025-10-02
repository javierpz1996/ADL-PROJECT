const Hero = () => {
  return (
    <section className="relative w-full h-[500px] sm:h-[620px] overflow-hidden">
      {/* Video de fondo */}
      <video
        src="/HeroMp4.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover object-top"
      />

      {/* Capa oscura completa */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Gradiente en la parte de abajo */}
      <div className="absolute bottom-0 left-0 w-full h-32 sm:h-40 bg-gradient-to-t from-black/100 to-transparent"></div>

      {/* Contenido */}
      <div className="relative z-10 h-full">
        <div
          className="absolute bottom-10 sm:top-40 left-6 sm:left-20 text-white font-bold"
          style={{ fontFamily: "Cinzel, serif", fontWeight: 600 }}
        >
          <div className="text-4xl sm:text-7xl leading-[1]">
            "Los mejores jugadores
          </div>
          <div className="text-4xl sm:text-7xl leading-[1]">de Argentina</div>
          <div className="text-4xl sm:text-7xl leading-[1]">
            en un solo lugar"
          </div>

          {/* Línea decorativa */}
          <div className="w-16 sm:w-24 h-[3px] sm:h-[4px] bg-red-400 mt-2 sm:mt-3"></div>

          {/* Botón Discord */}
          <button
            className="mt-15 sm:mt-8 flex pl-4 pr-4 sm:pl-6 sm:pr-6 items-center gap-2 sm:gap-4 p-2 sm:p-3 border-2 sm:border-3 border-gray-400 rounded-lg text-white hover:border-white transition"
            style={{ fontFamily: "Fira Sans, sans-serif", fontWeight: 400 }}
          >
            <div>
              <i className="fa-brands fa-discord w-5 h-5 sm:w-7 sm:h-7 text-xl sm:text-2xl"></i>
            </div>
            <div className="text-left ml-2 sm:ml-0">
              <span className="block text-lg sm:text-2xl font-medium">
                JUEGA GRATIS
              </span>
              <span className="block text-xs sm:text-sm text-gray-400">
                ENTRA AL DISCORD
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
