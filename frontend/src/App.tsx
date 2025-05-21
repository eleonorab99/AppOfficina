import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage/HomePage';
import EventsPage from './components/HomePage/EventsPage';
import OrdersPage from './components/HomePage/OrdersPage';
import Contattaci from './components/Contattaci/Contattaci';
import CalendarPage from './pages/CalendarPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/contattaci" element={<Contattaci />} />
          <Route path="/calendario" element={<CalendarPage />} />
          {/* Aggiungi altre route qui */}
        </Routes>
        
      </div>
    </Router>
  );
}

export default App
