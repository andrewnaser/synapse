'use client';

import { useState, useMemo } from 'react';
import { agents } from '@/data/agents';
import AgentCard from '@/components/AgentCard';

const Icons = {
  search: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  ),
  grid: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  list: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="8" y1="6" x2="21" y2="6" />
      <line x1="8" y1="12" x2="21" y2="12" />
      <line x1="8" y1="18" x2="21" y2="18" />
      <line x1="3" y1="6" x2="3.01" y2="6" />
      <line x1="3" y1="12" x2="3.01" y2="12" />
      <line x1="3" y1="18" x2="3.01" y2="18" />
    </svg>
  ),
};

const categories = [
  { id: 'all', name: 'All Agents', emoji: '✨' },
  { id: 'writing', name: 'Writing', emoji: '✍️' },
  { id: 'marketing', name: 'Marketing', emoji: '📣' },
  { id: 'social', name: 'Social Media', emoji: '📱' },
  { id: 'email', name: 'Email', emoji: '📧' },
  { id: 'coding', name: 'Coding', emoji: '💻' },
  { id: 'business', name: 'Business', emoji: '💼' },
  { id: 'translation', name: 'Translation', emoji: '🌍' },
  { id: 'seo', name: 'SEO', emoji: '🔍' },
  { id: 'creative', name: 'Creative', emoji: '🎨' },
  { id: 'education', name: 'Education', emoji: '📚' },
  { id: 'sales', name: 'Sales', emoji: '💰' },
  { id: 'automation', name: 'Automation', emoji: '⚡' },
];

export default function AgentsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredAgents = useMemo(() => {
    return agents.filter((agent) => {
      const matchesCategory = selectedCategory === 'all' || agent.category === selectedCategory;
      const matchesSearch = 
        agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        agent.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const categoryCount = useMemo(() => {
    const counts: Record<string, number> = { all: agents.length };
    agents.forEach((agent) => {
      counts[agent.category] = (counts[agent.category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="mb-8 animate-fade-up">
        <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">AI Agents</h1>
        <p className="text-[var(--text-secondary)]">
          {agents.length} specialized agents ready to help you write, code, market, and automate.
        </p>
      </div>

      {/* Search & View Toggle */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6 animate-fade-up" style={{ animationDelay: '0.05s' }}>
        {/* Search */}
        <div className="relative flex-1">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]">
            {Icons.search}
          </span>
          <input
            type="text"
            placeholder="Search agents by name or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input-field pl-12"
          />
        </div>
        
        {/* View Toggle */}
        <div className="flex items-center gap-1 p-1 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2.5 rounded-lg transition-all ${
              viewMode === 'grid'
                ? 'bg-[var(--accent-primary)] text-[var(--bg-base)]'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            {Icons.grid}
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2.5 rounded-lg transition-all ${
              viewMode === 'list'
                ? 'bg-[var(--accent-primary)] text-[var(--bg-base)]'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            {Icons.list}
          </button>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`pill ${selectedCategory === cat.id ? 'active' : ''}`}
          >
            <span>{cat.emoji}</span>
            <span>{cat.name}</span>
            <span className="text-xs opacity-60">({categoryCount[cat.id] || 0})</span>
          </button>
        ))}
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-[var(--text-muted)]">
          Showing <span className="text-[var(--text-primary)] font-medium">{filteredAgents.length}</span> agents
          {searchQuery && ` for "${searchQuery}"`}
          {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
        </p>
      </div>

      {/* Agents Grid/List */}
      {filteredAgents.length > 0 ? (
        <div className={`stagger ${
          viewMode === 'grid' 
            ? 'grid sm:grid-cols-2 lg:grid-cols-3 gap-4' 
            : 'flex flex-col gap-3'
        }`}>
          {filteredAgents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 animate-fade-up">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">No agents found</h3>
          <p className="text-[var(--text-muted)] mb-6">
            Try adjusting your search or category filter
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="btn-secondary"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
