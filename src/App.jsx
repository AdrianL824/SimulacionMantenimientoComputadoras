import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header.jsx";
// import Home from "./pages/Home.jsx";
import Descripcion from "./pages/Description.jsx";
import Footer from "./components/Footer.jsx";
import Grafico from "./pages/Graficos.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Descripcion />} />
        <Route path="/grafico" element={<Grafico />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
