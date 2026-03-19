"use client"

import { motion } from 'framer-motion'

interface SectionHeaderProps {
  eyebrow?: string
  heading: string
  paragraph?: string
  centered?: boolean
}

export default function SectionHeader({ eyebrow, heading, paragraph, centered = true }: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-gold text-sm font-bold tracking-[0.2em] uppercase mb-6"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl lg:text-6xl font-black tracking-wide uppercase mb-6 text-chalk"
      >
        {heading}
      </motion.h2>
      {paragraph && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-lg lg:text-xl text-warm-gray leading-relaxed ${centered ? 'max-w-3xl mx-auto' : ''}`}
        >
          {paragraph}
        </motion.p>
      )}
    </div>
  )
}
