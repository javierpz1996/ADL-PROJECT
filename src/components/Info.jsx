const Info = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center px-6 pt-32 pb-20 sm:pt-38 sm:pb-28"
      style={{
        backgroundImage: `url('https://cdn.steamstatic.com/apps/dota2/images/outlanders/patch-notes/bg_repeater.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "Fira Sans, sans-serif",
      }}
    >
      <h1
        className="text-5xl sm:text-7xl text-center mb-4"
        style={{
          fontFamily: "Cinzel, serif",
          fontWeight: 600,
          color: "rgba(255, 255, 255, 0.8)",
          textShadow: "0px 0px 10px #000, 0px 0px 5px #000",
        }}
      >
        Cómo empezar
      </h1>
      <div className="flex justify-center mb-10">
        <div className="w-16 sm:w-24 h-[3px] sm:h-[4px] bg-red-400"></div>
      </div>

      <p
        className="text-center mb-10 uppercase tracking-[2px]"
        style={{
          fontSize: "15px",
          color: "#999",
        }}
      >
        5 DE OCTUBRE 2025
      </p>
      <div
        className="flex flex-col items-center w-full"
        style={{ maxWidth: "1000px" }}
      >
        <div className="flex justify-center mb-8 w-full">
          <img
            src="https://clan.akamai.steamstatic.com/images/3703047/c1bc2216355cc4e326102d2af2c570ca5185dfb4.png"
            alt="Logo de la liga"
            className="w-full h-auto"
          />
        </div>
        <div
          className="w-full space-y-20 text-left"
          style={{ color: "rgba(255, 255, 255, 0.8)" }}
        >
          <div>
            <p
              style={{
                fontSize: "19px",
                lineHeight: "135%",
                letterSpacing: "0.5px",
              }}
            >
              Si querés jugar en la liga, primero necesitás tener un mmr de{" "}
              <span
                className="font-bold underline"
                style={{
                  textDecorationColor: "rgb(201 194 194 / 50%)",
                  textDecorationThickness: "3px",
                }}
              >
                6000+
              </span>{" "}
              . Sí, lo sabemos, suena serio, pero es la regla para poder entrar
              y disfrutar de partidas de calidad. Luego, se debe{" "}
              <span
                className="font-bold underline"
                style={{
                  textDecorationColor: "rgb(201 194 194 / 50%)",
                  textDecorationThickness: "3px",
                }}
              >
                solicitar el vouch
              </span>{" "}
              en el canal tickets-vouch de Discord, adjuntando la captura
              correspondiente. Una vez aprobado, registrate mediante{" "}
              <span
                className="font-bold underline"
                style={{
                  textDecorationColor: "rgb(201 194 194 / 50%)",
                  textDecorationThickness: "3px",
                }}
              >
                /register
              </span>{" "}
              [Friend ID] en el canal designado. Cumpliendo estos pasos, quedás
              habilitado para integrarte a la liga y empezar a jugar.
            </p>
          </div>
          <div>
            <h1
              className="text-5xl sm:text-7xl text-center my-4"
              style={{
                fontFamily: "Cinzel, serif",
                fontWeight: 600,
                color: "rgba(255, 255, 255, 0.85)",
                textShadow: "0px 0px 10px #000, 0px 0px 5px #000",
              }}
            >
              Reglamento
            </h1>
            <div className="flex justify-center mb-10">
              <div className="w-16 sm:w-24 h-[3px] sm:h-[4px] bg-red-400"></div>
            </div>

            <p
              style={{
                fontSize: "19px",
                lineHeight: "135%",
                letterSpacing: "0.5px",
              }}
            >
              Se espera que los jugadores cooperen con su equipo, jueguen hasta
              el final,{" "}
              <span
                className="font-bold underline"
                style={{
                  textDecorationColor: "rgb(201 194 194 / 50%)",
                  textDecorationThickness: "3px",
                }}
              >
                usen el micrófono
              </span>{" "}
              y activen Noise Suppression. El capitán tiene prioridad en el
              draft, y para rendirse se necesitan al menos tres acuerdos,{" "}
              <span
                className="font-bold underline"
                style={{
                  textDecorationColor: "rgb(201 194 194 / 50%)",
                  textDecorationThickness: "3px",
                }}
              >
                rendirse sin el consenso no está permitido
              </span>{" "}
              . Queda prohibido abandonar intencionalmente, hacer pausas
              innecesarias, trollear con buyback o draftear para molestar, y
              negarse a cooperar. Las penalidades serán evaluadas por los
              consejeros disponibles de la liga según la gravedad del caso.
            </p>
          </div>
          <div>
            <h1
              className="text-5xl sm:text-7xl text-center my-4"
              style={{
                fontFamily: "Cinzel, serif",
                fontWeight: 600,
                color: "rgba(255, 255, 255, 0.85)",
                textShadow: "0px 0px 10px #000, 0px 0px 5px #000",
              }}
            >
              Sistema de puntos
            </h1>
            <div className="flex justify-center mb-10">
              <div className="w-16 sm:w-24 h-[3px] sm:h-[4px] bg-red-400"></div>
            </div>

            <p
              style={{
                fontSize: "19px",
                lineHeight: "135%",
                letterSpacing: "0.5px",
              }}
            >
              Las partidas otorgan puntos según la diferencia de MMR entre
              equipos:{" "}
              <span
                className="font-bold underline"
                style={{
                  textDecorationColor: "rgb(201 194 194 / 50%)",
                  textDecorationThickness: "3px",
                }}
              >
                +25 como base y hasta +15
              </span>{" "}
              según la dificultad. Si ambos equipos están parejos, se obtienen
              25 puntos. Los capitanes deben armar sus equipos estratégicamente,
              pudiendo elegir jugadores con menos puntos si juegan bien, ya que
              ganar con más riesgo otorga más puntos.{" "}
              <span
                className="font-bold underline"
                style={{
                  textDecorationColor: "rgb(201 194 194 / 50%)",
                  textDecorationThickness: "3px",
                }}
              >
                La season cuenta con 4 resets
              </span>{" "}
              , y al final de cada uno se suman puntos adicionales según tu
              rendimiento. En cada nuevo reset comenzás desde cero, acumulando
              puntos hasta el final de la season, donde el jugador con más
              puntos totales será el ganador.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
