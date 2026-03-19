"use client"

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'

export default function Cities() {
  const cities = [
    {
      name: 'Miami',
      state: 'Florida',
      description: 'Where Latin America meets North America. A cultural crossroads defined by passion, rhythm, and the beautiful game.',
      image: '/images/cities/miami.jpg'
    },
    {
      name: 'Dallas',
      state: 'Texas',
      description: 'Everything is bigger in Texas. A modern metroplex where football culture runs deep and hospitality runs deeper.',
      image: '/images/cities/dallas.jpg'
    },
    {
      name: 'New York',
      state: 'New York/New Jersey',
      description: 'The world stage. Where every nation gathers, every story converges, and football becomes a universal language.',
      image: '/images/cities/newyork.jpg'
    },
    {
      name: 'Los Angeles',
      state: 'California',
      description: 'Entertainment capital meets football fever. Where Hollywood glamour collides with global sporting passion.',
      image: '/images/cities/los-angeles.jpg'
    },
    {
      name: 'Atlanta',
      state: 'Georgia',
      description: 'The new South. A city rebuilt on progress, diversity, and a football culture that is redefining American soccer.',
      image: '/images/cities/atlanta.jpg'
    }
  ]

  return (
    <section id="cities" className="relative py-32 lg:py-40 bg-gradient-to-b from-ink via-grass/10 to-pitch">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          eyebrow="Featured Destinations"
          heading="The Cities"
          paragraph="Each city tells a unique story. From 1994 to 2026, these urban landscapes become stages for global connection."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.map((city, index) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className="group relative overflow-hidden bg-pitch border border-warm-gray/10 hover:border-gold/30 transition-all duration-500"
            >
              <div className="relative h-64 bg-gradient-to-br from-grass to-pitch overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-pitch via-pitch/50 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <MapPin className="text-gold" size={24} />
                </div>
              </div>

              <div className="relative p-8">
                <h3 className="text-3xl font-black text-chalk mb-2 tracking-wide uppercase">
                  {city.name}
                </h3>
                <p className="text-sm text-gold font-bold tracking-wide mb-4 uppercase">
                  {city.state}
                </p>
                <p className="text-warm-gray leading-relaxed">
                  {city.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gold group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
