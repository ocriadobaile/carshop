import React from 'react';
import { useStore } from '../store/useStore';
import { CarCard } from './CarCard';
import { useNavigate } from 'react-router-dom';

export function CarouselSection() {
  const { cars, siteConfig } = useStore();
  const navigate = useNavigate();
  const specialCars = cars.filter((car) => car.isExtra || car.isLowMileage);

  if (specialCars.length === 0 || !siteConfig.showCarousel) return null;

  const handleCardClick = () => {
    navigate('/veiculos');
  };

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8" style={{ color: siteConfig.primaryColor }}>
          Veículos em Destaque
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialCars.map((car) => (
            <CarCard key={car.id} car={car} onClick={handleCardClick} />
          ))}
        </div>
      </div>
    </div>
  );
}