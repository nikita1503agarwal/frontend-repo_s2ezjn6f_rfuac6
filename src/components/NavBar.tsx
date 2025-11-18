import React, { useEffect, useMemo, useState } from 'react';
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
  const bgOpacity = useTransform(scrollY, [0, 200], [0.1, 0.6]);
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
        style={{ height, backgroundColor: useMemo(() => `rgba(${theme === 'dark' ? '17, 24, 39' : '255,255,255'}, 0.5)`, [theme]), opacity: bgOpacity as any }}
        className="backdrop-blur-xl border-b border-white/10 dark:border-white/10 shadow-sm"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            <button onClick={() => handleNav('home')} className="font-semibold tracking-tight text-lg sm:text-xl bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-400 to-fuchsia-500">
              Aurora Gallery
            </button>
            <nav className="hidden lg:flex items-center gap-8">
              {links.map(l => (
                <button key={l.id} onClick={() => handleNav(l.id)} className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-white dark:hover:text-white transition-colors">
                  {l.label}
                </button>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="relative w-12 h-7 rounded-full border border-white/10 dark:border-white/10 flex items-center px-1"
              >
                <motion.span
                  layout
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  className={`w-5 h-5 rounded-full shadow-sm ${theme === 'dark' ? 'translate-x-5 bg-white' : 'translate-x-0 bg-zinc-900'}`}
                />
                <span className="absolute left-1 text-zinc-500">
                  <Sun size={14} />
                </span>
                <span className="absolute right-1 text-zinc-500">
                  <Moon size={14} />
                </span>
              </motion.button>
              <button className="lg:hidden text-zinc-700 dark:text-zinc-200" onClick={() => setOpen(o => !o)} aria-label="Open menu">
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
        className="lg:hidden overflow-hidden backdrop-blur-xl bg-white/50 dark:bg-gray-900/50 border-b border-white/10"
      >
        <div className="px-4 sm:px-6 py-4 flex flex-col gap-2">
          {links.map(l => (
            <button key={l.id} onClick={() => handleNav(l.id)} className="text-base text-left py-2 rounded-md hover:bg-black/5 dark:hover:bg-white/5 text-zinc-700 dark:text-zinc-200">
              {l.label}
            </button>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
};

export default NavBar;
