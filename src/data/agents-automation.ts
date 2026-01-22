import { Agent } from '@/types'

export const automationAgents: Agent[] = [
  {
    id: 'workflow-designer',
    name: 'Workflow Designer',
    description: 'Designs automated workflow processes',
    category: 'automation',
    icon: '⚙️',
    prompt_template: `Design a workflow for:

Process: {{process}}
Current steps: {{steps}}
Tools available: {{tools}}
Goal: {{goal}}

Provide:
- Optimized workflow diagram (text-based)
- Step-by-step automation plan
- Tool recommendations
- Trigger conditions
- Error handling
- Success metrics`,
    ui_schema: {
      inputs: [
        { id: 'process', label: 'Process to Automate', type: 'textarea', required: true },
        { id: 'steps', label: 'Current Manual Steps', type: 'textarea', required: true },
        { id: 'tools', label: 'Available Tools', type: 'text', placeholder: 'Zapier, Make, n8n, etc.', required: false },
        { id: 'goal', label: 'Automation Goal', type: 'text', required: false },
      ]
    }
  },
  {
    id: 'zapier-workflow',
    name: 'Zapier Workflow Builder',
    description: 'Creates Zapier automation configurations',
    category: 'automation',
    icon: '⚡',
    prompt_template: `Create a Zapier workflow for:

Goal: {{goal}}
Trigger app: {{trigger}}
Action apps: {{actions}}
Data to transfer: {{data}}

Provide:
- Trigger configuration
- Filter conditions
- Action steps
- Field mappings
- Testing checklist
- Common issues to watch`,
    ui_schema: {
      inputs: [
        { id: 'goal', label: 'Automation Goal', type: 'textarea', required: true },
        { id: 'trigger', label: 'Trigger App', type: 'text', placeholder: 'Gmail, Typeform, Stripe...', required: true },
        { id: 'actions', label: 'Action Apps', type: 'text', placeholder: 'Slack, Airtable, etc.', required: true },
        { id: 'data', label: 'Data to Transfer', type: 'textarea', placeholder: 'What data needs to move?', required: false },
      ]
    }
  },
  {
    id: 'spreadsheet-formula',
    name: 'Spreadsheet Formula Generator',
    description: 'Creates complex spreadsheet formulas',
    category: 'automation',
    icon: '📊',
    prompt_template: `Create a spreadsheet formula for:

Task: {{task}}
Platform: {{platform}}
Data structure: {{structure}}
Example data: {{example}}

Provide:
- The formula
- Step-by-step explanation
- How to implement
- Error handling tips
- Alternative approaches`,
    ui_schema: {
      inputs: [
        { id: 'task', label: 'What to Calculate', type: 'textarea', required: true },
        { id: 'structure', label: 'Data Structure', type: 'textarea', placeholder: 'Column A has names, B has amounts...', required: true },
        { id: 'example', label: 'Example Data', type: 'textarea', placeholder: 'Sample values...', required: false },
      ],
      options: [
        { id: 'platform', label: 'Platform', type: 'select', options: [
          { label: 'Google Sheets', value: 'gsheets' },
          { label: 'Excel', value: 'excel' },
          { label: 'Airtable', value: 'airtable' },
        ], default: 'gsheets' },
      ]
    }
  },
  {
    id: 'cron-scheduler',
    name: 'Cron Job Generator',
    description: 'Creates cron expressions for scheduling',
    category: 'automation',
    icon: '⏰',
    prompt_template: `Create a cron expression for:

Schedule: {{schedule}}
Timezone: {{timezone}}

Provide:
- Cron expression
- Human-readable explanation
- Next 5 execution times
- Platform-specific notes
- Common variations`,
    ui_schema: {
      inputs: [
        { id: 'schedule', label: 'Desired Schedule', type: 'textarea', placeholder: 'Every Monday at 9am, First day of month...', required: true },
      ],
      options: [
        { id: 'timezone', label: 'Timezone', type: 'select', options: [
          { label: 'UTC', value: 'UTC' },
          { label: 'US Eastern', value: 'America/New_York' },
          { label: 'US Pacific', value: 'America/Los_Angeles' },
          { label: 'UK', value: 'Europe/London' },
          { label: 'EU Central', value: 'Europe/Berlin' },
        ], default: 'UTC' },
      ]
    }
  },
  {
    id: 'data-transformer',
    name: 'Data Transformer',
    description: 'Creates data transformation logic',
    category: 'automation',
    icon: '🔄',
    prompt_template: `Create data transformation for:

Input format:
{{input}}

Desired output format:
{{output}}

Platform: {{platform}}

Provide:
- Transformation logic/code
- Step-by-step process
- Edge case handling
- Validation rules`,
    ui_schema: {
      inputs: [
        { id: 'input', label: 'Input Data Format', type: 'textarea', placeholder: 'Describe or paste example input...', required: true },
        { id: 'output', label: 'Desired Output Format', type: 'textarea', placeholder: 'Describe or show desired output...', required: true },
      ],
      options: [
        { id: 'platform', label: 'Platform', type: 'select', options: [
          { label: 'JavaScript', value: 'javascript' },
          { label: 'Python', value: 'python' },
          { label: 'Zapier/Make', value: 'nocode' },
          { label: 'SQL', value: 'sql' },
        ], default: 'javascript' },
      ]
    }
  },
  {
    id: 'process-documenter',
    name: 'Process Documenter',
    description: 'Documents processes for automation',
    category: 'automation',
    icon: '📝',
    prompt_template: `Document this process for automation:

Process name: {{name}}
Current workflow: {{workflow}}
Stakeholders: {{stakeholders}}
Frequency: {{frequency}}

Create:
- Process overview
- Detailed step breakdown
- Decision points
- Data requirements
- Automation opportunities
- Implementation priority`,
    ui_schema: {
      inputs: [
        { id: 'name', label: 'Process Name', type: 'text', required: true },
        { id: 'workflow', label: 'Current Workflow', type: 'textarea', placeholder: 'Describe each step...', required: true },
        { id: 'stakeholders', label: 'Stakeholders', type: 'text', placeholder: 'Who is involved?', required: false },
        { id: 'frequency', label: 'How Often', type: 'text', placeholder: 'Daily, weekly, per transaction...', required: false },
      ]
    }
  },
]
