'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Infinity, Zap, Shield, Clock } from 'lucide-react'
import Header from '@/components/Header'
import { useStore } from '@/store/useStore'

export default function InfinitePage() {
  const router = useRouter()
  const { hasUpsell } = useStore()

  useEffect(() => {
    if (!hasUpsell('infinite')) {
      router.push('/unlock/infinite')
    }
  }, [hasUpsell, router])

  const features = [
    {
      icon: Zap,
      title: 'Unlimited Generations',
      description: 'No daily or monthly caps on AI generations',
    },
    {
      icon: Clock,
      title: 'Priority Processing',
      description: 'Skip the queue with priority access to AI models',
    },
    {
      icon: Shield,
      title: 'Unlimited Storage',
      description: 'Save as many outputs as you need, forever',
    },
  ]

  return (
    <>
      <Header title="Infinite" />
      
      <div className="p-6 max-w-5xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 mb-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[var(--neon-blue)]/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative flex items-center gap-4 mb-6">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-[var(--neon-blue)] to-[var(--neon-purple)]">
              <Infinity size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Infinite Mode <span className="badge badge-neon ml-2">Active</span></h1>
              <p className="text-[var(--text-secondary)]">No limits. No restrictions. Pure productivity.</p>
            </div>
          </div>

          <p className="text-[var(--text-secondary)] max-w-2xl mb-6">
            With Infinite Mode, you have unlimited access to all AI agents without any caps or restrictions. 
            Generate as much content as you need, whenever you need it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className="p-4 rounded-xl bg-[var(--bg-tertiary)]"
              >
                <feature.icon size={24} className="text-[var(--neon-blue)] mb-3" />
                <h3 className="font-semibold mb-1">{feature.title}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Usage Stats */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-xl font-semibold mb-4">Your Usage</h2>
          <div className="glass-card p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-1">∞</div>
                <p className="text-sm text-[var(--text-secondary)]">Generations Available</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-1">∞</div>
                <p className="text-sm text-[var(--text-secondary)]">Saved Outputs Allowed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-1">Active</div>
                <p className="text-sm text-[var(--text-secondary)]">Priority Processing</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Benefits */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-xl font-semibold mb-4">Why Infinite?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass-card p-5">
              <h3 className="font-semibold mb-2">Never Hit a Wall</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Create content without worrying about limits. Perfect for agencies, marketers, 
                and power users who need constant AI assistance.
              </p>
            </div>
            <div className="glass-card p-5">
              <h3 className="font-semibold mb-2">Always Ready</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Priority processing means your requests are handled first. No waiting, 
                no slowdowns during peak times.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  )
}
