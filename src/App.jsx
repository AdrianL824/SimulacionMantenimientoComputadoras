import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header.jsx";
import Descripcion from "./pages/Description.jsx";
import Footer from "./components/Footer.jsx";
import Graficos from "./pages/Graficos.jsx";
import Tabla from "./components/NumAleatorios.jsx";
import Error404 from "./pages/Error404.jsx";
import Historial from "./components/Historial.jsx";
import { useState } from "react";
import DocuPDF from "./components/DocuPDF.jsx";

function App() {
  const dato = [
    {
      n: 1,
      totalUso: 7,
      totalReparacion: 5,
      precioHoraOcio: 5,
      precioEspecialista: 50,
      precioOcioTotal: 55,
      sueldoEspecialista: 533,
    },
  ];
  const [lista, setLista] = useState(() => {
    try {
      const item = window.localStorage.getItem("value");
      return item ? JSON.parse(item) : dato;
    } catch {
      return dato;
    }
  });

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Descripcion />} />
        <Route path="/graficos" element={<Graficos />} />
        <Route path="/resultado" element={<Tabla />} />
        <Route
          path="/historial"
          element={<Historial lista={lista} setLista={setLista} />}
        />
        <Route
          path="/historial"
          element={<DocuPDF lista={lista} setLista={setLista} />}
        />
        <Route path="/*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
