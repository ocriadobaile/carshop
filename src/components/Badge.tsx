import React from 'react';

interface BadgeProps {
  type: 'extra' | 'low-mileage';
}

export function Badge({ type }: BadgeProps) {
  const baseClasses = 'absolute top-2 right-2 px-3 py-1 rounded-full text-white font-semibold text-sm';
  const typeClasses = {
    'extra': 'bg-yellow-500',
    'low-mileage': 'bg-green-500'
  };

  return (
    <span className={`${baseClasses} ${typeClasses[type]}`}>
      {type === 'extra' ? 'EXTRA' : 'BAIXO KM'}
    </span>
  );
}