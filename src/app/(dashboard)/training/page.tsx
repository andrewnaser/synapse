'use client'

import { motion } from 'framer-motion'
import { Play, Clock, CheckCircle, Book, Lightbulb, Zap, Target, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'

const lessons = [
  {
    id: 'getting-started',
    title: 'Getting Started with Synapse AI',
    description: 'Learn the basics of using AI agents for your work',
    duration: '5 min',
    icon: '🚀',
    completed: false,
  },
  {
    id: 'choosing-agents',
    title: 'Choosing the Right Agent',
    description: 'How to find the perfect agent for your task',
    duration: '4 min',
    icon: '🎯',
    completed: false,
  },
  {
    id: 'input-optimization',
    title: 'Optimizing Your Inputs',
    description: 'Get better results with better inputs',
    duration: '6 min',
    icon: '✨',
    completed: false,
  },
  {
    id: 'workflows',
    title: 'Building Workflows',
    description: 'Chain agents together for complex tasks',
    duration: '8 min',
    icon: '⚡',
    completed: false,
  },
]

const useCases = [
  {
    title: 'Content Marketing',
    description: 'Create blog posts, social media content, and marketing copy',
    agents: ['Blog Post Writer', 'Instagram Caption', 'LinkedIn Post'],
    icon: '📝',
  },
  {
    title: 'Sales Outreach',
    description: 'Write cold emails, follow-ups, and sales scripts',
    agents: ['Cold Email Writer', 'Sales Script', 'Follow-Up Sequence'],
    icon: '💼',
  },
  {
    title: 'Coding Assistance',
    description: 'Debug code, generate documentation, convert languages',
    agents: ['Code Explainer', 'Code Debugger', 'Code Converter'],
    icon: '💻',
  },
  {
    title: 'Business Planning',
    description: 'Create business plans, proposals, and strategies',
    agents: ['Business Plan Writer', 'Pitch Deck Creator', 'SWOT Analysis'],
    icon: '📊',
  },
]

const tips = [
  {
    title: 'Be Specific',
    description: 'The more specific your input, the better the output. Include context, goals, and target audience.',
    icon: Target,
  },
  {
    title: 'Use Options',
    description: 'Adjust tone, length, and style options to match your needs perfectly.',
    icon: Zap,
  },
  {
    title: 'Iterate & Refine',
    description: "Don't settle for the first output. Regenerate or tweak your input for better results.",
    icon: Lightbulb,
  },
]

export default function TrainingPage() {
  return (
    <>
      <Header title="Training Center" />
      
      <div className="p-6 max-w-5xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 mb-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[var(--neon-blue)]/10 to-[var(--neon-purple)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative">
            <div className="flex items-center gap-2 text-[var(--neon-blue)] text-sm font-medium mb-3">
              <Book size={16} />
              <span>Training Center</span>
            </div>
            
            <h1 className="text-3xl font-bold mb-3">
              Master Your <span className="gradient-text">AI Workforce</span>
            </h1>
            
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl">
              Learn how to get the most out of Synapse AI with our quick-start guides, 
              use case walkthroughs, and expert tips.
            </p>
          </div>
        </motion.div>

        {/* Quick Start Lessons */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-10"
        >
          <h2 className="text-xl font-semibold mb-4">Quick Start Lessons</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {lessons.map((lesson, index) => (
              <motion.div
                key={lesson.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="glass-card glass-card-hover p-5 cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{lesson.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1 group-hover:text-[var(--neon-blue)] transition-colors">
                      {lesson.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] mb-3">
                      {lesson.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs">
                      <span className="flex items-center gap-1 text-[var(--text-muted)]">
                        <Clock size={12} />
                        {lesson.duration}
                      </span>
                      {lesson.completed && (
                        <span className="flex items-center gap-1 text-green-400">
                          <CheckCircle size={12} />
                          Completed
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-[var(--bg-tertiary)] group-hover:bg-[var(--neon-blue)] transition-colors">
                    <Play size={16} className="text-[var(--text-secondary)] group-hover:text-white transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Best Agents for Use Cases */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-10"
        >
          <h2 className="text-xl font-semibold mb-4">Best Agents For...</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.05 }}
                className="glass-card p-5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{useCase.icon}</span>
                  <h3 className="font-semibold">{useCase.title}</h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-4">
                  {useCase.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {useCase.agents.map((agent) => (
                    <Link
                      key={agent}
                      href={`/agents?search=${encodeURIComponent(agent)}`}
                      className="px-3 py-1 rounded-full text-xs bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:text-[var(--neon-blue)] hover:bg-[var(--neon-blue)]/10 transition-colors"
                    >
                      {agent}
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Pro Tips */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-xl font-semibold mb-4">Pro Tips</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className="glass-card p-5"
              >
                <div className="p-3 rounded-xl bg-[var(--neon-purple)]/10 w-fit mb-4">
                  <tip.icon size={24} className="text-[var(--neon-purple)]" />
                </div>
                <h3 className="font-semibold mb-2">{tip.title}</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  {tip.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <Link href="/agents" className="btn-primary inline-flex items-center gap-2">
            Start Using Agents
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </>
  )
}
