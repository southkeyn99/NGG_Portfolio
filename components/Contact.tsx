import React, { useState } from 'react';
import { DIRECTOR_INFO } from '../constants';
import { Mail, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setStatus('success');
    setTimeout(() => {
        setStatus('idle');
        setFormState({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-cinematic-black pt-24 pb-20 flex items-center">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16">
          
          {/* Info Side */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 tracking-tight">
              Let's create <br/>
              <span className="text-cinematic-accent italic">something visual.</span>
            </h2>
            <p className="text-neutral-400 font-light mb-12 leading-relaxed">
              프로젝트, 협업, 연출 제안 언제든 환영합니다.<br/>
              Open for film productions and creative collaborations.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-neutral-300 group hover:text-white transition-colors">
                <div className="p-3 border border-neutral-800 rounded-full group-hover:border-cinematic-accent transition-colors">
                    <Mail size={20} />
                </div>
                <a href={`mailto:${DIRECTOR_INFO.email}`} className="text-sm tracking-widest uppercase">{DIRECTOR_INFO.email}</a>
              </div>
              
              <div className="flex items-center gap-4 text-neutral-300 group hover:text-white transition-colors">
                <div className="p-3 border border-neutral-800 rounded-full group-hover:border-cinematic-accent transition-colors">
                    <Phone size={20} />
                </div>
                <span className="text-sm tracking-widest">{DIRECTOR_INFO.phone}</span>
              </div>
            </div>
            
            <div className="mt-12 pt-12 border-t border-neutral-900">
                <p className="text-xs text-neutral-600 uppercase tracking-widest mb-4">Representation</p>
                <p className="text-neutral-400">XYZ Agency Seoul</p>
                <p className="text-neutral-400 text-sm">agent@xyzagency.com</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs uppercase text-neutral-500 tracking-widest mb-2">Name</label>
                <input 
                  type="text" 
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-neutral-900 border border-neutral-800 text-white p-4 focus:outline-none focus:border-cinematic-accent transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-xs uppercase text-neutral-500 tracking-widest mb-2">Email</label>
                <input 
                  type="email" 
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-neutral-900 border border-neutral-800 text-white p-4 focus:outline-none focus:border-cinematic-accent transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-xs uppercase text-neutral-500 tracking-widest mb-2">Message</label>
                <textarea 
                  rows={6}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-neutral-900 border border-neutral-800 text-white p-4 focus:outline-none focus:border-cinematic-accent transition-colors"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'success'}
                className="w-full bg-white text-black py-4 font-bold tracking-widest uppercase hover:bg-cinematic-accent hover:text-white transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {status === 'success' ? 'Message Sent' : 'Send Message'}
                {status !== 'success' && <Send size={16} />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;