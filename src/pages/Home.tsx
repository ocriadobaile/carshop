import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Star, MapPin, Phone } from 'lucide-react';
import { CarouselSection } from '../components/CarouselSection';
import { useStore } from '../store/useStore';

export function Home() {
  const { siteConfig } = useStore();

  return (
    <div className="min-h-screen dark:bg-gray-900">
      {/* Hero Section */}
      <div
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${siteConfig.bannerImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-6">
              {siteConfig.heroTitle}
            </h1>
            <p className="text-xl mb-8">
              {siteConfig.heroSubtitle}
            </p>
            <Link
              to="/veiculos"
              className="px-8 py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition-colors"
              style={{ backgroundColor: siteConfig.primaryColor }}
            >
              Ver Veículos
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Cars */}
      <CarouselSection />

      {/* Features Section */}
      <div className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: siteConfig.primaryColor }}>
            {siteConfig.featuresTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Search className="w-12 h-12 mx-auto mb-4" style={{ color: siteConfig.primaryColor }} />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{siteConfig.feature1Title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {siteConfig.feature1Description}
              </p>
            </div>
            <div className="text-center p-6">
              <Star className="w-12 h-12 mx-auto mb-4" style={{ color: siteConfig.primaryColor }} />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{siteConfig.feature2Title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {siteConfig.feature2Description}
              </p>
            </div>
            <div className="text-center p-6">
              <MapPin className="w-12 h-12 mx-auto mb-4" style={{ color: siteConfig.primaryColor }} />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{siteConfig.feature3Title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {siteConfig.feature3Description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16" style={{ backgroundColor: siteConfig.primaryColor }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {siteConfig.ctaTitle}
          </h2>
          <p className="text-white text-lg mb-8">
            {siteConfig.ctaSubtitle}
          </p>
          <Link
            to="/venda"
            className="bg-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-colors inline-block"
            style={{ color: siteConfig.primaryColor }}
          >
            {siteConfig.ctaButtonText}
          </Link>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12" style={{ color: siteConfig.primaryColor }}>
            {siteConfig.contactTitle}
          </h2>
          <div className="flex justify-center items-center space-x-8">
            <div>
              <Phone className="w-8 h-8 mx-auto mb-2" style={{ color: siteConfig.primaryColor }} />
              <p className="text-gray-800 dark:text-white font-semibold">{siteConfig.phone}</p>
            </div>
            <div>
              <MapPin className="w-8 h-8 mx-auto mb-2" style={{ color: siteConfig.primaryColor }} />
              <p className="text-gray-800 dark:text-white font-semibold">
                {siteConfig.address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}