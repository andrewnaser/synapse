import { Agent } from '@/types'

export const translationAgents: Agent[] = [
  {
    id: 'language-translator',
    name: 'Language Translator',
    description: 'Translates text between any languages',
    category: 'translation',
    icon: '🌍',
    prompt_template: `Translate the following text from {{from_lang}} to {{to_lang}}:

Text:
{{text}}

Provide:
- Natural, fluent translation
- Cultural adaptations if needed
- Alternative phrasings for key terms`,
    ui_schema: {
      inputs: [
        { id: 'text', label: 'Text to Translate', type: 'textarea', required: true },
      ],
      options: [
        { id: 'from_lang', label: 'From', type: 'select', options: [
          { label: 'English', value: 'English' },
          { label: 'Spanish', value: 'Spanish' },
          { label: 'French', value: 'French' },
          { label: 'German', value: 'German' },
          { label: 'Italian', value: 'Italian' },
          { label: 'Portuguese', value: 'Portuguese' },
          { label: 'Chinese', value: 'Chinese' },
          { label: 'Japanese', value: 'Japanese' },
          { label: 'Korean', value: 'Korean' },
          { label: 'Arabic', value: 'Arabic' },
          { label: 'Hindi', value: 'Hindi' },
          { label: 'Russian', value: 'Russian' },
        ], default: 'English' },
        { id: 'to_lang', label: 'To', type: 'select', options: [
          { label: 'English', value: 'English' },
          { label: 'Spanish', value: 'Spanish' },
          { label: 'French', value: 'French' },
          { label: 'German', value: 'German' },
          { label: 'Italian', value: 'Italian' },
          { label: 'Portuguese', value: 'Portuguese' },
          { label: 'Chinese', value: 'Chinese' },
          { label: 'Japanese', value: 'Japanese' },
          { label: 'Korean', value: 'Korean' },
          { label: 'Arabic', value: 'Arabic' },
          { label: 'Hindi', value: 'Hindi' },
          { label: 'Russian', value: 'Russian' },
        ], default: 'Spanish' },
      ]
    }
  },
  {
    id: 'localization-expert',
    name: 'Localization Expert',
    description: 'Localizes content for specific markets',
    category: 'translation',
    icon: '🎯',
    prompt_template: `Localize the following content for {{market}}:

Content:
{{content}}

Consider:
- Cultural references
- Local expressions
- Market-specific terminology
- Date/currency formats
- Tone adjustments

Provide localized version:`,
    ui_schema: {
      inputs: [
        { id: 'content', label: 'Content to Localize', type: 'textarea', required: true },
      ],
      options: [
        { id: 'market', label: 'Target Market', type: 'select', options: [
          { label: 'US English', value: 'US' },
          { label: 'UK English', value: 'UK' },
          { label: 'Latin America Spanish', value: 'LATAM' },
          { label: 'Spain Spanish', value: 'Spain' },
          { label: 'Brazilian Portuguese', value: 'Brazil' },
          { label: 'European French', value: 'France' },
          { label: 'Canadian French', value: 'Canada FR' },
          { label: 'German (Germany)', value: 'Germany' },
          { label: 'Japanese', value: 'Japan' },
          { label: 'Simplified Chinese', value: 'China' },
        ], default: 'US' },
      ]
    }
  },
  {
    id: 'tone-adapter',
    name: 'Tone Adapter',
    description: 'Adapts text tone for different audiences',
    category: 'translation',
    icon: '🎭',
    prompt_template: `Adapt the following text to a {{tone}} tone:

Original text:
{{text}}

Target audience: {{audience}}

Maintain the core message while adjusting:
- Word choice
- Sentence structure
- Formality level
- Emotional appeal`,
    ui_schema: {
      inputs: [
        { id: 'text', label: 'Text to Adapt', type: 'textarea', required: true },
        { id: 'audience', label: 'Target Audience', type: 'text', placeholder: 'Who will read this?', required: false },
      ],
      options: [
        { id: 'tone', label: 'Target Tone', type: 'select', options: [
          { label: 'Professional', value: 'professional' },
          { label: 'Casual', value: 'casual' },
          { label: 'Friendly', value: 'friendly' },
          { label: 'Formal', value: 'formal' },
          { label: 'Persuasive', value: 'persuasive' },
          { label: 'Academic', value: 'academic' },
          { label: 'Humorous', value: 'humorous' },
        ], default: 'professional' },
      ]
    }
  },
  {
    id: 'simplifier',
    name: 'Text Simplifier',
    description: 'Simplifies complex text for broader audiences',
    category: 'translation',
    icon: '📖',
    prompt_template: `Simplify the following text to a {{level}} reading level:

Text:
{{text}}

Guidelines:
- Use simpler words
- Shorter sentences
- Clear structure
- Remove jargon
- Maintain key information`,
    ui_schema: {
      inputs: [
        { id: 'text', label: 'Text to Simplify', type: 'textarea', required: true },
      ],
      options: [
        { id: 'level', label: 'Reading Level', type: 'select', options: [
          { label: 'Elementary (Grade 5)', value: 'elementary' },
          { label: 'Middle School', value: 'middle' },
          { label: 'High School', value: 'high' },
          { label: 'General Public', value: 'general' },
        ], default: 'general' },
      ]
    }
  },
  {
    id: 'technical-translator',
    name: 'Technical Translator',
    description: 'Translates technical documents accurately',
    category: 'translation',
    icon: '⚙️',
    prompt_template: `Translate this technical document from {{from_lang}} to {{to_lang}}:

Document:
{{text}}

Field: {{field}}

Ensure:
- Accurate terminology
- Consistent term usage
- Technical precision
- Proper formatting`,
    ui_schema: {
      inputs: [
        { id: 'text', label: 'Technical Text', type: 'textarea', required: true },
      ],
      options: [
        { id: 'from_lang', label: 'From', type: 'select', options: [
          { label: 'English', value: 'English' },
          { label: 'Spanish', value: 'Spanish' },
          { label: 'French', value: 'French' },
          { label: 'German', value: 'German' },
          { label: 'Chinese', value: 'Chinese' },
          { label: 'Japanese', value: 'Japanese' },
        ], default: 'English' },
        { id: 'to_lang', label: 'To', type: 'select', options: [
          { label: 'English', value: 'English' },
          { label: 'Spanish', value: 'Spanish' },
          { label: 'French', value: 'French' },
          { label: 'German', value: 'German' },
          { label: 'Chinese', value: 'Chinese' },
          { label: 'Japanese', value: 'Japanese' },
        ], default: 'Spanish' },
        { id: 'field', label: 'Technical Field', type: 'select', options: [
          { label: 'Software/IT', value: 'software' },
          { label: 'Medical', value: 'medical' },
          { label: 'Legal', value: 'legal' },
          { label: 'Engineering', value: 'engineering' },
          { label: 'Finance', value: 'finance' },
        ], default: 'software' },
      ]
    }
  },
  {
    id: 'subtitle-translator',
    name: 'Subtitle Translator',
    description: 'Translates subtitles with timing constraints',
    category: 'translation',
    icon: '🎬',
    prompt_template: `Translate these subtitles from {{from_lang}} to {{to_lang}}:

{{subtitles}}

Guidelines:
- Keep translations concise (subtitle length limits)
- Maintain timing/rhythm
- Preserve tone and emotion
- Adapt cultural references`,
    ui_schema: {
      inputs: [
        { id: 'subtitles', label: 'Subtitle Text', type: 'textarea', placeholder: 'Paste subtitles here...', required: true },
      ],
      options: [
        { id: 'from_lang', label: 'From', type: 'select', options: [
          { label: 'English', value: 'English' },
          { label: 'Spanish', value: 'Spanish' },
          { label: 'French', value: 'French' },
          { label: 'Korean', value: 'Korean' },
          { label: 'Japanese', value: 'Japanese' },
        ], default: 'English' },
        { id: 'to_lang', label: 'To', type: 'select', options: [
          { label: 'English', value: 'English' },
          { label: 'Spanish', value: 'Spanish' },
          { label: 'French', value: 'French' },
          { label: 'Korean', value: 'Korean' },
          { label: 'Japanese', value: 'Japanese' },
        ], default: 'Spanish' },
      ]
    }
  },
]
