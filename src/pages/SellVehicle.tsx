import React, { useState } from 'react';
import { useStore } from '../store/useStore';

export function SellVehicle() {
  const { siteConfig } = useStore();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá, meu nome é ${name} e quero vender meu veículo: ${description}`;
    window.open(
      `https://wa.me/${siteConfig.phone}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
          Venda seu Veículo
        </h1>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Seu Nome
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white"
                required
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Descrição do Veículo
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white"
                placeholder="Descreva seu veículo (marca, modelo, ano, km, etc)"
                required
              />
            </div>
            <button
              type="submit"
              style={{ backgroundColor: siteConfig.primaryColor }}
              className="w-full text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}