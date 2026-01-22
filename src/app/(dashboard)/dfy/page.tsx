'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useStore } from '@/store/useStore'

const Icons = {
  package: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  check: (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  arrow: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
}

const packs = [
  {
    id: 'marketing-agency',
    name: 'Marketing Agency Pack',
    description: 'Everything an agency needs to deliver client work',
    icon: '📣',
    agents: [
      'Facebook Ad Writer',
      'Google Ads Writer',
      'Landing Page Writer',
      'Email Sequence Creator',
      'Blog Post Writer',
      'Social Content Calendar',
    ],
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 'ecommerce',
    name: 'E-commerce Seller Pack',
    description: 'Boost your online store with AI-powered content',
    icon: '🛒',
    agents: [
      'Product Description Writer',
      'Email Sequence Creator',
      'Instagram Caption',
      'Facebook Ad Writer',
      'Review Response Writer',
      'FAQ Generator',
    ],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    id: 'coaching',
    name: 'Coaching Business Pack',
    description: 'Build your coaching brand and engage clients',
    icon: '🎯',
    agents: [
      'LinkedIn Post Writer',
      'Email Newsletter',
      'Course Outline Creator',
      'Lead Magnet Writer',
      'Sales Page Copy',
      'Testimonial Writer',
    ],
    color: 'from-amber-500 to-orange-500',
  },
  {
    id: 'real-estate',
    name: 'Real Estate Agent Pack',
    description: 'Content that sells properties and builds trust',
    icon: '🏠',
    agents: [
      'Property Description Writer',
      'Email Drip Campaign',
      'Social Media Posts',
      'Market Update Newsletter',
      'Testimonial Writer',
      'Open House Invite',
    ],
    color: 'from-lime-500 to-green-500',
  },
  {
    id: 'saas',
    name: 'SaaS Startup Pack',
    description: 'Launch and grow your software business',
    icon: '💻',
    agents: [
      'Landing Page Writer',
      'Feature Announcement',
      'Onboarding Email Sequence',
      'Product Update Blog',
      'Help Doc Writer',
      'Cold Outreach Email',
    ],
    color: 'from-violet-500 to-purple-500',
  },
  {
    id: 'content-creator',
    name: 'Content Creator Pack',
    description: 'Dominate social platforms with endless content',
    icon: '🎬',
    agents: [
      'YouTube Title & Thumbnail',
      'TikTok Script Writer',
      'Instagram Caption',
      'Twitter Thread Creator',
      'Podcast Outline',
      'Blog Post Writer',
    ],
    color: 'from-red-500 to-pink-500',
  },
]

export default function DFYPage() {
  const router = useRouter()
  const { hasUpsell } = useStore()

  useEffect(() => {
    if (!hasUpsell('dfy')) {
      router.push('/unlock/dfy')
    }
  }, [hasUpsell, router])

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero */}
      <div className="card p-8 mb-8 relative overflow-hidden animate-fade-up">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[var(--accent-primary)]/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="relative flex items-center gap-4 mb-6">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-[var(--accent-primary)] to-pink-500">
            {Icons.package}
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[var(--text-primary)]">
              DFY Packs <span className="badge badge-amber ml-2">Active</span>
            </h1>
            <p className="text-[var(--text-secondary)]">Done-For-You agent bundles for your industry</p>
          </div>
        </div>

        <p className="text-[var(--text-secondary)] max-w-2xl">
          Pre-configured agent collections designed for specific industries and use cases. 
          Each pack includes the most effective agents for your niche, ready to use immediately.
        </p>
      </div>

      {/* Packs Grid */}
      <section className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">Available Packs</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 stagger">
          {packs.map((pack) => (
            <div
              key={pack.id}
              className="card p-5 group hover:border-[var(--border-accent)] transition-all"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pack.color} flex items-center justify-center text-2xl mb-4`}>
                {pack.icon}
              </div>
              
              <h3 className="font-semibold text-[var(--text-primary)] mb-1">{pack.name}</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4">{pack.description}</p>
              
              <div className="space-y-2 mb-4">
                {pack.agents.slice(0, 4).map((agent, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                    <span className="text-[var(--accent-secondary)]">{Icons.check}</span>
                    {agent}
                  </div>
                ))}
                {pack.agents.length > 4 && (
                  <p className="text-xs text-[var(--text-muted)]">
                    +{pack.agents.length - 4} more agents
                  </p>
                )}
              </div>
              
              <Link 
                href={`/agents?pack=${pack.id}`}
                className="flex items-center gap-2 text-sm font-medium text-[var(--accent-primary)] group-hover:gap-3 transition-all"
              >
                Use Pack
                {Icons.arrow}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
