import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage/HomePage";
import EventsPage from "./components/HomePage/EventsPage";
import OrdersPage from "./components/HomePage/OrdersPage";
import Contattaci from "./components/Contattaci/Contattaci";
import './utils/Axios'
import OfficinaPage from "./components/Officina/Page";
import Servizi from "./components/Servizi/Servizi";
import RiparazioneAuto from "./components/Servizi/RiparazioneAuto";
import TagliandoAuto from "./components/Servizi/Tagliando";
import Elettrauto from "./components/Servizi/Elettrauto";
import Carrozzeria from "./components/Servizi/Carrozzeria";
import AriaCondizionata from "./components/Servizi/AriaCondizionata";

function App() {
  return (
    <Router>
      <div className="min-h-screen pt-[100px]">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/contattaci" element={<Contattaci />} />
          <Route 
            path="/officina" 
            element={
              <OfficinaPage />
            }
          />
          <Route path="/servizi" element={<Servizi />}/> 
            
          <Route path="/servizi/riparazioni-auto" element={<RiparazioneAuto />} />
          <Route path="/servizi/tagliando-auto" element={<TagliandoAuto />} />
          <Route path="/servizi/elettrauto" element={<Elettrauto />} />
          <Route path="/servizi/carrozzeria" element={<Carrozzeria />} />
          <Route path="/servizi/aria-condizionata" element={<AriaCondizionata />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
