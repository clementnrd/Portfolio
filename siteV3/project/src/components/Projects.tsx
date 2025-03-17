import React from 'react';

export function Projects() {
  const projects = [
    {
      title: "Station Météorologique Connectée",
      description: "Conception et réalisation d'une station météo intelligente avec capteurs de température, humidité et pression atmosphérique, connectée à une interface web pour la visualisation des données en temps réel.",
      image: "https://images.unsplash.com/photo-1538947151057-dfe933d688d1?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Robot Suiveur de Ligne",
      description: "Développement d'un robot autonome capable de suivre une ligne noire sur fond blanc, utilisant des capteurs infrarouges et un microcontrôleur pour la navigation en temps réel.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Simulateur de trajectoire 3D",
      description: "Développement d'un simulateur physique permettant de calculer et visualiser la trajectoire de projectiles en trois dimensions, prenant en compte les forces aérodynamiques et la gravité.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Projets et Réalisations</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-800">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="#contact" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Discuter d'un projet
          </a>
        </div>
      </div>
    </section>
  );
}