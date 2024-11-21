import React from 'react';
import { Car } from '../types';
import { Badge } from './Badge';
import { MessageCircle } from 'lucide-react';

interface CarCardProps {
  car: Car;
  onClick: () => void;
}

export function CarCard({ car, onClick }: CarCardProps) {
  const formatPrice = (price: number) =>
    price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    const message = `Olá! Estou interessado no ${car.brand} ${car.model} ${car.year} anunciado por ${formatPrice(car.price)}`;
    const phone = '5511999999999'; // Replace with actual phone number
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <div
      onClick={onClick}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105 relative"
    >
      <img
        src={car.images[0]}
        alt={`${car.brand} ${car.model}`}
        className="w-full h-48 object-cover"
      />
      {car.isExtra && <Badge type="extra" />}
      {car.isLowMileage && <Badge type="low-mileage" />}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          {car.brand} {car.model}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">{car.year}</p>
        <p className="text-red-600 font-bold mt-2">{formatPrice(car.price)}</p>
        <div className="flex items-center justify-between mt-2">
          <p className="text-gray-500 dark:text-gray-400 text-sm">{car.mileage.toLocaleString()} km</p>
          <button
            onClick={handleWhatsApp}
            className="text-green-500 hover:text-green-600 transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}