import React from 'react';
import { DIRECTOR_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-cinematic-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* Profile Image - Static */}
          <div className="w-full md:w-1/3 max-w-xs">
            <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900 group">
              <img 
                src={DIRECTOR_INFO.profileImage}
                alt="Director Profile" 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                onError={(e) => {
                  e.currentTarget.src = "https://picsum.photos/400/600?grayscale";
                }}
              />
              <div className="absolute inset-0 border border-white/10 pointer-events-none" />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-2/3 flex flex-col justify-center pt-8">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-2">
              {DIRECTOR_INFO.name} <span className="text-2xl text-neutral-500 font-sans font-light">{DIRECTOR_INFO.koreanName}</span>
            </h2>
            <h3 className="text-cinematic-accent tracking-widest text-sm uppercase mb-8">
              {DIRECTOR_INFO.title}
            </h3>

            <div className="space-y-6 text-neutral-300 font-light leading-relaxed whitespace-pre-line mb-12 border-l-2 border-cinematic-accent pl-6">
              {DIRECTOR_INFO.bio}
            </div>

            {/* Awards / History */}
            <div>
              <h4 className="text-white text-lg font-serif mb-6 border-b border-neutral-800 pb-2 inline-block">
                Selected Awards & Recognition
              </h4>
              <ul className="space-y-4">
                {DIRECTOR_INFO.awards.map((award, index) => (
                  <li key={index} className="text-cinematic-accent font-medium text-sm tracking-wide flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-cinematic-accent rounded-full" />
                    {award}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;