import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header.jsx";
import Descripcion from "./pages/Description.jsx";
import Footer from "./components/Footer.jsx";
import Graficos from "./pages/Graficos.jsx";
import Tabla from "./components/NumAleatorios.jsx";
import Error404 from "./pages/Error404.jsx";
import Historial from "./components/Historial.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Descripcion />} />
        <Route path="/graficos" element={<Graficos />} />
        <Route path="/tablas" element={<Tabla />} />
        <Route path="/historial" element={<Historial />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
