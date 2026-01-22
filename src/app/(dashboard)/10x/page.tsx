'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Rocket, Sparkles, Copy, RefreshCw } from 'lucide-react'
import Header from '@/components/Header'
import { useStore } from '@/store/useStore'

export default function TenXPage() {
  const router = useRouter()
  const { hasUpsell } = useStore()

  useEffect(() => {
    if (!hasUpsell('10x')) {
      router.push('/unlock/10x')
    }
  }, [hasUpsell, router])

  const demoVariations = [
    "✨ Revolutionize your workflow with AI-powered automation that thinks ahead.",
    "🚀 Unlock the future of productivity - where AI does the heavy lifting.",
    "💡 Smart. Fast. Effortless. Welcome to the next generation of work.",
    "⚡ Transform ideas into reality in seconds with intelligent AI assistance.",
    "🎯 Precision meets speed - AI that understands exactly what you need.",
    "🌟 Elevate every task with AI designed to amplify your potential.",
    "🔥 Stop working harder. Start working smarter with AI superpowers.",
    "💪 Empower your creativity with AI that adapts to your vision.",
    "🎨 Where human creativity meets AI capability - magic happens.",
    "✅ Your productivity, multiplied by 10. That's the 10X promise.",
  ]

  return (
    <>
      <Header title="10X Mode" />
      
      <div className="p-6 max-w-5xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 mb-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[var(--neon-purple)]/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative flex items-center gap-4 mb-6">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-[var(--neon-purple)] to-[var(--electric-violet)]">
              <Rocket size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">10X Mode <span className="badge badge-purple ml-2">Active</span></h1>
              <p className="text-[var(--text-secondary)]">Generate 10 variations with every request</p>
            </div>
          </div>

          <p className="text-[var(--text-secondary)] max-w-2xl mb-6">
            10X Mode supercharges your content generation by producing 10 unique variations 
            of every output. Perfect for A/B testing, brainstorming, or finding the perfect version.
          </p>

          <div className="flex flex-wrap gap-3">
            <span className="badge badge-neon">Hook Packs</span>
            <span className="badge badge-neon">Script Variations</span>
            <span className="badge badge-neon">A/B Testing</span>
            <span className="badge badge-neon">Bulk Generation</span>
          </div>
        </motion.div>

        {/* Demo Output */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">10X Output Preview</h2>
            <div className="flex items-center gap-2">
              <button className="btn-secondary flex items-center gap-2 text-sm">
                <RefreshCw size={16} />
                Regenerate All
              </button>
              <button className="btn-secondary flex items-center gap-2 text-sm">
                <Copy size={16} />
                Copy All
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {demoVariations.map((variation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="glass-card p-4 group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span className="text-sm font-bold text-[var(--neon-purple)] min-w-[24px]">
                      #{index + 1}
                    </span>
                    <p className="text-sm text-[var(--text-secondary)]">{variation}</p>
                  </div>
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-lg hover:bg-[var(--bg-tertiary)]">
                    <Copy size={14} className="text-[var(--text-muted)]" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* How It Works */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10"
        >
          <h2 className="text-xl font-semibold mb-4">How 10X Mode Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass-card p-5">
              <div className="text-3xl mb-3">1️⃣</div>
              <h3 className="font-semibold mb-2">Select Any Agent</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Choose from our 100+ specialized AI agents
              </p>
            </div>
            <div className="glass-card p-5">
              <div className="text-3xl mb-3">2️⃣</div>
              <h3 className="font-semibold mb-2">Enable 10X Mode</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Toggle 10X mode before generating
              </p>
            </div>
            <div className="glass-card p-5">
              <div className="text-3xl mb-3">3️⃣</div>
              <h3 className="font-semibold mb-2">Get 10 Variations</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Receive 10 unique outputs instantly
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  )
}
