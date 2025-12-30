
import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { Film } from '../types';
import { X, Award, ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface FilmographyProps {
  title: string;
  category: 'directing' | 'cinematography' | 'staff';
  films: Film[];
}

const Filmography: React.FC<FilmographyProps> = ({ title, category, films }) => {
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);

  // Filter films based on the active category
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
  }, [films, category]);

  // Handle navigation between films in the detail overlay
  const navigateFilm = useCallback((direction: number) => {
    if (!selectedFilm) return;
    const currentIndex = filteredFilms.findIndex(f => f.id === selectedFilm.id);
    const nextIndex = (currentIndex + direction + filteredFilms.length) % filteredFilms.length;
    setSelectedFilm(filteredFilms[nextIndex]);
  }, [selectedFilm, filteredFilms]);

  // Keyboard navigation for the overlay
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedFilm) return;
      if (e.key === 'Escape') setSelectedFilm(null);
      if (e.key === 'ArrowLeft') navigateFilm(-1);
      if (e.key === 'ArrowRight') navigateFilm(1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedFilm, navigateFilm]);

  // Helper to render titles with English subtitles in smaller font
  const renderTitle = (title: string, mainClass: string, subClass: string) => {
    const match = title.match(/^(.*?)(\s*\(.*\))$/);
    if (match) {
      return (
        <>
          <span className={mainClass}>{match[1].trim()}</span>
          <span className={`${subClass} opacity-40 font-sans font-light ml-2 inline-block`}>
            {match[2].trim()}
          </span>
        </>
      );
    }
    return <span className={mainClass}>{title}</span>;
  };

  return (
    <div className="min-h-screen bg-cinematic-black pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <header className="mb-24 border-b border-neutral-800 pb-12 text-center">
          <h1 className="text-5xl md:text-8xl font-serif text-white tracking-tighter uppercase mb-6">
            {title}
          </h1>
          <p className="text-neutral-500 text-xs tracking-[0.4em] uppercase">
            {filteredFilms.length} Selected Projects in Archive
          </p>
        </header>

        <div className="space-y-40">
          {filteredFilms.map((film, index) => (
            <div 
              key={film.id} 
              className={`flex flex-col md:flex-row gap-12 lg:gap-24 group cursor-pointer ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
              onClick={() => setSelectedFilm(film)}
            >
              {/* Image Section - Set to Portrait Aspect Ratio (2:3) */}
              <div className="w-full md:w-[35%] lg:w-[30%] shrink-0">
                <div className="relative aspect-[2/3] w-full overflow-hidden bg-neutral-900 shadow-2xl border border-white/5">
                  <img 
                    src={film.posterUrl} 
                    alt={film.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    style={{ objectPosition: film.posterObjectPosition || 'center' }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="px-6 py-2 border border-white text-white text-[10px] tracking-[0.3em] uppercase backdrop-blur-sm">
                        View Archive
                    </div>
                  </div>
                  {film.isAi && (
                    <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md px-2 py-0.5 text-[9px] text-white/70 uppercase tracking-widest border border-white/10 font-bold">
                      AI Enhanced
                    </div>
                  )}
                </div>
              </div>
              
              {/* Info Section - Expanded to fill remaining 70% width */}
              <div className="w-full md:w-[65%] lg:w-[70%] flex flex-col justify-center text-left">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-cinematic-accent text-xl font-bold tracking-tighter">{film.year}</span>
                  <span className="text-neutral-500 text-[10px] uppercase tracking-[0.2em] font-medium opacity-60">{film.role}</span>
                </div>
                
                <h3 className="text-white text-4xl md:text-6xl font-serif tracking-tight leading-tight mb-4 group-hover:text-cinematic-accent transition-colors">
                  {renderTitle(film.title, "", "text-2xl")}
                </h3>

                {/* Meta Info in Lowercase */}
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-cinematic-accent text-xs font-bold tracking-widest mb-6 lowercase">
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

                <p className="text-neutral-400 text-base md:text-lg font-light leading-relaxed mb-6 line-clamp-4 max-w-2xl">
                  {film.synopsis}
                </p>

                {/* Awards Section - Tightly coupled with synopsis */}
                {film.awards && film.awards.length > 0 && (
                  <div className="space-y-2 mt-2">
                    {film.awards.map((award, i) => (
                      <div key={i} className="flex items-center gap-2 text-cinematic-accent group-hover:translate-x-1 transition-transform duration-300">
                        <Award size={14} strokeWidth={2.5} className="shrink-0" />
                        <span className="text-[11px] font-bold uppercase tracking-widest leading-none">{award}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Overlay */}
      {selectedFilm && (
        <div className="fixed inset-0 z-[100] bg-black/98 flex items-center justify-center p-4 md:p-8 animate-fade-in overflow-y-auto no-scrollbar">
          <button 
            onClick={() => setSelectedFilm(null)}
            className="fixed top-8 right-8 text-neutral-500 hover:text-white transition-colors p-2 z-[110]"
          >
            <X size={32} />
          </button>

          {/* Navigation */}
          <button 
            onClick={(e) => { e.stopPropagation(); navigateFilm(-1); }}
            className="fixed left-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-all p-4 z-[110] hidden xl:block"
          >
            <ChevronLeft size={64} />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); navigateFilm(1); }}
            className="fixed right-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-all p-4 z-[110] hidden xl:block"
          >
            <ChevronRight size={64} />
          </button>
          
          <div className="w-full max-w-5xl bg-neutral-900 border border-neutral-800 shadow-2xl rounded-sm my-10">
            <div className="flex flex-col">
              <div className="w-full aspect-video bg-black">
                <img src={selectedFilm.stillUrls[0] || selectedFilm.posterUrl} className="w-full h-full object-cover" alt="" />
              </div>
              <div className="p-8 md:p-16 space-y-12">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-cinematic-accent text-2xl font-bold tracking-tighter">{selectedFilm.year}</span>
                    <span className="text-neutral-500 text-xs uppercase tracking-[0.3em] font-medium">{selectedFilm.role}</span>
                  </div>
                  <h2 className="text-5xl md:text-7xl font-serif text-white mb-6">
                    {renderTitle(selectedFilm.title, "", "text-2xl")}
                  </h2>
                  <div className="flex flex-wrap gap-4 text-xs font-bold text-cinematic-accent uppercase tracking-widest lowercase">
                    <span className="lowercase">{selectedFilm.genre}</span>
                    <span className="opacity-30">|</span>
                    <span className="lowercase">{selectedFilm.runtime}</span>
                    {selectedFilm.aspectRatio && (
                      <>
                        <span className="opacity-30">|</span>
                        <span className="lowercase">{selectedFilm.aspectRatio}</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div className="md:col-span-2 space-y-6">
                    <h4 className="text-white text-[10px] uppercase tracking-[0.4em] font-bold border-b border-neutral-800 pb-2">Synopsis</h4>
                    <p className="text-neutral-300 font-light text-lg leading-[1.8] whitespace-pre-line">
                      {selectedFilm.synopsis}
                    </p>
                  </div>

                  {selectedFilm.awards && selectedFilm.awards.length > 0 && (
                    <div className="space-y-6">
                      <h4 className="text-white text-[10px] uppercase tracking-[0.4em] font-bold border-b border-neutral-800 pb-2">Awards</h4>
                      <ul className="space-y-3">
                        {selectedFilm.awards.map((award, i) => (
                          <li key={i} className="text-cinematic-accent text-xs flex items-start gap-2">
                            <Award size={14} className="shrink-0 mt-0.5" strokeWidth={2.5} />
                            <span className="font-bold uppercase tracking-widest leading-tight">{award}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {selectedFilm.stillUrls && selectedFilm.stillUrls.length > 0 && (
                  <div className="space-y-8 pt-8">
                    <h4 className="text-white text-[10px] uppercase tracking-[0.4em] font-bold border-b border-neutral-800 pb-2">Still Gallery</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {selectedFilm.stillUrls.map((url, i) => (
                        <div key={i} className="aspect-video bg-neutral-800 overflow-hidden border border-white/5 group shadow-lg">
                           <img src={url} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filmography;
