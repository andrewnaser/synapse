export type UserType = 'standard' | 'pro'

export interface User {
  id: string
  email: string
  user_type?: UserType
  unlocked_upsells: string[]
  created_at: string
}

export interface Agent {
  id: string
  name: string
  description: string
  category: AgentCategory
  icon: string
  prompt_template: string
  ui_schema: UISchema
  example_output?: string
  tags?: string[]
}

export interface UISchema {
  inputs: InputField[]
  options?: OptionField[]
}

export interface InputField {
  id: string
  label: string
  type: 'text' | 'textarea' | 'select'
  placeholder?: string
  required?: boolean
  options?: { label: string; value: string }[]
}

export interface OptionField {
  id: string
  label: string
  type: 'select' | 'toggle'
  options?: { label: string; value: string }[]
  default?: string | boolean
}

export interface Output {
  id: string
  user_id: string
  agent_id: string
  agent_name: string
  agent_category: AgentCategory
  input_data: Record<string, string>
  content: string
  created_at: string
}

export type AgentCategory = 
  | 'writing'
  | 'marketing'
  | 'social-media'
  | 'translation'
  | 'coding'
  | 'business'
  | 'automation'
  | 'email'
  | 'seo'
  | 'creative'
  | 'education'
  | 'sales'

export type UpsellType = '10x' | 'infinite' | 'automation' | 'dfy'

export interface UpsellInfo {
  id: UpsellType
  name: string
  tagline: string
  description: string
  features: string[]
  icon: string
}

export interface NavItem {
  name: string
  href: string
  icon: string
  badge?: string
  locked?: boolean
  upsellRequired?: UpsellType
}
