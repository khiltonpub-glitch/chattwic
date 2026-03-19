"use client"

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import CTAButton from '@/components/CTAButton'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-ink via-pitch to-grass opacity-90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gold text-sm font-bold tracking-[0.2em] uppercase mb-8"
          >
            A Hilton Sports Group Production
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-wide mb-8 leading-none"
          >
            <span className="gradient-text">THE WORLD</span>
            <br />
            <span className="text-chalk">IN A CITY</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-xl md:text-2xl lg:text-3xl text-warm-gray font-light max-w-4xl mx-auto mb-6 leading-relaxed"
          >
            One tournament. Many cultures. Infinite stories.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="text-base md:text-lg lg:text-xl text-warm-gray/80 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            A premium documentary and cultural media project exploring how the FIFA World Cup transforms cities through football, food, business, community, and identity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <CTAButton href="#cities" variant="primary">
              Explore the Cities
            </CTAButton>
            <CTAButton href="#sponsors" variant="secondary">
              Become a Partner
            </CTAButton>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.a
            href="#what-this-is"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-warm-gray hover:text-gold transition-colors"
          >
            <span className="text-xs font-bold tracking-wide mb-2 uppercase">Scroll</span>
            <ChevronDown size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
