import { Agent } from '@/types'

export const codingAgents: Agent[] = [
  {
    id: 'code-explainer',
    name: 'Code Explainer',
    description: 'Explains code in simple, understandable terms',
    category: 'coding',
    icon: '🔍',
    prompt_template: `Explain the following code in simple terms:

Code:
\`\`\`
{{code}}
\`\`\`

Detail level: {{detail}}

Explain:
- What the code does
- How it works step by step
- Key concepts used
- Potential improvements`,
    ui_schema: {
      inputs: [
        { id: 'code', label: 'Code to Explain', type: 'textarea', placeholder: 'Paste your code here...', required: true },
      ],
      options: [
        { id: 'detail', label: 'Detail Level', type: 'select', options: [
          { label: 'Beginner (ELI5)', value: 'beginner' },
          { label: 'Intermediate', value: 'intermediate' },
          { label: 'Advanced', value: 'advanced' },
        ], default: 'intermediate' },
      ]
    }
  },
  {
    id: 'code-converter',
    name: 'Code Converter',
    description: 'Converts code between programming languages',
    category: 'coding',
    icon: '🔄',
    prompt_template: `Convert this code from {{from_lang}} to {{to_lang}}:

\`\`\`{{from_lang}}
{{code}}
\`\`\`

Provide:
- Converted code
- Key differences explained
- Any gotchas or considerations`,
    ui_schema: {
      inputs: [
        { id: 'code', label: 'Code to Convert', type: 'textarea', required: true },
      ],
      options: [
        { id: 'from_lang', label: 'From Language', type: 'select', options: [
          { label: 'JavaScript', value: 'javascript' },
          { label: 'Python', value: 'python' },
          { label: 'TypeScript', value: 'typescript' },
          { label: 'Java', value: 'java' },
          { label: 'C#', value: 'csharp' },
          { label: 'Go', value: 'go' },
          { label: 'Ruby', value: 'ruby' },
          { label: 'PHP', value: 'php' },
        ], default: 'javascript' },
        { id: 'to_lang', label: 'To Language', type: 'select', options: [
          { label: 'JavaScript', value: 'javascript' },
          { label: 'Python', value: 'python' },
          { label: 'TypeScript', value: 'typescript' },
          { label: 'Java', value: 'java' },
          { label: 'C#', value: 'csharp' },
          { label: 'Go', value: 'go' },
          { label: 'Ruby', value: 'ruby' },
          { label: 'PHP', value: 'php' },
        ], default: 'python' },
      ]
    }
  },
  {
    id: 'regex-generator',
    name: 'Regex Generator',
    description: 'Creates regular expressions from descriptions',
    category: 'coding',
    icon: '🎯',
    prompt_template: `Create a regular expression for:

Description: {{description}}
Language: {{language}}
Test cases: {{test_cases}}

Provide:
- The regex pattern
- Explanation of each part
- Example usage code
- Common edge cases`,
    ui_schema: {
      inputs: [
        { id: 'description', label: 'What to Match', type: 'textarea', placeholder: 'Describe what you want to match...', required: true },
        { id: 'test_cases', label: 'Test Cases', type: 'textarea', placeholder: 'Examples to match (optional)', required: false },
      ],
      options: [
        { id: 'language', label: 'Language', type: 'select', options: [
          { label: 'JavaScript', value: 'javascript' },
          { label: 'Python', value: 'python' },
          { label: 'PHP', value: 'php' },
          { label: 'Java', value: 'java' },
        ], default: 'javascript' },
      ]
    }
  },
  {
    id: 'sql-generator',
    name: 'SQL Query Generator',
    description: 'Generates SQL queries from natural language',
    category: 'coding',
    icon: '🗃️',
    prompt_template: `Generate a SQL query for:

Description: {{description}}
Database type: {{database}}
Table schema (if known): {{schema}}

Provide:
- The SQL query
- Explanation
- Optimization tips
- Common variations`,
    ui_schema: {
      inputs: [
        { id: 'description', label: 'What You Need', type: 'textarea', placeholder: 'Describe the query in plain English...', required: true },
        { id: 'schema', label: 'Table Schema', type: 'textarea', placeholder: 'Optional: Describe your tables...', required: false },
      ],
      options: [
        { id: 'database', label: 'Database', type: 'select', options: [
          { label: 'PostgreSQL', value: 'postgresql' },
          { label: 'MySQL', value: 'mysql' },
          { label: 'SQLite', value: 'sqlite' },
          { label: 'SQL Server', value: 'sqlserver' },
        ], default: 'postgresql' },
      ]
    }
  },
  {
    id: 'api-generator',
    name: 'API Endpoint Generator',
    description: 'Generates REST API endpoint code',
    category: 'coding',
    icon: '🔌',
    prompt_template: `Generate API endpoint code for:

Description: {{description}}
Framework: {{framework}}
HTTP method: {{method}}
Authentication: {{auth}}

Provide:
- Complete endpoint code
- Request/response types
- Error handling
- Example usage`,
    ui_schema: {
      inputs: [
        { id: 'description', label: 'Endpoint Description', type: 'textarea', placeholder: 'What should this endpoint do?', required: true },
      ],
      options: [
        { id: 'framework', label: 'Framework', type: 'select', options: [
          { label: 'Express.js', value: 'express' },
          { label: 'Next.js API', value: 'nextjs' },
          { label: 'FastAPI', value: 'fastapi' },
          { label: 'Flask', value: 'flask' },
          { label: 'Django', value: 'django' },
        ], default: 'nextjs' },
        { id: 'method', label: 'HTTP Method', type: 'select', options: [
          { label: 'GET', value: 'GET' },
          { label: 'POST', value: 'POST' },
          { label: 'PUT', value: 'PUT' },
          { label: 'DELETE', value: 'DELETE' },
        ], default: 'GET' },
        { id: 'auth', label: 'Authentication', type: 'select', options: [
          { label: 'None', value: 'none' },
          { label: 'JWT', value: 'jwt' },
          { label: 'API Key', value: 'apikey' },
        ], default: 'none' },
      ]
    }
  },
  {
    id: 'code-debugger',
    name: 'Code Debugger',
    description: 'Identifies and fixes bugs in your code',
    category: 'coding',
    icon: '🐛',
    prompt_template: `Debug this code:

Code:
\`\`\`
{{code}}
\`\`\`

Error/Issue: {{error}}

Provide:
- Root cause analysis
- Fixed code
- Explanation of the fix
- Prevention tips`,
    ui_schema: {
      inputs: [
        { id: 'code', label: 'Buggy Code', type: 'textarea', required: true },
        { id: 'error', label: 'Error/Issue', type: 'textarea', placeholder: 'What error or unexpected behavior?', required: true },
      ]
    }
  },
  {
    id: 'code-refactorer',
    name: 'Code Refactorer',
    description: 'Improves and optimizes existing code',
    category: 'coding',
    icon: '✨',
    prompt_template: `Refactor this code:

\`\`\`
{{code}}
\`\`\`

Focus: {{focus}}

Provide:
- Refactored code
- Changes explained
- Performance improvements
- Best practices applied`,
    ui_schema: {
      inputs: [
        { id: 'code', label: 'Code to Refactor', type: 'textarea', required: true },
      ],
      options: [
        { id: 'focus', label: 'Refactoring Focus', type: 'select', options: [
          { label: 'Readability', value: 'readability' },
          { label: 'Performance', value: 'performance' },
          { label: 'Best Practices', value: 'best-practices' },
          { label: 'All of the Above', value: 'all' },
        ], default: 'all' },
      ]
    }
  },
  {
    id: 'code-documenter',
    name: 'Code Documenter',
    description: 'Generates documentation for your code',
    category: 'coding',
    icon: '📖',
    prompt_template: `Generate documentation for:

\`\`\`
{{code}}
\`\`\`

Style: {{style}}

Provide:
- Function/class documentation
- Parameter descriptions
- Return value documentation
- Usage examples`,
    ui_schema: {
      inputs: [
        { id: 'code', label: 'Code to Document', type: 'textarea', required: true },
      ],
      options: [
        { id: 'style', label: 'Documentation Style', type: 'select', options: [
          { label: 'JSDoc', value: 'jsdoc' },
          { label: 'Python Docstrings', value: 'python' },
          { label: 'Markdown README', value: 'markdown' },
          { label: 'API Documentation', value: 'api' },
        ], default: 'jsdoc' },
      ]
    }
  },
]
