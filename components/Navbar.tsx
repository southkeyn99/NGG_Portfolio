
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Lock } from 'lucide-react';
import { DIRECTOR_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Directing', path: '/film' },
    { name: 'Cinematography', path: '/cinematography' },
    { name: 'Staff', path: '/staff' },
    { name: 'Contact', path: '/contact' },
  ];

  const getLinkClass = ({ isActive }: { isActive: boolean }) => 
    `text-sm tracking-[0.2em] uppercase transition-colors duration-300 whitespace-nowrap ${
      isActive ? 'text-white font-semibold' : 'text-neutral-400 hover:text-white'
    }`;

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b border-white/5 ${
        scrolled ? 'bg-cinematic-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="text-xl md:text-2xl font-serif tracking-tighter text-white z-50 shrink-0 mr-8">
          {DIRECTOR_INFO.name}
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8 xl:space-x-12 overflow-x-auto no-scrollbar">
          {navLinks.map((link) => (
            <NavLink key={link.name} to={link.path} className={getLinkClass}>
              {link.name}
            </NavLink>
          ))}
          <NavLink to="/admin" className={({ isActive }) => 
            `flex items-center gap-1 text-xs tracking-widest uppercase py-1 px-3 border border-white/20 rounded-full transition-all ${
              isActive ? 'bg-white text-black border-white' : 'text-neutral-500 hover:text-white hover:border-white'
            }`
          }>
            <Lock size={12} />
            Admin
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden text-white z-50 focus:outline-none ml-auto"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-cinematic-black z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden`}
      >
        {navLinks.map((link) => (
          <NavLink 
            key={link.name} 
            to={link.path} 
            className={({ isActive }) => 
              `text-xl md:text-2xl font-serif tracking-widest ${isActive ? 'text-cinematic-accent' : 'text-white'}`
            }
          >
            {link.name}
          </NavLink>
        ))}
        <NavLink to="/admin" className="text-neutral-500 text-lg tracking-widest uppercase flex items-center gap-2">
          <Lock size={18} /> Admin
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
