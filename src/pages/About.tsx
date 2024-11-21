import React from 'react';

export function About() {
  const images = [
    'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1562141989-c5c79ac8f576?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200',
    'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&q=80&w=1200'
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">
          Sobre a AutoElite
        </h1>

        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <p className="text-gray-600 dark:text-gray-300">
            Há mais de 10 anos no mercado, a AutoElite se destaca pela excelência
            no comércio de veículos seminovos. Nossa missão é proporcionar a
            melhor experiência na compra do seu próximo carro, com transparência,
            qualidade e atendimento personalizado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Nossa Estrutura
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Contamos com uma moderna estrutura para melhor atender nossos
              clientes. Nossa loja possui amplo showroom climatizado, área de
              espera confortável e equipe especializada para proporcionar o melhor
              atendimento.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Nossos Diferenciais
            </h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Garantia em todos os veículos</li>
              <li>Financiamento com as melhores taxas</li>
              <li>Avaliação justa do seu usado</li>
              <li>Transparência em todas as negociações</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
          Conheça Nossa Loja
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative h-64 rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={image}
                alt={`Imagem da loja ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}