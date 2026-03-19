"use client"

import { motion } from 'framer-motion'
import { Cloud, Zap, Shield } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'

export default function AWSSection() {
  const capabilities = [
    {
      icon: Cloud,
      title: 'Media Infrastructure',
      description: 'Scalable cloud storage and processing for 4K documentary content across multiple cities and production teams.'
    },
    {
      icon: Zap,
      title: 'Storytelling Operations',
      description: 'Advanced tools for metadata management, automated workflows, and intelligent content categorization.'
    },
    {
      icon: Shield,
      title: 'Global Archive & Scale',
      description: 'Enterprise-grade content delivery networks ensuring seamless distribution to audiences worldwide.'
    }
  ]

  return (
    <section id="aws" className="relative py-32 lg:py-40 bg-pitch">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          eyebrow="Technology Partnership"
          heading="Built for Global Scale"
          paragraph="AWS powers our storytelling infrastructure, enabling world-class production and global distribution."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon
            return (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="group p-10 bg-ink border border-warm-gray/10 hover:border-gold/30 transition-all duration-500"
              >
                <Icon className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300" size={40} strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-chalk mb-4 tracking-wide uppercase">
                  {capability.title}
                </h3>
                <p className="text-warm-gray leading-relaxed text-sm">
                  {capability.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="p-12 bg-gradient-to-br from-grass/20 to-pitch border-2 border-gold/30"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-black text-gold mb-6 tracking-wide uppercase">
              Why AWS?
            </h3>
            <p className="text-lg text-chalk/90 leading-relaxed mb-6">
              This project requires infrastructure that matches our ambition: global, scalable, and built for the future.
            </p>
            <p className="text-lg text-chalk/90 leading-relaxed">
              AWS provides the foundation to manage premium content across 16 cities, process thousands of hours of footage, and deliver cinematic experiences to audiences worldwide.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
