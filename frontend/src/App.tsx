import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage/HomePage";
import EventsPage from "./components/HomePage/EventsPage";
import OrdersPage from "./components/HomePage/OrdersPage";
import Contattaci from "./components/Contattaci/Contattaci";
import CalendarPage from "./components/Calendar/CalendarPage";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute";
import './utils/Axios'
import OfficinaPage from "./components/Officina/Page";

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
          <Route path="/login" element={<Login />} />
          <Route 
            path="/officina" 
            element={
              <OfficinaPage />
            }
          />
          <Route 
            path="/calendario" 
            element={
              <PrivateRoute>
                <CalendarPage />
              </PrivateRoute>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
