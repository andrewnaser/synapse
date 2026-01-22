'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Trash2, Copy, Check, Filter, Calendar, Bot } from 'lucide-react'
import Header from '@/components/Header'
import { useStore } from '@/store/useStore'
import { format } from 'date-fns'
import { AgentCategory } from '@/types'

export default function SavedOutputsPage() {
  const { savedOutputs, removeOutput } = useStore()
  const [search, setSearch] = useState('')
  const [categoryFilter, setCategoryFilter] = useState<AgentCategory | 'all'>('all')
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const filteredOutputs = useMemo(() => {
    return savedOutputs.filter(output => {
      const matchesSearch = search === '' || 
        output.content.toLowerCase().includes(search.toLowerCase()) ||
        output.agent_name.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = categoryFilter === 'all' || output.agent_category === categoryFilter
      return matchesSearch && matchesCategory
    })
  }, [savedOutputs, search, categoryFilter])

  const handleCopy = async (id: string, content: string) => {
    await navigator.clipboard.writeText(content)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const handleDelete = (id: string) => {
    removeOutput(id)
  }

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'writing', name: 'Writing' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'social-media', name: 'Social Media' },
    { id: 'email', name: 'Email' },
    { id: 'coding', name: 'Coding' },
    { id: 'business', name: 'Business' },
  ]

  return (
    <>
      <Header title="Saved Outputs" />
      
      <div className="p-6 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">Saved Outputs</h1>
          <p className="text-[var(--text-secondary)]">
            Your generated content, saved for later use
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-4 mb-6"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search saved outputs..."
                className="input-field pl-11"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter size={18} className="text-[var(--text-muted)]" />
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value as AgentCategory | 'all')}
                className="input-field w-auto"
              >
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <p className="text-sm text-[var(--text-muted)] mb-4">
          {filteredOutputs.length} saved output{filteredOutputs.length !== 1 ? 's' : ''}
        </p>

        {/* Outputs List */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredOutputs.map((output, index) => (
              <motion.div
                key={output.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: index * 0.05 }}
                className="glass-card p-5"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[var(--bg-tertiary)]">
                      <Bot size={18} className="text-[var(--neon-blue)]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[var(--text-primary)]">
                        {output.agent_name}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                        <Calendar size={12} />
                        {format(new Date(output.created_at), 'MMM d, yyyy h:mm a')}
                      </div>
                    </div>
                  </div>
                  <span className="category-pill text-xs capitalize">
                    {output.agent_category.replace('-', ' ')}
                  </span>
                </div>

                {/* Content */}
                <div 
                  className={`output-box text-sm mb-4 cursor-pointer transition-all ${
                    expandedId === output.id ? '' : 'max-h-32 overflow-hidden'
                  }`}
                  onClick={() => setExpandedId(expandedId === output.id ? null : output.id)}
                >
                  <pre className="whitespace-pre-wrap font-sans">{output.content}</pre>
                  {expandedId !== output.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[var(--bg-secondary)] to-transparent" />
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setExpandedId(expandedId === output.id ? null : output.id)}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  >
                    {expandedId === output.id ? 'Show less' : 'Show more'}
                  </button>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopy(output.id, output.content)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-all ${
                        copiedId === output.id
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      {copiedId === output.id ? <Check size={14} /> : <Copy size={14} />}
                      {copiedId === output.id ? 'Copied!' : 'Copy'}
                    </button>
                    
                    <button
                      onClick={() => handleDelete(output.id)}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:text-red-400 hover:bg-red-500/10 transition-all"
                    >
                      <Trash2 size={14} />
                      Delete
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredOutputs.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <span className="text-6xl mb-4 block">📁</span>
            <h3 className="text-xl font-semibold mb-2">
              {savedOutputs.length === 0 ? 'No saved outputs yet' : 'No matching outputs'}
            </h3>
            <p className="text-[var(--text-secondary)]">
              {savedOutputs.length === 0 
                ? 'Generate content with any agent and save it here'
                : 'Try adjusting your search or filter criteria'
              }
            </p>
          </motion.div>
        )}
      </div>
    </>
  )
}
