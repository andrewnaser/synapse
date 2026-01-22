'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Lock, ArrowRight } from 'lucide-react'
import { UpsellInfo } from '@/types'
import { useStore } from '@/store/useStore'

interface UpsellCardProps {
  upsell: UpsellInfo
  index?: number
}

export default function UpsellCard({ upsell, index = 0 }: UpsellCardProps) {
  const { hasUpsell } = useStore()
  const isUnlocked = hasUpsell(upsell.id)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      <Link href={isUnlocked ? `/${upsell.id}` : `/unlock/${upsell.id}`}>
        <div className={`glass-card glass-card-hover p-6 relative overflow-hidden group ${
          !isUnlocked ? 'border-[var(--neon-purple)]/30' : 'border-green-500/30'
        }`}>
          {/* Gradient overlay for locked state */}
          {!isUnlocked && (
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-purple)]/5 to-transparent pointer-events-none" />
          )}

          <div className="flex items-start justify-between mb-4">
            <span className="text-4xl">{upsell.icon}</span>
            {isUnlocked ? (
              <span className="badge badge-success">Unlocked</span>
            ) : (
              <div className="p-2 rounded-lg bg-[var(--neon-purple)]/10">
                <Lock size={16} className="text-[var(--neon-purple)]" />
              </div>
            )}
          </div>

          <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">
            {upsell.name}
          </h3>
          <p className="text-sm text-[var(--neon-purple)] font-medium mb-3">
            {upsell.tagline}
          </p>
          <p className="text-sm text-[var(--text-secondary)] mb-4">
            {upsell.description}
          </p>

          <ul className="space-y-2 mb-4">
            {upsell.features.slice(0, 3).map((feature, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--neon-purple)]" />
                {feature}
              </li>
            ))}
          </ul>

          <div className={`flex items-center text-sm font-medium group-hover:gap-2 transition-all ${
            isUnlocked ? 'text-green-400' : 'text-[var(--neon-purple)]'
          }`}>
            <span>{isUnlocked ? 'Access Now' : 'Unlock'}</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
