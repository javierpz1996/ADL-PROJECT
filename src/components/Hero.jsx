const Hero = () => {
  return (
    <section className="relative w-full h-[500px] sm:h-[620px] overflow-hidden">
      <video
        src="/HeroMp4.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 sm:h-40 bg-gradient-to-t from-black/100 to-transparent"></div>
      <div className="relative z-10 h-full">
        <div
          className="absolute bottom-14 sm:top-40 left-6 sm:left-20 text-white font-bold"
          style={{ fontFamily: "Cinzel, serif", fontWeight: 600 }}
        >
          <div className="text-4xl sm:text-7xl leading-[1]">
            "Los mejores jugadores
          </div>
          <div className="text-4xl sm:text-7xl leading-[1]">de sudamerica</div>
          <div className="text-4xl sm:text-7xl leading-[1]">
            en un solo lugar"
          </div>
          <div className="w-16 sm:w-24 h-[3px] sm:h-[4px] bg-red-400 mt-2 sm:mt-3"></div>
          <a
            href="https://discord.gg/mPxMmPcCm4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="mt-6 sm:mt-8 flex items-center gap-3 sm:gap-5 px-6 sm:px-8 py-3 sm:py-4 border-2 sm:border-3 border-gray-400 rounded-lg text-white hover:border-white transition cursor-pointer"
              style={{ fontFamily: "Fira Sans, sans-serif", fontWeight: 500 }}
            >
              <div>
                <i className="fa-brands fa-discord w-6 h-6 sm:w-8 sm:h-8 text-2xl sm:text-3xl"></i>
              </div>
              <div className="text-left ml-2 sm:ml-0">
                <span className="block text-2xl sm:text-4xl font-semibold">
                  JUEGA GRATIS
                </span>
                <span className="block text-sm sm:text-lg text-gray-400">
                  ENTRA AL DISCORD
                </span>
              </div>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
