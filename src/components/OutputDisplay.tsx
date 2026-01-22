'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Copy, Check, Save, RefreshCw } from 'lucide-react'
import { useStore } from '@/store/useStore'
import { Output, Agent } from '@/types'

interface OutputDisplayProps {
  output: string
  isLoading: boolean
  agent: Agent
  inputData: Record<string, string>
  onRegenerate: () => void
}

export default function OutputDisplay({ output, isLoading, agent, inputData, onRegenerate }: OutputDisplayProps) {
  const [copied, setCopied] = useState(false)
  const [saved, setSaved] = useState(false)
  const { addOutput, incrementTasksCompleted } = useStore()

  const handleCopy = async () => {
    await navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSave = () => {
    const newOutput: Output = {
      id: Date.now().toString(),
      user_id: 'current-user',
      agent_id: agent.id,
      agent_name: agent.name,
      agent_category: agent.category,
      input_data: inputData,
      content: output,
      created_at: new Date().toISOString(),
    }
    addOutput(newOutput)
    incrementTasksCompleted()
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-[var(--text-primary)]">Output</h3>
        
        <AnimatePresence mode="wait">
          {output && !isLoading && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-2"
            >
              <button
                onClick={onRegenerate}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--bg-tertiary)] hover:bg-[var(--bg-card-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all text-sm"
              >
                <RefreshCw size={16} />
                Regenerate
              </button>
              
              <button
                onClick={handleSave}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all text-sm ${
                  saved 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-[var(--bg-tertiary)] hover:bg-[var(--bg-card-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {saved ? <Check size={16} /> : <Save size={16} />}
                {saved ? 'Saved!' : 'Save'}
              </button>
              
              <button
                onClick={handleCopy}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all text-sm ${
                  copied 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-[var(--bg-tertiary)] hover:bg-[var(--bg-card-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="output-box min-h-[300px] relative">
        {isLoading ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="relative">
              <div className="w-12 h-12 rounded-full border-2 border-[var(--neon-blue)]/20 border-t-[var(--neon-blue)] animate-spin" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full border-2 border-[var(--neon-purple)]/20 border-b-[var(--neon-purple)] animate-spin" style={{ animationDirection: 'reverse' }} />
              </div>
            </div>
            <p className="mt-4 text-[var(--text-secondary)] text-sm">Generating output...</p>
          </div>
        ) : output ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="whitespace-pre-wrap"
          >
            {output}
          </motion.div>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-[var(--text-muted)]">
            <span className="text-4xl mb-3">✨</span>
            <p>Your AI-generated output will appear here</p>
          </div>
        )}
      </div>
    </div>
  )
}
