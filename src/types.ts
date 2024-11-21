export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  images: string[];
  description: string;
  features: string[];
  isExtra: boolean;
  isLowMileage: boolean;
}