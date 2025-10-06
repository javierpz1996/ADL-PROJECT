import { Routes, Route } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";
import CardsInfo from "./components/CardsInfo";
import Unete from "./components/Unete";
import CardFooter from "./components/CardFooter";
import Footer from "./components/Footer";
import NavBarComponent from "./components/NavBarComponent";
import Podio from "./components/Podio";
import Info from "./components/Info";

function App() {
  return (
    <div>
      <NavBarComponent />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <CardsInfo />
              <Unete />
              <CardFooter />
            </>
          }
        />
        <Route path="/podio" element={<Podio />} />
        <Route path="/reglamento" element={<Info></Info>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
