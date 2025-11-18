import React from 'react'
import { ThemeProvider } from './components/ThemeProvider'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Collections from './components/Collections'
import Artists from './components/Artists'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { motion } from 'framer-motion'

export default function App() {
  return (
    <ThemeProvider>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 selection:bg-cyan-500/20 selection:text-slate-900 dark:selection:bg-fuchsia-500/20 dark:selection:text-slate-50 transition-colors duration-300 ease-in-out"
      >
        <NavBar />
        <Hero />
        <Collections />
        <Artists />
        <Experience />
        <Contact />
        <Footer />
      </motion.main>
    </ThemeProvider>
  )
}
