import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Mail, Linkedin, Twitter } from 'lucide-react';
import { NAV_LINKS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  activePage: string;
  onNavigate: (path: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activePage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-gold selection:text-brand-deepBlue">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-deepBlue shadow-lg py-3' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={() => handleLinkClick('/')}
          >
            <div className="w-10 h-10 bg-brand-gold rounded-sm flex items-center justify-center font-heading font-bold text-brand-deepBlue transition-transform group-hover:scale-110">
              E
            </div>
            <span className="text-2xl font-heading font-bold text-white tracking-tighter">EMOSCEPT</span>
          </div>

          {/* Desktop Nav - Using Icons + Names */}
          <nav className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-1 pr-4 border-r border-white/10">
              {NAV_LINKS.slice(0, -1).map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`flex items-center gap-2 px-3 py-2 rounded transition-all hover:bg-white/5 hover:text-brand-gold group/nav ${
                    activePage === link.path ? 'text-brand-gold bg-white/5' : 'text-white'
                  }`}
                >
                  <span className={`transition-transform duration-300 group-hover/nav:scale-110 ${activePage === link.path ? 'opacity-100' : 'opacity-70'}`}>
                    {link.icon}
                  </span>
                  <span className="text-[11px] uppercase font-bold tracking-[0.1em]">
                    {link.label}
                  </span>
                </button>
              ))}
            </div>
            <button 
              onClick={() => handleLinkClick('/contact')}
              className="px-6 py-2.5 bg-brand-gold text-brand-deepBlue font-bold text-sm uppercase tracking-wider hover:bg-white transition-all shadow-md"
            >
              Get in Touch
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-brand-deepBlue border-t border-white/10 p-6 animate-in slide-in-from-top">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`flex items-center gap-3 text-left text-lg font-medium py-2 ${
                    activePage === link.path ? 'text-brand-gold' : 'text-white'
                  }`}
                >
                  <span className="opacity-70">{link.icon}</span>
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-deepBlue text-white pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-brand-gold rounded-sm flex items-center justify-center font-heading font-bold text-brand-deepBlue">
                  E
                </div>
                <span className="text-xl font-heading font-bold tracking-tighter">EMOSCEPT</span>
              </div>
              <p className="text-brand-paper/60 text-sm leading-relaxed mb-6">
                Strategic advisory and high-impact execution for Business, Political, and Entertainment leaders across India.
              </p>
              <div className="flex gap-4">
                <Linkedin className="w-5 h-5 text-brand-gold cursor-pointer hover:text-white transition-colors" />
                <Twitter className="w-5 h-5 text-brand-gold cursor-pointer hover:text-white transition-colors" />
                <Globe className="w-5 h-5 text-brand-gold cursor-pointer hover:text-white transition-colors" />
              </div>
            </div>

            <div>
              <h4 className="font-heading font-bold mb-6 uppercase text-xs tracking-widest text-brand-gold">Solutions</h4>
              <ul className="space-y-3">
                {['Business Consulting', 'Political Consulting', 'Entertainment Analytics', 'Platform & Tech'].map(item => (
                  <li key={item} className="text-sm text-brand-paper/60 hover:text-brand-gold transition-colors cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold mb-6 uppercase text-xs tracking-widest text-brand-gold">Corporate</h4>
              <ul className="space-y-3">
                {['About Us', 'Case Studies', 'Careers', 'Privacy Policy'].map(item => (
                  <li key={item} className="text-sm text-brand-paper/60 hover:text-brand-gold transition-colors cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold mb-6 uppercase text-xs tracking-widest text-brand-gold">Subscribe</h4>
              <p className="text-sm text-brand-paper/60 mb-4">Get release calendar alerts and forecasting notes.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Professional Email" 
                  className="bg-white/5 border border-white/10 px-4 py-2 text-sm w-full focus:outline-none focus:border-brand-gold"
                />
                <button className="bg-brand-gold text-brand-deepBlue px-4 font-bold text-sm">Join</button>
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-paper/40">
            <p>© 2026 EMOSCEPT STRATEGY GROUP. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-6">
              <span className="cursor-pointer hover:text-white">Privacy</span>
              <span className="cursor-pointer hover:text-white">Terms</span>
              <span className="cursor-pointer hover:text-white">Cookies</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;