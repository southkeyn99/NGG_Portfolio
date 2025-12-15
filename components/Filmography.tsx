import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { FILMS } from '../constants';
import { Film } from '../types';
import { X, Award, ChevronLeft, ChevronRight, Users, Clapperboard } from 'lucide-react';

interface FilmographyProps {
  title?: string;
  category: 'directing' | 'cinematography' | 'staff';
}

const Filmography: React.FC<FilmographyProps> = ({ title, category }) => {
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredFilms = useMemo(() => {
    return FILMS.filter(film => {
      const role = film.role.toLowerCase();
      if (category === 'directing') {
        return role.includes('director') && !role.includes('assistant') && !role.includes('lighting');
      } else if (category === 'cinematography') {
        return role.includes('cinematographer') || role.includes('d.o.p');
      } else if (category === 'staff') {
        return !role.includes('director') && !role.includes('cinematographer') || role.includes('assistant') || role.includes('gaffer');
      }
      return true;
    });
  }, [category]);

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
      if (lightboxIndex === null) return;
      
      switch(e.key) {
        case 'Escape':
          setLightboxIndex(null);
          break;
        case 'ArrowLeft':
          navigateLightbox(-1);
          break;
        case 'ArrowRight':
          navigateLightbox(1);
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, navigateLightbox]);

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
          <div className="grid grid-cols-1 gap-16">
            {filteredFilms.map((film, index) => (
              <div 
                key={film.id} 
                className={`flex flex-col md:flex-row gap-8 md:gap-12 group cursor-pointer ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
                onClick={() => setSelectedFilm(film)}
              >
                {/* Poster/Image */}
                <div className="w-full md:w-5/12 lg:w-4/12 relative overflow-hidden">
                  <div className="aspect-[2/3] w-full overflow-hidden bg-neutral-900">
                    <img 
                      src={film.posterUrl} 
                      alt={film.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                      style={{ objectPosition: film.posterObjectPosition || 'center' }}
                    />
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white border border-white px-6 py-2 text-sm tracking-widest uppercase">View Details</span>
                  </div>
                </div>

                {/* Info */}
                <div className="w-full md:w-7/12 lg:w-8/12 flex flex-col justify-center items-start">
                  
                  {/* Year displayed separately: Orange, Bold, Slightly Bigger */}
                  <span className="text-cinematic-accent text-base font-bold tracking-wider mb-2 block">{film.year}</span>

                  <h3 className="text-3xl md:text-5xl font-serif text-white mb-3 leading-tight group-hover:text-neutral-300 transition-colors">
                    {film.title}
                  </h3>

                  {film.productionNote && (
                    <p className="text-white/70 italic text-sm mb-4 font-serif border-l border-white/30 pl-3">
                      {film.productionNote}
                    </p>
                  )}
                  
                  {/* Orange Metadata Row: AI | Genre | Runtime | Aspect Ratio */}
                  <div className="text-cinematic-accent text-sm font-medium tracking-wide mb-6 flex flex-wrap gap-2 items-center">
                    {film.isAi && (
                        <>
                            <span>AI</span>
                            <span className="text-cinematic-accent opacity-60">|</span>
                        </>
                    )}
                    <span>{film.genre}</span>
                    <span className="text-cinematic-accent opacity-60">|</span>
                    <span>{film.runtime}</span>
                    {film.aspectRatio && (
                        <>
                            <span className="text-cinematic-accent opacity-60">|</span>
                            <span>{film.aspectRatio}</span>
                        </>
                    )}
                  </div>

                  <div className="text-neutral-500 text-xs tracking-wider mb-4 border-l-2 border-neutral-700 pl-3 uppercase">
                    {film.role}
                  </div>

                  <p className="text-neutral-400 font-light leading-relaxed max-w-xl line-clamp-3 whitespace-pre-line mb-4">
                    {film.synopsis}
                  </p>
                  
                  {/* Awards in Preview - Changed to Orange-500 */}
                  {film.awards && film.awards.length > 0 && (
                    <div className="flex flex-col gap-1 mt-2">
                        {film.awards.map((award, i) => (
                            <span key={i} className="text-orange-500 text-xs md:text-sm tracking-wide flex items-center gap-2 opacity-90">
                                <Award size={14} className="shrink-0" /> {award}
                            </span>
                        ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Film Detail Modal */}
      {selectedFilm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-5xl bg-cinematic-dark border border-neutral-800 shadow-2xl overflow-y-auto max-h-[90vh]">
            <button 
              onClick={(e) => { e.stopPropagation(); setSelectedFilm(null); }}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white z-10 p-2"
            >
              <X size={32} />
            </button>

            <div className="flex flex-col items-start">
                <div className="w-full p-8 md:p-12">
                    <h3 className="text-4xl font-serif text-white mb-2">{selectedFilm.title}</h3>
                    
                    <div className="mb-6">
                        {/* Updated to match list style consistency */}
                        <span className="text-cinematic-accent text-base font-bold tracking-wider block mb-1">{selectedFilm.year}</span>
                        <p className="text-cinematic-accent text-sm tracking-wide font-medium">
                          {selectedFilm.isAi && "AI | "}{selectedFilm.genre} | {selectedFilm.runtime} {selectedFilm.aspectRatio ? `| ${selectedFilm.aspectRatio}` : ''}
                        </p>
                    </div>
                    
                    <div className="space-y-6 text-neutral-300 font-light">
                        {selectedFilm.productionNote && (
                          <div className="p-4 bg-white/5 border-l-2 border-cinematic-accent italic text-white/90">
                            {selectedFilm.productionNote}
                          </div>
                        )}

                        <div>
                            <h4 className="text-white text-sm font-bold uppercase mb-2 tracking-wider">Synopsis</h4>
                            <p className="leading-relaxed opacity-80 whitespace-pre-line">{selectedFilm.synopsis}</p>
                        </div>
                        
                        <div>
                            <h4 className="text-white text-sm font-bold uppercase mb-2 tracking-wider">Role</h4>
                            <p className="leading-relaxed opacity-80">{selectedFilm.role}</p>
                        </div>

                        {/* Credits Section (Cast & Crew) */}
                        {(selectedFilm.cast || selectedFilm.crew) && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6 border-t border-b border-neutral-800">
                             {/* Crew */}
                             {selectedFilm.crew && selectedFilm.crew.length > 0 && (
                               <div>
                                  <h4 className="text-white text-sm font-bold uppercase mb-3 tracking-wider flex items-center gap-2">
                                    <Clapperboard size={16} /> Crew
                                  </h4>
                                  <ul className="space-y-1 text-sm">
                                     {selectedFilm.crew.map((member, i) => (
                                       <li key={i} className="flex justify-between items-center text-neutral-400">
                                          <span className="opacity-70">{member.role}</span>
                                          <span className="text-white">{member.name}</span>
                                       </li>
                                     ))}
                                  </ul>
                               </div>
                             )}
                             
                             {/* Cast */}
                             {selectedFilm.cast && selectedFilm.cast.length > 0 && (
                               <div>
                                  <h4 className="text-white text-sm font-bold uppercase mb-3 tracking-wider flex items-center gap-2">
                                    <Users size={16} /> Cast
                                  </h4>
                                  <ul className="space-y-1 text-sm">
                                     {selectedFilm.cast.map((actor, i) => (
                                       <li key={i} className="flex justify-between items-center text-neutral-400">
                                          <span className="opacity-70">{actor.role}</span>
                                          <span className="text-white">{actor.name}</span>
                                       </li>
                                     ))}
                                  </ul>
                               </div>
                             )}
                          </div>
                        )}

                        {/* Awards Section - Changed to Orange-500 */}
                        {selectedFilm.awards && selectedFilm.awards.length > 0 && (
                            <div>
                                <h4 className="text-orange-500 text-sm font-bold uppercase mb-2 tracking-wider flex items-center gap-2">
                                    <Award size={16} /> Awards & Festivals
                                </h4>
                                <ul className="list-disc list-inside text-sm text-orange-500 space-y-1">
                                    {selectedFilm.awards.map((award, i) => (
                                        <li key={i}>{award}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="mt-8 grid grid-cols-2 gap-4">
                            {selectedFilm.stillUrls.map((url, i) => (
                                <img 
                                  key={i} 
                                  src={url} 
                                  alt={`Still ${i + 1}`} 
                                  className="w-full aspect-video object-cover grayscale hover:grayscale-0 transition-all duration-500 cursor-zoom-in border border-transparent hover:border-cinematic-accent/50" 
                                  onClick={() => setLightboxIndex(i)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      )}

      {/* Full Screen Image Lightbox with Navigation */}
      {lightboxIndex !== null && selectedFilm && (
        <div 
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out animate-fade-in select-none"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 z-[70]"
            onClick={() => setLightboxIndex(null)}
          >
            <X size={40} />
          </button>

          {/* Previous Button */}
          {lightboxIndex > 0 && (
             <button
                className="absolute left-2 md:left-8 text-white/50 hover:text-white transition-colors p-2 z-[70] cursor-pointer"
                onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
             >
                <ChevronLeft size={48} />
             </button>
          )}

          <img 
            src={selectedFilm.stillUrls[lightboxIndex]} 
            alt={`Still ${lightboxIndex + 1}`} 
            className="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl" 
            onClick={(e) => e.stopPropagation()} 
          />

           {/* Next Button */}
           {lightboxIndex < selectedFilm.stillUrls.length - 1 && (
             <button
                className="absolute right-2 md:right-8 text-white/50 hover:text-white transition-colors p-2 z-[70] cursor-pointer"
                onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
             >
                <ChevronRight size={48} />
             </button>
          )}

          {/* Counter Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-sm tracking-widest font-mono">
            {lightboxIndex + 1} / {selectedFilm.stillUrls.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default Filmography;