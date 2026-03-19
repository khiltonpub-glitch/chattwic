"use client"

import { motion } from 'framer-motion'
import SectionHeader from '@/components/SectionHeader'

export default function WhatThisIs() {
  return (
    <section id="what-this-is" className="relative py-32 lg:py-40 bg-gradient-to-b from-pitch to-ink">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <SectionHeader
          eyebrow="The Concept"
          heading="A Global Story, Told Through Cities"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="relative pl-8 border-l-2 border-gold/30">
            <div className="absolute left-0 top-0 w-2 h-2 bg-gold rounded-full transform -translate-x-[5px]" />
            <p className="text-lg lg:text-xl text-chalk/90 leading-relaxed">
              This project is not about match highlights. It is about what the World Cup does to a city.
            </p>
          </div>

          <div className="relative pl-8 border-l-2 border-gold/30">
            <div className="absolute left-0 top-0 w-2 h-2 bg-gold rounded-full transform -translate-x-[5px]" />
            <p className="text-lg lg:text-xl text-chalk/90 leading-relaxed">
              It explores identity, food, commerce, migration, community, and the feeling of a place when the world arrives.
            </p>
          </div>

          <div className="relative pl-8 border-l-2 border-gold/30">
            <div className="absolute left-0 top-0 w-2 h-2 bg-gold rounded-full transform -translate-x-[5px]" />
            <p className="text-lg lg:text-xl text-chalk/90 leading-relaxed">
              From the historic 1994 tournament to the upcoming 2026 World Cup, we trace how these global events transform urban landscapes and local identities across North America.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
