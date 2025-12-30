
import React, { useState, useCallback, useEffect } from 'react';
import { STILLS } from '../constants';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Stills: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const navigateLightbox = useCallback((direction: number) => {
    if (lightboxIndex === null) return;
    
    const newIndex = lightboxIndex + direction;
    if (newIndex >= 0 && newIndex < STILLS.length) {
      setLightboxIndex(newIndex);
    }
  }, [lightboxIndex]);

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
        <h2 className="text-4xl md:text-6xl font-serif text-white mb-12 tracking-tighter uppercase">
          STILLS ARCHIVE
        </h2>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {STILLS.map((still, index) => (
            <div 
              key={still.id} 
              className="break-inside-avoid relative group cursor-zoom-in overflow-hidden shadow-xl bg-neutral-900 border border-white/5"
              onClick={() => setLightboxIndex(index)}
            >
              <img 
                src={still.url} 
                alt="Archive Still" 
                className="w-full h-auto opacity-100 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-cinematic-accent text-[10px] tracking-[0.3em] uppercase block mb-1">{still.type}</span>
                    <span className="text-white text-sm font-serif tracking-wider">{still.caption}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-black/98 flex items-center justify-center p-4 cursor-zoom-out select-none animate-fade-in"
          onClick={() => setLightboxIndex(null)}
        >
          <button 
            className="absolute top-10 right-10 text-white/50 hover:text-white transition-all p-3 z-[110] hover:scale-110"
            onClick={() => setLightboxIndex(null)}
          >
            <X size={48} />
          </button>

           {lightboxIndex > 0 && (
             <button
                className="absolute left-4 md:left-12 text-white/30 hover:text-white transition-all p-4 z-[110] cursor-pointer hover:scale-110"
                onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
             >
                <ChevronLeft size={64} />
             </button>
          )}

          <div className="relative group max-h-[90vh] max-w-[90vw] flex flex-col items-center">
              <img 
                src={STILLS[lightboxIndex].url} 
                alt="Fullsize Still" 
                className="max-h-[85vh] max-w-[90vw] object-contain shadow-[0_0_100px_rgba(255,255,255,0.05)] cursor-pointer" 
                onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
              />
              
              <div className="mt-8 text-center pointer-events-none">
                 <p className="text-white text-lg font-serif tracking-widest uppercase mb-2">{STILLS[lightboxIndex].caption}</p>
                 <p className="text-cinematic-accent/50 text-xs tracking-[0.5em] font-mono">{lightboxIndex + 1} / {STILLS.length}</p>
              </div>
          </div>

           {lightboxIndex < STILLS.length - 1 && (
             <button
                className="absolute right-4 md:right-12 text-white/30 hover:text-white transition-all p-4 z-[110] cursor-pointer hover:scale-110"
                onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
             >
                <ChevronRight size={64} />
             </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Stills;
