import { Agent } from '@/types'

export const seoAgents: Agent[] = [
  {
    id: 'seo-keyword-research',
    name: 'SEO Keyword Researcher',
    description: 'Identifies high-value keywords for your content',
    category: 'seo',
    icon: '🔑',
    prompt_template: `Research SEO keywords for:

Topic: {{topic}}
Industry: {{industry}}
Target audience: {{audience}}

Provide:
- Primary keywords (high volume)
- Long-tail keywords
- Question keywords
- LSI keywords
- Keyword difficulty estimates
- Search intent for each`,
    ui_schema: {
      inputs: [
        { id: 'topic', label: 'Topic/Niche', type: 'text', required: true },
        { id: 'industry', label: 'Industry', type: 'text', required: true },
        { id: 'audience', label: 'Target Audience', type: 'text', required: false },
      ]
    }
  },
  {
    id: 'meta-description-writer',
    name: 'Meta Description Writer',
    description: 'Creates SEO-optimized meta descriptions',
    category: 'seo',
    icon: '📄',
    prompt_template: `Write meta descriptions for:

Page title: {{title}}
Page content summary: {{content}}
Target keyword: {{keyword}}

Generate 5 meta descriptions that:
- Are 150-160 characters
- Include target keyword
- Have clear CTA
- Create urgency/curiosity`,
    ui_schema: {
      inputs: [
        { id: 'title', label: 'Page Title', type: 'text', required: true },
        { id: 'content', label: 'Page Content Summary', type: 'textarea', required: true },
        { id: 'keyword', label: 'Target Keyword', type: 'text', required: true },
      ]
    }
  },
  {
    id: 'seo-content-optimizer',
    name: 'SEO Content Optimizer',
    description: 'Optimizes existing content for search engines',
    category: 'seo',
    icon: '📈',
    prompt_template: `Optimize this content for SEO:

Current content:
{{content}}

Target keyword: {{keyword}}
Secondary keywords: {{secondary}}

Provide:
- Optimized version
- Keyword placement suggestions
- Header structure improvements
- Internal linking opportunities
- Content gap analysis`,
    ui_schema: {
      inputs: [
        { id: 'content', label: 'Content to Optimize', type: 'textarea', required: true },
        { id: 'keyword', label: 'Primary Keyword', type: 'text', required: true },
        { id: 'secondary', label: 'Secondary Keywords', type: 'text', placeholder: 'Comma-separated keywords', required: false },
      ]
    }
  },
  {
    id: 'seo-title-generator',
    name: 'SEO Title Generator',
    description: 'Creates click-worthy, SEO-optimized titles',
    category: 'seo',
    icon: '🏷️',
    prompt_template: `Generate SEO-optimized titles for:

Topic: {{topic}}
Target keyword: {{keyword}}
Content type: {{type}}

Generate 10 titles that:
- Are under 60 characters
- Include target keyword (preferably at start)
- Are compelling and click-worthy
- Match search intent`,
    ui_schema: {
      inputs: [
        { id: 'topic', label: 'Content Topic', type: 'text', required: true },
        { id: 'keyword', label: 'Target Keyword', type: 'text', required: true },
      ],
      options: [
        { id: 'type', label: 'Content Type', type: 'select', options: [
          { label: 'Blog Post', value: 'blog' },
          { label: 'Product Page', value: 'product' },
          { label: 'Landing Page', value: 'landing' },
          { label: 'Guide/Tutorial', value: 'guide' },
        ], default: 'blog' },
      ]
    }
  },
  {
    id: 'schema-markup-generator',
    name: 'Schema Markup Generator',
    description: 'Creates structured data for rich snippets',
    category: 'seo',
    icon: '🔧',
    prompt_template: `Generate schema markup for:

Page type: {{type}}
Page details:
{{details}}

Provide:
- JSON-LD structured data
- Implementation instructions
- Testing recommendations`,
    ui_schema: {
      inputs: [
        { id: 'details', label: 'Page Details', type: 'textarea', placeholder: 'Describe the page content...', required: true },
      ],
      options: [
        { id: 'type', label: 'Schema Type', type: 'select', options: [
          { label: 'Article', value: 'Article' },
          { label: 'Product', value: 'Product' },
          { label: 'FAQ', value: 'FAQPage' },
          { label: 'How-To', value: 'HowTo' },
          { label: 'Local Business', value: 'LocalBusiness' },
          { label: 'Recipe', value: 'Recipe' },
          { label: 'Event', value: 'Event' },
        ], default: 'Article' },
      ]
    }
  },
  {
    id: 'seo-audit',
    name: 'SEO Audit Report',
    description: 'Analyzes pages for SEO improvements',
    category: 'seo',
    icon: '🔍',
    prompt_template: `Perform an SEO audit based on:

Page URL/description: {{page}}
Current meta title: {{title}}
Current meta description: {{description}}
Main content summary: {{content}}
Target keyword: {{keyword}}

Analyze:
- Title tag optimization
- Meta description quality
- Content optimization
- Keyword usage
- Header structure
- Recommendations`,
    ui_schema: {
      inputs: [
        { id: 'page', label: 'Page URL/Description', type: 'text', required: true },
        { id: 'title', label: 'Current Meta Title', type: 'text', required: true },
        { id: 'description', label: 'Current Meta Description', type: 'textarea', required: true },
        { id: 'content', label: 'Content Summary', type: 'textarea', required: true },
        { id: 'keyword', label: 'Target Keyword', type: 'text', required: true },
      ]
    }
  },
]
