import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const CardsInfo = () => {
  return (
    <div>
      {/* Contenedor padre con fondo negro */}
      <Box sx={{ bgcolor: "black", py: 5 }}>
        {/* Título */}
        <Box
          sx={{
            maxWidth: "1220px",
            margin: "0 auto",
            px: 2,
            mb: 4, // margen inferior para separar del grid
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            REGLAMENTO{" "}
            <span className="text-sm text-gray-400 pl-4">VER TODO </span>
            <i class="fa-solid fa-arrow-right ml-1 text-gray-400"></i>
          </Typography>
        </Box>

        {/* Grid de Cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            justifyContent: "center",
            gap: { xs: 4, sm: 4 }, // 60px en móviles, 16px (4) en desktop
            maxWidth: "1220px",
            margin: "0 auto",
            px: 1.5,
          }}
        >
          <Card
            sx={{
              height: { xs: 230, sm: 250 }, // 180px en móviles, 250px en desktop
              width: { xs: "100%", sm: 380 }, // 90% del ancho en móviles, 380px en desktop
              mx: "auto",
              position: "relative",
              color: "white",
              backgroundImage:
                "url('https://larepublica.cronosmedia.glr.pe/original/2022/06/02/6299184d4b9eb81b6563aa36.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                bgcolor: "rgba(0,0,0,0.5)",
                zIndex: 1,
                borderRadius: "4px",
              }}
            />
            <CardContent
              sx={{
                position: "relative",
                zIndex: 2,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "flex-start", // cambia de "center" a "flex-start"
                textAlign: "left", // cambia de "center" a "left"
                pb: 2,
              }}
            >
              <Typography
                className="text-white/50"
                gutterBottom
                sx={{ fontSize: 15 }} // gris claro
                style={{ fontFamily: "Fira Sans, sans-serif", fontWeight: 400 }}
              >
                2 DE SEPTIEMBRE
              </Typography>
              <Typography
                className="text-gray-350"
                variant="body2"
                sx={{ fontSize: 23 }}
                style={{ fontFamily: "Fira Sans, sans-serif", fontWeight: 600 }}
              >
                COMO EMPEZAR A JUGAR
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              height: { xs: 230, sm: 250 }, // 180px en móviles, 250px en desktop
              width: { xs: "100%", sm: 380 }, // 90% del ancho en móviles, 380px en desktop
              mx: "auto",
              position: "relative",
              color: "white",
              backgroundImage:
                "url('https://larepublica.cronosmedia.glr.pe/original/2022/06/02/6299184d4b9eb81b6563aa36.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                bgcolor: "rgba(0,0,0,0.5)",
                zIndex: 1,
                borderRadius: "4px",
              }}
            />
            <CardContent
              sx={{
                position: "relative",
                zIndex: 2,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "flex-start", // cambia de "center" a "flex-start"
                textAlign: "left", // cambia de "center" a "left"
                pb: 2,
              }}
            >
              <Typography
                className="text-white/50"
                gutterBottom
                sx={{ fontSize: 15 }} // gris claro
                style={{ fontFamily: "Fira Sans, sans-serif", fontWeight: 400 }}
              >
                2 DE SEPTIEMBRE
              </Typography>
              <Typography
                className="text-gray-350"
                variant="body2"
                sx={{ fontSize: 23 }}
                style={{ fontFamily: "Fira Sans, sans-serif", fontWeight: 600 }}
              >
                REGLAMENTO
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              height: { xs: 230, sm: 250 }, // 180px en móviles, 250px en desktop
              width: { xs: "100%", sm: 380 }, // 90% del ancho en móviles, 380px en desktop
              mx: "auto",
              position: "relative",
              color: "white",
              backgroundImage:
                "url('https://larepublica.cronosmedia.glr.pe/original/2022/06/02/6299184d4b9eb81b6563aa36.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                bgcolor: "rgba(0,0,0,0.5)",
                zIndex: 1,
                borderRadius: "4px",
              }}
            />
            <CardContent
              sx={{
                position: "relative",
                zIndex: 2,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "flex-start", // cambia de "center" a "flex-start"
                textAlign: "left", // cambia de "center" a "left"
                pb: 2,
              }}
            >
              <Typography
                className="text-white/50"
                gutterBottom
                sx={{ fontSize: 15 }} // gris claro
                style={{ fontFamily: "Fira Sans, sans-serif", fontWeight: 400 }}
              >
                2 DE SEPTIEMBRE
              </Typography>
              <Typography
                className="text-gray-350"
                variant="body2"
                sx={{ fontSize: 23 }}
                style={{ fontFamily: "Fira Sans, sans-serif", fontWeight: 600 }}
              >
                SISTEMA DE PUNTOS
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </div>
  );
};

export default CardsInfo;
