import { UpsellInfo } from '@/types'

export const upsells: UpsellInfo[] = [
  {
    id: '10x',
    name: '10X Mode',
    tagline: 'More power per click',
    description: 'Generate 10 variations with every request. Get hook packs, script packs, and multiple outputs instantly.',
    features: [
      '10 output variations per generation',
      'Hook packs & script packs',
      'A/B test content instantly',
      'Bulk content generation',
      'Export all variations',
    ],
    icon: '🚀',
  },
  {
    id: 'infinite',
    name: 'Infinite',
    tagline: 'Remove all limits',
    description: 'Unlimited generations, unlimited saved outputs, and priority processing. Never hit a wall again.',
    features: [
      'Unlimited AI generations',
      'No daily/monthly caps',
      'Priority processing queue',
      'Unlimited saved outputs',
      'Extended output length',
    ],
    icon: '♾️',
  },
  {
    id: 'automation',
    name: 'Automation',
    tagline: 'Workflow-based AI',
    description: 'Chain agents together for powerful workflows. Turn one idea into complete content packages.',
    features: [
      'Agent chains & workflows',
      'Pre-built workflow templates',
      'Idea → Script → Caption → CTA',
      'Multi-step automation',
      'Custom workflow builder',
    ],
    icon: '⚡',
  },
  {
    id: 'dfy',
    name: 'DFY Packs',
    tagline: 'Done-For-You agent bundles',
    description: 'Pre-built agent packs for specific industries. Marketing, e-commerce, coaching, and more.',
    features: [
      'Industry-specific bundles',
      'Marketing agency pack',
      'E-commerce seller pack',
      'Coaching business pack',
      'Real estate agent pack',
      'SaaS startup pack',
    ],
    icon: '📦',
  },
]

export function getUpsellById(id: string): UpsellInfo | undefined {
  return upsells.find(upsell => upsell.id === id)
}
