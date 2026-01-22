import { Agent } from '@/types'

export const emailAgents: Agent[] = [
  {
    id: 'cold-email',
    name: 'Cold Email Writer',
    description: 'Creates personalized cold outreach emails that get replies',
    category: 'email',
    icon: '📧',
    prompt_template: `Write a cold email for:

Purpose: {{purpose}}
Target recipient: {{recipient}}
Your offer: {{offer}}
Personalization angle: {{personalization}}

Create an email that:
- Has compelling subject line
- Hooks in first line
- Provides clear value
- Has soft CTA
- Is under 150 words

Write the email:`,
    ui_schema: {
      inputs: [
        { id: 'purpose', label: 'Email Purpose', type: 'text', placeholder: 'Sales, partnership, job inquiry...', required: true },
        { id: 'recipient', label: 'Target Recipient', type: 'text', placeholder: 'CEO, Marketing Manager, etc.', required: true },
        { id: 'offer', label: 'Your Offer/Ask', type: 'textarea', required: true },
        { id: 'personalization', label: 'Personalization Angle', type: 'text', placeholder: 'Something specific about them...', required: false },
      ]
    }
  },
  {
    id: 'email-sequence',
    name: 'Email Sequence Creator',
    description: 'Creates multi-email nurture sequences',
    category: 'email',
    icon: '📨',
    prompt_template: `Create a {{length}}-email sequence for:

Goal: {{goal}}
Audience: {{audience}}
Offer: {{offer}}
Tone: {{tone}}

Create complete emails with:
- Subject lines
- Body copy
- CTAs
- Timing recommendations`,
    ui_schema: {
      inputs: [
        { id: 'goal', label: 'Sequence Goal', type: 'text', placeholder: 'Convert leads, onboard users...', required: true },
        { id: 'audience', label: 'Target Audience', type: 'text', required: true },
        { id: 'offer', label: 'Main Offer', type: 'textarea', required: true },
      ],
      options: [
        { id: 'length', label: 'Sequence Length', type: 'select', options: [
          { label: '3 emails', value: '3' },
          { label: '5 emails', value: '5' },
          { label: '7 emails', value: '7' },
        ], default: '5' },
        { id: 'tone', label: 'Tone', type: 'select', options: [
          { label: 'Professional', value: 'professional' },
          { label: 'Friendly', value: 'friendly' },
          { label: 'Urgent', value: 'urgent' },
        ], default: 'friendly' },
      ]
    }
  },
  {
    id: 'newsletter-writer',
    name: 'Newsletter Writer',
    description: 'Creates engaging newsletter content',
    category: 'email',
    icon: '📰',
    prompt_template: `Write a newsletter about:

Topic: {{topic}}
Audience: {{audience}}
Style: {{style}}
Length: {{length}}

Include:
- Catchy subject line
- Engaging opener
- Main content
- Call to action
- Sign-off`,
    ui_schema: {
      inputs: [
        { id: 'topic', label: 'Newsletter Topic', type: 'textarea', required: true },
        { id: 'audience', label: 'Audience', type: 'text', required: true },
      ],
      options: [
        { id: 'style', label: 'Style', type: 'select', options: [
          { label: 'Educational', value: 'educational' },
          { label: 'Curated Links', value: 'curated' },
          { label: 'Personal Update', value: 'personal' },
          { label: 'Promotional', value: 'promotional' },
        ], default: 'educational' },
        { id: 'length', label: 'Length', type: 'select', options: [
          { label: 'Short', value: 'short' },
          { label: 'Medium', value: 'medium' },
          { label: 'Long', value: 'long' },
        ], default: 'medium' },
      ]
    }
  },
  {
    id: 'subject-line-generator',
    name: 'Subject Line Generator',
    description: 'Creates high-open-rate email subject lines',
    category: 'email',
    icon: '✉️',
    prompt_template: `Generate email subject lines for:

Email topic: {{topic}}
Goal: {{goal}}
Audience: {{audience}}
Style: {{style}}

Generate 15 subject lines using various tactics:
- Curiosity
- Urgency
- Personalization
- Numbers
- Questions

Rank them by predicted open rate:`,
    ui_schema: {
      inputs: [
        { id: 'topic', label: 'Email Topic', type: 'text', required: true },
        { id: 'goal', label: 'Email Goal', type: 'text', placeholder: 'Sales, engagement, clicks...', required: true },
        { id: 'audience', label: 'Audience', type: 'text', required: false },
      ],
      options: [
        { id: 'style', label: 'Style', type: 'select', options: [
          { label: 'Professional', value: 'professional' },
          { label: 'Playful', value: 'playful' },
          { label: 'Urgent', value: 'urgent' },
          { label: 'Mysterious', value: 'mysterious' },
        ], default: 'professional' },
      ]
    }
  },
  {
    id: 'follow-up-email',
    name: 'Follow-Up Email Writer',
    description: 'Creates effective follow-up emails',
    category: 'email',
    icon: '🔄',
    prompt_template: `Write a follow-up email for:

Context: {{context}}
Previous interaction: {{previous}}
Goal: {{goal}}
Urgency level: {{urgency}}

Create a follow-up that:
- References previous contact
- Adds new value
- Is not pushy
- Has clear next step`,
    ui_schema: {
      inputs: [
        { id: 'context', label: 'Context', type: 'textarea', placeholder: 'What is this about?', required: true },
        { id: 'previous', label: 'Previous Interaction', type: 'textarea', placeholder: 'What happened before?', required: true },
        { id: 'goal', label: 'Goal', type: 'text', required: true },
      ],
      options: [
        { id: 'urgency', label: 'Urgency', type: 'select', options: [
          { label: 'Low', value: 'low' },
          { label: 'Medium', value: 'medium' },
          { label: 'High', value: 'high' },
        ], default: 'medium' },
      ]
    }
  },
  {
    id: 'apology-email',
    name: 'Apology Email Writer',
    description: 'Creates professional apology emails',
    category: 'email',
    icon: '🙏',
    prompt_template: `Write a professional apology email for:

Situation: {{situation}}
Impact on recipient: {{impact}}
Solution/remedy: {{solution}}
Tone: {{tone}}

Create an apology that:
- Acknowledges the issue
- Takes responsibility
- Shows empathy
- Offers solution
- Rebuilds trust`,
    ui_schema: {
      inputs: [
        { id: 'situation', label: 'What Happened', type: 'textarea', required: true },
        { id: 'impact', label: 'Impact on Recipient', type: 'textarea', required: true },
        { id: 'solution', label: 'Your Solution', type: 'textarea', required: true },
      ],
      options: [
        { id: 'tone', label: 'Tone', type: 'select', options: [
          { label: 'Formal', value: 'formal' },
          { label: 'Sincere', value: 'sincere' },
          { label: 'Urgent', value: 'urgent' },
        ], default: 'sincere' },
      ]
    }
  },
  {
    id: 'sales-email',
    name: 'Sales Email Writer',
    description: 'Creates persuasive sales emails',
    category: 'email',
    icon: '💰',
    prompt_template: `Write a sales email for:

Product/Service: {{product}}
Target buyer: {{buyer}}
Key benefit: {{benefit}}
Price point: {{price}}
Stage: {{stage}}

Create a sales email that:
- Identifies pain point
- Presents solution
- Shows proof
- Creates urgency
- Has clear CTA`,
    ui_schema: {
      inputs: [
        { id: 'product', label: 'Product/Service', type: 'text', required: true },
        { id: 'buyer', label: 'Target Buyer', type: 'text', required: true },
        { id: 'benefit', label: 'Key Benefit', type: 'textarea', required: true },
        { id: 'price', label: 'Price Point', type: 'text', required: false },
      ],
      options: [
        { id: 'stage', label: 'Sales Stage', type: 'select', options: [
          { label: 'Cold Outreach', value: 'cold' },
          { label: 'Warm Lead', value: 'warm' },
          { label: 'Post-Demo', value: 'post-demo' },
          { label: 'Closing', value: 'closing' },
        ], default: 'cold' },
      ]
    }
  },
]
