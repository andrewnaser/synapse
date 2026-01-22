'use client';

import { useState } from 'react';
import { useStore } from '@/store/useStore';
import { agents } from '@/data/agents';

const Icons = {
  trendUp: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),
  trendDown: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
      <polyline points="17 18 23 18 23 12" />
    </svg>
  ),
  calendar: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  clock: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  fire: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  ),
  target: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  star: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
};

const timeRanges = [
  { id: '7d', label: '7 Days' },
  { id: '30d', label: '30 Days' },
  { id: '90d', label: '90 Days' },
  { id: 'all', label: 'All Time' },
];

// Mock data for analytics
const mockUsageData = [
  { day: 'Mon', tasks: 12 },
  { day: 'Tue', tasks: 18 },
  { day: 'Wed', tasks: 8 },
  { day: 'Thu', tasks: 24 },
  { day: 'Fri', tasks: 15 },
  { day: 'Sat', tasks: 6 },
  { day: 'Sun', tasks: 3 },
];

const topAgents = [
  { id: 'blog-writer', name: 'Blog Writer', uses: 47, category: 'writing', icon: '✍️' },
  { id: 'linkedin-writer', name: 'LinkedIn Writer', uses: 38, category: 'social', icon: '💼' },
  { id: 'email-copywriter', name: 'Email Copywriter', uses: 29, category: 'email', icon: '📧' },
  { id: 'product-description-writer', name: 'Product Writer', uses: 24, category: 'marketing', icon: '🏷️' },
  { id: 'code-generator', name: 'Code Generator', uses: 21, category: 'coding', icon: '💻' },
];

const categoryBreakdown = [
  { category: 'Writing', percentage: 35, color: '#f59e0b' },
  { category: 'Social Media', percentage: 25, color: '#84cc16' },
  { category: 'Marketing', percentage: 20, color: '#06b6d4' },
  { category: 'Coding', percentage: 12, color: '#a78bfa' },
  { category: 'Other', percentage: 8, color: '#64748b' },
];

export default function AnalyticsPage() {
  const { tasksCompleted, savedOutputs } = useStore();
  const [selectedRange, setSelectedRange] = useState('7d');
  
  const maxTasks = Math.max(...mockUsageData.map(d => d.tasks));

  const stats = [
    { 
      label: 'Total Tasks', 
      value: '86', 
      change: '+23%',
      trend: 'up',
      icon: Icons.fire,
      color: '#f59e0b',
    },
    { 
      label: 'Avg. Daily', 
      value: '12.3', 
      change: '+8%',
      trend: 'up',
      icon: Icons.target,
      color: '#84cc16',
    },
    { 
      label: 'Time Saved', 
      value: '14.2h', 
      change: '+31%',
      trend: 'up',
      icon: Icons.clock,
      color: '#06b6d4',
    },
    { 
      label: 'Streak', 
      value: '7 days', 
      change: 'Best!',
      trend: 'up',
      icon: Icons.calendar,
      color: '#a78bfa',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 animate-fade-up">
        <div>
          <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">Analytics</h1>
          <p className="text-[var(--text-secondary)]">
            Track your productivity and agent usage over time.
          </p>
        </div>
        
        {/* Time Range Selector */}
        <div className="flex items-center gap-1 p-1 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
          {timeRanges.map((range) => (
            <button
              key={range.id}
              onClick={() => setSelectedRange(range.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedRange === range.id
                  ? 'bg-[var(--accent-primary)] text-[var(--bg-base)]'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 stagger">
        {stats.map((stat) => (
          <div key={stat.label} className="metric-card">
            <div className="flex items-start justify-between mb-4">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${stat.color}15`, color: stat.color }}
              >
                {stat.icon}
              </div>
              <span className={`flex items-center gap-1 text-xs font-semibold ${stat.trend === 'up' ? 'text-[var(--accent-secondary)]' : 'text-red-400'}`}>
                {stat.trend === 'up' ? Icons.trendUp : Icons.trendDown}
                {stat.change}
              </span>
            </div>
            <p className="text-2xl font-bold text-[var(--text-primary)] mb-1">{stat.value}</p>
            <p className="text-sm text-[var(--text-muted)]">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-3 gap-8 mb-8">
        {/* Usage Chart */}
        <div className="lg:col-span-2 card p-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-6">Daily Activity</h2>
          
          {/* Simple Bar Chart */}
          <div className="flex items-end justify-between gap-3 h-48">
            {mockUsageData.map((data, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                <span className="text-xs text-[var(--text-muted)]">{data.tasks}</span>
                <div 
                  className="w-full rounded-t-lg transition-all duration-500 hover:bg-[var(--accent-primary)]"
                  style={{ 
                    height: `${(data.tasks / maxTasks) * 100}%`,
                    background: idx === mockUsageData.length - 4 
                      ? 'var(--accent-primary)' 
                      : 'var(--bg-hover)',
                    minHeight: '8px',
                  }}
                />
                <span className="text-xs font-medium text-[var(--text-muted)]">{data.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="card p-6 animate-fade-up" style={{ animationDelay: '0.15s' }}>
          <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-6">By Category</h2>
          
          <div className="space-y-4">
            {categoryBreakdown.map((cat) => (
              <div key={cat.category}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-[var(--text-secondary)]">{cat.category}</span>
                  <span className="text-sm font-medium text-[var(--text-primary)]">{cat.percentage}%</span>
                </div>
                <div className="h-2 rounded-full bg-[var(--bg-hover)] overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-700"
                    style={{ 
                      width: `${cat.percentage}%`,
                      backgroundColor: cat.color 
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Agents */}
      <div className="card p-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-[var(--text-primary)]">Most Used Agents</h2>
          <span className="text-sm text-[var(--text-muted)]">This week</span>
        </div>
        
        <div className="space-y-3">
          {topAgents.map((agent, idx) => {
            const colors = ['#f59e0b', '#84cc16', '#06b6d4', '#a78bfa', '#64748b'];
            const color = colors[idx];
            const maxUses = topAgents[0].uses;
            
            return (
              <div 
                key={agent.id}
                className="flex items-center gap-4 p-4 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-hover)] transition-colors"
              >
                <span className="text-xl w-8 text-center">{idx + 1}</span>
                <span className="text-2xl">{agent.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-[var(--text-primary)]">{agent.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex-1 h-1.5 rounded-full bg-[var(--bg-hover)] overflow-hidden max-w-[200px]">
                      <div 
                        className="h-full rounded-full"
                        style={{ 
                          width: `${(agent.uses / maxUses) * 100}%`,
                          backgroundColor: color 
                        }}
                      />
                    </div>
                    <span className="text-sm text-[var(--text-muted)]">{agent.uses} uses</span>
                  </div>
                </div>
                <span 
                  className="badge"
                  style={{ backgroundColor: `${color}15`, color }}
                >
                  {agent.category}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Insights Section */}
      <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-[var(--accent-primary)]/10 via-transparent to-[var(--accent-secondary)]/10 border border-[var(--border-accent)] animate-fade-up" style={{ animationDelay: '0.25s' }}>
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-[var(--accent-primary)]/20 flex items-center justify-center text-xl">
            💡
          </div>
          <div>
            <h3 className="font-semibold text-[var(--text-primary)] mb-2">Weekly Insight</h3>
            <p className="text-[var(--text-secondary)]">
              Your most productive day this week was <span className="text-[var(--accent-primary)] font-medium">Thursday</span> with 24 tasks completed. You&apos;re using Writing agents 35% more than last week. Keep up the great work!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
