import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header.jsx";
// import Home from "./pages/Home.jsx";
import Descripcion from "./pages/Description.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Descripcion />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
