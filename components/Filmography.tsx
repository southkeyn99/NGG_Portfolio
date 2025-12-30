
import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { Film } from '../types';
import { X, Award, ChevronLeft, ChevronRight } from 'lucide-react';

interface FilmographyProps {
  title?: string;
  category: 'directing' | 'cinematography' | 'staff';
  films: Film[];
}

const Filmography: React.FC<FilmographyProps> = ({ title, category, films }) => {
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredFilms = useMemo(() => {
    return films.filter(film => {
      const role = (film.role || "").toLowerCase();
      if (category === 'directing') {
        return role.includes('director') && !role.includes('assistant') && !role.includes('lighting');
      } else if (category === 'cinematography') {
        return role.includes('cinematographer') || role.includes('d.o.p');
      } else if (category === 'staff') {
        return (!role.includes('director') && !role.includes('cinematographer')) || role.includes('assistant') || role.includes('gaffer');
      }
      return true;
    });
  }, [category, films]);

  const displayTitle = title || (category === 'directing' ? 'FILMOGRAPHY' : category.toUpperCase());

  const navigateLightbox = useCallback((direction: number) => {
    if (lightboxIndex === null || !selectedFilm) return;
    
    const newIndex = lightboxIndex + direction;
    if (newIndex >= 0 && newIndex < selectedFilm.stillUrls.length) {
      setLightboxIndex(newIndex);
    }
  }, [lightboxIndex, selectedFilm]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null && selectedFilm) {
        if (e.key === 'Escape') setSelectedFilm(null);
      } else if (lightboxIndex !== null) {
        switch(e.key) {
          case 'Escape': setLightboxIndex(null); break;
          case 'ArrowLeft': navigateLightbox(-1); break;
          case 'ArrowRight': navigateLightbox(1); break;
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, selectedFilm, navigateLightbox]);

  // Helper to split title into main and sub (English)
  const renderTitle = (title: string, mainClass: string, subClass: string) => {
    const match = title.match(/^(.*?)(\s*\(.*\))$/);
    if (match) {
      return (
        <>
          <span className={mainClass}>{match[1].trim()}</span>
          <span className={`${subClass} opacity-40 font-sans font-light ml-3 inline-block transform translate-y-[-0.1em]`}>
            {match[2].trim()}
          </span>
        </>
      );
    }
    return <span className={mainClass}>{title}</span>;
  };

  return (
    <div className="min-h-screen bg-cinematic-black pt-24 pb-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-serif text-white mb-16 tracking-tighter text-center uppercase">
          {displayTitle}
        </h2>

        {filteredFilms.length === 0 ? (
          <div className="text-center text-neutral-500 py-20">
            <p className="text-xl font-light">No works found in this category yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-24">
            {filteredFilms.map((film, index) => (
              <div 
                key={film.id} 
                className={`flex flex-col md:flex-row gap-8 md:gap-16 group cursor-pointer ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
                onClick={() => setSelectedFilm(film)}
              >
                <div className="w-full md:w-5/12 lg:w-4/12 relative overflow-hidden shadow-2xl">
                  <div className="aspect-[2/3] w-full overflow-hidden bg-neutral-900">
                    <img 
                      src={film.posterUrl} 
                      alt={film.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      style={{ objectPosition: film.posterObjectPosition || 'center' }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white border border-white px-8 py-3 text-sm tracking-[0.2em] uppercase bg-black/20 backdrop-blur-sm">View Details</span>
                  </div>
                </div>

                <div className="w-full md:w-7/12 lg:w-8/12 flex flex-col justify-center items-start">
                  <span className="text-cinematic-accent text-lg font-bold tracking-widest mb-4 block">{film.year}</span>
                  <h3 className="font-serif text-white mb-6 leading-tight group-hover:text-neutral-200 transition-colors tracking-tight">
                    {renderTitle(film.title, "text-4xl md:text-6xl", "text-xl md:text-3xl")}
                  </h3>
                  <div className="text-cinematic-accent text-sm font-bold tracking-[0.1em] mb-8 flex flex-wrap gap-4 items-center uppercase">
                    <span>{film.genre}</span>
                    <span className="opacity-30">|</span>
                    <span>{film.runtime}</span>
                    {film.aspectRatio && (
                        <>
                            <span className="opacity-30">|</span>
                            <span>{film.aspectRatio}</span>
                        </>
                    )}
                  </div>
                  <p className="text-neutral-400 font-light text-lg leading-relaxed max-w-2xl line-clamp-3 whitespace-pre-line mb-8">
                    {film.synopsis}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Film Detail Modal */}
      {selectedFilm && (
        <div className="fixed inset-0 z-[100] bg-black animate-fade-in overflow-y-auto no-scrollbar">
          <button 
            onClick={() => setSelectedFilm(null)}
            className="fixed top-8 right-8 text-neutral-500 hover:text-white z-[110] transition-transform hover:scale-110"
          >
            <X size={32} strokeWidth={1.5} />
          </button>

          <div className="container mx-auto px-6 py-20 md:py-32 max-w-5xl">
            {/* Title Section */}
            <div className="mb-12">
              <h3 className="font-serif text-white mb-6 tracking-tight leading-tight">
                {renderTitle(selectedFilm.title, "text-5xl md:text-7xl", "text-2xl md:text-4xl")}
              </h3>
              <p className="text-white text-xl md:text-2xl font-medium mb-4 opacity-90">{selectedFilm.year}</p>
              <div className="text-cinematic-accent text-xs md:text-sm font-bold tracking-[0.15em] flex flex-wrap gap-3 items-center uppercase">
                <span>{selectedFilm.genre}</span>
                <span className="opacity-40">|</span>
                <span>{selectedFilm.runtime}</span>
                {selectedFilm.aspectRatio && (
                  <>
                    <span className="opacity-40">|</span>
                    <span>{selectedFilm.aspectRatio}</span>
                  </>
                )}
              </div>
            </div>

            {/* Synopsis Section */}
            <div className="mb-16">
              <h4 className="text-neutral-500 text-[10px] md:text-xs font-bold uppercase mb-6 tracking-[0.4em]">SYNOPSIS</h4>
              <p className="text-white text-lg md:text-xl font-light leading-[1.85] whitespace-pre-line max-w-3xl">
                {selectedFilm.synopsis}
              </p>
            </div>

            {/* Role Section */}
            <div className="mb-16">
              <h4 className="text-neutral-500 text-[10px] md:text-xs font-bold uppercase mb-6 tracking-[0.4em]">ROLE</h4>
              <p className="text-white text-lg md:text-xl font-light">
                {selectedFilm.role}
              </p>
            </div>

            {/* Awards & Festivals Section */}
            {selectedFilm.awards && selectedFilm.awards.length > 0 && (
              <div className="mb-20">
                <div className="flex items-center gap-3 mb-8">
                  <Award size={16} className="text-cinematic-accent" strokeWidth={2} />
                  <h4 className="text-cinematic-accent text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">AWARDS & FESTIVALS</h4>
                </div>
                <ul className="space-y-2.5">
                  {selectedFilm.awards.map((award, i) => (
                    <li key={i} className="text-cinematic-accent/90 text-sm md:text-base flex items-start gap-4">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-cinematic-accent rounded-full shrink-0"></span>
                      <span className="font-light">{award}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Stills Gallery */}
            {selectedFilm.stillUrls && selectedFilm.stillUrls.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-neutral-900">
                {selectedFilm.stillUrls.map((url, i) => (
                  <div key={i} className="overflow-hidden bg-neutral-900 aspect-video group shadow-2xl">
                    <img 
                      src={url} 
                      alt={`Still ${i + 1}`} 
                      className="w-full h-full object-cover cursor-zoom-in transition-transform duration-700 group-hover:scale-105" 
                      onClick={() => setLightboxIndex(i)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Lightbox for Stills */}
      {lightboxIndex !== null && selectedFilm && (
        <div 
          className="fixed inset-0 z-[200] bg-black/98 flex items-center justify-center p-4 cursor-zoom-out animate-fade-in select-none"
          onClick={() => setLightboxIndex(null)}
        >
          <button 
            className="absolute top-10 right-10 text-white/50 hover:text-white transition-all p-3 z-[210] hover:scale-110"
            onClick={() => setLightboxIndex(null)}
          >
            <X size={48} />
          </button>

          {lightboxIndex > 0 && (
             <button
                className="absolute left-4 md:left-12 text-white/30 hover:text-white transition-all p-4 z-[210] cursor-pointer hover:scale-110"
                onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
             >
                <ChevronLeft size={64} />
             </button>
          )}

          <img 
            src={selectedFilm.stillUrls[lightboxIndex]} 
            alt={`Still ${lightboxIndex + 1}`} 
            className="max-h-[95vh] max-w-[95vw] object-contain shadow-2xl" 
            onClick={(e) => e.stopPropagation()} 
          />

           {lightboxIndex < selectedFilm.stillUrls.length - 1 && (
             <button
                className="absolute right-4 md:right-12 text-white/30 hover:text-white transition-all p-4 z-[210] cursor-pointer hover:scale-110"
                onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
             >
                <ChevronRight size={64} />
             </button>
          )}

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/40 text-sm tracking-[0.5em] font-mono">
            {lightboxIndex + 1} / {selectedFilm.stillUrls.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default Filmography;
