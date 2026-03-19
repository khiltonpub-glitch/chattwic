"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'

interface FAQItemProps {
  question: string
  answer: string
  index: number
}

function FAQItem({ question, answer, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
      className="border-b border-warm-gray/20 last:border-b-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-start justify-between gap-6 text-left group"
      >
        <h3 className="text-lg lg:text-xl font-bold text-chalk group-hover:text-gold transition-colors duration-300 uppercase tracking-wide">
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gold/10 border border-gold/20 group-hover:border-gold/50 transition-all duration-300"
        >
          {isOpen ? (
            <Minus className="text-gold" size={20} />
          ) : (
            <Plus className="text-gold" size={20} />
          )}
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-6 pr-12">
              <p className="text-warm-gray leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const faqs = [
    {
      question: 'What is The World In A City?',
      answer: 'A premium documentary series exploring how the FIFA World Cup transforms cities across North America. We follow 16 host cities from the historic 1994 tournament through the upcoming 2026 World Cup, examining the intersection of sport, culture, business, and community.'
    },
    {
      question: 'Who is this for?',
      answer: 'This project serves multiple audiences: global sponsors seeking cultural relevance, cities wanting to showcase their World Cup legacy, investors looking for scalable media properties, and audiences passionate about football culture and urban storytelling.'
    },
    {
      question: 'What makes it different?',
      answer: 'This is not a sports broadcast. We focus on what the World Cup does to a city rather than match highlights. Our cinematic approach explores identity, migration, community, and the transformation of urban spaces when the world arrives.'
    },
    {
      question: 'How can brands get involved?',
      answer: 'We offer multiple partnership tiers including presenting sponsors, city-level partners, and category sponsors. Each tier provides unique opportunities for brand integration, cultural storytelling, and visibility within a global moment. Contact us to discuss partnership opportunities.'
    },
    {
      question: 'When will it be released?',
      answer: 'We are currently in production with premiere targeted for 2025, ahead of the 2026 FIFA World Cup. This timing positions the series to capitalize on building World Cup momentum while providing context for the upcoming tournament.'
    }
  ]

  return (
    <section id="faq" className="relative py-32 lg:py-40 bg-ink">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <SectionHeader
          eyebrow="Frequently Asked"
          heading="Questions"
        />

        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
