import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const CardsInfo = () => {
  const cards = [
    {
      title: "COMO EMPEZAR A JUGAR",
      date: "2 DE SEPTIEMBRE",
      bg: "/card01.jpg",
      desc: "Aprendé cómo registrarte, unirte a un equipo y comenzar a competir en la liga...",
      scrollTo: "top",
    },
    {
      title: "REGLAMENTO",
      date: "2 DE SEPTIEMBRE",
      bg: "/card02.jpg",
      desc: "Conocé todas las reglas oficiales y el formato de los enfrentamientos...",
      scrollTo: "middle",
    },
    {
      title: "SISTEMA DE PUNTOS",
      date: "2 DE SEPTIEMBRE",
      bg: "/card03.jpg",
      desc: "Descubrí cómo se otorgan los puntos y cómo escalar posiciones en la liga...",
      scrollTo: "bottom",
    },
  ];

  return (
    <Box sx={{ bgcolor: "black", pt: { xs: 0, sm: 5 }, pb: 5 }}>
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
          <Link
            to="/reglamento"
            className="text-sm text-gray-400 pl-3 flex items-center"
            style={{ display: "inline-flex", alignItems: "center" }}
          >
            VER TODO <i className="fa-solid fa-arrow-right ml-1"></i>
          </Link>
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
    <Link to="/reglamento" state={{ scrollTo: card.scrollTo }}>
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
