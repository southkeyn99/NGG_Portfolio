
import React from 'react';
import { Film } from '../types';

interface CVProps {
  films: Film[];
}

const CV: React.FC<CVProps> = ({ films }) => {
  // Helper to translate roles to Korean
  const translateRole = (role: string) => {
    if (!role) return "";
    
    const map: { [key: string]: string } = {
      "director": "감독",
      "writer": "각본",
      "cinematographer": "촬영",
      "d.o.p": "촬영감독",
      "editor": "편집",
      "di": "색보정",
      "assistant director": "조감독",
      "gaffer": "조명",
      "lighting": "조명",
      "producer": "PD",
      "staff": "스태프"
    };

    return role
      .toLowerCase()
      .split('/')
      .map(part => {
        const trimmed = part.trim();
        return map[trimmed] || trimmed;
      })
      .join('/');
  };

  // Helper to remove English parts from title (usually in parentheses)
  const cleanTitle = (title: string) => {
    // If title has "(English Title)", remove it
    // Example: "아부지 (Panic Disorder)" -> "아부지"
    return title.replace(/\s*\([a-zA-Z\s,.'-]+\)\s*/g, "").trim();
  };

  // Helper to filter and group films
  const getCategorizedWorks = (category: 'directing' | 'cinematography' | 'staff') => {
    const filtered = films.filter(film => {
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

    const grouped = filtered.reduce((acc: { [key: string]: Film[] }, film) => {
      const year = film.year;
      if (!acc[year]) acc[year] = [];
      acc[year].push(film);
      return acc;
    }, {});

    const sortedYears = Object.keys(grouped).sort((a, b) => b.localeCompare(a));
    return { grouped, sortedYears };
  };

  const RenderCategory = ({ title, category }: { title: string, category: 'directing' | 'cinematography' | 'staff' }) => {
    const { grouped, sortedYears } = getCategorizedWorks(category);
    
    if (sortedYears.length === 0) return null;

    return (
      <div className="mb-32">
        <h3 className="text-white text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-12 border-b border-neutral-800 pb-4 inline-block">
          {title}
        </h3>

        <div className="space-y-16">
          {sortedYears.map((year) => (
            <div key={year} className="flex flex-col md:flex-row gap-8 md:gap-16">
              {/* Year Column */}
              <div className="md:w-32 shrink-0">
                <span className="text-cinematic-accent text-2xl md:text-3xl font-bold tracking-tighter">
                  {year}
                </span>
              </div>

              {/* Content Column */}
              <div className="flex-1 space-y-10">
                {grouped[year].map((film) => (
                  <div key={film.id} className="group">
                    <h4 className="text-white text-lg md:text-xl font-medium mb-3 flex items-center flex-wrap gap-x-1.5">
                      {film.isAi && <span className="text-sm md:text-base font-bold text-white/80 uppercase tracking-tight bg-white/10 px-1.5 py-0.5 rounded leading-none shrink-0 mr-1">AI</span>}
                      <span className="shrink-0">{film.genre.includes('장편') ? '장편영화' : '단편영화'}</span>
                      <span className="font-serif shrink-0">〈{cleanTitle(film.title)}〉</span>
                      <span className="text-neutral-400 font-light text-base md:text-lg">
                        {translateRole(film.role)}
                      </span>
                    </h4>
                    
                    {film.awards && film.awards.length > 0 && (
                      <ul className="space-y-1.5 ml-1">
                        {film.awards.map((award, i) => (
                          <li key={i} className="text-neutral-500 text-xs md:text-sm flex items-start gap-2">
                            <span className="mt-1.5 w-1 h-1 bg-neutral-700 rounded-full shrink-0"></span>
                            <span className="font-light">{award}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="py-24 bg-cinematic-black border-t border-neutral-900">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Main Header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-serif text-white tracking-tight uppercase mb-4">
            CURRICULUM VITAE
          </h2>
          <p className="text-neutral-500 text-[10px] md:text-xs tracking-[0.4em] uppercase font-medium">
            FILMOGRAPHY & PROFESSIONAL EXPERIENCE
          </p>
        </div>

        {/* Categories */}
        <RenderCategory title="DIRECTING" category="directing" />
        <RenderCategory title="CINEMATOGRAPHY" category="cinematography" />
        <RenderCategory title="STAFF EXPERIENCE" category="staff" />
      </div>
    </section>
  );
};

export default CV;
