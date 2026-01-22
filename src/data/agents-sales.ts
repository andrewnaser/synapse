import { Agent } from '@/types'

export const salesAgents: Agent[] = [
  {
    id: 'sales-script',
    name: 'Sales Script Writer',
    description: 'Creates persuasive sales call scripts',
    category: 'sales',
    icon: '📞',
    prompt_template: `Create a sales script for:

Product/Service: {{product}}
Target customer: {{customer}}
Call type: {{type}}
Key objections: {{objections}}

Include:
- Opening/hook
- Discovery questions
- Value presentation
- Objection handling
- Closing techniques
- Follow-up CTA`,
    ui_schema: {
      inputs: [
        { id: 'product', label: 'Product/Service', type: 'text', required: true },
        { id: 'customer', label: 'Target Customer', type: 'text', required: true },
        { id: 'objections', label: 'Common Objections', type: 'textarea', placeholder: 'Price, timing, competitors...', required: false },
      ],
      options: [
        { id: 'type', label: 'Call Type', type: 'select', options: [
          { label: 'Cold Call', value: 'cold' },
          { label: 'Warm Lead', value: 'warm' },
          { label: 'Demo Call', value: 'demo' },
          { label: 'Closing Call', value: 'closing' },
        ], default: 'cold' },
      ]
    }
  },
  {
    id: 'objection-handler',
    name: 'Objection Handler',
    description: 'Creates responses to sales objections',
    category: 'sales',
    icon: '🛡️',
    prompt_template: `Create objection handling responses for:

Product/Service: {{product}}
Objection: {{objection}}
Context: {{context}}
Tone: {{tone}}

Provide:
- 3 different response approaches
- Follow-up questions
- Evidence/proof points to use
- Reframing techniques`,
    ui_schema: {
      inputs: [
        { id: 'product', label: 'Product/Service', type: 'text', required: true },
        { id: 'objection', label: 'The Objection', type: 'textarea', required: true },
        { id: 'context', label: 'Context', type: 'text', placeholder: 'Sales stage, customer type...', required: false },
      ],
      options: [
        { id: 'tone', label: 'Response Tone', type: 'select', options: [
          { label: 'Consultative', value: 'consultative' },
          { label: 'Direct', value: 'direct' },
          { label: 'Empathetic', value: 'empathetic' },
          { label: 'Challenging', value: 'challenging' },
        ], default: 'consultative' },
      ]
    }
  },
  {
    id: 'discovery-questions',
    name: 'Discovery Question Generator',
    description: 'Creates powerful sales discovery questions',
    category: 'sales',
    icon: '❓',
    prompt_template: `Generate discovery questions for:

Product/Service: {{product}}
Target buyer: {{buyer}}
Sales stage: {{stage}}

Create 20 questions covering:
- Current situation
- Pain points
- Goals and aspirations
- Decision process
- Budget and timeline
- Competition awareness`,
    ui_schema: {
      inputs: [
        { id: 'product', label: 'Product/Service', type: 'text', required: true },
        { id: 'buyer', label: 'Target Buyer', type: 'text', required: true },
      ],
      options: [
        { id: 'stage', label: 'Sales Stage', type: 'select', options: [
          { label: 'Initial Discovery', value: 'initial' },
          { label: 'Qualification', value: 'qualification' },
          { label: 'Deep Dive', value: 'deep' },
          { label: 'Pre-Proposal', value: 'pre-proposal' },
        ], default: 'initial' },
      ]
    }
  },
  {
    id: 'case-study-writer',
    name: 'Case Study Writer',
    description: 'Creates compelling customer case studies',
    category: 'sales',
    icon: '📈',
    prompt_template: `Write a case study based on:

Customer: {{customer}}
Challenge: {{challenge}}
Solution: {{solution}}
Results: {{results}}
Style: {{style}}

Include:
- Attention-grabbing headline
- Customer background
- Challenge/problem
- Solution implemented
- Quantifiable results
- Customer quote
- CTA`,
    ui_schema: {
      inputs: [
        { id: 'customer', label: 'Customer Name/Type', type: 'text', required: true },
        { id: 'challenge', label: 'Their Challenge', type: 'textarea', required: true },
        { id: 'solution', label: 'Solution Provided', type: 'textarea', required: true },
        { id: 'results', label: 'Results Achieved', type: 'textarea', required: true },
      ],
      options: [
        { id: 'style', label: 'Case Study Style', type: 'select', options: [
          { label: 'Narrative Story', value: 'story' },
          { label: 'Data-Focused', value: 'data' },
          { label: 'Quick Overview', value: 'quick' },
        ], default: 'story' },
      ]
    }
  },
  {
    id: 'sales-battlecard',
    name: 'Sales Battlecard Creator',
    description: 'Creates competitive battlecards',
    category: 'sales',
    icon: '⚔️',
    prompt_template: `Create a sales battlecard for:

Your product: {{product}}
Competitor: {{competitor}}
Your strengths: {{strengths}}
Their weaknesses: {{weaknesses}}

Include:
- Quick comparison table
- Win themes
- Landmine questions to ask
- Objection responses
- Proof points
- Talk track`,
    ui_schema: {
      inputs: [
        { id: 'product', label: 'Your Product', type: 'text', required: true },
        { id: 'competitor', label: 'Competitor', type: 'text', required: true },
        { id: 'strengths', label: 'Your Strengths', type: 'textarea', required: true },
        { id: 'weaknesses', label: 'Their Weaknesses', type: 'textarea', required: false },
      ]
    }
  },
  {
    id: 'follow-up-sequence',
    name: 'Follow-Up Sequence',
    description: 'Creates strategic follow-up sequences',
    category: 'sales',
    icon: '🔄',
    prompt_template: `Create a follow-up sequence for:

Context: {{context}}
Goal: {{goal}}
Touches: {{touches}}
Channels: {{channels}}

Create a sequence with:
- Timing for each touch
- Message for each touch
- Value-add content suggestions
- Escalation strategy`,
    ui_schema: {
      inputs: [
        { id: 'context', label: 'Situation Context', type: 'textarea', placeholder: 'Post-demo, post-proposal, etc.', required: true },
        { id: 'goal', label: 'Sequence Goal', type: 'text', required: true },
        { id: 'channels', label: 'Available Channels', type: 'text', placeholder: 'Email, phone, LinkedIn...', required: false },
      ],
      options: [
        { id: 'touches', label: 'Number of Touches', type: 'select', options: [
          { label: '3 touches', value: '3' },
          { label: '5 touches', value: '5' },
          { label: '7 touches', value: '7' },
        ], default: '5' },
      ]
    }
  },
]
