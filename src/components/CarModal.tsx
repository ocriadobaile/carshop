import React, { useState } from 'react';
import { X, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Car } from '../types';
import { Badge } from './Badge';
import { useStore } from '../store/useStore';

interface CarModalProps {
  car: Car;
  onClose: () => void;
}

export function CarModal({ car, onClose }: CarModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { siteConfig } = useStore();

  const formatPrice = (price: number) =>
    price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

  const handleWhatsApp = () => {
    const message = `Olá! Estou interessado no ${car.brand} ${car.model} ${car.year} anunciado por ${formatPrice(car.price)}`;
    window.open(
      `https://wa.me/${siteConfig.phone}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % car.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + car.images.length) % car.images.length);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 z-10"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="relative group">
                <img
                  src={car.images[currentImageIndex]}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-64 object-cover rounded-lg cursor-zoom-in transition-transform hover:scale-110"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 transition-opacity opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft className="h-5 w-5 text-white" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 transition-opacity opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight className="h-5 w-5 text-white" />
                </button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {car.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${car.brand} ${car.model}`}
                    className={`w-full h-20 object-cover rounded-lg cursor-pointer transition-opacity hover:opacity-75 ${
                      currentImageIndex === index ? 'ring-2' : ''
                    }`}
                    style={{ ringColor: siteConfig.primaryColor }}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {car.brand} {car.model} {car.year}
                </h2>
                {/*car.isExtra && <Badge type="extra" />}
                {car.isLowMileage && <Badge type="low-mileage" />*/}
              </div>

              <p className="text-2xl font-bold" style={{ color: siteConfig.primaryColor }}>
                {formatPrice(car.price)}
              </p>

              <p className="text-gray-600 dark:text-gray-300">{car.mileage.toLocaleString()} km</p>

              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                  Características
                </h4>
                <ul className="grid grid-cols-2 gap-2">
                  {car.features.map((feature, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-300">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Descrição</h4>
                <p className="text-gray-600 dark:text-gray-300">{car.description}</p>
              </div>

              <button
                onClick={handleWhatsApp}
                className="w-full text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-colors flex items-center justify-center gap-2"
                style={{ backgroundColor: siteConfig.primaryColor }}
              >
                <MessageCircle className="h-5 w-5" />
                Chamar no WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}