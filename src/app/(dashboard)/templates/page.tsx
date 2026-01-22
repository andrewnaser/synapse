'use client';

import { useState } from 'react';
import Link from 'next/link';

const Icons = {
  copy: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  ),
  use: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  heart: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  search: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  ),
  star: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
};

const templateCategories = [
  { id: 'all', name: 'All Templates', count: 24 },
  { id: 'content', name: 'Content', count: 8 },
  { id: 'marketing', name: 'Marketing', count: 6 },
  { id: 'email', name: 'Email', count: 4 },
  { id: 'social', name: 'Social', count: 4 },
  { id: 'business', name: 'Business', count: 2 },
];

const templates = [
  {
    id: '1',
    name: 'Blog Post Outline',
    description: 'Generate a structured outline for any blog topic with intro, key points, and conclusion.',
    category: 'content',
    uses: 12500,
    rating: 4.9,
    color: '#f59e0b',
    agentId: 'blog-writer',
    prompt: 'Create a detailed blog post outline about [topic]. Include: 1) Attention-grabbing intro hook 2) 5-7 main sections with subpoints 3) Key takeaways 4) Call-to-action conclusion.',
  },
  {
    id: '2',
    name: 'LinkedIn Post Hook',
    description: 'Create scroll-stopping opening lines that drive engagement on LinkedIn.',
    category: 'social',
    uses: 8900,
    rating: 4.8,
    color: '#84cc16',
    agentId: 'linkedin-writer',
    prompt: 'Write 5 attention-grabbing LinkedIn post hooks about [topic]. Each hook should: 1) Be under 20 words 2) Create curiosity or controversy 3) Speak directly to the reader.',
  },
  {
    id: '3',
    name: 'Cold Email Sequence',
    description: 'A 3-email nurture sequence designed to convert cold leads into warm prospects.',
    category: 'email',
    uses: 6700,
    rating: 4.7,
    color: '#06b6d4',
    agentId: 'email-copywriter',
    prompt: 'Create a 3-email cold outreach sequence for [product/service] targeting [audience]. Email 1: Introduction & value. Email 2: Social proof & case study. Email 3: Final offer with urgency.',
  },
  {
    id: '4',
    name: 'Product Description',
    description: 'Compelling product descriptions that highlight benefits and drive conversions.',
    category: 'marketing',
    uses: 9200,
    rating: 4.9,
    color: '#a78bfa',
    agentId: 'product-description-writer',
    prompt: 'Write a compelling product description for [product]. Include: 1) Headline that captures attention 2) Key benefits (not features) 3) Emotional appeal 4) Social proof element 5) Clear CTA.',
  },
  {
    id: '5',
    name: 'Twitter Thread',
    description: 'Transform any topic into a viral-worthy Twitter thread with hooks and engagement.',
    category: 'social',
    uses: 7800,
    rating: 4.6,
    color: '#f59e0b',
    agentId: 'twitter-thread-writer',
    prompt: 'Create a 10-tweet thread about [topic]. Requirements: 1) Tweet 1: Strong hook that promises value 2) Tweets 2-9: Key insights with examples 3) Tweet 10: Summary + CTA to follow.',
  },
  {
    id: '6',
    name: 'Sales Page Copy',
    description: 'High-converting sales copy following proven copywriting frameworks.',
    category: 'marketing',
    uses: 5400,
    rating: 4.8,
    color: '#84cc16',
    agentId: 'sales-copywriter',
    prompt: 'Write sales page copy for [product/service]. Use the AIDA framework: 1) Attention: Bold headline 2) Interest: Problem agitation 3) Desire: Solution benefits 4) Action: Risk-free CTA.',
  },
  {
    id: '7',
    name: 'Meeting Summary',
    description: 'Transform messy meeting notes into clear, actionable summaries.',
    category: 'business',
    uses: 4300,
    rating: 4.7,
    color: '#06b6d4',
    agentId: 'meeting-summarizer',
    prompt: 'Summarize this meeting: [notes]. Include: 1) Key decisions made 2) Action items with owners 3) Open questions 4) Next steps and deadlines.',
  },
  {
    id: '8',
    name: 'Newsletter Intro',
    description: 'Engaging newsletter openings that boost read-through rates.',
    category: 'email',
    uses: 5100,
    rating: 4.5,
    color: '#a78bfa',
    agentId: 'newsletter-writer',
    prompt: 'Write 3 newsletter intro options for topic: [topic]. Each should: 1) Start with a story, stat, or question 2) Connect to reader\'s pain point 3) Tease the value ahead.',
  },
];

export default function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredTemplates = templates.filter((template) => {
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCopyPrompt = async (template: typeof templates[0]) => {
    await navigator.clipboard.writeText(template.prompt);
    setCopiedId(template.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="mb-8 animate-fade-up">
        <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">Templates</h1>
        <p className="text-[var(--text-secondary)]">
          Pre-built prompts to jumpstart your workflow. Copy and customize for your needs.
        </p>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        {/* Search */}
        <div className="relative flex-1">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]">
            {Icons.search}
          </span>
          <input
            type="text"
            placeholder="Search templates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input-field pl-12"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 mb-8 animate-fade-up" style={{ animationDelay: '0.15s' }}>
        {templateCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`pill ${selectedCategory === cat.id ? 'active' : ''}`}
          >
            <span>{cat.name}</span>
            <span className="text-xs opacity-60">({cat.count})</span>
          </button>
        ))}
      </div>

      {/* Templates Grid */}
      <div className="grid md:grid-cols-2 gap-6 stagger">
        {filteredTemplates.map((template) => (
          <div
            key={template.id}
            className="card p-6 hover:border-[var(--border-accent)] transition-all group"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1 group-hover:text-[var(--accent-primary)] transition-colors">
                  {template.name}
                </h3>
                <p className="text-sm text-[var(--text-muted)] line-clamp-2">
                  {template.description}
                </p>
              </div>
              <span 
                className="badge flex-shrink-0"
                style={{ 
                  backgroundColor: `${template.color}15`,
                  color: template.color 
                }}
              >
                {template.category}
              </span>
            </div>

            {/* Prompt Preview */}
            <div className="bg-[var(--bg-surface)] rounded-xl p-4 mb-4 border border-[var(--border-subtle)]">
              <p className="text-sm text-[var(--text-secondary)] line-clamp-3 font-mono">
                {template.prompt}
              </p>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-4 text-sm text-[var(--text-muted)] mb-4">
              <span className="flex items-center gap-1">
                {Icons.use}
                {formatNumber(template.uses)} uses
              </span>
              <span className="flex items-center gap-1 text-[var(--accent-primary)]">
                {Icons.star}
                {template.rating}
              </span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleCopyPrompt(template)}
                className="btn-secondary flex-1"
              >
                {Icons.copy}
                <span>{copiedId === template.id ? 'Copied!' : 'Copy Prompt'}</span>
              </button>
              <Link
                href={`/agents/${template.agentId}`}
                className="btn-primary flex-1"
              >
                {Icons.use}
                <span>Use Template</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredTemplates.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">No templates found</h3>
          <p className="text-[var(--text-muted)]">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
}
