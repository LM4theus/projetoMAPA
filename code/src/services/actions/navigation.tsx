import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../../Pages/Main";
import Tutorial from "../../Pages/Tutorial";
import QRcode from "../../Pages/Qrcode";
import Search from "../../Pages/Search";
import Map from "../../Pages/Map";

// Função encarregada da navegação do site
function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/qrcode" element={<QRcode />} />
        <Route path="/busca" element={<Search />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </Router>
  );
}

export default Navigation;
