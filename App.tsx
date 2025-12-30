
import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import CV from './components/CV';
import Filmography from './components/Filmography';
import Contact from './components/Contact';
import Admin from './components/Admin';
import { FILMS as INITIAL_FILMS, DIRECTOR_INFO as INITIAL_INFO } from './constants';
import { Film } from './types';
import { ArrowRight, Loader2 } from 'lucide-react';

// --- Robust IndexedDB Storage Implementation ---
const DB_NAME = 'DirectorPortfolioDB';
const STORE_NAME = 'app_state';
const DB_VERSION = 1;

const openDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

const saveToDB = async (key: string, value: any) => {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).put(value, key);
    return new Promise((resolve, reject) => {
      tx.oncomplete = () => resolve(true);
      tx.onerror = () => reject(tx.error);
    });
  } catch (err) {
    console.error("DB Save Error:", err);
  }
};

const loadFromDB = async (key: string, defaultValue: any) => {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, 'readonly');
    const request = tx.objectStore(STORE_NAME).get(key);
    return new Promise((resolve) => {
      request.onsuccess = () => resolve(request.result || defaultValue);
      request.onerror = () => resolve(defaultValue);
    });
  } catch (err) {
    return defaultValue;
  }
};
// ----------------------------------------------

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Home: React.FC<{ films: Film[], directorInfo: any }> = ({ films, directorInfo }) => {
  const recentFilm = films[0]; 
  const recentFilmImage = recentFilm?.stillUrls?.[0] || recentFilm?.posterUrl;

  const renderTitle = (title: string, mainClass: string, subClass: string) => {
    const match = title.match(/^(.*?)(\s*\(.*\))$/);
    if (match) {
      return (
        <>
          <span className={mainClass}>{match[1].trim()}</span>
          <span className={`${subClass} opacity-40 font-sans font-light ml-3 inline-block`}>
            {match[2].trim()}
          </span>
        </>
      );
    }
    return <span className={mainClass}>{title}</span>;
  };

  return (
    <>
      <Hero imageUrl={directorInfo.heroImageUrl} />
      <section id="about">
        <About />
      </section>
      <CV films={films} />
      {recentFilm && (
        <section className="py-32 bg-cinematic-black border-t border-neutral-900">
          <div className="container mx-auto px-6 max-w-7xl text-center">
            <span className="text-cinematic-accent text-xs tracking-[0.4em] uppercase mb-4 font-bold">Latest Work</span>
            <h2 className="text-5xl md:text-8xl font-serif text-white uppercase tracking-tight mb-24">FEATURED FILM</h2>
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
               <Link to="/film" className="w-full lg:w-3/5 aspect-video overflow-hidden border border-neutral-800 group relative block cursor-pointer shadow-2xl">
                  <img src={recentFilmImage} alt={recentFilm.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md px-3 py-1 text-[10px] text-white/80 uppercase tracking-widest border border-white/20">Preview</div>
               </Link>
               <div className="w-full lg:w-2/5 text-left">
                  <span className="text-cinematic-accent font-bold text-lg mb-2 block tracking-tighter">{recentFilm.year}</span>
                  <h3 className="font-serif text-white mb-8 tracking-tight leading-tight">
                    {renderTitle(recentFilm.title, "text-4xl md:text-6xl", "text-xl md:text-3xl")}
                  </h3>
                  <p className="text-neutral-500 text-base md:text-lg mb-10 max-w-lg leading-relaxed whitespace-pre-line font-light">{recentFilm.synopsis}</p>
                  <div className="text-cinematic-accent text-[11px] md:text-xs font-bold tracking-[0.2em] mb-12 flex flex-wrap gap-4 items-center uppercase">
                    <span>{recentFilm.genre}</span>
                    <span className="opacity-30 font-light">|</span>
                    <span>{recentFilm.runtime}</span>
                  </div>
                  <Link to="/film" className="inline-flex items-center gap-3 text-white border-b border-cinematic-accent/50 pb-2 hover:border-cinematic-accent hover:text-cinematic-accent transition-all duration-300 tracking-[0.2em] text-xs font-bold uppercase">
                    View Project <ArrowRight size={16} />
                  </Link>
               </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

function App() {
  const [films, setFilms] = useState<Film[]>(INITIAL_FILMS);
  const [directorInfo, setDirectorInfo] = useState<any>(INITIAL_INFO);
  const [isAppReady, setIsAppReady] = useState(false);
  const isFirstRender = useRef(true);

  // 1. Initial Load from IndexedDB
  useEffect(() => {
    const initData = async () => {
      const savedFilms = await loadFromDB('films', INITIAL_FILMS);
      const savedInfo = await loadFromDB('directorInfo', INITIAL_INFO);
      setFilms(savedFilms as Film[]);
      setDirectorInfo(savedInfo);
      setIsAppReady(true);
    };
    initData();
  }, []);

  // 2. Continuous Sync to IndexedDB
  useEffect(() => {
    if (!isAppReady) return;
    saveToDB('films', films);
  }, [films, isAppReady]);

  useEffect(() => {
    if (!isAppReady) return;
    saveToDB('directorInfo', directorInfo);
  }, [directorInfo, isAppReady]);

  if (!isAppReady) {
    return (
      <div className="min-h-screen bg-cinematic-black flex flex-col items-center justify-center">
        <Loader2 className="text-cinematic-accent animate-spin mb-4" size={48} />
        <h1 className="text-white font-serif text-2xl tracking-[0.2em] uppercase opacity-50">Opening Archive</h1>
      </div>
    );
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="bg-cinematic-black min-h-screen text-white font-sans selection:bg-cinematic-accent selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home films={films} directorInfo={directorInfo} />} />
            <Route path="/about" element={<About />} />
            <Route path="/film" element={<Filmography title="DIRECTING" category="directing" films={films} />} />
            <Route path="/cinematography" element={<Filmography title="CINEMATOGRAPHY" category="cinematography" films={films} />} />
            <Route path="/staff" element={<Filmography title="STAFF WORKS" category="staff" films={films} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin films={films} setFilms={setFilms} directorInfo={directorInfo} setDirectorInfo={setDirectorInfo} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
