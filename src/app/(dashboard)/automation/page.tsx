'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useStore } from '@/store/useStore'

const Icons = {
  zap: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  arrow: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  play: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  ),
  settings: (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
}

const workflows = [
  {
    id: 'content-machine',
    name: 'Content Machine',
    description: 'Idea → Blog Post → Social Posts → Email',
    steps: ['Topic Generator', 'Blog Post Writer', 'Twitter Thread', 'LinkedIn Post', 'Email Newsletter'],
    icon: '📝',
  },
  {
    id: 'marketing-funnel',
    name: 'Marketing Funnel',
    description: 'Ad Copy → Landing Page → Email Sequence',
    steps: ['Facebook Ad Writer', 'Landing Page Writer', 'Email Sequence Creator'],
    icon: '🎯',
  },
  {
    id: 'sales-outreach',
    name: 'Sales Outreach',
    description: 'Research → Cold Email → Follow-ups',
    steps: ['Competitor Analysis', 'Cold Email Writer', 'Follow-Up Sequence'],
    icon: '💼',
  },
  {
    id: 'video-content',
    name: 'Video Content',
    description: 'Script → Title → Description → Captions',
    steps: ['TikTok Script', 'YouTube Title', 'YouTube Description', 'Instagram Caption'],
    icon: '🎬',
  },
]

export default function AutomationPage() {
  const router = useRouter()
  const { hasUpsell } = useStore()

  useEffect(() => {
    if (!hasUpsell('automation')) {
      router.push('/unlock/automation')
    }
  }, [hasUpsell, router])

  return (
    <div className="max-w-5xl mx-auto">
      {/* Hero */}
      <div className="card p-8 mb-8 relative overflow-hidden animate-fade-up">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[var(--accent-primary)]/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="relative flex items-center gap-4 mb-6">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-[var(--accent-primary)] to-orange-500">
            {Icons.zap}
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[var(--text-primary)]">
              Automation <span className="badge badge-amber ml-2">Active</span>
            </h1>
            <p className="text-[var(--text-secondary)]">Chain agents together for powerful workflows</p>
          </div>
        </div>

        <p className="text-[var(--text-secondary)] max-w-2xl mb-6">
          Turn one idea into a complete content package. Automation connects multiple agents 
          in sequence, passing the output of one as input to the next.
        </p>

        <div className="flex items-center gap-2 text-sm flex-wrap">
          <span className="px-3 py-1 rounded-full bg-[var(--bg-hover)]">Input</span>
          {Icons.arrow}
          <span className="px-3 py-1 rounded-full bg-[var(--accent-primary)]/20 text-[var(--accent-primary)]">Agent 1</span>
          {Icons.arrow}
          <span className="px-3 py-1 rounded-full bg-[var(--accent-secondary)]/20 text-[var(--accent-secondary)]">Agent 2</span>
          {Icons.arrow}
          <span className="px-3 py-1 rounded-full bg-[var(--accent-tertiary)]/20 text-[var(--accent-tertiary)]">Agent 3</span>
          {Icons.arrow}
          <span className="px-3 py-1 rounded-full bg-[var(--bg-hover)]">Output</span>
        </div>
      </div>

      {/* Pre-built Workflows */}
      <section className="mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">Pre-built Workflows</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 stagger">
          {workflows.map((workflow) => (
            <div
              key={workflow.id}
              className="card p-5 group cursor-pointer hover:border-[var(--border-accent)] transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{workflow.icon}</span>
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)]">{workflow.name}</h3>
                    <p className="text-sm text-[var(--text-secondary)]">{workflow.description}</p>
                  </div>
                </div>
                <button className="p-2 rounded-lg bg-[var(--bg-hover)] group-hover:bg-[var(--accent-primary)] transition-colors">
                  <span className="text-[var(--text-secondary)] group-hover:text-white transition-colors">
                    {Icons.play}
                  </span>
                </button>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {workflow.steps.map((step, i) => (
                  <span 
                    key={i} 
                    className="flex items-center gap-1 text-xs px-2 py-1 rounded bg-[var(--bg-hover)] text-[var(--text-muted)]"
                  >
                    {i > 0 && <span className="mr-1">{Icons.arrow}</span>}
                    {step}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Create Custom Workflow */}
      <section className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">Create Custom Workflow</h2>
        
        <div className="card p-6 text-center">
          <div className="text-[var(--text-muted)] mx-auto mb-4">
            {Icons.settings}
          </div>
          <h3 className="font-semibold text-[var(--text-primary)] mb-2">Custom Workflow Builder</h3>
          <p className="text-[var(--text-secondary)] mb-4 max-w-md mx-auto">
            Build your own workflows by chaining any combination of agents together. 
            Coming soon!
          </p>
          <button className="btn-secondary opacity-50 cursor-not-allowed" disabled>
            Coming Soon
          </button>
        </div>
      </section>
    </div>
  )
}
