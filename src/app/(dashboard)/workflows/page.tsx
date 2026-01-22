'use client';

import { useState } from 'react';
import Link from 'next/link';

const Icons = {
  play: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  ),
  plus: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  ),
  lock: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  arrow: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  ),
  zap: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  repeat: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M17 1l4 4-4 4" />
      <path d="M3 11V9a4 4 0 0 1 4-4h14" />
      <path d="M7 23l-4-4 4-4" />
      <path d="M21 13v2a4 4 0 0 1-4 4H3" />
    </svg>
  ),
  layers: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
};

const workflowTemplates = [
  {
    id: 'content-machine',
    name: 'Content Machine',
    description: 'Blog post → Social snippets → Email newsletter → Thread',
    agents: ['Blog Writer', 'LinkedIn Writer', 'Newsletter Writer', 'Twitter Thread'],
    steps: 4,
    estimatedTime: '3 min',
    color: '#f59e0b',
    icon: '📝',
  },
  {
    id: 'launch-campaign',
    name: 'Product Launch',
    description: 'Product description → Landing page → Email sequence → Social ads',
    agents: ['Product Writer', 'Sales Copy', 'Email Sequence', 'Ad Copy'],
    steps: 4,
    estimatedTime: '5 min',
    color: '#84cc16',
    icon: '🚀',
  },
  {
    id: 'repurpose-king',
    name: 'Content Repurposer',
    description: 'Transform any content into 10+ formats for maximum reach',
    agents: ['Summarizer', 'Social Posts', 'Video Script', 'Carousel'],
    steps: 4,
    estimatedTime: '4 min',
    color: '#06b6d4',
    icon: '🔄',
  },
  {
    id: 'outreach-system',
    name: 'Outreach System',
    description: 'Research → Personalized emails → Follow-ups → Meeting scheduler',
    agents: ['Research Agent', 'Cold Email', 'Follow-Up', 'Scheduler'],
    steps: 4,
    estimatedTime: '6 min',
    color: '#a78bfa',
    icon: '📧',
  },
];

const features = [
  {
    icon: Icons.zap,
    title: 'Chain Multiple Agents',
    description: 'Connect agents in sequence where output becomes input',
  },
  {
    icon: Icons.repeat,
    title: 'One-Click Automation',
    description: 'Run entire workflows with a single button press',
  },
  {
    icon: Icons.layers,
    title: 'Save & Reuse',
    description: 'Create custom workflows for your recurring tasks',
  },
];

export default function WorkflowsPage() {
  const [isLocked] = useState(true);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="mb-8 animate-fade-up">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold text-[var(--text-primary)]">Workflows</h1>
          <span className="badge badge-amber">Premium</span>
        </div>
        <p className="text-[var(--text-secondary)]">
          Chain multiple agents together to automate complex content creation pipelines.
        </p>
      </div>

      {/* Lock Banner */}
      {isLocked && (
        <div className="card mb-8 overflow-hidden animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <div className="relative p-8 bg-gradient-to-r from-[var(--accent-primary)]/10 via-transparent to-[var(--accent-secondary)]/10">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[var(--accent-primary)]/5 rounded-full blur-[80px]" />
            
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[var(--accent-primary)]/15 flex items-center justify-center text-[var(--accent-primary)]">
                  {Icons.lock}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[var(--text-primary)] mb-1">
                    Unlock Workflow Automation
                  </h2>
                  <p className="text-[var(--text-secondary)] max-w-lg">
                    Workflows are part of the Automation upgrade. Chain agents together and 10x your productivity with multi-step automations.
                  </p>
                </div>
              </div>
              
              <Link
                href="/unlock/automation"
                className="btn-primary whitespace-nowrap"
              >
                <span>Unlock Workflows</span>
                {Icons.arrow}
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-4 mb-10 stagger">
        {features.map((feature, index) => (
          <div key={index} className="card p-6">
            <div className="w-12 h-12 rounded-xl bg-[var(--accent-primary)]/10 flex items-center justify-center text-[var(--accent-primary)] mb-4">
              {feature.icon}
            </div>
            <h3 className="font-semibold text-[var(--text-primary)] mb-2">{feature.title}</h3>
            <p className="text-sm text-[var(--text-muted)]">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-[var(--text-primary)]">Pre-built Workflows</h2>
        <button className="btn-secondary opacity-50 cursor-not-allowed" disabled={isLocked}>
          {Icons.plus}
          <span>Create Custom</span>
        </button>
      </div>

      {/* Workflow Cards */}
      <div className="grid md:grid-cols-2 gap-6 stagger">
        {workflowTemplates.map((workflow) => (
          <div
            key={workflow.id}
            className={`card p-6 relative overflow-hidden ${isLocked ? 'opacity-75' : 'hover:border-[var(--border-accent)]'} transition-all group`}
          >
            {/* Background Glow */}
            <div 
              className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-20"
              style={{ backgroundColor: workflow.color }}
            />
            
            <div className="relative">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{workflow.icon}</span>
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                      {workflow.name}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)]">
                      {workflow.steps} steps • ~{workflow.estimatedTime}
                    </p>
                  </div>
                </div>
                {isLocked && (
                  <span className="text-[var(--text-muted)]">{Icons.lock}</span>
                )}
              </div>

              {/* Description */}
              <p className="text-[var(--text-secondary)] mb-5">
                {workflow.description}
              </p>

              {/* Agent Flow */}
              <div className="flex items-center flex-wrap gap-2 mb-5">
                {workflow.agents.map((agent, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span 
                      className="text-xs font-medium px-3 py-1.5 rounded-lg"
                      style={{ 
                        backgroundColor: `${workflow.color}15`,
                        color: workflow.color 
                      }}
                    >
                      {agent}
                    </span>
                    {idx < workflow.agents.length - 1 && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>

              {/* Action */}
              <button 
                className={`btn-primary w-full ${isLocked ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isLocked}
              >
                {isLocked ? Icons.lock : Icons.play}
                <span>{isLocked ? 'Unlock to Use' : 'Run Workflow'}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 text-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
        <p className="text-[var(--text-muted)] mb-4">
          Want to create your own custom workflows?
        </p>
        <Link href="/unlock/automation" className="btn-secondary">
          <span>Learn More About Automation</span>
          {Icons.arrow}
        </Link>
      </div>
    </div>
  );
}
