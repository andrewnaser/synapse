'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Package, Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'
import { useStore } from '@/store/useStore'

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
    color: 'from-blue-500 to-cyan-500',
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
    color: 'from-purple-500 to-violet-500',
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
    color: 'from-green-500 to-emerald-500',
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
    color: 'from-orange-500 to-amber-500',
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
    <>
      <Header title="DFY Packs" />
      
      <div className="p-6 max-w-6xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 mb-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[var(--neon-purple)]/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative flex items-center gap-4 mb-6">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-[var(--neon-purple)] to-pink-500">
              <Package size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">DFY Packs <span className="badge badge-purple ml-2">Active</span></h1>
              <p className="text-[var(--text-secondary)]">Done-For-You agent bundles for your industry</p>
            </div>
          </div>

          <p className="text-[var(--text-secondary)] max-w-2xl">
            Pre-configured agent collections designed for specific industries and use cases. 
            Each pack includes the most effective agents for your niche, ready to use immediately.
          </p>
        </motion.div>

        {/* Packs Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-xl font-semibold mb-4">Available Packs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {packs.map((pack, index) => (
              <motion.div
                key={pack.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="glass-card p-5 group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pack.color} flex items-center justify-center text-2xl mb-4`}>
                  {pack.icon}
                </div>
                
                <h3 className="font-semibold mb-1">{pack.name}</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4">{pack.description}</p>
                
                <div className="space-y-2 mb-4">
                  {pack.agents.slice(0, 4).map((agent, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                      <Check size={12} className="text-green-400" />
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
                  className="flex items-center gap-2 text-sm font-medium text-[var(--neon-blue)] group-hover:gap-3 transition-all"
                >
                  Use Pack
                  <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </>
  )
}
