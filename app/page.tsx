"use client"

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Hero from '@/sections/Hero'
import WhatThisIs from '@/sections/WhatThisIs'
import WhyItMatters from '@/sections/WhyItMatters'
import Cities from '@/sections/Cities'
import Sponsors from '@/sections/Sponsors'
import Investors from '@/sections/Investors'
import AWSSection from '@/sections/AWSSection'
import FAQ from '@/sections/FAQ'
import FinalCTA from '@/sections/FinalCTA'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-ink">
      <Navigation />
      
      <Hero />
      <WhatThisIs />
      <WhyItMatters />
      <Cities />
      <Sponsors />
      <Investors />
      <AWSSection />
      <FAQ />
      <FinalCTA />
      
      <Footer />
    </main>
  )
}
