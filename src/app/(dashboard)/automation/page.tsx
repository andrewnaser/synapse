'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Zap, ArrowRight, Play, Settings } from 'lucide-react'
import Header from '@/components/Header'
import { useStore } from '@/store/useStore'

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
    <>
      <Header title="Automation" />
      
      <div className="p-6 max-w-5xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 mb-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative flex items-center gap-4 mb-6">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500">
              <Zap size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Automation <span className="badge badge-neon ml-2">Active</span></h1>
              <p className="text-[var(--text-secondary)]">Chain agents together for powerful workflows</p>
            </div>
          </div>

          <p className="text-[var(--text-secondary)] max-w-2xl mb-6">
            Turn one idea into a complete content package. Automation connects multiple agents 
            in sequence, passing the output of one as input to the next.
          </p>

          <div className="flex items-center gap-2 text-sm">
            <span className="px-3 py-1 rounded-full bg-[var(--bg-tertiary)]">Input</span>
            <ArrowRight size={16} className="text-[var(--text-muted)]" />
            <span className="px-3 py-1 rounded-full bg-[var(--neon-blue)]/20 text-[var(--neon-blue)]">Agent 1</span>
            <ArrowRight size={16} className="text-[var(--text-muted)]" />
            <span className="px-3 py-1 rounded-full bg-[var(--neon-purple)]/20 text-[var(--neon-purple)]">Agent 2</span>
            <ArrowRight size={16} className="text-[var(--text-muted)]" />
            <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400">Agent 3</span>
            <ArrowRight size={16} className="text-[var(--text-muted)]" />
            <span className="px-3 py-1 rounded-full bg-[var(--bg-tertiary)]">Output</span>
          </div>
        </motion.div>

        {/* Pre-built Workflows */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <h2 className="text-xl font-semibold mb-4">Pre-built Workflows</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {workflows.map((workflow, index) => (
              <motion.div
                key={workflow.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="glass-card p-5 group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{workflow.icon}</span>
                    <div>
                      <h3 className="font-semibold">{workflow.name}</h3>
                      <p className="text-sm text-[var(--text-secondary)]">{workflow.description}</p>
                    </div>
                  </div>
                  <button className="p-2 rounded-lg bg-[var(--bg-tertiary)] group-hover:bg-[var(--neon-blue)] transition-colors">
                    <Play size={16} className="text-[var(--text-secondary)] group-hover:text-white transition-colors" />
                  </button>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {workflow.steps.map((step, i) => (
                    <span 
                      key={i} 
                      className="flex items-center gap-1 text-xs px-2 py-1 rounded bg-[var(--bg-tertiary)] text-[var(--text-muted)]"
                    >
                      {i > 0 && <ArrowRight size={10} className="mr-1" />}
                      {step}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Create Custom Workflow */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-xl font-semibold mb-4">Create Custom Workflow</h2>
          
          <div className="glass-card p-6 text-center">
            <Settings size={48} className="mx-auto mb-4 text-[var(--text-muted)]" />
            <h3 className="font-semibold mb-2">Custom Workflow Builder</h3>
            <p className="text-[var(--text-secondary)] mb-4 max-w-md mx-auto">
              Build your own workflows by chaining any combination of agents together. 
              Coming soon!
            </p>
            <button className="btn-secondary" disabled>
              Coming Soon
            </button>
          </div>
        </motion.section>
      </div>
    </>
  )
}
