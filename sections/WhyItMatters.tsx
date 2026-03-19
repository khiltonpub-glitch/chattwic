"use client"

import { motion } from 'framer-motion'
import { Users, TrendingUp, Heart } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'

export default function WhyItMatters() {
  const pillars = [
    {
      icon: Heart,
      title: 'Culture',
      description: 'Football transcends borders, bringing together diverse communities and celebrating heritage through shared moments that define generations.'
    },
    {
      icon: TrendingUp,
      title: 'Business',
      description: 'The World Cup drives billions in economic impact, transforming infrastructure and creating opportunities for global brands and local economies.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'From street celebrations to neighborhood gatherings, the tournament strengthens social bonds and builds lasting connections across cultural divides.'
    }
  ]

  return (
    <section id="why-it-matters" className="relative py-32 lg:py-40 bg-ink">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          eyebrow="The Impact"
          heading="More Than a Game"
          paragraph="The World Cup creates ripple effects that transform cities, economies, and communities long after the final whistle."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index, duration: 0.8 }}
                className="group relative"
              >
                <div className="relative h-full p-10 bg-gradient-to-br from-pitch to-grass/20 border border-warm-gray/10 hover:border-gold/30 transition-all duration-500">
                  <div className="w-16 h-16 mb-8 flex items-center justify-center bg-gold/10 border border-gold/20">
                    <Icon className="text-gold" size={32} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-black tracking-wide text-chalk mb-6 uppercase">
                    {pillar.title}
                  </h3>
                  <p className="text-warm-gray leading-relaxed">
                    {pillar.description}
                  </p>

                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gold group-hover:w-full transition-all duration-700" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
