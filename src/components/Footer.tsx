import React from 'react';
import { Phone, Mail, MapPin, Instagram, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useStore } from '../store/useStore';

export function Footer() {
  const { siteConfig } = useStore();

  return (
    <footer className="bg-white dark:bg-gray-800 shadow-lg mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: siteConfig.primaryColor }}>
              {siteConfig.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {siteConfig.description}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: siteConfig.primaryColor }}>
              Contato
            </h3>
            <div className="space-y-2">
              <p className="flex items-center text-gray-600 dark:text-gray-300">
                <Phone className="h-5 w-5 mr-2" style={{ color: siteConfig.primaryColor }} />
                {siteConfig.phone}
              </p>
              <p className="flex items-center text-gray-600 dark:text-gray-300">
                <Mail className="h-5 w-5 mr-2" style={{ color: siteConfig.primaryColor }} />
                {siteConfig.email}
              </p>
              <p className="flex items-center text-gray-600 dark:text-gray-300">
                <MapPin className="h-5 w-5 mr-2" style={{ color: siteConfig.primaryColor }} />
                {siteConfig.address}
              </p>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 dark:text-gray-300 hover:opacity-80 transition-opacity"
              >
                <Instagram className="h-5 w-5 mr-2" style={{ color: siteConfig.primaryColor }} />
                Siga nosso Instagram
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ color: siteConfig.primaryColor }}>
              Links Úteis
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/veiculos"
                  className="text-gray-600 dark:text-gray-300 hover:opacity-80 transition-opacity"
                >
                  Veículos
                </Link>
              </li>
              <li>
                <Link
                  to="/venda"
                  className="text-gray-600 dark:text-gray-300 hover:opacity-80 transition-opacity"
                >
                  Venda seu Veículo
                </Link>
              </li>
              <li>
                <Link
                  to="/localizacao"
                  className="text-gray-600 dark:text-gray-300 hover:opacity-80 transition-opacity"
                >
                  Localização
                </Link>
              </li>
              <li>
                <Link
                  to="/admin"
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:opacity-80 transition-opacity"
                >
                  <Lock className="h-4 w-4 mr-2" style={{ color: siteConfig.primaryColor }} />
                  Área Administrativa
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}