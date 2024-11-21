import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Vehicles } from './pages/Vehicles';
import { Location } from './pages/Location';
import { SellVehicle } from './pages/SellVehicle';
import { Admin } from './pages/Admin';
import { AdminDashboard } from './pages/AdminDashboard';
import { useStore } from './store/useStore';

function App() {
  const { isDarkMode } = useStore();

  return (
    <div className={`${isDarkMode ? 'dark' : ''} min-h-screen flex flex-col`}>
      <Router>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/veiculos" element={<Vehicles />} />
            <Route path="/localizacao" element={<Location />} />
            <Route path="/venda" element={<SellVehicle />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;