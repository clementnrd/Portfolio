import React from 'react';

export function About() {
  const skills = {
    technical: [
      "AOP et montages électroniques",
      "Automatisation et systèmes embarqués",
      "Programmation (Python, C)",
      "Connaissances en énergies renouvelables",
      "Secteur nucléaire"
    ],
    personal: [
      "Organisation et gestion du temps",
      "Esprit d'équipe",
      "Adaptabilité"
    ]
  };

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">À propos de moi</h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-300 mb-12">
            Actuellement étudiant en Génie Électrique et Informatique Industrielle, j'ai déjà acquis 
            des bases solides en électronique, programmation, et automatisation. J'ai également une 
            expérience dans le commerce qui m'a permis de développer mon relationnel et ma capacité d'adaptation.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-white">Compétences techniques</h3>
              <ul className="space-y-2">
                {skills.technical.map((skill, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-white">Compétences personnelles</h3>
              <ul className="space-y-2">
                {skills.personal.map((skill, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-2 text-white">Disponibilités</h3>
            <p className="text-gray-300">Je suis disponible pour des missions les jeudis après-midi et les samedis.</p>
          </div>
        </div>
      </div>
    </section>
  );
}