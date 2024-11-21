import React from 'react';
import { useStore } from '../store/useStore';

export function SiteSettings() {
  const { siteConfig, updateSiteConfig } = useStore();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
        Configurações do Site
      </h2>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Nome do Site
            </label>
            <input
              type="text"
              value={siteConfig.title}
              onChange={(e) => updateSiteConfig({ title: e.target.value })}
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              URL do Logo
            </label>
            <input
              type="url"
              value={siteConfig.logo}
              onChange={(e) => updateSiteConfig({ logo: e.target.value })}
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Instagram
            </label>
            <input
              type="url"
              value={siteConfig.instagram}
              onChange={(e) => updateSiteConfig({ instagram: e.target.value })}
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Telefone
            </label>
            <input
              type="text"
              value={siteConfig.phone}
              onChange={(e) => updateSiteConfig({ phone: e.target.value })}
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              E-mail
            </label>
            <input
              type="email"
              value={siteConfig.email}
              onChange={(e) => updateSiteConfig({ email: e.target.value })}
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Endereço
            </label>
            <input
              type="text"
              value={siteConfig.address}
              onChange={(e) => updateSiteConfig({ address: e.target.value })}
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white"
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4">
            Textos da Página Inicial
          </h3>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Título Principal
              </label>
              <input
                type="text"
                value={siteConfig.heroTitle}
                onChange={(e) => updateSiteConfig({ heroTitle: e.target.value })}
                className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Subtítulo Principal
              </label>
              <input
                type="text"
                value={siteConfig.heroSubtitle}
                onChange={(e) => updateSiteConfig({ heroSubtitle: e.target.value })}
                className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Título da Seção de Features
              </label>
              <input
                type="text"
                value={siteConfig.featuresTitle}
                onChange={(e) => updateSiteConfig({ featuresTitle: e.target.value })}
                className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Feature 1 - Título
                </label>
                <input
                  type="text"
                  value={siteConfig.feature1Title}
                  onChange={(e) => updateSiteConfig({ feature1Title: e.target.value })}
                  className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white"
                />
                <input
                  type="text"
                  value={siteConfig.feature1Description}
                  onChange={(e) => updateSiteConfig({ feature1Description: e.target.value })}
                  className="mt-2 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white"
                  placeholder="Descrição"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Feature 2 - Título
                </label>
                <input
                  type="text"
                  value={siteConfig.feature2Title}
                  onChange={(e) => updateSiteConfig({ feature2Title: e.target.value })}
                  className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white"
                />
                <input
                  type="text"
                  value={siteConfig.feature2Description}
                  onChange={(e) => updateSiteConfig({ feature2Description: e.target.value })}
                  className="mt-2 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white"
                  placeholder="Descrição"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Feature 3 - Título
                </label>
                <input
                  type="text"
                  value={siteConfig.feature3Title}
                  onChange={(e) => updateSiteConfig({ feature3Title: e.target.value })}
                  className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white"
                />
                <input
                  type="text"
                  value={siteConfig.feature3Description}
                  onChange={(e) => updateSiteConfig({ feature3Description: e.target.value })}
                  className="mt-2 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white"
                  placeholder="Descrição"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Título da Seção CTA
              </label>
              <input
                type="text"
                value={siteConfig.ctaTitle}
                onChange={(e) => updateSiteConfig({ ctaTitle: e.target.value })}
                className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Subtítulo da Seção CTA
              </label>
              <input
                type="text"
                value={siteConfig.ctaSubtitle}
                onChange={(e) => updateSiteConfig({ ctaSubtitle: e.target.value })}
                className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Texto do Botão CTA
              </label>
              <input
                type="text"
                value={siteConfig.ctaButtonText}
                onChange={(e) => updateSiteConfig({ ctaButtonText: e.target.value })}
                className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Título da Seção de Contato
              </label>
              <input
                type="text"
                value={siteConfig.contactTitle}
                onChange={(e) => updateSiteConfig({ contactTitle: e.target.value })}
                className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Cor Principal
          </label>
          <div className="flex gap-2 mt-1">
            <input
              type="color"
              value={siteConfig.primaryColor}
              onChange={(e) => updateSiteConfig({ primaryColor: e.target.value })}
              className="h-10 w-20"
            />
            <input
              type="text"
              value={siteConfig.primaryColor}
              onChange={(e) => updateSiteConfig({ primaryColor: e.target.value })}
              className="flex-1 px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            URL do Banner Principal
          </label>
          <input
            type="url"
            value={siteConfig.bannerImage}
            onChange={(e) => updateSiteConfig({ bannerImage: e.target.value })}
            className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            URL da Imagem da Localização
          </label>
          <input
            type="url"
            value={siteConfig.locationImage}
            onChange={(e) => updateSiteConfig({ locationImage: e.target.value })}
            className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Descrição da Empresa
          </label>
          <textarea
            value={siteConfig.description}
            onChange={(e) => updateSiteConfig({ description: e.target.value })}
            rows={4}
            className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-900 dark:text-white"
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            checked={siteConfig.showCarousel}
            onChange={(e) => updateSiteConfig({ showCarousel: e.target.checked })}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
            Exibir carrossel de veículos em destaque na página inicial
          </label>
        </div>
      </div>
    </div>
  );
}