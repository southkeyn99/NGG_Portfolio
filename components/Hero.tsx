import React from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight } from 'lucide-react';
import { DIRECTOR_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://postfiles.pstatic.net/MjAyNTEyMTNfMTk0/MDAxNzY1NjMyMzkyNzY4.qGMXRH7uhj6tpI_iG9iWjP44If2ojH2tdV3UzZ44N6Ig.ImRJwctv8JvQQ3kXLuKawpfGRxOcSLX0_yWZ50zAwWIg.JPEG/5.jpg?type=w3840" 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-60 grayscale blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cinematic-black via-cinematic-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-sm md:text-base text-cinematic-accent font-medium tracking-[0.3em] uppercase mb-4 animate-fade-in-up">
          {DIRECTOR_INFO.title}
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white tracking-tighter mb-6 mix-blend-overlay opacity-90">
          {DIRECTOR_INFO.name}
        </h1>
        <p className="text-neutral-300 text-lg md:text-xl font-light tracking-wide mb-10 max-w-2xl mx-auto opacity-80">
          {DIRECTOR_INFO.tagline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            to="/film" 
            className="group relative px-8 py-3 bg-white text-black font-medium tracking-wider text-sm transition-transform hover:scale-105 flex items-center gap-2"
          >
            <Play size={16} fill="currentColor" />
            FILM
          </Link>
          <Link 
            to="/contact" 
            className="group relative px-8 py-3 border border-white/30 text-white hover:bg-white/10 font-medium tracking-wider text-sm transition-all flex items-center gap-2"
          >
            CONTACT
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;