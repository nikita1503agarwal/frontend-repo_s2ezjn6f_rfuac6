import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: typeof errors = {};
    if (!name.trim()) errs.name = 'Required';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Enter a valid email';
    if (!message.trim()) errs.message = 'Required';
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setName(''); setEmail(''); setMessage('');
    }
  };

  const inputClass = 'w-full px-4 py-3 rounded-xl bg-white/60 dark:bg-zinc-900/60 border border-white/20 text-zinc-900 dark:text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/60 transition-colors';

  return (
    <section id="contact" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-fuchsia-500/10 via-cyan-400/10 to-teal-400/10" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-900 dark:text-white">Exhibit with Aurora</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">Artists and curators, share your work and ideas. We’d love to hear from you.</p>
        </div>

        <div className="mt-10 max-w-2xl mx-auto">
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className={`${inputClass} ${errors.name ? 'border-red-400/60' : ''}`} />
              {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
            </div>
            <div>
              <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className={`${inputClass} ${errors.email ? 'border-red-400/60' : ''}`} />
              {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
            </div>
            <div>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us about your work…" rows={5} className={`${inputClass} ${errors.message ? 'border-red-400/60' : ''}`} />
              {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
            </div>
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-teal-400 via-cyan-400 to-fuchsia-500 text-white font-medium shadow-lg shadow-cyan-500/20">Submit</motion.button>
          </form>
          <motion.div initial={false} animate={{ opacity: submitted ? 1 : 0, y: submitted ? 0 : 6, pointerEvents: submitted ? 'auto' : 'none' }} className="mt-4 text-center text-sm text-emerald-500">
            Thanks! Your message has been received.
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
