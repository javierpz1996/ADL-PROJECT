import React, { useState } from "react";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom"; // 👈 importar Link

const CardsInfo = () => {
  const cards = [
    {
      title: "COMO EMPEZAR A JUGAR",
      date: "2 DE SEPTIEMBRE",
      bg: "/Card2.png",
      desc: "Aprendé cómo registrarte, unirte a un equipo y comenzar a competir en la liga. Encontrá toda la información necesaria para crear tu cuenta, configurar tu perfil, y empezar a jugar desde el primer día sin complicaciones.",
    },
    {
      title: "REGLAMENTO",
      date: "2 DE SEPTIEMBRE",
      bg: "/Card4.jpg",
      desc: "Conocé todas las reglas oficiales y el formato de los enfrentamientos. Aprendé sobre las penalizaciones, cómo se realizan las partidas, los horarios establecidos y cómo mantener el juego limpio para garantizar una competencia justa y organizada.",
    },
    {
      title: "SISTEMA DE PUNTOS",
      date: "2 DE SEPTIEMBRE",
      bg: "/Card3.png",
      desc: "Descubrí cómo se otorgan los puntos y cómo escalar posiciones en la liga. Entendé los criterios de clasificación, la puntuación por victoria o derrota, y cómo planificar tus partidas estratégicamente para maximizar tus resultados y avanzar en la tabla.",
    },
  ];

  return (
    <Box sx={{ bgcolor: "black", py: 5 }}>
      <Box
        sx={{
          maxWidth: "1220px",
          margin: "0 auto",
          px: 2,
          mb: 4,
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
          <i className="fa-solid fa-arrow-right ml-1 text-gray-400"></i>
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          justifyContent: "center",
          gap: { xs: 4, sm: 4 },
          maxWidth: "1220px",
          margin: "0 auto",
          px: 1.5,
        }}
      >
        {cards.map((card, index) => (
          <HoverCard key={index} card={card} />
        ))}
      </Box>
    </Box>
  );
};

const HoverCard = ({ card }) => {
  const [hover, setHover] = useState(false);

  return (
    <Link to="/reglamento">
      {" "}
      {/* 👈 envolver la card con Link */}
      <motion.div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Card
          sx={{
            height: { xs: 230, sm: 250 },
            width: { xs: "100%", sm: 380 },
            mx: "auto",
            position: "relative",
            color: "white",
            backgroundImage: `url('${card.bg}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            overflow: "hidden",
            borderRadius: 0,
          }}
        >
          {/* Overlay animado más claro */}
          <motion.div
            animate={{
              backgroundColor: hover ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.3)",
            }}
            transition={{ duration: 0.3 }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1,
            }}
          />

          {/* Contenido animado */}
          <motion.div
            style={{
              position: "relative",
              zIndex: 2,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "flex-start",
              padding: "16px",
            }}
          >
            <Typography
              className="text-white/50"
              gutterBottom
              sx={{ fontSize: 15 }}
              style={{ fontFamily: "Fira Sans, sans-serif", fontWeight: 400 }}
            >
              {card.date}
            </Typography>
            <Typography
              className="text-white/80"
              variant="body2"
              sx={{ fontSize: 23 }}
              style={{ fontFamily: "Fira Sans, sans-serif", fontWeight: 600 }}
            >
              {card.title}
            </Typography>

            {/* Descripción que aparece al hacer hover */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: hover ? 1 : 0,
                height: hover ? "auto" : 0,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              style={{ overflow: "hidden", marginTop: 4 }}
            >
              <Typography
                sx={{ fontSize: 14 }}
                style={{ fontFamily: "Fira Sans, sans-serif", fontWeight: 400 }}
                className="text-gray-300"
              >
                {card.desc}
              </Typography>
            </motion.div>
          </motion.div>

          {/* Borde inferior animado */}
          <motion.div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "2px",
              backgroundColor: "#555",
              zIndex: 3,
            }}
            animate={{ backgroundColor: hover ? "#f87171" : "#555" }}
            transition={{ duration: 0.3 }}
          />
        </Card>
      </motion.div>
    </Link>
  );
};

export default CardsInfo;
