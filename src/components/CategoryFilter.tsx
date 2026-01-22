'use client'

import { motion } from 'framer-motion'
import { AgentCategory } from '@/types'
import { categories } from '@/data/agents'

interface CategoryFilterProps {
  selected: AgentCategory | 'all'
  onSelect: (category: AgentCategory | 'all') => void
}

export default function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelect('all')}
        className={`category-pill transition-all ${
          selected === 'all' ? 'active' : ''
        }`}
      >
        <span>🌟</span>
        <span>All Agents</span>
      </button>
      
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelect(category.id)}
          className={`category-pill transition-all ${
            selected === category.id ? 'active' : ''
          }`}
        >
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  )
}
