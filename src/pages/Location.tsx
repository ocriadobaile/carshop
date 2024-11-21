import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useStore } from '../store/useStore';

export function Location() {
  const { siteConfig } = useStore();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-12">
          Nossa Localização
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                Sobre Nós
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {siteConfig.description}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                Informações de Contato
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <MapPin style={{ color: siteConfig.primaryColor }} className="h-6 w-6" />
                  <div>
                    <p className="font-semibold dark:text-white">Endereço</p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {siteConfig.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone style={{ color: siteConfig.primaryColor }} className="h-6 w-6" />
                  <div>
                    <p className="font-semibold dark:text-white">Telefone</p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {siteConfig.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Mail style={{ color: siteConfig.primaryColor }} className="h-6 w-6" />
                  <div>
                    <p className="font-semibold dark:text-white">E-mail</p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {siteConfig.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Clock style={{ color: siteConfig.primaryColor }} className="h-6 w-6" />
                  <div>
                    <p className="font-semibold dark:text-white">Horário de Funcionamento</p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Segunda a Sexta: 8h às 18h
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Sábado: 8h às 13h
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <img
              src={siteConfig.locationImage}
              alt="Nossa Loja"
              className="w-full h-[400px] object-cover rounded-lg mb-6"
            />
            <p className="text-gray-600 dark:text-gray-300">
              Venha nos visitar e conheça nossa estrutura completa para melhor atendê-lo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}