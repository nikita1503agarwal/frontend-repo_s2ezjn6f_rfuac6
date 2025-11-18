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
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, ease: 'easeOut' }} className="min-h-screen bg-white text-zinc-900 dark:bg-gray-950 dark:text-white selection:bg-cyan-400/30">
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
