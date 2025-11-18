import React from 'react';
import { motion } from 'framer-motion';

const artists = [
  { name: 'Nyx Aurelian', tagline: 'Generative Systems & Noise', tags: ['Generative', 'Audio-reactive', '3D'], grad: 'from-fuchsia-500 via-cyan-400 to-teal-400' },
  { name: 'Lumen Vega', tagline: 'Neon Abstraction', tags: ['Abstract', 'Shader', 'Glitch'], grad: 'from-purple-500 via-pink-500 to-amber-400' },
  { name: 'Kaito RIN', tagline: 'Cybernetic Motion', tags: ['Cyber', '3D', 'XR'], grad: 'from-cyan-400 via-teal-400 to-emerald-400' },
  { name: 'Noir Helix', tagline: 'Minimal Vectors', tags: ['Minimal', 'Vector', 'Type'], grad: 'from-indigo-500 via-purple-500 to-fuchsia-500' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.35, ease: 'easeOut' } }),
};

const Artists: React.FC = () => {
  return (
    <section id="artists" className="relative py-20 transition-colors duration-300 ease-in-out">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-slate-50">Featured Artists</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Creators exploring code, light, and motion. Follow their evolving practices.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {artists.map((a, i) => (
            <motion.div
              key={a.name}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="group rounded-2xl p-[1px] bg-gradient-to-br from-white/70 to-white/30 dark:from-white/10 dark:to-white/5"
            >
              <div className="rounded-2xl overflow-hidden backdrop-blur-xl bg-white/70 dark:bg-slate-900/80 border border-slate-200/70 dark:border-slate-700/60 transition-transform duration-300 will-change-transform group-hover:-translate-y-1 group-hover:shadow-xl [transform-style:preserve-3d]">
                <div className="p-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${a.grad}`} />
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-slate-50">{a.name}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{a.tagline}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {a.tags.map(t => (
                      <span key={t} className="px-2.5 py-1 rounded-full text-xs border border-slate-200/70 dark:border-slate-700/60 bg-white/70 dark:bg-slate-900/70 text-slate-700 dark:text-slate-200 transition-colors">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Artists;
