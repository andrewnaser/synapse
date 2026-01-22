import { Agent } from '@/types'

export const businessAgents: Agent[] = [
  {
    id: 'business-plan',
    name: 'Business Plan Writer',
    description: 'Creates comprehensive business plans',
    category: 'business',
    icon: '📊',
    prompt_template: `Create a business plan for:

Business: {{business}}
Target market: {{market}}
Revenue model: {{revenue}}
Initial investment: {{investment}}

Include:
- Executive summary
- Market analysis
- Competitive advantage
- Marketing strategy
- Financial projections
- Risk analysis`,
    ui_schema: {
      inputs: [
        { id: 'business', label: 'Business Description', type: 'textarea', required: true },
        { id: 'market', label: 'Target Market', type: 'text', required: true },
        { id: 'revenue', label: 'Revenue Model', type: 'text', placeholder: 'How will you make money?', required: true },
        { id: 'investment', label: 'Initial Investment', type: 'text', required: false },
      ]
    }
  },
  {
    id: 'pitch-deck',
    name: 'Pitch Deck Creator',
    description: 'Creates compelling investor pitch decks',
    category: 'business',
    icon: '🎯',
    prompt_template: `Create a pitch deck outline for:

Company: {{company}}
Problem: {{problem}}
Solution: {{solution}}
Traction: {{traction}}
Ask: {{ask}}

Create slides for:
1. Problem
2. Solution
3. Market size
4. Business model
5. Traction
6. Team
7. Competition
8. Financials
9. Ask`,
    ui_schema: {
      inputs: [
        { id: 'company', label: 'Company Name', type: 'text', required: true },
        { id: 'problem', label: 'Problem', type: 'textarea', required: true },
        { id: 'solution', label: 'Solution', type: 'textarea', required: true },
        { id: 'traction', label: 'Current Traction', type: 'textarea', placeholder: 'Users, revenue, partnerships...', required: false },
        { id: 'ask', label: 'Investment Ask', type: 'text', placeholder: 'How much are you raising?', required: false },
      ]
    }
  },
  {
    id: 'meeting-agenda',
    name: 'Meeting Agenda Creator',
    description: 'Creates structured meeting agendas',
    category: 'business',
    icon: '📋',
    prompt_template: `Create a meeting agenda for:

Meeting type: {{type}}
Purpose: {{purpose}}
Attendees: {{attendees}}
Duration: {{duration}}

Include:
- Clear objectives
- Timed agenda items
- Discussion points
- Action item slots
- Next steps section`,
    ui_schema: {
      inputs: [
        { id: 'type', label: 'Meeting Type', type: 'text', placeholder: 'Team standup, client call, etc.', required: true },
        { id: 'purpose', label: 'Meeting Purpose', type: 'textarea', required: true },
        { id: 'attendees', label: 'Attendees', type: 'text', required: false },
        { id: 'duration', label: 'Duration', type: 'text', placeholder: '30 min, 1 hour, etc.', required: false },
      ]
    }
  },
  {
    id: 'sop-writer',
    name: 'SOP Writer',
    description: 'Creates standard operating procedures',
    category: 'business',
    icon: '📝',
    prompt_template: `Create a Standard Operating Procedure for:

Process: {{process}}
Department: {{department}}
Complexity: {{complexity}}

Include:
- Purpose and scope
- Step-by-step instructions
- Responsible parties
- Required tools/resources
- Quality checkpoints
- Troubleshooting guide`,
    ui_schema: {
      inputs: [
        { id: 'process', label: 'Process to Document', type: 'textarea', required: true },
        { id: 'department', label: 'Department', type: 'text', required: false },
      ],
      options: [
        { id: 'complexity', label: 'Detail Level', type: 'select', options: [
          { label: 'Basic', value: 'basic' },
          { label: 'Detailed', value: 'detailed' },
          { label: 'Comprehensive', value: 'comprehensive' },
        ], default: 'detailed' },
      ]
    }
  },
  {
    id: 'proposal-writer',
    name: 'Business Proposal Writer',
    description: 'Creates winning business proposals',
    category: 'business',
    icon: '💼',
    prompt_template: `Create a business proposal for:

Service/Product: {{service}}
Client: {{client}}
Project scope: {{scope}}
Budget: {{budget}}
Timeline: {{timeline}}

Include:
- Executive summary
- Problem statement
- Proposed solution
- Deliverables
- Timeline
- Pricing
- Terms
- Next steps`,
    ui_schema: {
      inputs: [
        { id: 'service', label: 'Service/Product', type: 'text', required: true },
        { id: 'client', label: 'Client Name', type: 'text', required: true },
        { id: 'scope', label: 'Project Scope', type: 'textarea', required: true },
        { id: 'budget', label: 'Budget', type: 'text', required: false },
        { id: 'timeline', label: 'Timeline', type: 'text', required: false },
      ]
    }
  },
  {
    id: 'swot-analysis',
    name: 'SWOT Analysis',
    description: 'Creates comprehensive SWOT analyses',
    category: 'business',
    icon: '📈',
    prompt_template: `Create a SWOT analysis for:

Business: {{business}}
Industry: {{industry}}
Current situation: {{situation}}

Provide:
- Strengths (internal)
- Weaknesses (internal)
- Opportunities (external)
- Threats (external)
- Strategic recommendations`,
    ui_schema: {
      inputs: [
        { id: 'business', label: 'Business Description', type: 'textarea', required: true },
        { id: 'industry', label: 'Industry', type: 'text', required: true },
        { id: 'situation', label: 'Current Situation', type: 'textarea', placeholder: 'Where are you now?', required: false },
      ]
    }
  },
  {
    id: 'job-description',
    name: 'Job Description Writer',
    description: 'Creates compelling job descriptions',
    category: 'business',
    icon: '👔',
    prompt_template: `Create a job description for:

Role: {{role}}
Company: {{company}}
Department: {{department}}
Experience level: {{level}}
Key responsibilities: {{responsibilities}}

Include:
- Compelling intro
- Responsibilities
- Requirements
- Nice-to-haves
- Benefits
- Company culture`,
    ui_schema: {
      inputs: [
        { id: 'role', label: 'Job Title', type: 'text', required: true },
        { id: 'company', label: 'Company Name', type: 'text', required: true },
        { id: 'department', label: 'Department', type: 'text', required: false },
        { id: 'responsibilities', label: 'Key Responsibilities', type: 'textarea', required: true },
      ],
      options: [
        { id: 'level', label: 'Experience Level', type: 'select', options: [
          { label: 'Entry Level', value: 'entry' },
          { label: 'Mid Level', value: 'mid' },
          { label: 'Senior', value: 'senior' },
          { label: 'Executive', value: 'executive' },
        ], default: 'mid' },
      ]
    }
  },
  {
    id: 'okr-creator',
    name: 'OKR Creator',
    description: 'Creates objectives and key results',
    category: 'business',
    icon: '🎯',
    prompt_template: `Create OKRs for:

Department/Team: {{team}}
Time period: {{period}}
Goals: {{goals}}
Current metrics: {{metrics}}

Create:
- 3-5 Objectives
- 3-4 Key Results per objective
- Initiatives to achieve them
- Success criteria`,
    ui_schema: {
      inputs: [
        { id: 'team', label: 'Department/Team', type: 'text', required: true },
        { id: 'period', label: 'Time Period', type: 'text', placeholder: 'Q1 2024, Annual, etc.', required: true },
        { id: 'goals', label: 'High-Level Goals', type: 'textarea', required: true },
        { id: 'metrics', label: 'Current Metrics', type: 'textarea', placeholder: 'Baseline numbers...', required: false },
      ]
    }
  },
]
