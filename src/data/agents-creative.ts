import { Agent } from '@/types'

export const creativeAgents: Agent[] = [
  {
    id: 'hook-generator',
    name: 'Hook Generator',
    description: 'Creates attention-grabbing hooks for any content',
    category: 'creative',
    icon: '🪝',
    prompt_template: `Generate powerful hooks for:

Topic: {{topic}}
Platform: {{platform}}
Goal: {{goal}}

Create 10 hooks using different techniques:
- Questions
- Statistics
- Bold statements
- Story openers
- Controversy
- Curiosity gaps`,
    ui_schema: {
      inputs: [
        { id: 'topic', label: 'Topic', type: 'text', required: true },
        { id: 'goal', label: 'Content Goal', type: 'text', placeholder: 'What should the hook achieve?', required: false },
      ],
      options: [
        { id: 'platform', label: 'Platform', type: 'select', options: [
          { label: 'Social Media', value: 'social' },
          { label: 'Blog/Article', value: 'blog' },
          { label: 'Video', value: 'video' },
          { label: 'Email', value: 'email' },
          { label: 'Ad Copy', value: 'ad' },
        ], default: 'social' },
      ]
    }
  },
  {
    id: 'cta-generator',
    name: 'CTA Generator',
    description: 'Creates compelling calls to action',
    category: 'creative',
    icon: '🎯',
    prompt_template: `Generate CTAs for:

Action: {{action}}
Audience: {{audience}}
Context: {{context}}
Urgency level: {{urgency}}

Create 15 CTA variations:
- Button text options
- Full sentence CTAs
- Soft CTAs
- Urgency-based CTAs`,
    ui_schema: {
      inputs: [
        { id: 'action', label: 'Desired Action', type: 'text', placeholder: 'Sign up, buy, download...', required: true },
        { id: 'audience', label: 'Target Audience', type: 'text', required: false },
        { id: 'context', label: 'Context', type: 'textarea', placeholder: 'Where will this CTA appear?', required: false },
      ],
      options: [
        { id: 'urgency', label: 'Urgency Level', type: 'select', options: [
          { label: 'Low', value: 'low' },
          { label: 'Medium', value: 'medium' },
          { label: 'High', value: 'high' },
        ], default: 'medium' },
      ]
    }
  },
  {
    id: 'testimonial-writer',
    name: 'Testimonial Writer',
    description: 'Creates realistic testimonials and reviews',
    category: 'creative',
    icon: '⭐',
    prompt_template: `Create testimonials for:

Product/Service: {{product}}
Target customer: {{customer}}
Key benefits: {{benefits}}
Style: {{style}}

Generate 5 realistic testimonials that:
- Sound authentic
- Highlight different benefits
- Include specific details
- Vary in length`,
    ui_schema: {
      inputs: [
        { id: 'product', label: 'Product/Service', type: 'text', required: true },
        { id: 'customer', label: 'Target Customer Type', type: 'text', required: true },
        { id: 'benefits', label: 'Key Benefits', type: 'textarea', required: true },
      ],
      options: [
        { id: 'style', label: 'Testimonial Style', type: 'select', options: [
          { label: 'Professional', value: 'professional' },
          { label: 'Casual', value: 'casual' },
          { label: 'Detailed', value: 'detailed' },
          { label: 'Short & Punchy', value: 'short' },
        ], default: 'casual' },
      ]
    }
  },
  {
    id: 'analogy-generator',
    name: 'Analogy Generator',
    description: 'Creates powerful analogies and metaphors',
    category: 'creative',
    icon: '🔮',
    prompt_template: `Create analogies to explain:

Concept: {{concept}}
Audience: {{audience}}
Context: {{context}}

Generate 10 analogies that:
- Make complex ideas simple
- Are relatable to the audience
- Are memorable
- Vary in style`,
    ui_schema: {
      inputs: [
        { id: 'concept', label: 'Concept to Explain', type: 'textarea', required: true },
        { id: 'audience', label: 'Target Audience', type: 'text', placeholder: 'Who needs to understand this?', required: false },
        { id: 'context', label: 'Use Context', type: 'text', placeholder: 'Presentation, article, etc.', required: false },
      ]
    }
  },
  {
    id: 'brainstorm-generator',
    name: 'Brainstorm Generator',
    description: 'Generates creative ideas and concepts',
    category: 'creative',
    icon: '💡',
    prompt_template: `Brainstorm ideas for:

Challenge: {{challenge}}
Constraints: {{constraints}}
Style: {{style}}

Generate 20 creative ideas:
- 10 practical ideas
- 5 innovative ideas
- 5 wild/moonshot ideas

Include brief explanations for each.`,
    ui_schema: {
      inputs: [
        { id: 'challenge', label: 'Challenge/Problem', type: 'textarea', required: true },
        { id: 'constraints', label: 'Constraints', type: 'textarea', placeholder: 'Budget, time, resources...', required: false },
      ],
      options: [
        { id: 'style', label: 'Brainstorm Style', type: 'select', options: [
          { label: 'Business', value: 'business' },
          { label: 'Creative', value: 'creative' },
          { label: 'Technical', value: 'technical' },
          { label: 'Marketing', value: 'marketing' },
        ], default: 'business' },
      ]
    }
  },
  {
    id: 'podcast-outline',
    name: 'Podcast Outline Creator',
    description: 'Creates engaging podcast episode outlines',
    category: 'creative',
    icon: '🎙️',
    prompt_template: `Create a podcast outline for:

Topic: {{topic}}
Format: {{format}}
Length: {{length}}
Target audience: {{audience}}

Include:
- Episode title options
- Cold open/hook
- Segment breakdown
- Talking points
- Transition suggestions
- Outro/CTA`,
    ui_schema: {
      inputs: [
        { id: 'topic', label: 'Episode Topic', type: 'textarea', required: true },
        { id: 'audience', label: 'Target Audience', type: 'text', required: false },
      ],
      options: [
        { id: 'format', label: 'Format', type: 'select', options: [
          { label: 'Solo', value: 'solo' },
          { label: 'Interview', value: 'interview' },
          { label: 'Co-hosted Discussion', value: 'cohost' },
          { label: 'Panel', value: 'panel' },
        ], default: 'solo' },
        { id: 'length', label: 'Episode Length', type: 'select', options: [
          { label: '15 minutes', value: '15' },
          { label: '30 minutes', value: '30' },
          { label: '45 minutes', value: '45' },
          { label: '60 minutes', value: '60' },
        ], default: '30' },
      ]
    }
  },
  {
    id: 'quiz-creator',
    name: 'Quiz Creator',
    description: 'Creates engaging quizzes for any purpose',
    category: 'creative',
    icon: '❓',
    prompt_template: `Create a quiz about:

Topic: {{topic}}
Purpose: {{purpose}}
Questions: {{count}}
Style: {{style}}

Generate:
- Quiz title
- Introduction text
- Questions with multiple choice answers
- Correct answers
- Result categories (if applicable)`,
    ui_schema: {
      inputs: [
        { id: 'topic', label: 'Quiz Topic', type: 'text', required: true },
        { id: 'purpose', label: 'Quiz Purpose', type: 'text', placeholder: 'Educational, lead gen, fun...', required: false },
      ],
      options: [
        { id: 'count', label: 'Number of Questions', type: 'select', options: [
          { label: '5 questions', value: '5' },
          { label: '10 questions', value: '10' },
          { label: '15 questions', value: '15' },
        ], default: '10' },
        { id: 'style', label: 'Style', type: 'select', options: [
          { label: 'Educational', value: 'educational' },
          { label: 'Personality', value: 'personality' },
          { label: 'Fun/Trivia', value: 'fun' },
          { label: 'Assessment', value: 'assessment' },
        ], default: 'fun' },
      ]
    }
  },
]
