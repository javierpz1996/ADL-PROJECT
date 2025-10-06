import * as React from "react";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import ReactCountryFlag from "react-country-flag";

const jugadores = [
  { pos: 1, nombre: "teclubi", pais: "US" },
  { pos: 2, nombre: "zur2", pais: "PE" },
  { pos: 3, nombre: "Brice Swyre", pais: "GB" },
  { pos: 4, nombre: "Otro Jugador", pais: "FR" },
  { pos: 5, nombre: "Más Jugador", pais: "DE" },
  { pos: 6, nombre: "Jugador Extra", pais: "BR" },
];

const Podio = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-[15vh] pb-20 relative">
      {/* Fondo mobile */}
      <div
        className="absolute inset-0 sm:hidden"
        style={{
          backgroundImage: `url('https://cdn.steamstatic.com/apps/dota2/images/leaderboards/globe.png'), url('https://cdn.steamstatic.com/apps/dota2/images/dota_react/backgrounds/greyfade.jpg')`,
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundSize: "200px 200px, cover",
          backgroundPosition: "right 2px top 215px, center",
          backgroundBlendMode: "normal, normal",
        }}
      />

      {/* Fondo desktop */}
      <div
        className="absolute inset-0 hidden sm:block"
        style={{
          backgroundImage: `url('https://cdn.steamstatic.com/apps/dota2/images/leaderboards/globe.png'), url('https://cdn.steamstatic.com/apps/dota2/images/dota_react/backgrounds/greyfade.jpg')`,
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundSize: "350px 350px, cover",
          backgroundPosition: "right 380px top 212px, center",
          backgroundBlendMode: "normal, normal",
        }}
      />

      {/* Contenido encima del fondo */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <h1
          className="text-5xl sm:text-7xl text-center mb-6.5"
          style={{
            fontFamily: "Cinzel, serif",
            fontWeight: 600,
            color: "rgba(255, 255, 255, 0.8)",
            textShadow: "0px 0px 10px #000, 0px 0px 5px #000",
          }}
        >
          Ranking ADL
        </h1>

        {/* Línea decorativa */}
        <div className="flex justify-center mb-10">
          <div className="w-16 sm:w-24 h-[3px] sm:h-[4px] bg-red-400"></div>
        </div>

        {/* Última actualización */}
        <div
          style={{
            fontSize: "0.8rem",
            marginBottom: "12px",
            opacity: 0.8,
            textAlign: "center",
            fontFamily: "Fira Sans, sans-serif",
            fontWeight: 400,
          }}
        >
          <span
            className="text-white/50"
            style={{
              fontFamily: "Fira Sans, sans-serif",
              fontWeight: 400,
              fontSize: 12,
              textAlign: "center",
              marginBottom: "12px",
            }}
          >
            Última actualización: 04/10/2025 <br />
            Próxima actualización: 04/10/2025
          </span>
        </div>

        {/* Tabla */}
        <Sheet
          sx={{
            width: { xs: "85%", sm: "600px" },
            overflowX: "auto",
            p: 0,
            border: "none",
            textAlign: "center",
          }}
        >
          <Table
            variant="soft"
            borderAxis="bothBetween"
            sx={{
              border: "3px solid #3b3a38",
              borderCollapse: "collapse",
              width: "100%",
              margin: "0 auto",
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    width: "45px",
                    color: "#d0d0d0",
                    textAlign: "center",
                    verticalAlign: "middle",
                    borderRight: "3px solid #3b3a38",
                    borderBottom: "3px solid #3b3a38",
                    backgroundColor: "black",
                    padding: "2px 0",
                    fontSize: "0.7rem",
                    lineHeight: "0.9rem",
                  }}
                >
                  Clasif.
                </th>
                <th
                  className="flex items-center text-left"
                  style={{
                    color: "#d0d0d0",
                    borderBottom: "3px solid #3b3a38",
                    backgroundColor: "black",
                    padding: "2px 8px",
                    fontSize: "0.75rem",
                    lineHeight: "1rem",
                  }}
                >
                  Jugador
                </th>
              </tr>
            </thead>
            <tbody>
              {jugadores.map((j, index) => {
                const bgColor = index % 2 === 0 ? "#181918" : "#202020";
                return (
                  <tr key={`${j.pos}-${index}`}>
                    <th
                      scope="row"
                      style={{
                        borderRight: "3px solid #3b3a38",
                        borderBottom: "2px solid #3b3a38",
                        textAlign: "center",
                        backgroundColor: bgColor,
                        color: "#d0d0d0",
                        fontSize: "0.7rem",
                        padding: "1px 0",
                        lineHeight: "0.9rem",
                      }}
                    >
                      {j.pos}
                    </th>
                    <td
                      style={{
                        padding: "2px 10px",
                        backgroundColor: bgColor,
                        color: "#d0d0d0",
                        borderBottom: "2px solid #3b3a38",
                        textAlign: "left",
                        fontSize: "0.80rem",
                        fontWeight: "bold",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span>{j.nombre}</span>
                      <ReactCountryFlag
                        countryCode={j.pais}
                        svg
                        style={{ width: "17px", height: "30px" }}
                        title={j.pais}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Sheet>
      </div>
    </div>
  );
};

export default Podio;
