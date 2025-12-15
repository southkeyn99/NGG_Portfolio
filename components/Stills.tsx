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
        <h2 className="text-4xl md:text-6xl font-serif text-white mb-12 tracking-tighter">
          ARCHIVE
        </h2>
        
        {/* Masonry-like Layout using columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {STILLS.map((still, index) => (
            <div 
              key={still.id} 
              className="break-inside-avoid relative group cursor-zoom-in"
              onClick={() => setLightboxIndex(index)}
            >
              <img 
                src={still.url} 
                alt="Archive Still" 
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <span className="text-white text-xs tracking-widest uppercase">{still.type} - {still.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out select-none"
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
            src={STILLS[lightboxIndex].url} 
            alt="Fullsize" 
            className="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl cursor-pointer" 
            onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
          />
          
          {/* Caption */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center pointer-events-none">
             <p className="text-white text-sm tracking-widest uppercase mb-1">{STILLS[lightboxIndex].caption}</p>
             <p className="text-white/50 text-xs font-mono">{lightboxIndex + 1} / {STILLS.length}</p>
          </div>

           {/* Next Button */}
           {lightboxIndex < STILLS.length - 1 && (
             <button
                className="absolute right-2 md:right-8 text-white/50 hover:text-white transition-colors p-2 z-[70] cursor-pointer"
                onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
             >
                <ChevronRight size={48} />
             </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Stills;