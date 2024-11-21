import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import { CarCard } from '../components/CarCard';
import { CarModal } from '../components/CarModal';
import { Car } from '../types';

export function Vehicles() {
  const { cars, siteConfig } = useStore();
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string>('');

  const brands = Array.from(new Set(cars.map((car) => car.brand)));

  const filteredCars = cars.filter((car) => !selectedBrand || car.brand === selectedBrand);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 px-4">
      <div className="max-w-7xl mx-auto py-8">
        <div className="flex flex-wrap gap-4 mb-8">
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            style={{ borderColor: selectedBrand ? siteConfig.primaryColor : undefined }}
          >
            <option value="">Todas as marcas</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              onClick={() => setSelectedCar(car)}
            />
          ))}
        </div>

        {selectedCar && (
          <CarModal car={selectedCar} onClose={() => setSelectedCar(null)} />
        )}
      </div>
    </div>
  );
}