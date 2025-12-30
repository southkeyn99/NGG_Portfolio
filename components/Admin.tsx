
import React, { useState, useMemo } from 'react';
import { Film, Credit } from '../types';
import { Save, Upload, Plus, Trash2, Lock, Unlock, X, Edit3, Image as ImageIcon, Award as AwardIcon, AlertCircle, Camera, Users, Clapperboard, Monitor } from 'lucide-react';

interface AdminProps {
  films: Film[];
  setFilms: React.Dispatch<React.SetStateAction<Film[]>>;
  directorInfo: any;
  setDirectorInfo: React.Dispatch<React.SetStateAction<any>>;
}

type WorkCategory = 'directing' | 'cinematography' | 'staff';

const Admin: React.FC<AdminProps> = ({ films, setFilms, directorInfo, setDirectorInfo }) => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [editingFilmId, setEditingFilmId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<WorkCategory>('directing');

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, filmId: string, type: 'poster' | 'still', index?: number) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      const updatedFilms = films.map(f => {
        if (f.id === filmId) {
          if (type === 'poster') {
            return { ...f, posterUrl: base64String };
          } else if (type === 'still' && typeof index === 'number') {
            const newStills = [...f.stillUrls];
            newStills[index] = base64String;
            return { ...f, stillUrls: newStills };
          }
        }
        return f;
      });
      setFilms(updatedFilms);
      localStorage.setItem('director_films', JSON.stringify(updatedFilms));
    };
    reader.readAsDataURL(file);
  };

  const handleHeroImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      updateDirectorInfo('heroImageUrl', reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const updateFilmText = (filmId: string, field: keyof Film, value: any) => {
    const updatedFilms = films.map(f => f.id === filmId ? { ...f, [field]: value } : f);
    setFilms(updatedFilms);
    localStorage.setItem('director_films', JSON.stringify(updatedFilms));
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
    
    const updatedFilms = [newFilm, ...films];
    setFilms(updatedFilms);
    localStorage.setItem('director_films', JSON.stringify(updatedFilms));
    setEditingFilmId(newFilm.id);
  };

  const deleteFilm = (filmId: string, title: string) => {
    if (window.confirm(`'${title}' 작품을 정말로 삭제하시겠습니까? 삭제된 작품은 복구할 수 없으며 시스템에서 완전히 제거됩니다.`)) {
      const updatedFilms = films.filter(f => f.id !== filmId);
      setFilms(updatedFilms);
      localStorage.setItem('director_films', JSON.stringify(updatedFilms));
      setEditingFilmId(null);
      alert('작품이 시스템에서 영구적으로 삭제되었습니다.');
    }
  };

  const addAward = (filmId: string) => {
    const film = films.find(f => f.id === filmId);
    if (!film) return;
    const newAwards = [...(film.awards || []), ""];
    updateFilmText(filmId, 'awards', newAwards);
  };

  const updateAward = (filmId: string, index: number, value: string) => {
    const film = films.find(f => f.id === filmId);
    if (!film) return;
    const newAwards = [...(film.awards || [])];
    newAwards[index] = value;
    updateFilmText(filmId, 'awards', newAwards);
  };

  const removeAward = (filmId: string, index: number) => {
    const film = films.find(f => f.id === filmId);
    if (!film) return;
    const newAwards = (film.awards || []).filter((_, i) => i !== index);
    updateFilmText(filmId, 'awards', newAwards);
  };

  const addStill = (filmId: string) => {
    const updatedFilms = films.map(f => {
      if (f.id === filmId) {
        return { ...f, stillUrls: [...f.stillUrls, 'https://placehold.co/800x450/111/444/png?text=New+Still'] };
      }
      return f;
    });
    setFilms(updatedFilms);
    localStorage.setItem('director_films', JSON.stringify(updatedFilms));
  };

  const removeStill = (filmId: string, index: number) => {
    const updatedFilms = films.map(f => {
      if (f.id === filmId) {
        const newStills = f.stillUrls.filter((_, i) => i !== index);
        return { ...f, stillUrls: newStills };
      }
      return f;
    });
    setFilms(updatedFilms);
    localStorage.setItem('director_films', JSON.stringify(updatedFilms));
  };

  const updateDirectorInfo = (field: string, value: string) => {
    const updatedInfo = { ...directorInfo, [field]: value };
    setDirectorInfo(updatedInfo);
    localStorage.setItem('director_info', JSON.stringify(updatedInfo));
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
                <input value={directorInfo.name} onChange={(e) => updateDirectorInfo('name', e.target.value)} className="w-full bg-neutral-900 border border-neutral-800 p-3 text-white focus:border-cinematic-accent outline-none" />
              </div>
              <div>
                <label className="block text-xs uppercase text-neutral-500 mb-2">Korean Name</label>
                <input value={directorInfo.koreanName} onChange={(e) => updateDirectorInfo('koreanName', e.target.value)} className="w-full bg-neutral-900 border border-neutral-800 p-3 text-white focus:border-cinematic-accent outline-none" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs uppercase text-neutral-500 mb-2">Tagline</label>
                <input value={directorInfo.tagline} onChange={(e) => updateDirectorInfo('tagline', e.target.value)} className="w-full bg-neutral-900 border border-neutral-800 p-3 text-white focus:border-cinematic-accent outline-none" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs uppercase text-neutral-500 mb-2">Bio</label>
                <textarea value={directorInfo.bio} onChange={(e) => updateDirectorInfo('bio', e.target.value)} rows={4} className="w-full bg-neutral-900 border border-neutral-800 p-3 text-white focus:border-cinematic-accent outline-none" />
              </div>
            </div>
          </section>

          <section className="bg-cinematic-dark p-8 border border-neutral-800 rounded-lg">
            <h3 className="text-xl font-serif text-white mb-8 border-b border-neutral-800 pb-2 uppercase flex items-center gap-2">
              <Monitor size={20} /> Hero Settings
            </h3>
            <div className="space-y-4">
              <label className="block text-xs uppercase text-neutral-500 mb-2 font-bold tracking-widest">Main Background Image</label>
              <div className="relative aspect-video bg-neutral-900 border border-neutral-800 rounded overflow-hidden group">
                <img src={directorInfo.heroImageUrl} className="w-full h-full object-cover opacity-50" alt="Hero Bg" />
                <label className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Upload size={32} className="text-white mb-2" />
                  <span className="text-xs text-white uppercase font-bold">배경 이미지 변경</span>
                  <input type="file" className="hidden" accept="image/*" onChange={handleHeroImageChange} />
                </label>
              </div>
              <p className="text-[10px] text-neutral-500 italic">메인 페이지 최상단 배경 이미지를 설정합니다. 고해상도 이미지를 권장합니다.</p>
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
            
            {/* Category Filter Tabs */}
            <div className="flex bg-neutral-900 p-1 rounded-lg border border-neutral-800 w-full md:w-auto">
                <button 
                  onClick={() => setActiveCategory('directing')}
                  className={`flex-1 md:flex-none px-6 py-2.5 text-xs font-bold uppercase tracking-widest rounded-md transition-all flex items-center justify-center gap-2 ${activeCategory === 'directing' ? 'bg-cinematic-accent text-white shadow-lg' : 'text-neutral-500 hover:text-white'}`}
                >
                  <Clapperboard size={14} /> 디렉팅
                </button>
                <button 
                  onClick={() => setActiveCategory('cinematography')}
                  className={`flex-1 md:flex-none px-6 py-2.5 text-xs font-bold uppercase tracking-widest rounded-md transition-all flex items-center justify-center gap-2 ${activeCategory === 'cinematography' ? 'bg-cinematic-accent text-white shadow-lg' : 'text-neutral-500 hover:text-white'}`}
                >
                  <Camera size={14} /> 촬영
                </button>
                <button 
                  onClick={() => setActiveCategory('staff')}
                  className={`flex-1 md:flex-none px-6 py-2.5 text-xs font-bold uppercase tracking-widest rounded-md transition-all flex items-center justify-center gap-2 ${activeCategory === 'staff' ? 'bg-cinematic-accent text-white shadow-lg' : 'text-neutral-500 hover:text-white'}`}
                >
                  <Users size={14} /> 스탭
                </button>
            </div>
          </div>
          
          <div className="space-y-6">
            {categorizedFilms.length === 0 ? (
              <div className="text-center py-20 bg-cinematic-dark border border-neutral-800 rounded-lg">
                <p className="text-neutral-600 text-sm tracking-widest font-light">이 카테고리에 등록된 작품이 없습니다.</p>
              </div>
            ) : (
              categorizedFilms.map(film => (
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
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteFilm(film.id, film.title);
                        }}
                        className="text-neutral-600 hover:text-red-500 transition-colors p-2 lg:opacity-0 lg:group-hover:opacity-100"
                        title="즉시 삭제"
                      >
                        <Trash2 size={18} />
                      </button>
                      <div className="text-neutral-500">
                        {editingFilmId === film.id ? <X size={20} /> : <Edit3 size={20} />}
                      </div>
                    </div>
                  </div>

                  {editingFilmId === film.id && (
                    <div className="p-8 border-t border-neutral-800 animate-fade-in space-y-8">
                      {/* Basic Info */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-1">
                          <label className="block text-xs uppercase text-neutral-500 mb-2 font-bold tracking-widest">Poster Image</label>
                          <div className="relative aspect-[2/3] bg-neutral-900 border border-neutral-800 overflow-hidden group">
                             <img src={film.posterUrl} className="w-full h-full object-cover" alt="" />
                             <label className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                                <Upload size={24} className="mb-2" />
                                <span className="text-xs">이미지 변경</span>
                                <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileChange(e, film.id, 'poster')} />
                             </label>
                          </div>
                        </div>
                        <div className="md:col-span-2 space-y-5">
                          <div>
                            <label className="block text-xs uppercase text-neutral-500 mb-2 font-bold tracking-widest">Title</label>
                            <input value={film.title} onChange={(e) => updateFilmText(film.id, 'title', e.target.value)} className="w-full bg-neutral-900 border border-neutral-800 p-3 text-white focus:border-cinematic-accent outline-none transition-colors" />
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
                                  <input value={film.role} onChange={(e) => updateFilmText(film.id, 'role', e.target.value)} placeholder="e.g. Director, Cinematographer, Gaffer" className="w-full bg-neutral-900 border border-neutral-800 p-3 text-white focus:border-cinematic-accent outline-none" />
                               </div>
                               <div>
                                  <label className="block text-xs uppercase text-neutral-500 mb-2 font-bold tracking-widest">AI Film</label>
                                  <button 
                                    onClick={() => updateFilmText(film.id, 'isAi', !film.isAi)}
                                    className={`p-3 rounded border transition-all ${film.isAi ? 'bg-cinematic-accent border-cinematic-accent text-white' : 'bg-neutral-900 border-neutral-800 text-neutral-600'}`}
                                  >
                                    AI
                                  </button>
                               </div>
                            </div>
                          </div>
                          <div>
                            <label className="block text-xs uppercase text-neutral-500 mb-2 font-bold tracking-widest">Synopsis</label>
                            <textarea value={film.synopsis} onChange={(e) => updateFilmText(film.id, 'synopsis', e.target.value)} rows={4} className="w-full bg-neutral-900 border border-neutral-800 p-3 text-white focus:border-cinematic-accent outline-none" />
                          </div>
                        </div>
                      </div>

                      {/* Awards Section */}
                      <div className="border-t border-neutral-800 pt-8">
                         <div className="flex justify-between items-center mb-6">
                            <h5 className="text-sm font-bold uppercase tracking-widest text-white flex items-center gap-2">
                               <AwardIcon size={18} className="text-orange-500" /> Awards & Recognition
                            </h5>
                            <button onClick={() => addAward(film.id)} className="flex items-center gap-2 text-xs bg-orange-500/10 hover:bg-orange-500/20 text-orange-500 px-4 py-2 rounded transition-all font-bold tracking-widest uppercase">
                               <Plus size={16} /> Add Award
                            </button>
                         </div>
                         <div className="space-y-3">
                            {(film.awards || []).length === 0 && <p className="text-xs text-neutral-600 italic">No awards listed.</p>}
                            {(film.awards || []).map((award, i) => (
                              <div key={i} className="flex gap-2">
                                 <input 
                                   value={award} 
                                   onChange={(e) => updateAward(film.id, i, e.target.value)} 
                                   placeholder="e.g. 제 4회 경기도예술영화제 대상"
                                   className="flex-1 bg-neutral-900 border border-neutral-800 p-3 text-white text-sm focus:border-cinematic-accent outline-none" 
                                 />
                                 <button onClick={() => removeAward(film.id, i)} className="p-3 bg-red-500/10 text-red-500 hover:bg-red-500/20 rounded transition-all">
                                    <Trash2 size={18} />
                                 </button>
                              </div>
                            ))}
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
                              <div key={i} className="relative aspect-video group bg-neutral-900 border border-neutral-800 overflow-hidden">
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
                              </div>
                            ))}
                         </div>
                      </div>

                      {/* Danger Zone */}
                      <div className="mt-12 pt-8 border-t border-red-900/30">
                         <h5 className="text-red-500 text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                            <AlertCircle size={14} /> Danger Zone
                         </h5>
                         <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-6 flex flex-col md:flex-row justify-between items-center gap-6">
                            <div>
                               <h6 className="text-white text-sm font-bold mb-1">Delete this project</h6>
                               <p className="text-neutral-500 text-xs font-light">작품을 삭제하면 데이터베이스(로컬 저장소)에서 완전히 소멸되며, 다시는 복구할 수 없습니다.</p>
                            </div>
                            <button 
                              onClick={() => deleteFilm(film.id, film.title)}
                              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded text-xs font-bold uppercase tracking-widest transition-all shadow-lg shadow-red-900/20"
                            >
                               <Trash2 size={16} /> 이 작품 영구 삭제
                            </button>
                         </div>
                      </div>

                      <div className="flex justify-end pt-4 border-t border-neutral-800">
                         <p className="text-xs text-neutral-500 italic font-light tracking-wide">모든 변경사항은 실시간으로 저장됩니다.</p>
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Admin;
