import React from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Maximize2, Info } from 'lucide-react';

const features = [
  {
    title: 'Curated Collections',
    desc: 'Expertly assembled sets showcasing evolving aesthetics and methods.',
  },
  {
    title: 'Real-time Exhibitions',
    desc: 'Experience motion works with buttery-smooth rendering and control.',
  },
  {
    title: 'Artist Spotlights',
    desc: 'Deep dives into processes, tools, and philosophies behind the pieces.',
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-900 dark:text-white">Immersive Viewing Experience</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">A minimal viewer with gentle parallax, subtle zoom, and intuitive controls designed for motion art.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="rounded-2xl p-[2px] bg-gradient-to-br from-white/40 to-white/10 dark:from-white/10 dark:to-white/5"
          >
            <div className="rounded-2xl overflow-hidden backdrop-blur-xl bg-white/60 dark:bg-gray-900/60 border border-white/20">
              <div className="relative h-72 sm:h-96 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-fuchsia-500 via-cyan-400 to-teal-400"
                  initial={{ scale: 1.05 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                />
                <motion.div className="absolute inset-0" style={{ background: 'radial-gradient(60% 60% at 50% 50%, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0) 60%)' }} initial={{ y: 10 }} whileInView={{ y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} />
                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white">
                    <button className="p-2 rounded-md bg-white/20 backdrop-blur-md"><Play size={16} /></button>
                    <button className="p-2 rounded-md bg-white/20 backdrop-blur-md"><Pause size={16} /></button>
                    <button className="p-2 rounded-md bg-white/20 backdrop-blur-md"><Maximize2 size={16} /></button>
                  </div>
                  <button className="p-2 rounded-md bg-white/20 backdrop-blur-md text-white"><Info size={16} /></button>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35, ease: 'easeOut', delay: i * 0.05 }} className="rounded-xl border border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-md p-5">
                <h4 className="font-semibold text-zinc-900 dark:text-white">{f.title}</h4>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
