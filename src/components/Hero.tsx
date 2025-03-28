import React from 'react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black pt-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Clément Nairaud
        </h1>
        
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
          Étudiant en Génie Électrique à l'Université Jean Monnet, je suis passionné par les technologies 
          et leur impact sur notre quotidien. En parallèle de mes études, je cherche à enrichir mon 
          expérience professionnelle, notamment dans le domaine du GEII ou lors d'un job étudiant.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a href="#about" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            À propos de moi
          </a>
          <a href="#projects" className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
            Voir mes projets
          </a>
        </div>

        <a href="#about" className="animate-bounce inline-block">
          <ChevronDown size={32} className="text-gray-400" />
        </a>
      </div>
    </section>
  );
}