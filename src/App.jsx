import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header.jsx";
import Descripcion from "./pages/Description.jsx";
import Footer from "./components/Footer.jsx";
import Graficos from "./pages/Graficos.jsx";
import Tabla from "./components/NumAleatorios.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Descripcion />} />
        <Route path="/grafico" element={<Graficos />} />
        <Route path="/tabla" element={<Tabla />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
