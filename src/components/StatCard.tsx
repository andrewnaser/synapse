'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface StatCardProps {
  label: string
  value: string | number
  icon: LucideIcon
  trend?: { value: number; positive: boolean }
  index?: number
}

export default function StatCard({ label, value, icon: Icon, trend, index = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="glass-card p-6"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 rounded-xl bg-[var(--neon-blue)]/10">
          <Icon size={24} className="text-[var(--neon-blue)]" />
        </div>
        {trend && (
          <span className={`text-sm font-medium ${trend.positive ? 'text-green-400' : 'text-red-400'}`}>
            {trend.positive ? '+' : ''}{trend.value}%
          </span>
        )}
      </div>
      
      <p className="text-3xl font-bold text-[var(--text-primary)] mb-1">{value}</p>
      <p className="text-sm text-[var(--text-muted)]">{label}</p>
    </motion.div>
  )
}
