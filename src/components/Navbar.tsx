import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Car, MapPin, DollarSign } from 'lucide-react';
import { useStore } from '../store/useStore';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const location = useLocation();
  const { siteConfig } = useStore();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              {siteConfig.logo && (
                <img 
                  src={siteConfig.logo} 
                  alt={siteConfig.title} 
                  className="h-8 w-auto object-contain"
                />
              )}
            </Link>
          </div>

          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className={`flex items-center gap-2 transition-colors ${
                isActive('/') 
                  ? 'font-semibold' 
                  : 'text-gray-600 dark:text-gray-300'
              }`}
              style={isActive('/') ? { color: siteConfig.primaryColor } : undefined}
            >
              <Home className="h-5 w-5" style={{ color: isActive('/') ? siteConfig.primaryColor : undefined }} />
              Home
            </Link>
            <Link
              to="/veiculos"
              className={`flex items-center gap-2 transition-colors ${
                isActive('/veiculos') 
                  ? 'font-semibold' 
                  : 'text-gray-600 dark:text-gray-300'
              }`}
              style={isActive('/veiculos') ? { color: siteConfig.primaryColor } : undefined}
            >
              <Car className="h-5 w-5" style={{ color: isActive('/veiculos') ? siteConfig.primaryColor : undefined }} />
              Veículos
            </Link>
            <Link
              to="/localizacao"
              className={`flex items-center gap-2 transition-colors ${
                isActive('/localizacao') 
                  ? 'font-semibold' 
                  : 'text-gray-600 dark:text-gray-300'
              }`}
              style={isActive('/localizacao') ? { color: siteConfig.primaryColor } : undefined}
            >
              <MapPin className="h-5 w-5" style={{ color: isActive('/localizacao') ? siteConfig.primaryColor : undefined }} />
              Localização
            </Link>
            <Link
              to="/venda"
              className={`flex items-center gap-2 transition-colors ${
                isActive('/venda') 
                  ? 'font-semibold' 
                  : 'text-gray-600 dark:text-gray-300'
              }`}
              style={isActive('/venda') ? { color: siteConfig.primaryColor } : undefined}
            >
              <DollarSign className="h-5 w-5" style={{ color: isActive('/venda') ? siteConfig.primaryColor : undefined }} />
              Venda seu Veículo
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}