import React from 'react';

export function Projects() {
  const projects = [
    {
      title: "Conception d'un amplificateur opérationnel",
      description: "Projet académique de conception et réalisation d'un amplificateur opérationnel, incluant la simulation, le prototypage et les tests de performance.",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Programmation de microcontrôleur",
      description: "Développement d'un système d'automatisation utilisant un microcontrôleur, programmé en C pour le contrôle de processus industriels.",
      image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projets et Réalisations</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
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