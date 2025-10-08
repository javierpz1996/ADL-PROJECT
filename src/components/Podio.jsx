import * as React from "react";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Podio = () => {
  const [jugadores, setJugadores] = React.useState([]);
  const [jugadoresFiltrados, setJugadoresFiltrados] = React.useState([]);
  const [modo, setModo] = React.useState("general"); // 'general' o 'seasonal'
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await fetch("/api/players");
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();

        const playersWithPos = data.players.map((player, index) => ({
          pos: index + 1,
          nombre: player.nick,
          seasonalPoints: player.seasonalPoints ?? 0,
        }));

        setJugadores(playersWithPos);
        setJugadoresFiltrados(playersWithPos);
      } catch (err) {
        console.error("Error al obtener jugadores:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  const handleFiltro = (tipo) => {
    setModo(tipo);
    if (tipo === "seasonal") {
      const filtrados = jugadores.filter((p) => p.seasonalPoints > 0);
      setJugadoresFiltrados(filtrados);
    } else {
      setJugadoresFiltrados(jugadores);
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen bg-black">
        <Box sx={{ display: "flex" }}>
          <CircularProgress color="secondary" />
        </Box>
      </div>
    );

  if (error)
    return <div className="text-red-500 text-center mt-10">Error: {error}</div>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-[15vh] pb-20 relative">
      <div
        className="absolute inset-0 sm:hidden"
        style={{
          backgroundImage: `url('https://cdn.steamstatic.com/apps/dota2/images/leaderboards/globe.png'), url('https://cdn.steamstatic.com/apps/dota2/images/dota_react/backgrounds/greyfade.jpg')`,
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundSize: "200px 200px, cover",
          backgroundPosition: "right 2px top 215px, center",
        }}
      />
      <div
        className="absolute inset-0 hidden sm:block"
        style={{
          backgroundImage: `url('https://cdn.steamstatic.com/apps/dota2/images/leaderboards/globe.png'), url('https://cdn.steamstatic.com/apps/dota2/images/dota_react/backgrounds/greyfade.jpg')`,
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundSize: "350px 350px, cover",
          backgroundPosition: "right 380px top 212px, center",
        }}
      />

      <div className="relative z-10 w-full flex flex-col items-center">
        <h1
          className="text-[45px] sm:text-7xl text-center mb-3 sm:mb-[22px]"
          style={{
            fontFamily: "Cinzel, serif",
            fontWeight: 600,
            color: "rgba(255, 255, 255, 0.8)",
            textShadow: "0px 0px 10px #000, 0px 0px 5px #000",
          }}
        >
          Ranking ADL
        </h1>

        <div className="flex justify-center mb-10">
          <div className="w-16 sm:w-24 h-[3px] sm:h-[4px] bg-red-400"></div>
        </div>
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => handleFiltro("general")}
            className={`px-4 py-2 rounded-lg text-sm sm:text-base font-semibold transition ${
              modo === "general"
                ? "bg-red-500 text-white"
                : "bg-transparent text-gray-300 border border-gray-500 hover:bg-gray-700"
            }`}
          >
            Ranking General
          </button>
          <button
            onClick={() => handleFiltro("seasonal")}
            className={`px-4 py-2 rounded-lg text-sm sm:text-base font-semibold transition ${
              modo === "seasonal"
                ? "bg-red-500 text-white"
                : "bg-transparent text-gray-300 border border-gray-500 hover:bg-gray-700"
            }`}
          >
            Ranking Season
          </button>
        </div>

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
                    fontSize: "10px",
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
              {jugadoresFiltrados.length > 0 ? (
                jugadoresFiltrados.map((j, index) => {
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
                          fontSize: "10px",
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
                        }}
                      >
                        {j.nombre}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan={2}
                    style={{
                      textAlign: "center",
                      padding: "15px",
                      color: "#aaa",
                      backgroundColor: "#111",
                      fontSize: "0.85rem",
                    }}
                  >
                    No hay jugadores en esta categoría.
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Sheet>
      </div>
    </div>
  );
};

export default Podio;
