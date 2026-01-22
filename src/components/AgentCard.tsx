'use client';

import Link from 'next/link';
import { Agent } from '@/types';

interface AgentCardProps {
  agent: Agent;
}

const categoryColors: Record<string, string> = {
  writing: '#f59e0b',
  marketing: '#84cc16',
  social: '#06b6d4',
  email: '#a78bfa',
  coding: '#ec4899',
  business: '#14b8a6',
  translation: '#f97316',
  seo: '#6366f1',
  creative: '#eab308',
  education: '#22c55e',
  sales: '#ef4444',
  automation: '#8b5cf6',
};

export default function AgentCard({ agent }: AgentCardProps) {
  const color = categoryColors[agent.category] || '#f59e0b';
  
  return (
    <Link
      href={`/agents/${agent.id}`}
      className="card card-hover p-5 group relative overflow-hidden"
    >
      {/* Background glow on hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ 
          background: `radial-gradient(circle at top right, ${color}08, transparent 70%)` 
        }}
      />
      
      <div className="relative">
        {/* Header */}
        <div className="flex items-start gap-4 mb-3">
          <span className="text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
            {agent.icon}
          </span>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors mb-1 truncate">
              {agent.name}
            </h3>
            <p className="text-sm text-[var(--text-muted)] line-clamp-2 leading-relaxed">
              {agent.description}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-[var(--border-subtle)]">
          <span 
            className="badge"
            style={{ backgroundColor: `${color}15`, color }}
          >
            {agent.category}
          </span>
          <span className="text-sm text-[var(--text-muted)] group-hover:text-[var(--accent-primary)] transition-colors flex items-center gap-1">
            Activate
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
