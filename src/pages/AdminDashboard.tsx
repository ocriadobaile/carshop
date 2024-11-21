import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import { useNavigate } from 'react-router-dom';
import { Car } from '../types';
import { ImageInput } from '../components/ImageInput';
import { TagInput } from '../components/TagInput';
import { SiteSettings } from '../components/SiteSettings';
import { Trash2, Edit } from 'lucide-react';

export function AdminDashboard() {
  const { cars, addCar, updateCar, deleteCar, logout, siteConfig } = useStore();
  const navigate = useNavigate();
  const [editingCar, setEditingCar] = useState<string | null>(null);
  const [newCar, setNewCar] = useState<Partial<Car>>({
    brand: '',
    model: '',
    year: new Date().getFullYear(),
    price: 0,
    mileage: 0,
    images: [''],
    description: '',
    features: [],
    isExtra: false,
    isLowMileage: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingCar) {
      updateCar(editingCar, newCar as Car);
      setEditingCar(null);
    } else {
      addCar({
        ...newCar,
        id: Date.now().toString(),
      } as Car);
    }
    setNewCar({
      brand: '',
      model: '',
      year: new Date().getFullYear(),
      price: 0,
      mileage: 0,
      images: [''],
      description: '',
      features: [],
      isExtra: false,
      isLowMileage: false,
    });
  };

  const startEditing = (car: Car) => {
    setEditingCar(car.id);
    setNewCar(car);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-20 px-4">
      <div className="max-w-6xl mx-auto py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Painel Administrativo
          </h1>
          <button
            onClick={handleLogout}
            style={{ backgroundColor: siteConfig.primaryColor }}
            className="text-white px-4 py-2 rounded-lg hover:opacity-90"
          >
            Sair
          </button>
        </div>

        <SiteSettings />

        {/* Formulário de Adição/Edição */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
            {editingCar ? 'Editar Veículo' : 'Adicionar Novo Veículo'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Marca
                </label>
                <input
                  type="text"
                  value={newCar.brand}
                  onChange={(e) => setNewCar({ ...newCar, brand: e.target.value })}
                  className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Modelo
                </label>
                <input
                  type="text"
                  value={newCar.model}
                  onChange={(e) => setNewCar({ ...newCar, model: e.target.value })}
                  className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Ano
                </label>
                <input
                  type="number"
                  value={newCar.year}
                  onChange={(e) => setNewCar({ ...newCar, year: parseInt(e.target.value) })}
                  className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Preço
                </label>
                <input
                  type="number"
                  value={newCar.price}
                  onChange={(e) => setNewCar({ ...newCar, price: parseInt(e.target.value) })}
                  className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Quilometragem
                </label>
                <input
                  type="number"
                  value={newCar.mileage}
                  onChange={(e) => setNewCar({ ...newCar, mileage: parseInt(e.target.value) })}
                  className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white"
                  required
                />
              </div>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={newCar.isExtra}
                    onChange={(e) => setNewCar({ ...newCar, isExtra: e.target.checked })}
                    className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                  />
                  <span className="ml-2 text-gray-700 dark:text-gray-300">Extra</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={newCar.isLowMileage}
                    onChange={(e) => setNewCar({ ...newCar, isLowMileage: e.target.checked })}
                    className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                  />
                  <span className="ml-2 text-gray-700 dark:text-gray-300">Baixo KM</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Imagens
              </label>
              <ImageInput
                images={newCar.images || ['']}
                onChange={(images) => setNewCar({ ...newCar, images })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Características
              </label>
              <TagInput
                tags={newCar.features || []}
                onChange={(features) => setNewCar({ ...newCar, features })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Descrição
              </label>
              <textarea
                value={newCar.description}
                onChange={(e) => setNewCar({ ...newCar, description: e.target.value })}
                className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white"
                rows={4}
                required
              />
            </div>

            <div className="flex justify-end space-x-4">
              {editingCar && (
                <button
                  type="button"
                  onClick={() => {
                    setEditingCar(null);
                    setNewCar({
                      brand: '',
                      model: '',
                      year: new Date().getFullYear(),
                      price: 0,
                      mileage: 0,
                      images: [''],
                      description: '',
                      features: [],
                      isExtra: false,
                      isLowMileage: false,
                    });
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  Cancelar
                </button>
              )}
              <button
                type="submit"
                style={{ backgroundColor: siteConfig.primaryColor }}
                className="text-white px-6 py-2 rounded-md hover:opacity-90"
              >
                {editingCar ? 'Salvar Alterações' : 'Adicionar Veículo'}
              </button>
            </div>
          </form>
        </div>

        {/* Lista de Veículos */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
            Veículos Cadastrados
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Veículo
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Ano
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Preço
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {cars.map((car) => (
                  <tr key={car.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {car.brand} {car.model}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500 dark:text-gray-300">{car.year}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500 dark:text-gray-300">
                        {car.price.toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        })}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex space-x-2">
                        {car.isExtra && (
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                            Extra
                          </span>
                        )}
                        {car.isLowMileage && (
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Baixo KM
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => startEditing(car)}
                        className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 mr-4"
                      >
                        <Edit className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => deleteCar(car.id)}
                        className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}