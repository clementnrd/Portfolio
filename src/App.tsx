import React from 'react';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://github.com" className="hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/cl%C3%A9ment-nairaud-a93719331/" className="hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:clement.nairaud@free.fr" className="hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <p className="text-gray-400">© 2024 Clément Nairaud. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;