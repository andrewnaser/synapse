import { Agent } from '@/types'

export const educationAgents: Agent[] = [
  {
    id: 'lesson-plan-creator',
    name: 'Lesson Plan Creator',
    description: 'Creates comprehensive lesson plans for educators',
    category: 'education',
    icon: '📚',
    prompt_template: `Create a lesson plan for:

Subject: {{subject}}
Topic: {{topic}}
Grade level: {{grade}}
Duration: {{duration}}

Include:
- Learning objectives
- Required materials
- Introduction/hook
- Main activities
- Assessment methods
- Differentiation strategies
- Closure activity`,
    ui_schema: {
      inputs: [
        { id: 'subject', label: 'Subject', type: 'text', required: true },
        { id: 'topic', label: 'Lesson Topic', type: 'text', required: true },
        { id: 'duration', label: 'Class Duration', type: 'text', placeholder: '45 minutes, 1 hour...', required: false },
      ],
      options: [
        { id: 'grade', label: 'Grade Level', type: 'select', options: [
          { label: 'Elementary (K-5)', value: 'elementary' },
          { label: 'Middle School (6-8)', value: 'middle' },
          { label: 'High School (9-12)', value: 'high' },
          { label: 'College', value: 'college' },
          { label: 'Adult Learning', value: 'adult' },
        ], default: 'high' },
      ]
    }
  },
  {
    id: 'study-guide-creator',
    name: 'Study Guide Creator',
    description: 'Creates comprehensive study guides',
    category: 'education',
    icon: '📖',
    prompt_template: `Create a study guide for:

Subject: {{subject}}
Topics covered: {{topics}}
Level: {{level}}
Format: {{format}}

Include:
- Key concepts summary
- Important definitions
- Main ideas and theories
- Practice questions
- Memory aids/mnemonics
- Review checklist`,
    ui_schema: {
      inputs: [
        { id: 'subject', label: 'Subject', type: 'text', required: true },
        { id: 'topics', label: 'Topics to Cover', type: 'textarea', required: true },
      ],
      options: [
        { id: 'level', label: 'Academic Level', type: 'select', options: [
          { label: 'High School', value: 'high' },
          { label: 'Undergraduate', value: 'undergrad' },
          { label: 'Graduate', value: 'graduate' },
        ], default: 'undergrad' },
        { id: 'format', label: 'Format', type: 'select', options: [
          { label: 'Comprehensive', value: 'comprehensive' },
          { label: 'Quick Review', value: 'quick' },
          { label: 'Exam Prep', value: 'exam' },
        ], default: 'comprehensive' },
      ]
    }
  },
  {
    id: 'explain-concept',
    name: 'Concept Explainer',
    description: 'Explains complex concepts in simple terms',
    category: 'education',
    icon: '💡',
    prompt_template: `Explain the following concept:

Concept: {{concept}}
Audience: {{audience}}
Depth: {{depth}}

Provide:
- Simple explanation
- Real-world examples
- Analogies
- Common misconceptions
- Related concepts
- Further learning suggestions`,
    ui_schema: {
      inputs: [
        { id: 'concept', label: 'Concept to Explain', type: 'textarea', required: true },
        { id: 'audience', label: 'Target Audience', type: 'text', placeholder: 'Beginners, students, professionals...', required: false },
      ],
      options: [
        { id: 'depth', label: 'Explanation Depth', type: 'select', options: [
          { label: 'ELI5 (Very Simple)', value: 'eli5' },
          { label: 'Beginner', value: 'beginner' },
          { label: 'Intermediate', value: 'intermediate' },
          { label: 'Advanced', value: 'advanced' },
        ], default: 'beginner' },
      ]
    }
  },
  {
    id: 'flashcard-generator',
    name: 'Flashcard Generator',
    description: 'Creates study flashcards for any subject',
    category: 'education',
    icon: '🗂️',
    prompt_template: `Create flashcards for:

Subject: {{subject}}
Content/Notes: {{content}}
Number of cards: {{count}}
Type: {{type}}

Generate flashcards with:
- Front (question/term)
- Back (answer/definition)
- Memory tips where helpful`,
    ui_schema: {
      inputs: [
        { id: 'subject', label: 'Subject', type: 'text', required: true },
        { id: 'content', label: 'Content/Notes', type: 'textarea', placeholder: 'Paste notes or describe topics...', required: true },
      ],
      options: [
        { id: 'count', label: 'Number of Cards', type: 'select', options: [
          { label: '10 cards', value: '10' },
          { label: '20 cards', value: '20' },
          { label: '30 cards', value: '30' },
        ], default: '20' },
        { id: 'type', label: 'Flashcard Type', type: 'select', options: [
          { label: 'Definitions', value: 'definitions' },
          { label: 'Q&A', value: 'qa' },
          { label: 'Fill in Blank', value: 'fill' },
          { label: 'Mixed', value: 'mixed' },
        ], default: 'mixed' },
      ]
    }
  },
  {
    id: 'assignment-rubric',
    name: 'Rubric Creator',
    description: 'Creates grading rubrics for assignments',
    category: 'education',
    icon: '📊',
    prompt_template: `Create a grading rubric for:

Assignment: {{assignment}}
Subject: {{subject}}
Grade level: {{grade}}
Point scale: {{scale}}

Create rubric with:
- Clear criteria categories
- Detailed level descriptors
- Point allocations
- Overall grade calculation`,
    ui_schema: {
      inputs: [
        { id: 'assignment', label: 'Assignment Description', type: 'textarea', required: true },
        { id: 'subject', label: 'Subject', type: 'text', required: true },
      ],
      options: [
        { id: 'grade', label: 'Grade Level', type: 'select', options: [
          { label: 'Middle School', value: 'middle' },
          { label: 'High School', value: 'high' },
          { label: 'College', value: 'college' },
        ], default: 'high' },
        { id: 'scale', label: 'Point Scale', type: 'select', options: [
          { label: '4-point scale', value: '4' },
          { label: '5-point scale', value: '5' },
          { label: '100-point scale', value: '100' },
        ], default: '4' },
      ]
    }
  },
  {
    id: 'course-outline',
    name: 'Course Outline Creator',
    description: 'Creates comprehensive course outlines',
    category: 'education',
    icon: '📋',
    prompt_template: `Create a course outline for:

Course title: {{title}}
Subject area: {{subject}}
Duration: {{duration}}
Target audience: {{audience}}

Include:
- Course description
- Learning objectives
- Weekly/module breakdown
- Key topics per session
- Assessment methods
- Required resources`,
    ui_schema: {
      inputs: [
        { id: 'title', label: 'Course Title', type: 'text', required: true },
        { id: 'subject', label: 'Subject Area', type: 'text', required: true },
        { id: 'audience', label: 'Target Audience', type: 'text', required: false },
      ],
      options: [
        { id: 'duration', label: 'Course Duration', type: 'select', options: [
          { label: '4 weeks', value: '4 weeks' },
          { label: '8 weeks', value: '8 weeks' },
          { label: '12 weeks', value: '12 weeks' },
          { label: '16 weeks (semester)', value: '16 weeks' },
        ], default: '8 weeks' },
      ]
    }
  },
]
