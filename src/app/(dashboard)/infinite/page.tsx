'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useStore } from '@/store/useStore'

const Icons = {
  infinity: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z" />
    </svg>
  ),
  zap: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  clock: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  shield: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
}

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
      icon: 'zap',
      title: 'Unlimited Generations',
      description: 'No daily or monthly caps on AI generations',
    },
    {
      icon: 'clock',
      title: 'Priority Processing',
      description: 'Skip the queue with priority access to AI models',
    },
    {
      icon: 'shield',
      title: 'Unlimited Storage',
      description: 'Save as many outputs as you need, forever',
    },
  ]

  return (
    <div className="max-w-5xl mx-auto">
      {/* Hero */}
      <div className="card p-8 mb-8 relative overflow-hidden animate-fade-up">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[var(--accent-secondary)]/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="relative flex items-center gap-4 mb-6">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-[var(--accent-secondary)] to-[var(--accent-tertiary)]">
            {Icons.infinity}
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[var(--text-primary)]">
              Infinite Mode <span className="badge badge-lime ml-2">Active</span>
            </h1>
            <p className="text-[var(--text-secondary)]">No limits. No restrictions. Pure productivity.</p>
          </div>
        </div>

        <p className="text-[var(--text-secondary)] max-w-2xl mb-6">
          With Infinite Mode, you have unlimited access to all AI agents without any caps or restrictions. 
          Generate as much content as you need, whenever you need it.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="p-4 rounded-xl bg-[var(--bg-hover)]"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="text-[var(--accent-secondary)] mb-3">
                {Icons[feature.icon as keyof typeof Icons]}
              </div>
              <h3 className="font-semibold text-[var(--text-primary)] mb-1">{feature.title}</h3>
              <p className="text-sm text-[var(--text-secondary)]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Usage Stats */}
      <section className="mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">Your Usage</h2>
        <div className="card p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--accent-primary)] mb-1">∞</div>
              <p className="text-sm text-[var(--text-secondary)]">Generations Available</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--accent-secondary)] mb-1">∞</div>
              <p className="text-sm text-[var(--text-secondary)]">Saved Outputs Allowed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--accent-tertiary)] mb-1">Active</div>
              <p className="text-sm text-[var(--text-secondary)]">Priority Processing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">Why Infinite?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="card p-5">
            <h3 className="font-semibold text-[var(--text-primary)] mb-2">Never Hit a Wall</h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Create content without worrying about limits. Perfect for agencies, marketers, 
              and power users who need constant AI assistance.
            </p>
          </div>
          <div className="card p-5">
            <h3 className="font-semibold text-[var(--text-primary)] mb-2">Always Ready</h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Priority processing means your requests are handled first. No waiting, 
              no slowdowns during peak times.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
