'use client'

import { useState, useMemo } from 'react'
import { useStore } from '@/store/useStore'
import { format } from 'date-fns'
import { AgentCategory } from '@/types'

const Icons = {
  search: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  trash: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  ),
  copy: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  ),
  check: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  filter: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  ),
  calendar: (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  bot: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v4" />
      <line x1="8" y1="16" x2="8" y2="16" />
      <line x1="16" y1="16" x2="16" y2="16" />
    </svg>
  ),
}

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
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-8 animate-fade-up">
        <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">Saved Outputs</h1>
        <p className="text-[var(--text-secondary)]">
          Your generated content, saved for later use
        </p>
      </div>

      {/* Filters */}
      <div className="card p-4 mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]">
              {Icons.search}
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search saved outputs..."
              className="input-field pl-11"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[var(--text-muted)]">{Icons.filter}</span>
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
      </div>

      {/* Results Count */}
      <p className="text-sm text-[var(--text-muted)] mb-4">
        {filteredOutputs.length} saved output{filteredOutputs.length !== 1 ? 's' : ''}
      </p>

      {/* Outputs List */}
      <div className="space-y-4 stagger">
        {filteredOutputs.map((output) => (
          <div
            key={output.id}
            className="card p-5"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[var(--bg-hover)]">
                  <span className="text-[var(--accent-primary)]">{Icons.bot}</span>
                </div>
                <div>
                  <h3 className="font-medium text-[var(--text-primary)]">
                    {output.agent_name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                    {Icons.calendar}
                    {format(new Date(output.created_at), 'MMM d, yyyy h:mm a')}
                  </div>
                </div>
              </div>
              <span className="badge badge-lime text-xs capitalize">
                {output.agent_category.replace('-', ' ')}
              </span>
            </div>

            {/* Content */}
            <div 
              className={`output-box text-sm mb-4 cursor-pointer transition-all relative ${
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
                      ? 'bg-[var(--accent-secondary)]/20 text-[var(--accent-secondary)]'
                      : 'bg-[var(--bg-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {copiedId === output.id ? Icons.check : Icons.copy}
                  {copiedId === output.id ? 'Copied!' : 'Copy'}
                </button>
                
                <button
                  onClick={() => handleDelete(output.id)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm bg-[var(--bg-hover)] text-[var(--text-secondary)] hover:text-red-400 hover:bg-red-500/10 transition-all"
                >
                  {Icons.trash}
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredOutputs.length === 0 && (
        <div className="text-center py-16 animate-fade-up">
          <span className="text-6xl mb-4 block">📁</span>
          <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
            {savedOutputs.length === 0 ? 'No saved outputs yet' : 'No matching outputs'}
          </h3>
          <p className="text-[var(--text-secondary)]">
            {savedOutputs.length === 0 
              ? 'Generate content with any agent and save it here'
              : 'Try adjusting your search or filter criteria'
            }
          </p>
        </div>
      )}
    </div>
  )
}
