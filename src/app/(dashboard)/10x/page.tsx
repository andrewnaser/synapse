'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useStore } from '@/store/useStore'

const Icons = {
  rocket: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
  copy: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  ),
  refresh: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M23 4v6h-6M1 20v-6h6" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  ),
}

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
    <div className="max-w-5xl mx-auto">
      {/* Hero */}
      <div className="card p-8 mb-8 relative overflow-hidden animate-fade-up">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[var(--accent-primary)]/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="relative flex items-center gap-4 mb-6">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)]">
            {Icons.rocket}
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[var(--text-primary)]">
              10X Mode <span className="badge badge-amber ml-2">Active</span>
            </h1>
            <p className="text-[var(--text-secondary)]">Generate 10 variations with every request</p>
          </div>
        </div>

        <p className="text-[var(--text-secondary)] max-w-2xl mb-6">
          10X Mode supercharges your content generation by producing 10 unique variations 
          of every output. Perfect for A/B testing, brainstorming, or finding the perfect version.
        </p>

        <div className="flex flex-wrap gap-3">
          <span className="badge badge-amber">Hook Packs</span>
          <span className="badge badge-lime">Script Variations</span>
          <span className="badge badge-cyan">A/B Testing</span>
          <span className="badge badge-amber">Bulk Generation</span>
        </div>
      </div>

      {/* Demo Output */}
      <section className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-[var(--text-primary)]">10X Output Preview</h2>
          <div className="flex items-center gap-2">
            <button className="btn-secondary flex items-center gap-2 text-sm">
              {Icons.refresh}
              Regenerate All
            </button>
            <button className="btn-secondary flex items-center gap-2 text-sm">
              {Icons.copy}
              Copy All
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 stagger">
          {demoVariations.map((variation, index) => (
            <div
              key={index}
              className="card p-4 group hover:border-[var(--border-accent)] transition-all"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <span className="text-sm font-bold text-[var(--accent-primary)] min-w-[24px]">
                    #{index + 1}
                  </span>
                  <p className="text-sm text-[var(--text-secondary)]">{variation}</p>
                </div>
                <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-lg hover:bg-[var(--bg-hover)]">
                  {Icons.copy}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="mt-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">How 10X Mode Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card p-5">
            <div className="text-3xl mb-3">1️⃣</div>
            <h3 className="font-semibold text-[var(--text-primary)] mb-2">Select Any Agent</h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Choose from our 84+ specialized AI agents
            </p>
          </div>
          <div className="card p-5">
            <div className="text-3xl mb-3">2️⃣</div>
            <h3 className="font-semibold text-[var(--text-primary)] mb-2">Enable 10X Mode</h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Toggle 10X mode before generating
            </p>
          </div>
          <div className="card p-5">
            <div className="text-3xl mb-3">3️⃣</div>
            <h3 className="font-semibold text-[var(--text-primary)] mb-2">Get 10 Variations</h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Receive 10 unique outputs instantly
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
