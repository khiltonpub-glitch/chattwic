"use client"

import { motion } from 'framer-motion'
import { TrendingUp, Users, Globe2 } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import CTAButton from '@/components/CTAButton'

export default function Investors() {
  const opportunities = [
    {
      icon: TrendingUp,
      title: 'Documentary Platform Potential',
      description: 'A scalable content model that extends beyond a single series into a comprehensive media ecosystem.'
    },
    {
      icon: Users,
      title: 'Long-Term Audience Growth',
      description: 'Building engaged communities around global football culture and urban storytelling.'
    },
    {
      icon: Globe2,
      title: 'Multi-City Content Strategy',
      description: 'Expand the format to other World Cup host cities globally, creating a distributed content network.'
    }
  ]

  return (
    <section id="investors" className="relative py-32 lg:py-40 bg-gradient-to-b from-ink to-grass/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          eyebrow="Investment Opportunity"
          heading="A Scalable Global Media Property"
          paragraph="A premium documentary platform with long-term audience growth potential and sponsor-backed storytelling expansion."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {opportunities.map((opportunity, index) => {
            const Icon = opportunity.icon
            return (
              <motion.div
                key={opportunity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="group p-10 bg-pitch border border-warm-gray/10 hover:border-gold/30 transition-all duration-500"
              >
                <Icon className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300" size={40} strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-chalk mb-4 tracking-wide uppercase">
                  {opportunity.title}
                </h3>
                <p className="text-warm-gray leading-relaxed text-sm">
                  {opportunity.description}
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
          className="text-center"
        >
          <CTAButton href="#contact" variant="primary">
            Explore Opportunities
          </CTAButton>
        </motion.div>
      </div>
    </section>
  )
}
