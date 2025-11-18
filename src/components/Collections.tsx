import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const filters = ['All', 'Generative', 'Abstract', 'Minimal', 'Cyber'] as const;

const items = Array.from({ length: 12 }).map((_, i) => {
  const categories = ['Generative', 'Abstract', 'Minimal', 'Cyber'] as const;
  const cat = categories[i % categories.length];
  const artist = ['Nyx Aurelian', 'Lumen Vega', 'Kaito RIN', 'Noir Helix'][i % 4];
  const title = ['Quantum Veil', 'Prism Bloom', 'Neon Flux', 'Fractal Dawn'][i % 4] + ' #' + (i + 1);
  const gradients = [
    'from-teal-400 via-cyan-400 to-fuchsia-500',
    'from-purple-500 via-pink-500 to-amber-400',
    'from-emerald-400 via-teal-400 to-cyan-400',
    'from-indigo-500 via-purple-500 to-fuchsia-500',
  ];
  return { id: i, title, artist, cat, gradient: gradients[i % gradients.length] };
});

const gridVariants = {
  show: { transition: { staggerChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: 'easeIn' } },
};

const Collections: React.FC = () => {
  const [active, setActive] = useState<(typeof filters)[number]>('All');
  const [modal, setModal] = useState<number | null>(null);

  const filtered = useMemo(() => (active === 'All' ? items : items.filter(i => i.cat === active)), [active]);

  return (
    <section id="collections" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-900 dark:text-white">Curated Collections</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">Explore evolving sets across styles and systems. Filter by mood and method.</p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {filters.map(f => (
            <motion.button
              key={f}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm border backdrop-blur-md transition-colors ${active === f ? 'bg-gradient-to-r from-teal-400 via-cyan-400 to-fuchsia-500 text-white border-transparent' : 'bg-white/10 dark:bg-white/5 text-zinc-700 dark:text-zinc-200 border-white/10'}`}
            >
              {f}
            </motion.button>
          ))}
        </div>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map(card => (
              <motion.div key={card.id} layout variants={cardVariants} exit="exit" className="group rounded-2xl p-[1px] bg-gradient-to-br from-white/30 to-white/10 dark:from-white/10 dark:to-white/5">
                <div className="rounded-2xl overflow-hidden backdrop-blur-xl bg-white/60 dark:bg-gray-900/60 border border-white/20 transition-transform duration-200 will-change-transform group-hover:-translate-y-1 group-hover:scale-[1.02] shadow-lg">
                  <div className={`h-48 bg-gradient-to-br ${card.gradient}`} />
                  <div className="p-5">
                    <h3 className="font-semibold text-zinc-900 dark:text-white">{card.title}</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-300">{card.artist} • {card.cat}</p>
                    <div className="mt-4">
                      <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }} onClick={() => setModal(card.id)} className="px-4 py-2 rounded-lg border border-white/20 bg-white/10 dark:bg-white/5 text-zinc-900 dark:text-white">
                        View Details
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {modal !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
            <motion.div initial={{ scale: 0.95, opacity: 0, y: 10 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 10 }} transition={{ duration: 0.25, ease: 'easeOut' }} className="max-w-lg w-full rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 border border-white/10">
              <div className={`h-56 bg-gradient-to-br ${items[modal].gradient}`} />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">{items[modal].title}</h3>
                <p className="mt-1 text-zinc-600 dark:text-zinc-300">By {items[modal].artist} • {items[modal].cat}</p>
                <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-300">High-resolution generative artwork with aurora-inspired palettes and subtle cybernetic motion. Mint-ready PNG/MP4 available upon request.</p>
                <div className="mt-6 flex justify-end gap-3">
                  <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }} onClick={() => setModal(null)} className="px-4 py-2 rounded-lg border border-white/20 bg-white/10 dark:bg-white/5 text-zinc-900 dark:text-white">Close</motion.button>
                  <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }} className="px-4 py-2 rounded-lg bg-gradient-to-r from-teal-400 via-cyan-400 to-fuchsia-500 text-white">Inquire</motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Collections;
