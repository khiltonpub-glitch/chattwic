"use client"

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Cities', href: '#cities' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'Investors', href: '#investors' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-pitch/95 backdrop-blur-lg shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <a href="#hero" className="text-xl lg:text-2xl font-black tracking-wider text-chalk hover:text-gold transition-colors">
            THE WORLD IN A CITY
          </a>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold tracking-wide text-warm-gray hover:text-gold transition-colors uppercase"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-3 bg-gold text-pitch font-bold text-sm tracking-wide uppercase hover:bg-gold-light transition-colors"
            >
              Partner With Us
            </a>
          </div>

          <button
            className="lg:hidden text-chalk hover:text-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-pitch/98 backdrop-blur-lg border-t border-warm-gray/20"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-base font-bold tracking-wide text-warm-gray hover:text-gold transition-colors uppercase"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="block w-full px-6 py-3 bg-gold text-pitch font-bold text-sm tracking-wide text-center uppercase hover:bg-gold-light transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Partner With Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
