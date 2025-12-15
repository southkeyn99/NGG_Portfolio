import React from 'react';

const Showreel: React.FC = () => {
  return (
    <section className="w-full py-12 bg-cinematic-dark border-t border-neutral-900">
      <div className="container mx-auto px-6 mb-8 text-center">
         <h3 className="text-white text-xl font-serif italic mb-2">Director's Film</h3>
         <p className="text-neutral-500 text-sm tracking-wider">Highlights of recent narrative works (2024)</p>
      </div>
      
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative w-full aspect-video bg-black shadow-2xl border border-neutral-800 group overflow-hidden">
             {/* Placeholder for iframe. In a real app, replace src with actual embed link */}
             <iframe 
                className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                src="https://www.youtube.com/embed/KGAkGP8ogx4?mute=1&controls=0" 
                title="Film"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
            ></iframe>
            
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors">
                {/* Optional overlay if not auto-playing */}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Showreel;