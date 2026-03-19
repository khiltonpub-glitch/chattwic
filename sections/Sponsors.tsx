"use client"

import { motion } from 'framer-motion'
import { Globe, Target, Sparkles } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import CTAButton from '@/components/CTAButton'

export default function Sponsors() {
  const benefits = [
    {
      icon: Globe,
      title: 'City-Level Storytelling',
      description: 'Connect your brand with authentic narratives rooted in specific communities and their World Cup experiences.'
    },
    {
      icon: Target,
      title: 'Premium Integration',
      description: 'Seamlessly weave your brand into compelling documentary content that resonates with global audiences.'
    },
    {
      icon: Sparkles,
      title: 'Cultural Relevance',
      description: 'Position your brand at the intersection of sport, culture, and community during a defining global moment.'
    }
  ]

  return (
    <section id="sponsors" className="relative py-32 lg:py-40 bg-pitch">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          eyebrow="Partnership Opportunities"
          heading="Partner With a Global Moment"
          paragraph="Join us in telling powerful cultural stories. Connect your brand with the passion, diversity, and excitement of the World Cup."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="group p-8 bg-ink border border-warm-gray/10 hover:border-gold/30 transition-all duration-500"
              >
                <Icon className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300" size={40} strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-chalk mb-4 tracking-wide uppercase">
                  {benefit.title}
                </h3>
                <p className="text-warm-gray leading-relaxed text-sm">
                  {benefit.description}
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
            Become a Sponsor
          </CTAButton>
        </motion.div>
      </div>
    </section>
  )
}
