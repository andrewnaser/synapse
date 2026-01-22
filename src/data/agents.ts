import { Agent, AgentCategory } from '@/types'
import { writingAgents } from './agents-writing'
import { marketingAgents } from './agents-marketing'
import { socialMediaAgents } from './agents-social'
import { emailAgents } from './agents-email'
import { codingAgents } from './agents-coding'
import { businessAgents } from './agents-business'
import { translationAgents } from './agents-translation'
import { seoAgents } from './agents-seo'
import { creativeAgents } from './agents-creative'
import { educationAgents } from './agents-education'
import { salesAgents } from './agents-sales'
import { automationAgents } from './agents-automation'

// Combine all agents
export const agents: Agent[] = [
  ...writingAgents,
  ...marketingAgents,
  ...socialMediaAgents,
  ...emailAgents,
  ...codingAgents,
  ...businessAgents,
  ...translationAgents,
  ...seoAgents,
  ...creativeAgents,
  ...educationAgents,
  ...salesAgents,
  ...automationAgents,
]

// Category info for display
export const categories: { id: AgentCategory; name: string; icon: string; description: string }[] = [
  { id: 'writing', name: 'Writing', icon: '✍️', description: 'Blog posts, articles, stories, and more' },
  { id: 'marketing', name: 'Marketing', icon: '📣', description: 'Ads, landing pages, and campaigns' },
  { id: 'social-media', name: 'Social Media', icon: '📱', description: 'Posts, captions, and content calendars' },
  { id: 'email', name: 'Email', icon: '📧', description: 'Cold emails, sequences, and newsletters' },
  { id: 'coding', name: 'Coding', icon: '💻', description: 'Code generation, debugging, and docs' },
  { id: 'business', name: 'Business', icon: '💼', description: 'Plans, proposals, and SOPs' },
  { id: 'translation', name: 'Translation', icon: '🌍', description: 'Language translation and localization' },
  { id: 'seo', name: 'SEO', icon: '🔍', description: 'Keywords, meta tags, and optimization' },
  { id: 'creative', name: 'Creative', icon: '🎨', description: 'Hooks, CTAs, and creative content' },
  { id: 'education', name: 'Education', icon: '📚', description: 'Lesson plans, study guides, and courses' },
  { id: 'sales', name: 'Sales', icon: '💰', description: 'Scripts, objections, and case studies' },
  { id: 'automation', name: 'Automation', icon: '⚡', description: 'Workflows, formulas, and processes' },
]

// Helper functions
export function getAgentById(id: string): Agent | undefined {
  return agents.find(agent => agent.id === id)
}

export function getAgentsByCategory(category: AgentCategory): Agent[] {
  return agents.filter(agent => agent.category === category)
}

export function searchAgents(query: string): Agent[] {
  const lowerQuery = query.toLowerCase()
  return agents.filter(agent =>
    agent.name.toLowerCase().includes(lowerQuery) ||
    agent.description.toLowerCase().includes(lowerQuery) ||
    agent.category.toLowerCase().includes(lowerQuery)
  )
}

export function getFeaturedAgents(): Agent[] {
  // Return a curated list of featured agents
  const featuredIds = [
    'blog-post-writer',
    'instagram-caption',
    'cold-email',
    'facebook-ad-copy',
    'code-explainer',
    'business-plan',
    'language-translator',
    'hook-generator',
  ]
  return featuredIds.map(id => getAgentById(id)).filter(Boolean) as Agent[]
}

// Export individual category agents for direct access
export {
  writingAgents,
  marketingAgents,
  socialMediaAgents,
  emailAgents,
  codingAgents,
  businessAgents,
  translationAgents,
  seoAgents,
  creativeAgents,
  educationAgents,
  salesAgents,
  automationAgents,
}
