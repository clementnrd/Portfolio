import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <span className="text-xl font-bold text-gray-800">CN</span>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X /> : <Menu />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">À propos</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projets</a>
            <a href="#cv" className="text-gray-600 hover:text-blue-600 transition-colors">CV</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors">À propos</a>
              <a href="#projects" className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors">Projets</a>
              <a href="#cv" className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors">CV</a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}