import { Routes, Route } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";
import CardsInfo from "./components/CardsInfo";
import Unete from "./components/Unete";
import CardFooter from "./components/CardFooter";
import Footer from "./components/Footer";
import NavBarComponent from "./components/NavBarComponent";

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
        <Route path="/about" element={<h1>Acerca de nosotros</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
