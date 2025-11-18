import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { Menu, X, Sun, Moon } from 'lucide-react';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'collections', label: 'Collections' },
  { id: 'artists', label: 'Artists' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

const NavBar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 200], [0.08, 0.6]);
  const height = useTransform(scrollY, [0, 200], [80, 64]);

  const handleNav = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setOpen(false);
    }
  };

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <motion.div
        style={{ height, opacity: bgOpacity as any }}
        className="backdrop-blur-xl border-b transition-colors duration-300 ease-in-out border-slate-200/70 dark:border-slate-800/70 bg-slate-100/80 dark:bg-slate-900/70 shadow-sm"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            <button onClick={() => handleNav('home')} className="font-semibold tracking-tight text-lg sm:text-xl bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-sky-500 to-fuchsia-500">
              Aurora Gallery
            </button>
            <nav className="hidden lg:flex items-center gap-8">
              {links.map(l => (
                <button key={l.id} onClick={() => handleNav(l.id)} className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                  {l.label}
                </button>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                onClick={toggleTheme}
                aria-label="Toggle color theme"
                className="relative w-12 h-7 rounded-full border border-slate-200/70 dark:border-slate-700/60 flex items-center px-1 transition-colors duration-300"
              >
                <motion.span
                  key={theme}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  className={`absolute inset-0 flex items-center justify-center text-slate-600 dark:text-slate-300`}
                >
                  {theme === 'dark' ? <Moon size={14} /> : <Sun size={14} />}
                </motion.span>
                <motion.span
                  layout
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  className={`w-5 h-5 rounded-full shadow-sm will-change-transform bg-slate-900 dark:bg-white ${theme === 'dark' ? 'translate-x-5' : 'translate-x-0'}`}
                />
              </motion.button>
              <button className="lg:hidden text-slate-700 dark:text-slate-200" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
                {open ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="lg:hidden overflow-hidden backdrop-blur-xl bg-slate-100/80 dark:bg-slate-900/70 border-b border-slate-200/70 dark:border-slate-800/70"
      >
        <div className="px-4 sm:px-6 py-4 flex flex-col gap-2">
          {links.map(l => (
            <button key={l.id} onClick={() => handleNav(l.id)} className="text-base text-left py-2 rounded-md hover:bg-slate-900/5 dark:hover:bg-white/5 text-slate-700 dark:text-slate-200">
              {l.label}
            </button>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
};

export default NavBar;
