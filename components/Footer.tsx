import React from 'react';
import { Instagram, Youtube } from 'lucide-react';
import { DIRECTOR_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cinematic-dark text-neutral-500 py-12 border-t border-neutral-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h4 className="text-white font-serif text-lg tracking-widest mb-2">{DIRECTOR_INFO.name}</h4>
          <p className="text-xs tracking-wider">© {new Date().getFullYear()} ALL RIGHTS RESERVED.</p>
        </div>

        <div className="flex space-x-6">
          <a href={`https://${DIRECTOR_INFO.instagram}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
            <Instagram size={20} />
          </a>
          <a href={`https://${DIRECTOR_INFO.youtube}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
            <Youtube size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;