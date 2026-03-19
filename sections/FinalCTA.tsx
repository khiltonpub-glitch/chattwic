"use client"

import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import CTAButton from '@/components/CTAButton'

export default function FinalCTA() {
  return (
    <section id="contact" className="relative py-40 lg:py-56 bg-gradient-to-b from-grass/10 via-pitch to-ink overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-grass/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gold text-sm font-bold tracking-[0.2em] uppercase mb-8"
          >
            Join the Journey
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-8xl font-black tracking-wide mb-8"
          >
            <span className="gradient-text">THIS IS JUST</span>
            <br />
            <span className="text-chalk">THE BEGINNING</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl lg:text-2xl text-warm-gray max-w-3xl mx-auto mb-16 leading-relaxed"
          >
            The 2026 World Cup is coming. The stories are waiting to be told. 
            <span className="text-chalk"> Let us build something historic together.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
          >
            <CTAButton href="mailto:hello@worldinacity.com" variant="primary">
              Partner With Us
            </CTAButton>
            <CTAButton href="mailto:hello@worldinacity.com" variant="secondary">
              Contact Us
            </CTAButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="max-w-md mx-auto p-8 bg-pitch/50 border border-warm-gray/20"
          >
            <Mail className="text-gold mx-auto mb-4" size={32} />
            <h3 className="text-lg font-bold text-chalk mb-2 tracking-wide uppercase">
              Email Us
            </h3>
            <p className="text-warm-gray text-sm">
              <a href="mailto:hello@worldinacity.com" className="hover:text-gold transition-colors">
                hello@worldinacity.com
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
    </section>
  )
}
