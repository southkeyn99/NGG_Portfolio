
import React, { useState, useMemo, useCallback } from 'react';
import { Film } from '../types';
import { Save, Upload, Plus, Trash2, Lock, Unlock, X, Edit3, Image as ImageIcon, Award as AwardIcon, AlertCircle, Camera, Users, Clapperboard, Monitor } from 'lucide-react';

interface AdminProps {
  films: Film[];
  setFilms: React.Dispatch<React.SetStateAction<Film[]>>;
  directorInfo: any;
  setDirectorInfo: React.Dispatch<React.SetStateAction<any>>;
}

const Admin: React.FC<AdminProps> = ({ films, setFilms, directorInfo, setDirectorInfo }) => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [editingFilmId, setEditingFilmId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<'directing' | 'cinematography' | 'staff'>('directing');
  const [dragActiveId, setDragActiveId] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '1228') {
      setIsAuthenticated(true);
    } else {
      alert('비밀번호가 틀렸습니다.');
    }
  };

  const categorizedFilms = useMemo(() => {
    return films.filter(film => {
      const role = (film.role || "").toLowerCase();
      if (activeCategory === 'directing') {
        return role.includes('director') && !role.includes('assistant') && !role.includes('lighting');
      } else if (activeCategory === 'cinematography') {
        return role.includes('cinematographer') || role.includes('d.o.p');
      } else if (activeCategory === 'staff') {
        return (!role.includes('director') && !role.includes('cinematographer')) || role.includes('assistant') || role.includes('gaffer');
      }
      return true;
    });
  }, [films, activeCategory]);

  // Comprehensive image processing: resizing and compressing to stay within LocalStorage limits
  const processImage = (file: File, callback: (base64: string) => void) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;
        const MAX_DIM = 1200; // Limit resolution for local storage

        if (width > height) {
          if (width > MAX_DIM) {
            height *= MAX_DIM / width;
            width = MAX_DIM;
          }
        } else {
          if (height > MAX_DIM) {
            width *= MAX_DIM / height;
            height = MAX_DIM;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.drawImage(img, 0, 0, width, height);
        
        // Export as JPEG with 0.7 quality to save space
        const compressedBase64 = canvas.toDataURL('image/jpeg', 0.7);
        callback(compressedBase64);
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, filmId: string, type: 'poster' | 'still', index?: number) => {
    const file = e.target.files?.[0];
    if (!file) return;
    processImage(file, (base64) => updateFilmImage(filmId, type, base64, index));
  };

  const handleDrop = (e: React.DragEvent, filmId: string, type: 'poster' | 'still', index?: number) => {
    e.preventDefault();
    setDragActiveId(null);
    const file = e.dataTransfer.files?.[0];
    if (!file) return;
    processImage(file, (base64) => updateFilmImage(filmId, type, base64, index));
  };

  const updateFilmImage = (filmId: string, type: 'poster' | 'still', base64: string, index?: number) => {
    setFilms(prev => prev.map(f => {
      if (f.id === filmId) {
        if (type === 'poster') {
          return { ...f, posterUrl: base64 };
        } else if (type === 'still' && typeof index === 'number') {
          const newStills = [...f.stillUrls];
          newStills[index] = base64;
          return { ...f, stillUrls: newStills };
        }
      }
      return f;
    }));
  };

  const handleDrag = (e: React.DragEvent, id: string) => {
    e.preventDefault();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActiveId(id);
    } else if (e.type === "dragleave") {
      setDragActiveId(null);
    }
  };

  const handleHeroDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActiveId(null);
    const file = e.dataTransfer.files?.[0];
    if (!file) return;
    processImage(file, (base64) => setDirectorInfo(prev => ({ ...prev, heroImageUrl: base64 })));
  };

  const updateFilmText = (filmId: string, field: keyof Film, value: any) => {
    setFilms(prev => prev.map(f => f.id === filmId ? { ...f, [field]: value } : f));
  };

  const addNewFilm = () => {
    const newFilm: Film = {
      id: `f_${Date.now()}`,
      title: "새로운 프로젝트",
      year: new Date().getFullYear().toString(),
      role: activeCategory === 'directing' ? 'Director' : activeCategory === 'cinematography' ? 'Cinematographer' : 'Staff',
      runtime: "0min",
      genre: "Drama",
      synopsis: "여기에 시놉시스를 입력하세요.",
      posterUrl: "https://placehold.co/400x600/111/444/png?text=Poster",
      stillUrls: [],
      awards: []
    };
    setFilms(prev => [newFilm, ...prev]);
    setEditingFilmId(newFilm.id);
  };

  const deleteFilm = (filmId: string, title: string) => {
    if (window.confirm(`'${title}' 작품을 정말로 삭제하시겠습니까?`)) {
      setFilms(prev => prev.filter(f => f.id !== filmId));
      setEditingFilmId(null);
    }
  };

  const addStill = (filmId: string) => {
    setFilms(prev => prev.map(f => {
      if (f.id === filmId) {
        return { ...f, stillUrls: [...f.stillUrls, 'https://placehold.co/800x450/111/444/png?text=New+Still'] };
      }
      return f;
    }));
  };

  const removeStill = (filmId: string, index: number) => {
    setFilms(prev => prev.map(f => {
      if (f.id === filmId) {
        const newStills = f.stillUrls.filter((_, i) => i !== index);
        return { ...f, stillUrls: newStills };
      }
      return f;
    }));
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-cinematic-black flex items-center justify-center p-6">
        <form onSubmit={handleLogin} className="w-full max-w-sm bg-cinematic-dark p-8 border border-neutral-800 rounded-lg shadow-2xl">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/5 rounded-full">
              <Lock className="text-cinematic-accent" size={32} />
            </div>
          </div>
          <h2 className="text-2xl font-serif text-white text-center mb-8 uppercase tracking-widest">Admin Access</h2>
          <input 
            type="password" 
            placeholder="비밀번호 입력"
            className="w-full bg-neutral-900 border border-neutral-800 text-white p-4 mb-4 focus:outline-none focus:border-cinematic-accent transition-all text-center tracking-[0.5em]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="w-full bg-white text-black py-4 font-bold uppercase tracking-widest hover:bg-cinematic-accent hover:text-white transition-all">
            Unlock
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cinematic-black pt-28 pb-20">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-12 border-b border-neutral-800 pb-6">
          <h2 className="text-4xl font-serif text-white tracking-tighter flex items-center gap-3">
            <Unlock className="text-cinematic-accent" /> DASHBOARD
          </h2>
          <button onClick={() => setIsAuthenticated(false)} className="text-neutral-500 hover:text-white text-sm uppercase tracking-widest">Logout</button>
        </div>

        {/* Hero & Profile Edit */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <section className="lg:col-span-2 bg-cinematic-dark p-8 border border-neutral-800 rounded-lg">
            <h3 className="text-xl font-serif text-white mb-8 border-b border-neutral-800 pb-2 uppercase flex items-center gap-2">
              <Edit3 size={20} /> Director Profile
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase text-neutral-500 mb-2">Name</label>
                <input value={directorInfo.name} onChange={(e) => setDirectorInfo(prev => ({...prev, name: e.target.value}))} className="w-full bg-neutral-900 border border-neutral-800 p-3 text-white focus:border-cinematic-accent outline-none" />
              </div>
              <div>
                <label className="block text-xs uppercase text-neutral-500 mb-2">Korean Name</label>
                <input value={directorInfo.koreanName} onChange={(e) => setDirectorInfo(prev => ({...prev, koreanName: e.target.value}))} className="w-full bg-neutral-900 border border-neutral-800 p-3 text-white focus:border-cinematic-accent outline-none" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs uppercase text-neutral-500 mb-2">Tagline</label>
                <input value={directorInfo.tagline} onChange={(e) => setDirectorInfo(prev => ({...prev, tagline: e.target.value}))} className="w-full bg-neutral-900 border border-neutral-800 p-3 text-white focus:border-cinematic-accent outline-none" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs uppercase text-neutral-500 mb-2">Bio</label>
                <textarea value={directorInfo.bio} onChange={(e) => setDirectorInfo(prev => ({...prev, bio: e.target.value}))} rows={4} className="w-full bg-neutral-900 border border-neutral-800 p-3 text-white focus:border-cinematic-accent outline-none" />
              </div>
            </div>
          </section>

          <section className="bg-cinematic-dark p-8 border border-neutral-800 rounded-lg">
            <h3 className="text-xl font-serif text-white mb-8 border-b border-neutral-800 pb-2 uppercase flex items-center gap-2">
              <Monitor size={20} /> Hero Settings
            </h3>
            <div className="space-y-4">
              <label className="block text-xs uppercase text-neutral-500 mb-2 font-bold tracking-widest">Main Background Image</label>
              <div 
                className={`relative aspect-video bg-neutral-900 border-2 rounded overflow-hidden group transition-all ${dragActiveId === 'hero' ? 'border-cinematic-accent scale-[1.02]' : 'border-neutral-800 border-dashed'}`}
                onDragEnter={(e) => handleDrag(e, 'hero')}
                onDragOver={(e) => handleDrag(e, 'hero')}
                onDragLeave={(e) => handleDrag(e, 'hero')}
                onDrop={handleHeroDrop}
              >
                <img src={directorInfo.heroImageUrl} className="w-full h-full object-cover opacity-50" alt="Hero Bg" />
                <label className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Upload size={32} className="text-white mb-2" />
                  <span className="text-xs text-white uppercase font-bold px-4 text-center">드래그하거나 클릭하여 업로드</span>
                  <input type="file" className="hidden" accept="image/*" onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) processImage(file, (base64) => setDirectorInfo(prev => ({ ...prev, heroImageUrl: base64 })));
                  }} />
                </label>
                {dragActiveId === 'hero' && (
                  <div className="absolute inset-0 bg-cinematic-accent/20 flex items-center justify-center border-2 border-cinematic-accent animate-pulse">
                    <span className="text-white font-bold uppercase tracking-widest text-sm">Drop to Upload</span>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>

        {/* Works Management */}
        <section>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
            <div className="flex items-center gap-6">
                <h3 className="text-xl font-serif text-white uppercase flex items-center gap-2">
                  <ImageIcon size={20} /> Manage Works ({categorizedFilms.length})
                </h3>
                <button 
                  onClick={addNewFilm}
                  className="flex items-center gap-2 text-xs bg-white text-black hover:bg-cinematic-accent hover:text-white px-5 py-2.5 rounded font-bold uppercase tracking-widest transition-all shadow-xl"
                >
                  <Plus size={18} /> 새 프로젝트 추가
                </button>
            </div>
            
            <div className="flex bg-neutral-900 p-1 rounded-lg border border-neutral-800 w-full md:w-auto">
                <button onClick={() => setActiveCategory('directing')} className={`flex-1 md:flex-none px-6 py-2.5 text-xs font-bold uppercase tracking-widest rounded-md transition-all flex items-center justify-center gap-2 ${activeCategory === 'directing' ? 'bg-cinematic-accent text-white shadow-lg' : 'text-neutral-500 hover:text-white'}`}>
                  <Clapperboard size={14} /> 디렉팅
                </button>
                <button onClick={() => setActiveCategory('cinematography')} className={`flex-1 md:flex-none px-6 py-2.5 text-xs font-bold uppercase tracking-widest rounded-md transition-all flex items-center justify-center gap-2 ${activeCategory === 'cinematography' ? 'bg-cinematic-accent text-white shadow-lg' : 'text-neutral-500 hover:text-white'}`}>
                  <Camera size={14} /> 촬영
                </button>
                <button onClick={() => setActiveCategory('staff')} className={`flex-1 md:flex-none px-6 py-2.5 text-xs font-bold uppercase tracking-widest rounded-md transition-all flex items-center justify-center gap-2 ${activeCategory === 'staff' ? 'bg-cinematic-accent text-white shadow-lg' : 'text-neutral-500 hover:text-white'}`}>
                  <Users size={14} /> 스탭
                </button>
            </div>
          </div>
          
          <div className="space-y-6">
            {categorizedFilms.map(film => (
              <div key={film.id} className="bg-cinematic-dark border border-neutral-800 rounded-lg overflow-hidden group">
                <div 
                  className={`p-6 flex items-center justify-between cursor-pointer transition-all ${editingFilmId === film.id ? 'bg-white/5' : 'hover:bg-white/5'}`}
                  onClick={() => setEditingFilmId(editingFilmId === film.id ? null : film.id)}
                >
                  <div className="flex items-center gap-4">
                    <img src={film.posterUrl} className="w-12 h-16 object-cover rounded border border-neutral-700" alt="" />
                    <div>
                      <h4 className="text-white font-medium">{film.title}</h4>
                      <p className="text-xs text-neutral-500">{film.year} • {film.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <button onClick={(e) => { e.stopPropagation(); deleteFilm(film.id, film.title); }} className="text-neutral-600 hover:text-red-500 transition-colors p-2 lg:opacity-0 lg:group-hover:opacity-100"><Trash2 size={18} /></button>
                    <div className="text-neutral-500">{editingFilmId === film.id ? <X size={20} /> : <Edit3 size={20} />}</div>
                  </div>
                </div>

                {editingFilmId === film.id && (
                  <div className="p-8 border-t border-neutral-800 animate-fade-in space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="md:col-span-1">
                        <label className="block text-xs uppercase text-neutral-500 mb-2 font-bold tracking-widest">Poster Image</label>
                        <div 
                          className={`relative aspect-[2/3] bg-neutral-900 border-2 rounded overflow-hidden group transition-all ${dragActiveId === `poster-${film.id}` ? 'border-cinematic-accent scale-[1.02]' : 'border-neutral-800 border-dashed'}`}
                          onDragEnter={(e) => handleDrag(e, `poster-${film.id}`)}
                          onDragOver={(e) => handleDrag(e, `poster-${film.id}`)}
                          onDragLeave={(e) => handleDrag(e, `poster-${film.id}`)}
                          onDrop={(e) => handleDrop(e, film.id, 'poster')}
                        >
                           <img src={film.posterUrl} className="w-full h-full object-cover" alt="" />
                           <label className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                              <Upload size={24} className="mb-2" />
                              <span className="text-xs text-center px-4 uppercase font-bold">이미지 드롭 또는 클릭</span>
                              <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileChange(e, film.id, 'poster')} />
                           </label>
                        </div>
                      </div>
                      <div className="md:col-span-2 space-y-5">
                        <div>
                          <label className="block text-xs uppercase text-neutral-500 mb-2 font-bold tracking-widest">Title</label>
                          <input value={film.title} onChange={(e) => updateFilmText(film.id, 'title', e.target.value)} className="w-full bg-neutral-900 border border-neutral-800 p-3 text-white focus:border-cinematic-accent outline-none" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs uppercase text-neutral-500 mb-2 font-bold tracking-widest">Year</label>
                            <input value={film.year} onChange={(e) => updateFilmText(film.id, 'year', e.target.value)} className="w-full bg-neutral-900 border border-neutral-800 p-3 text-white focus:border-cinematic-accent outline-none" />
                          </div>
                          <div>
                            <label className="block text-xs uppercase text-neutral-500 mb-2 font-bold tracking-widest">Runtime</label>
                            <input value={film.runtime} onChange={(e) => updateFilmText(film.id, 'runtime', e.target.value)} className="w-full bg-neutral-900 border border-neutral-800 p-3 text-white focus:border-cinematic-accent outline-none" />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs uppercase text-neutral-500 mb-2 font-bold tracking-widest">Genre</label>
                            <input value={film.genre} onChange={(e) => updateFilmText(film.id, 'genre', e.target.value)} className="w-full bg-neutral-900 border border-neutral-800 p-3 text-white focus:border-cinematic-accent outline-none" />
                          </div>
                          <div className="flex items-center gap-3">
                             <div className="flex-1">
                                <label className="block text-xs uppercase text-neutral-500 mb-2 font-bold tracking-widest">Role (Category Filter)</label>
                                <input value={film.role} onChange={(e) => updateFilmText(film.id, 'role', e.target.value)} className="w-full bg-neutral-900 border border-neutral-800 p-3 text-white focus:border-cinematic-accent outline-none" />
                             </div>
                             <div>
                                <label className="block text-xs uppercase text-neutral-500 mb-2 font-bold tracking-widest">AI Film</label>
                                <button onClick={() => updateFilmText(film.id, 'isAi', !film.isAi)} className={`p-3 rounded border transition-all ${film.isAi ? 'bg-cinematic-accent border-cinematic-accent text-white' : 'bg-neutral-900 border-neutral-800 text-neutral-600'}`}>AI</button>
                             </div>
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs uppercase text-neutral-500 mb-2 font-bold tracking-widest">Synopsis</label>
                          <textarea value={film.synopsis} onChange={(e) => updateFilmText(film.id, 'synopsis', e.target.value)} rows={4} className="w-full bg-neutral-900 border border-neutral-800 p-3 text-white focus:border-cinematic-accent outline-none" />
                        </div>
                      </div>
                    </div>

                    {/* Stills Gallery */}
                    <div className="border-t border-neutral-800 pt-8">
                       <div className="flex justify-between items-center mb-6">
                          <h5 className="text-sm font-bold uppercase tracking-widest text-white">Stills Archive</h5>
                          <button onClick={() => addStill(film.id)} className="flex items-center gap-2 text-xs bg-white/10 hover:bg-white/20 px-4 py-2 rounded transition-all font-bold tracking-widest uppercase">
                             <Plus size={16} /> Add Still
                          </button>
                       </div>
                       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {film.stillUrls.map((url, i) => (
                            <div 
                              key={i} 
                              className={`relative aspect-video rounded border-2 transition-all overflow-hidden group ${dragActiveId === `still-${film.id}-${i}` ? 'border-cinematic-accent scale-[1.05] z-10 shadow-xl' : 'border-neutral-800'}`}
                              onDragEnter={(e) => handleDrag(e, `still-${film.id}-${i}`)}
                              onDragOver={(e) => handleDrag(e, `still-${film.id}-${i}`)}
                              onDragLeave={(e) => handleDrag(e, `still-${film.id}-${i}`)}
                              onDrop={(e) => handleDrop(e, film.id, 'still', i)}
                            >
                               <img src={url} className="w-full h-full object-cover" alt="" />
                               <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                  <label className="p-2 hover:text-cinematic-accent cursor-pointer">
                                     <Upload size={20} />
                                     <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileChange(e, film.id, 'still', i)} />
                                  </label>
                                  <button onClick={() => removeStill(film.id, i)} className="p-2 hover:text-red-500">
                                     <Trash2 size={20} />
                                  </button>
                               </div>
                               {dragActiveId === `still-${film.id}-${i}` && (
                                 <div className="absolute inset-0 bg-cinematic-accent/30 flex items-center justify-center pointer-events-none">
                                    <span className="text-white text-[10px] font-bold uppercase">Drop</span>
                                 </div>
                               )}
                            </div>
                          ))}
                       </div>
                    </div>

                    <div className="flex justify-end pt-4 border-t border-neutral-800">
                       <p className="text-[10px] text-neutral-500 italic font-light tracking-wide uppercase">All changes are now automatically persisted to your browser storage.</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Admin;
