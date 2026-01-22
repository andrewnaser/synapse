import { Agent } from '@/types'

export const socialMediaAgents: Agent[] = [
  {
    id: 'instagram-caption',
    name: 'Instagram Caption Writer',
    description: 'Creates engaging Instagram captions with hashtags',
    category: 'social-media',
    icon: '📸',
    prompt_template: `Write an engaging Instagram caption for:

Post topic: {{topic}}
Brand/Account type: {{brand}}
Tone: {{tone}}
Goal: {{goal}}

Include:
- Hook in first line
- Engaging body
- Call to action
- 20-30 relevant hashtags

Write the caption:`,
    ui_schema: {
      inputs: [
        { id: 'topic', label: 'Post Topic', type: 'textarea', placeholder: 'What is the post about?', required: true },
        { id: 'brand', label: 'Brand/Account Type', type: 'text', placeholder: 'Fitness coach, restaurant, etc.', required: false },
        { id: 'goal', label: 'Goal', type: 'text', placeholder: 'Engagement, sales, awareness...', required: false },
      ],
      options: [
        { id: 'tone', label: 'Tone', type: 'select', options: [
          { label: 'Casual & Fun', value: 'casual' },
          { label: 'Professional', value: 'professional' },
          { label: 'Inspirational', value: 'inspirational' },
          { label: 'Witty', value: 'witty' },
        ], default: 'casual' },
      ]
    }
  },
  {
    id: 'twitter-thread',
    name: 'Twitter/X Thread Creator',
    description: 'Creates viral Twitter threads that educate and engage',
    category: 'social-media',
    icon: '🐦',
    prompt_template: `Create a viral Twitter/X thread about:

Topic: {{topic}}
Key points: {{points}}
Style: {{style}}

Create a {{length}}-tweet thread that:
- Has a killer hook
- Delivers value
- Builds engagement
- Ends with strong CTA

Write the thread:`,
    ui_schema: {
      inputs: [
        { id: 'topic', label: 'Thread Topic', type: 'text', required: true },
        { id: 'points', label: 'Key Points to Cover', type: 'textarea', placeholder: 'What should the thread teach?', required: true },
      ],
      options: [
        { id: 'style', label: 'Style', type: 'select', options: [
          { label: 'Educational', value: 'educational' },
          { label: 'Storytelling', value: 'story' },
          { label: 'List/Tips', value: 'list' },
          { label: 'Controversial Take', value: 'controversial' },
        ], default: 'educational' },
        { id: 'length', label: 'Thread Length', type: 'select', options: [
          { label: '5 tweets', value: '5' },
          { label: '10 tweets', value: '10' },
          { label: '15 tweets', value: '15' },
        ], default: '10' },
      ]
    }
  },
  {
    id: 'linkedin-post',
    name: 'LinkedIn Post Writer',
    description: 'Creates professional LinkedIn posts that build authority',
    category: 'social-media',
    icon: '💼',
    prompt_template: `Write a LinkedIn post about:

Topic: {{topic}}
Your role/expertise: {{expertise}}
Type: {{type}}
Goal: {{goal}}

Create a post that:
- Hooks in first line
- Delivers unique insights
- Shows expertise
- Drives engagement

Write the post:`,
    ui_schema: {
      inputs: [
        { id: 'topic', label: 'Post Topic', type: 'textarea', required: true },
        { id: 'expertise', label: 'Your Role/Expertise', type: 'text', placeholder: 'CEO, Marketing Manager, etc.', required: false },
        { id: 'goal', label: 'Post Goal', type: 'text', placeholder: 'Authority, engagement, leads...', required: false },
      ],
      options: [
        { id: 'type', label: 'Post Type', type: 'select', options: [
          { label: 'Thought Leadership', value: 'thought' },
          { label: 'Story/Experience', value: 'story' },
          { label: 'Tips & Advice', value: 'tips' },
          { label: 'Industry News Commentary', value: 'news' },
        ], default: 'thought' },
      ]
    }
  },
  {
    id: 'tiktok-script',
    name: 'TikTok Script Writer',
    description: 'Creates viral TikTok video scripts',
    category: 'social-media',
    icon: '🎵',
    prompt_template: `Write a TikTok script for:

Topic: {{topic}}
Format: {{format}}
Hook style: {{hook}}
Length: {{length}}

Create a script with:
- Attention-grabbing hook (first 3 seconds)
- Clear structure
- Visual/action cues
- Trending elements

Write the script:`,
    ui_schema: {
      inputs: [
        { id: 'topic', label: 'Video Topic', type: 'textarea', required: true },
      ],
      options: [
        { id: 'format', label: 'Video Format', type: 'select', options: [
          { label: 'Talking Head', value: 'talking' },
          { label: 'Tutorial', value: 'tutorial' },
          { label: 'Story Time', value: 'story' },
          { label: 'Listicle', value: 'list' },
        ], default: 'talking' },
        { id: 'hook', label: 'Hook Style', type: 'select', options: [
          { label: 'Question', value: 'question' },
          { label: 'Bold Statement', value: 'bold' },
          { label: 'Controversial', value: 'controversial' },
          { label: 'Curiosity Gap', value: 'curiosity' },
        ], default: 'curiosity' },
        { id: 'length', label: 'Video Length', type: 'select', options: [
          { label: '15 seconds', value: '15s' },
          { label: '30 seconds', value: '30s' },
          { label: '60 seconds', value: '60s' },
        ], default: '30s' },
      ]
    }
  },
  {
    id: 'youtube-title-thumbnail',
    name: 'YouTube Title & Thumbnail Ideas',
    description: 'Creates click-worthy YouTube titles and thumbnail concepts',
    category: 'social-media',
    icon: '▶️',
    prompt_template: `Create YouTube title and thumbnail ideas for:

Video topic: {{topic}}
Channel niche: {{niche}}
Style: {{style}}

Generate 10 title options with:
- High CTR potential
- Curiosity triggers
- Thumbnail concept for each
- Why each works`,
    ui_schema: {
      inputs: [
        { id: 'topic', label: 'Video Topic', type: 'textarea', required: true },
        { id: 'niche', label: 'Channel Niche', type: 'text', placeholder: 'Tech reviews, cooking, etc.', required: false },
      ],
      options: [
        { id: 'style', label: 'Style', type: 'select', options: [
          { label: 'Educational', value: 'educational' },
          { label: 'Entertainment', value: 'entertainment' },
          { label: 'Clickbait (ethical)', value: 'clickbait' },
          { label: 'Professional', value: 'professional' },
        ], default: 'educational' },
      ]
    }
  },
  {
    id: 'youtube-description',
    name: 'YouTube Description Writer',
    description: 'Creates SEO-optimized YouTube descriptions',
    category: 'social-media',
    icon: '📺',
    prompt_template: `Write a YouTube video description for:

Video title: {{title}}
Video summary: {{summary}}
Key timestamps: {{timestamps}}

Include:
- Engaging opening paragraph
- Key video points
- Relevant links section
- About section
- SEO keywords
- Hashtags`,
    ui_schema: {
      inputs: [
        { id: 'title', label: 'Video Title', type: 'text', required: true },
        { id: 'summary', label: 'Video Summary', type: 'textarea', placeholder: 'What is the video about?', required: true },
        { id: 'timestamps', label: 'Key Timestamps', type: 'textarea', placeholder: '0:00 - Intro, 2:30 - Topic 1...', required: false },
      ]
    }
  },
  {
    id: 'social-content-calendar',
    name: 'Social Content Calendar',
    description: 'Plans a month of social media content',
    category: 'social-media',
    icon: '📅',
    prompt_template: `Create a 30-day social media content calendar for:

Business/Brand: {{brand}}
Platforms: {{platforms}}
Goals: {{goals}}
Content pillars: {{pillars}}

Include:
- Daily post ideas
- Content types mix
- Engagement prompts
- Key dates/events to leverage
- Hashtag strategies`,
    ui_schema: {
      inputs: [
        { id: 'brand', label: 'Brand/Business', type: 'text', required: true },
        { id: 'platforms', label: 'Platforms', type: 'text', placeholder: 'Instagram, Twitter, LinkedIn...', required: true },
        { id: 'goals', label: 'Content Goals', type: 'textarea', placeholder: 'Brand awareness, engagement, sales...', required: true },
        { id: 'pillars', label: 'Content Pillars', type: 'textarea', placeholder: 'Educational, behind-the-scenes, etc.', required: false },
      ]
    }
  },
  {
    id: 'hashtag-generator',
    name: 'Hashtag Generator',
    description: 'Generates optimized hashtags for any platform',
    category: 'social-media',
    icon: '#️⃣',
    prompt_template: `Generate optimized hashtags for:

Content topic: {{topic}}
Platform: {{platform}}
Niche: {{niche}}

Provide:
- 10 high-volume hashtags
- 10 medium-volume hashtags
- 10 niche-specific hashtags
- Hashtag strategy tips`,
    ui_schema: {
      inputs: [
        { id: 'topic', label: 'Content Topic', type: 'text', required: true },
        { id: 'niche', label: 'Niche/Industry', type: 'text', required: true },
      ],
      options: [
        { id: 'platform', label: 'Platform', type: 'select', options: [
          { label: 'Instagram', value: 'instagram' },
          { label: 'TikTok', value: 'tiktok' },
          { label: 'Twitter/X', value: 'twitter' },
          { label: 'LinkedIn', value: 'linkedin' },
        ], default: 'instagram' },
      ]
    }
  },
]
