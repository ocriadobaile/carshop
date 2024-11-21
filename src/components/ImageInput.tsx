import React from 'react';
import { Plus, X } from 'lucide-react';

interface ImageInputProps {
  images: string[];
  onChange: (images: string[]) => void;
}

export function ImageInput({ images, onChange }: ImageInputProps) {
  const addImage = () => {
    onChange([...images, '']);
  };

  const removeImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    onChange(newImages);
  };

  const updateImage = (index: number, value: string) => {
    const newImages = [...images];
    newImages[index] = value;
    onChange(newImages);
  };

  return (
    <div className="space-y-4">
      {images.map((image, index) => (
        <div key={index} className="flex gap-2">
          <input
            type="url"
            value={image}
            onChange={(e) => updateImage(index, e.target.value)}
            placeholder="URL da imagem"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
          />
          {index > 0 && (
            <button
              type="button"
              onClick={() => removeImage(index)}
              className="p-2 text-red-500 hover:text-red-700"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      ))}
      <button
        type="button"
        onClick={addImage}
        className="flex items-center gap-2 text-red-600 hover:text-red-700"
      >
        <Plus className="h-5 w-5" />
        Adicionar mais fotos
      </button>
    </div>
  );
}