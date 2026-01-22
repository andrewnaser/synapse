import { Agent } from '@/types'

export const writingAgents: Agent[] = [
  {
    id: 'blog-post-writer',
    name: 'Blog Post Writer',
    description: 'Creates engaging, SEO-optimized blog posts on any topic',
    category: 'writing',
    icon: '📝',
    prompt_template: `You are an expert blog writer. Write an engaging, well-structured blog post about: {{topic}}

Tone: {{tone}}
Target length: {{length}}

Include:
- Compelling introduction with hook
- Clear subheadings
- Actionable insights
- Strong conclusion with CTA

Write the complete blog post now:`,
    ui_schema: {
      inputs: [
        { id: 'topic', label: 'Blog Topic', type: 'textarea', placeholder: 'What should the blog post be about?', required: true },
      ],
      options: [
        { id: 'tone', label: 'Tone', type: 'select', options: [
          { label: 'Professional', value: 'professional' },
          { label: 'Conversational', value: 'conversational' },
          { label: 'Authoritative', value: 'authoritative' },
          { label: 'Friendly', value: 'friendly' },
        ], default: 'conversational' },
        { id: 'length', label: 'Length', type: 'select', options: [
          { label: 'Short (500 words)', value: '500 words' },
          { label: 'Medium (1000 words)', value: '1000 words' },
          { label: 'Long (1500+ words)', value: '1500+ words' },
        ], default: '1000 words' },
      ]
    }
  },
  {
    id: 'article-rewriter',
    name: 'Article Rewriter',
    description: 'Rewrites existing content to be unique and improved',
    category: 'writing',
    icon: '🔄',
    prompt_template: `Rewrite the following article to be completely unique while maintaining the core message. Improve clarity, flow, and engagement.

Original text:
{{content}}

Style: {{style}}

Provide the rewritten version:`,
    ui_schema: {
      inputs: [
        { id: 'content', label: 'Original Content', type: 'textarea', placeholder: 'Paste the content you want to rewrite...', required: true },
      ],
      options: [
        { id: 'style', label: 'Rewrite Style', type: 'select', options: [
          { label: 'Keep Similar', value: 'similar' },
          { label: 'More Formal', value: 'formal' },
          { label: 'More Casual', value: 'casual' },
          { label: 'Simplified', value: 'simplified' },
        ], default: 'similar' },
      ]
    }
  },
  {
    id: 'headline-generator',
    name: 'Headline Generator',
    description: 'Creates attention-grabbing headlines that convert',
    category: 'writing',
    icon: '🎯',
    prompt_template: `Generate 10 powerful, attention-grabbing headlines for the following topic:

Topic: {{topic}}
Target audience: {{audience}}
Type: {{type}}

Create headlines that:
- Create curiosity
- Promise value
- Use power words
- Are specific and compelling

Generate 10 unique headlines:`,
    ui_schema: {
      inputs: [
        { id: 'topic', label: 'Topic/Subject', type: 'text', placeholder: 'What is the headline about?', required: true },
        { id: 'audience', label: 'Target Audience', type: 'text', placeholder: 'Who is this for?', required: false },
      ],
      options: [
        { id: 'type', label: 'Headline Type', type: 'select', options: [
          { label: 'Blog/Article', value: 'blog' },
          { label: 'Ad Copy', value: 'ad' },
          { label: 'Email Subject', value: 'email' },
          { label: 'Social Media', value: 'social' },
        ], default: 'blog' },
      ]
    }
  },
  {
    id: 'story-writer',
    name: 'Story Writer',
    description: 'Creates captivating short stories and narratives',
    category: 'writing',
    icon: '📚',
    prompt_template: `Write a captivating {{genre}} story based on:

Premise: {{premise}}
Genre: {{genre}}
Length: {{length}}

Include vivid descriptions, engaging dialogue, and a satisfying narrative arc. Write the story:`,
    ui_schema: {
      inputs: [
        { id: 'premise', label: 'Story Premise', type: 'textarea', placeholder: 'Describe the basic idea or plot...', required: true },
      ],
      options: [
        { id: 'genre', label: 'Genre', type: 'select', options: [
          { label: 'Fiction', value: 'fiction' },
          { label: 'Mystery', value: 'mystery' },
          { label: 'Romance', value: 'romance' },
          { label: 'Sci-Fi', value: 'sci-fi' },
          { label: 'Fantasy', value: 'fantasy' },
        ], default: 'fiction' },
        { id: 'length', label: 'Length', type: 'select', options: [
          { label: 'Flash Fiction', value: 'flash' },
          { label: 'Short Story', value: 'short' },
          { label: 'Extended', value: 'extended' },
        ], default: 'short' },
      ]
    }
  },
  {
    id: 'copy-editor',
    name: 'Copy Editor',
    description: 'Polishes and perfects your writing for clarity',
    category: 'writing',
    icon: '✏️',
    prompt_template: `As a professional copy editor, review and improve the following text:

{{content}}

Focus on:
- Grammar and punctuation
- Clarity and conciseness  
- Flow and readability
- Word choice optimization

Provide the edited version with improvements:`,
    ui_schema: {
      inputs: [
        { id: 'content', label: 'Content to Edit', type: 'textarea', placeholder: 'Paste your content here...', required: true },
      ]
    }
  },
  {
    id: 'product-description',
    name: 'Product Description Writer',
    description: 'Writes compelling product descriptions that sell',
    category: 'writing',
    icon: '🛍️',
    prompt_template: `Write a compelling product description for:

Product: {{product}}
Key features: {{features}}
Target customer: {{target}}
Tone: {{tone}}

Create a description that highlights benefits, creates desire, and drives action:`,
    ui_schema: {
      inputs: [
        { id: 'product', label: 'Product Name', type: 'text', placeholder: 'What is the product?', required: true },
        { id: 'features', label: 'Key Features', type: 'textarea', placeholder: 'List the main features and specs...', required: true },
        { id: 'target', label: 'Target Customer', type: 'text', placeholder: 'Who buys this?', required: false },
      ],
      options: [
        { id: 'tone', label: 'Tone', type: 'select', options: [
          { label: 'Professional', value: 'professional' },
          { label: 'Playful', value: 'playful' },
          { label: 'Luxurious', value: 'luxurious' },
          { label: 'Technical', value: 'technical' },
        ], default: 'professional' },
      ]
    }
  },
  {
    id: 'press-release',
    name: 'Press Release Writer',
    description: 'Creates professional press releases for announcements',
    category: 'writing',
    icon: '📰',
    prompt_template: `Write a professional press release for:

Company: {{company}}
Announcement: {{announcement}}
Key details: {{details}}
Quote from: {{spokesperson}}

Follow standard press release format with headline, dateline, body, and boilerplate:`,
    ui_schema: {
      inputs: [
        { id: 'company', label: 'Company Name', type: 'text', required: true },
        { id: 'announcement', label: 'Announcement', type: 'textarea', placeholder: 'What are you announcing?', required: true },
        { id: 'details', label: 'Key Details', type: 'textarea', placeholder: 'Important facts, dates, numbers...', required: false },
        { id: 'spokesperson', label: 'Spokesperson Name/Title', type: 'text', placeholder: 'Who to quote?', required: false },
      ]
    }
  },
  {
    id: 'resume-writer',
    name: 'Resume Writer',
    description: 'Creates professional resumes that get interviews',
    category: 'writing',
    icon: '📋',
    prompt_template: `Create a professional resume based on:

Current role/desired role: {{role}}
Experience: {{experience}}
Skills: {{skills}}
Achievements: {{achievements}}
Style: {{style}}

Write a compelling, ATS-friendly resume:`,
    ui_schema: {
      inputs: [
        { id: 'role', label: 'Target Role', type: 'text', placeholder: 'What position are you applying for?', required: true },
        { id: 'experience', label: 'Work Experience', type: 'textarea', placeholder: 'List your relevant experience...', required: true },
        { id: 'skills', label: 'Key Skills', type: 'textarea', placeholder: 'Your technical and soft skills...', required: true },
        { id: 'achievements', label: 'Achievements', type: 'textarea', placeholder: 'Notable accomplishments...', required: false },
      ],
      options: [
        { id: 'style', label: 'Resume Style', type: 'select', options: [
          { label: 'Modern', value: 'modern' },
          { label: 'Traditional', value: 'traditional' },
          { label: 'Creative', value: 'creative' },
        ], default: 'modern' },
      ]
    }
  },
]
