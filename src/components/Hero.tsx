import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const artworks = [
  {
    title: 'Iridescent Echoes',
    artist: 'Nyx Aurelian',
    category: 'Generative',
    resolution: '3840×2160',
    gradient: 'from-fuchsia-500 via-cyan-400 to-teal-400',
  },
  {
    title: 'Quantum Garden',
    artist: 'Lumen Vega',
    category: 'Abstract',
    resolution: '4096×4096',
    gradient: 'from-purple-500 via-pink-500 to-amber-400',
  },
  {
    title: 'Neon Drift',
    artist: 'Kaito RIN',
    category: 'Cyber',
    resolution: '2560×1440',
    gradient: 'from-cyan-400 via-teal-400 to-emerald-400',
  },
];

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % artworks.length), 4000);
    return () => clearInterval(id);
  }, []);

  const current = useMemo(() => artworks[index], [index]);

  return (
    <section id="home" className="relative min-h-[92vh] lg:min-h-[96vh] pt-28 overflow-hidden">
      <div className="absolute inset-0 -z-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 dark:to-black/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-900 dark:text-white"
            >
              Explore the Future of Digital Art.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
              className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-xl"
            >
              Aurora Gallery curates generative, abstract, and cybernetic artworks from visionary creators. Discover evolving aesthetics and immersive viewing.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <motion.a
                href="#collections"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-teal-400 via-cyan-400 to-fuchsia-500 text-white shadow-lg shadow-teal-500/20"
              >
                Browse Collections
              </motion.a>
              <motion.a
                href="#artists"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center px-6 py-3 rounded-xl border border-white/20 bg-white/10 dark:bg-white/5 text-zinc-900 dark:text-white backdrop-blur-md"
              >
                Meet the Artists
              </motion.a>
            </motion.div>
          </div>
          <div>
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="rounded-2xl p-[2px] bg-gradient-to-br from-white/40 to-white/10 dark:from-white/10 dark:to-white/5"
            >
              <div className="rounded-2xl overflow-hidden backdrop-blur-xl bg-white/60 dark:bg-gray-900/60 border border-white/20">
                <div className={`h-64 sm:h-80 bg-gradient-to-br ${current.gradient}`} />
                <div className="p-5 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{current.title}</h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-300">{current.artist} • {current.category}</p>
                    </div>
                    <span className="text-xs text-zinc-500">{current.resolution}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
