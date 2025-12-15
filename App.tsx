import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Filmography from './components/Filmography';
import Contact from './components/Contact';
import { FILMS } from './constants';
import { ArrowRight } from 'lucide-react';

// Home Page Composite Component
const Home: React.FC = () => {
  const recentFilm = FILMS[0]; // Get the first film (most recent)
  const recentFilmImage = "https://postfiles.pstatic.net/MjAyNTEyMTNfMTk0/MDAxNzY1NjMyMzkyNzY4.qGMXRH7uhj6tpI_iG9iWjP44If2ojH2tdV3UzZ44N6Ig.ImRJwctv8JvQQ3kXLuKawpfGRxOcSLX0_yWZ50zAwWIg.JPEG/5.jpg?type=w3840";

  return (
    <>
      <Hero />
      <About />
      
      {/* Featured Recent Film Section */}
      <section className="py-24 bg-cinematic-dark border-t border-neutral-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-cinematic-accent text-sm tracking-[0.2em] uppercase mb-4">Latest Work</span>
            <h2 className="text-3xl md:text-5xl font-serif text-white">FEATURED FILM</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
             <Link 
                to="/film" 
                className="w-full md:w-1/2 aspect-video overflow-hidden border border-neutral-800 group block cursor-pointer"
             >
                <img 
                  src={recentFilmImage} 
                  alt={recentFilm.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
             </Link>
             <div className="w-full md:w-1/2 text-left">
                <span className="text-cinematic-accent font-bold text-lg mb-2 block">{recentFilm.year}</span>
                <h3 className="text-3xl md:text-4xl font-serif text-white mb-4">{recentFilm.title}</h3>
                <p className="text-neutral-400 text-sm mb-6 max-w-lg leading-relaxed whitespace-pre-line">
                  {recentFilm.synopsis}
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-neutral-500 text-xs tracking-widest uppercase border-r border-neutral-700 pr-4">{recentFilm.genre}</span>
                  <span className="text-neutral-500 text-xs tracking-widest uppercase">{recentFilm.runtime}</span>
                </div>
                <div className="mt-8">
                  <Link 
                    to="/film" 
                    className="inline-flex items-center gap-2 text-white border-b border-cinematic-accent pb-1 hover:text-cinematic-accent transition-colors tracking-widest text-sm uppercase"
                  >
                    View Project <ArrowRight size={16} />
                  </Link>
                </div>
             </div>
          </div>
        </div>
      </section>
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="bg-cinematic-black min-h-screen text-white font-sans selection:bg-cinematic-accent selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            
            {/* Directing Works */}
            <Route path="/film" element={<Filmography title="DIRECTING" category="directing" />} />
            
            {/* Cinematography Works */}
            <Route path="/cinematography" element={<Filmography title="CINEMATOGRAPHY" category="cinematography" />} />
            
            {/* Other Staff Works */}
            <Route path="/staff" element={<Filmography title="STAFF WORKS" category="staff" />} />
            
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;