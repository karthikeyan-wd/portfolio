import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Briefcase, FolderOpen, Mail, Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { id: 'hero', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map(l => document.getElementById(l.id));
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* ===== Desktop Floating Navbar ===== */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-1 px-2 py-2 rounded-2xl transition-all duration-500 ${
          scrolled
            ? 'glass shadow-lg shadow-primary-500/5'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center gap-1">
          {navLinks.map(link => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                id={`nav-${link.id}`}
                onClick={() => scrollTo(link.id)}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'text-white'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-primary-600 rounded-xl"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Icon size={16} />
                  {link.label}
                </span>
              </button>
            );
          })}
        </div>

        <div className="w-px h-6 bg-[var(--border-color)] mx-2" />

        <button
          onClick={toggleTheme}
          id="theme-toggle-desktop"
          className="p-2 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)] transition-all duration-300 cursor-pointer"
          aria-label="Toggle theme"
        >
          <motion.div
            key={theme}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </motion.div>
        </button>
      </motion.nav>

      {/* ===== Mobile Top Bar ===== */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 md:hidden flex items-center justify-between px-5 py-3 transition-all duration-300 ${
          scrolled ? 'glass' : 'bg-transparent'
        }`}
      >
        <span className="text-lg font-bold gradient-text">K.</span>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            id="theme-toggle-mobile"
            className="p-2 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            className="p-2 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.div>

      {/* ===== Mobile Full-Screen Menu ===== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden glass flex flex-col items-center justify-center gap-6"
          >
            {navLinks.map((link, i) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => scrollTo(link.id)}
                  className={`flex items-center gap-4 px-8 py-4 rounded-2xl text-lg font-medium transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]'
                  }`}
                >
                  <Icon size={22} />
                  {link.label}
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== Mobile Bottom Navigation ===== */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="glass mx-3 mb-3 rounded-2xl px-2 py-2 flex justify-around items-center">
          {navLinks.map(link => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                id={`mobile-nav-${link.id}`}
                onClick={() => scrollTo(link.id)}
                className={`relative flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'text-primary-400'
                    : 'text-[var(--text-muted)] active:scale-95'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeMobileNav"
                    className="absolute inset-0 bg-primary-500/10 rounded-xl"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <Icon size={20} strokeWidth={isActive ? 2.5 : 1.5} />
                <span className="text-[10px] font-medium relative z-10">{link.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
