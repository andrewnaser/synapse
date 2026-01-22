import { Agent } from '@/types'

export const marketingAgents: Agent[] = [
  {
    id: 'facebook-ad-copy',
    name: 'Facebook Ad Writer',
    description: 'Creates high-converting Facebook ad copy',
    category: 'marketing',
    icon: '📘',
    prompt_template: `Write high-converting Facebook ad copy for:

Product/Service: {{product}}
Target audience: {{audience}}
Goal: {{goal}}
Tone: {{tone}}

Create 3 ad variations with:
- Scroll-stopping hook
- Benefit-focused body
- Clear CTA

Write the ads:`,
    ui_schema: {
      inputs: [
        { id: 'product', label: 'Product/Service', type: 'text', placeholder: 'What are you advertising?', required: true },
        { id: 'audience', label: 'Target Audience', type: 'text', placeholder: 'Who is this for?', required: true },
        { id: 'goal', label: 'Campaign Goal', type: 'text', placeholder: 'Sales, leads, awareness...', required: false },
      ],
      options: [
        { id: 'tone', label: 'Tone', type: 'select', options: [
          { label: 'Professional', value: 'professional' },
          { label: 'Casual', value: 'casual' },
          { label: 'Urgent', value: 'urgent' },
          { label: 'Inspirational', value: 'inspirational' },
        ], default: 'casual' },
      ]
    }
  },
  {
    id: 'google-ad-copy',
    name: 'Google Ads Writer',
    description: 'Creates compelling Google search ad copy',
    category: 'marketing',
    icon: '🔍',
    prompt_template: `Create Google Search ad copy for:

Business: {{business}}
Keywords: {{keywords}}
USP: {{usp}}

Generate 5 ad variations following Google's character limits:
- Headlines (30 chars each)
- Descriptions (90 chars each)

Include strong CTAs and keyword integration:`,
    ui_schema: {
      inputs: [
        { id: 'business', label: 'Business/Product', type: 'text', required: true },
        { id: 'keywords', label: 'Target Keywords', type: 'textarea', placeholder: 'List your target keywords...', required: true },
        { id: 'usp', label: 'Unique Selling Point', type: 'text', placeholder: 'What makes you different?', required: false },
      ]
    }
  },
  {
    id: 'landing-page-copy',
    name: 'Landing Page Writer',
    description: 'Creates conversion-optimized landing page copy',
    category: 'marketing',
    icon: '🚀',
    prompt_template: `Write conversion-optimized landing page copy for:

Product/Service: {{product}}
Target audience: {{audience}}
Main benefit: {{benefit}}
Tone: {{tone}}

Include:
- Powerful headline
- Subheadline
- Key benefits section
- Social proof section
- FAQ section
- CTA copy

Write the complete landing page:`,
    ui_schema: {
      inputs: [
        { id: 'product', label: 'Product/Service', type: 'text', required: true },
        { id: 'audience', label: 'Target Audience', type: 'text', required: true },
        { id: 'benefit', label: 'Main Benefit', type: 'text', placeholder: 'The #1 thing customers get...', required: true },
      ],
      options: [
        { id: 'tone', label: 'Tone', type: 'select', options: [
          { label: 'Professional', value: 'professional' },
          { label: 'Bold & Direct', value: 'bold' },
          { label: 'Friendly', value: 'friendly' },
          { label: 'Luxurious', value: 'luxurious' },
        ], default: 'professional' },
      ]
    }
  },
  {
    id: 'value-proposition',
    name: 'Value Proposition Creator',
    description: 'Crafts compelling value propositions',
    category: 'marketing',
    icon: '💎',
    prompt_template: `Create a compelling value proposition for:

Business: {{business}}
Target customer: {{customer}}
Problem solved: {{problem}}
Competitors: {{competitors}}

Generate:
- One-liner value prop
- Expanded value prop
- 3 supporting benefit statements
- Positioning statement`,
    ui_schema: {
      inputs: [
        { id: 'business', label: 'Business/Product', type: 'text', required: true },
        { id: 'customer', label: 'Target Customer', type: 'text', required: true },
        { id: 'problem', label: 'Problem You Solve', type: 'textarea', required: true },
        { id: 'competitors', label: 'Key Competitors', type: 'text', placeholder: 'Who else solves this?', required: false },
      ]
    }
  },
  {
    id: 'marketing-strategy',
    name: 'Marketing Strategy Builder',
    description: 'Creates comprehensive marketing strategies',
    category: 'marketing',
    icon: '📊',
    prompt_template: `Create a marketing strategy for:

Business: {{business}}
Goals: {{goals}}
Budget: {{budget}}
Timeline: {{timeline}}

Include:
- Target audience analysis
- Channel recommendations
- Content strategy
- Campaign ideas
- KPIs to track
- Budget allocation suggestions`,
    ui_schema: {
      inputs: [
        { id: 'business', label: 'Business Description', type: 'textarea', required: true },
        { id: 'goals', label: 'Marketing Goals', type: 'textarea', placeholder: 'What do you want to achieve?', required: true },
        { id: 'budget', label: 'Monthly Budget', type: 'text', placeholder: '$500, $5000, etc.', required: false },
        { id: 'timeline', label: 'Timeline', type: 'text', placeholder: '3 months, 6 months, etc.', required: false },
      ]
    }
  },
  {
    id: 'brand-name-generator',
    name: 'Brand Name Generator',
    description: 'Creates unique, memorable brand names',
    category: 'marketing',
    icon: '✨',
    prompt_template: `Generate brand name ideas for:

Industry: {{industry}}
Description: {{description}}
Keywords to incorporate: {{keywords}}
Style: {{style}}

Generate 15 unique brand name ideas with:
- Name
- Brief tagline
- Domain availability style (.com, .io, etc.)
- Why it works`,
    ui_schema: {
      inputs: [
        { id: 'industry', label: 'Industry', type: 'text', required: true },
        { id: 'description', label: 'Business Description', type: 'textarea', required: true },
        { id: 'keywords', label: 'Keywords to Include', type: 'text', placeholder: 'Optional words to incorporate', required: false },
      ],
      options: [
        { id: 'style', label: 'Name Style', type: 'select', options: [
          { label: 'Modern/Tech', value: 'modern' },
          { label: 'Classic/Traditional', value: 'classic' },
          { label: 'Playful', value: 'playful' },
          { label: 'Abstract', value: 'abstract' },
        ], default: 'modern' },
      ]
    }
  },
  {
    id: 'tagline-generator',
    name: 'Tagline Generator',
    description: 'Creates memorable brand taglines and slogans',
    category: 'marketing',
    icon: '💬',
    prompt_template: `Create memorable taglines for:

Brand: {{brand}}
What you do: {{description}}
Target feeling: {{feeling}}
Style: {{style}}

Generate 10 unique taglines that are:
- Memorable
- Concise
- Brand-aligned
- Emotionally resonant`,
    ui_schema: {
      inputs: [
        { id: 'brand', label: 'Brand Name', type: 'text', required: true },
        { id: 'description', label: 'What You Do', type: 'textarea', required: true },
        { id: 'feeling', label: 'Desired Customer Feeling', type: 'text', placeholder: 'Empowered, secure, excited...', required: false },
      ],
      options: [
        { id: 'style', label: 'Style', type: 'select', options: [
          { label: 'Professional', value: 'professional' },
          { label: 'Witty', value: 'witty' },
          { label: 'Inspirational', value: 'inspirational' },
          { label: 'Direct', value: 'direct' },
        ], default: 'professional' },
      ]
    }
  },
  {
    id: 'competitor-analysis',
    name: 'Competitor Analysis',
    description: 'Analyzes competitors and finds opportunities',
    category: 'marketing',
    icon: '🔎',
    prompt_template: `Provide a competitor analysis framework for:

Your business: {{business}}
Competitors: {{competitors}}
Your strengths: {{strengths}}

Analyze:
- Competitive positioning
- Potential weaknesses to exploit
- Differentiation opportunities
- Marketing angle suggestions
- Content gap opportunities`,
    ui_schema: {
      inputs: [
        { id: 'business', label: 'Your Business', type: 'textarea', required: true },
        { id: 'competitors', label: 'Main Competitors', type: 'textarea', placeholder: 'List your competitors...', required: true },
        { id: 'strengths', label: 'Your Strengths', type: 'textarea', placeholder: 'What are you good at?', required: false },
      ]
    }
  },
]
