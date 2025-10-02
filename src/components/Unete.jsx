const Unete = () => {
  return (
    <div>
      {/* Imagen con difuminado arriba y abajo */}
      <div
        className="relative bg-cover bg-no-repeat text-white h-[70vh]"
        style={{
          backgroundImage:
            "url('https://media.discordapp.net/attachments/1398776532733788251/1423405188944891985/afkgaming_2023-10_904e1765-ed07-47d0-b739-853cfdc52957_Add_a_heading__46_-_1__1.jpg?ex=68e030e2&is=68dedf62&hm=3e3d78b8ee46ff774485f0a5d32e036334b18b190c3a74e0ff821bfd40e30025&=&format=webp&width=1510&height=793')",
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
          <h1
            className="text-6xl md:text-8xl font-bold text-center"
            style={{ fontFamily: "Cinzel, serif", fontWeight: 600 }}
          >
            <span className="text-white/50">Unete a</span> <br /> argentina dota
            league
          </h1>
          <div className="w-24 h-[4px] bg-red-400 mt-6 mb-6"></div>
        </div>
      </div>

      {/* Sección negra abajo */}
      <div className="bg-black text-white flex flex-col items-center text-center px-4 ">
        <div className="max-w-3xl">
          <p
            className="text-base sm:text-lg mb-6" // text-base = 16px en mobile, sm:text-lg = 18px en desktop
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
