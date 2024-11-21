import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Car } from '../types';

interface SiteConfig {
  title: string;
  logo: string;
  phone: string;
  email: string;
  address: string;
  description: string;
  primaryColor: string;
  showCarousel: boolean;
  bannerImage: string;
  locationImage: string;
  instagram: string;
  // Textos da Homepage
  heroTitle: string;
  heroSubtitle: string;
  featuresTitle: string;
  feature1Title: string;
  feature1Description: string;
  feature2Title: string;
  feature2Description: string;
  feature3Title: string;
  feature3Description: string;
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButtonText: string;
  contactTitle: string;
}

interface Store {
  cars: Car[];
  isAdmin: boolean;
  isDarkMode: boolean;
  siteConfig: SiteConfig;
  addCar: (car: Car) => void;
  updateCar: (id: string, car: Car) => void;
  deleteCar: (id: string) => void;
  login: (password: string) => boolean;
  logout: () => void;
  toggleDarkMode: () => void;
  updateSiteConfig: (config: Partial<SiteConfig>) => void;
}

const defaultConfig: SiteConfig = {
  title: 'AutoElite',
  logo: 'https://via.placeholder.com/150x50',
  phone: '5511999999999',
  email: 'contato@autoelite.com.br',
  address: 'Av. Principal, 1000 - São Paulo, SP',
  description: 'Há mais de 10 anos no mercado, a AutoElite se destaca pela excelência no comércio de veículos seminovos.',
  primaryColor: '#dc2626',
  showCarousel: true,
  bannerImage: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=2000',
  locationImage: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1200',
  instagram: 'https://instagram.com/autoelite',
  // Textos padrão da Homepage
  heroTitle: 'Encontre o Veículo dos Seus Sonhos',
  heroSubtitle: 'Os melhores seminovos com garantia de procedência',
  featuresTitle: 'Por que escolher a AutoElite?',
  feature1Title: 'Amplo Estoque',
  feature1Description: 'Mais de 100 veículos seminovos para você escolher',
  feature2Title: 'Garantia de Qualidade',
  feature2Description: 'Todos os veículos passam por rigorosa inspeção',
  feature3Title: 'Localização Premium',
  feature3Description: 'Fácil acesso com amplo espaço para atendimento',
  ctaTitle: 'Quer vender seu veículo?',
  ctaSubtitle: 'Faça uma avaliação gratuita do seu veículo',
  ctaButtonText: 'Avaliar Meu Veículo',
  contactTitle: 'Entre em Contato',
};

export const useStore = create<Store>()(
  persist(
    (set) => ({
      cars: [],
      isAdmin: false,
      isDarkMode: false,
      siteConfig: defaultConfig,
      addCar: (car) => set((state) => ({ cars: [...state.cars, car] })),
      updateCar: (id, updatedCar) =>
        set((state) => ({
          cars: state.cars.map((car) => (car.id === id ? updatedCar : car))
        })),
      deleteCar: (id) =>
        set((state) => ({
          cars: state.cars.filter((car) => car.id !== id)
        })),
      login: (password) => {
        if (password === 'admin123') {
          set({ isAdmin: true });
          return true;
        }
        return false;
      },
      logout: () => set({ isAdmin: false }),
      toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
      updateSiteConfig: (config) =>
        set((state) => ({
          siteConfig: { ...state.siteConfig, ...config }
        })),
    }),
    {
      name: 'car-store'
    }
  )
);