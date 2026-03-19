"use client"

import { motion } from 'framer-motion'

interface CTAButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function CTAButton({ href, children, variant = 'primary', className = '' }: CTAButtonProps) {
  const isPrimary = variant === 'primary'
  
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={`
        inline-block px-8 py-4 font-bold text-sm tracking-wide uppercase transition-all duration-300
        ${isPrimary 
          ? 'bg-gold text-pitch hover:bg-gold-light' 
          : 'bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-pitch'
        }
        ${className}
      `}
    >
      {children}
    </motion.a>
  )
}
