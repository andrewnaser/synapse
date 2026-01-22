'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { agents } from '@/data/agents';
import { useStore } from '@/store/useStore';

const Icons = {
  back: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  ),
  sparkle: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
    </svg>
  ),
  copy: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  ),
  save: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </svg>
  ),
  refresh: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M23 4v6h-6M1 20v-6h6" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  ),
  check: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
};

const toneOptions = ['Professional', 'Casual', 'Friendly', 'Formal', 'Creative', 'Persuasive'];
const lengthOptions = ['Brief', 'Standard', 'Detailed', 'Comprehensive'];

export default function AgentPage() {
  const params = useParams();
  const { addOutput, incrementTasks } = useStore();
  
  const agent = agents.find((a) => a.id === params.id);
  
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [tone, setTone] = useState('Professional');
  const [length, setLength] = useState('Standard');
  const [output, setOutput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');

  // Get inputs from ui_schema
  const inputs = agent?.ui_schema?.inputs || [];

  useEffect(() => {
    if (agent && inputs.length > 0) {
      const initialData: Record<string, string> = {};
      inputs.forEach((input) => {
        initialData[input.id] = '';
      });
      setFormData(initialData);
    }
  }, [agent]);

  if (!agent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🤖</div>
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Agent Not Found</h2>
          <p className="text-[var(--text-muted)] mb-6">The agent you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/agents" className="btn-primary">
            {Icons.back}
            <span>Back to Agents</span>
          </Link>
        </div>
      </div>
    );
  }

  const handleInputChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Build the user message from form inputs
  const buildUserMessage = () => {
    const inputParts = inputs
      .map((input) => {
        const value = formData[input.id];
        if (value) {
          return `${input.label}: ${value}`;
        }
        return null;
      })
      .filter(Boolean);

    const message = `
${inputParts.join('\n')}

Preferences:
- Tone: ${tone}
- Length: ${length}
    `.trim();

    return message;
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    setOutput('');
    setError('');

    try {
      const userMessage = buildUserMessage();
      
      // Use the agent's prompt_template as the system prompt
      const systemPrompt = agent.prompt_template || `You are a helpful AI assistant specialized in ${agent.category}. ${agent.description}`;
      
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          systemPrompt: systemPrompt,
          userMessage: userMessage,
          temperature: 0.9,
          maxTokens: length === 'Brief' ? 256 : length === 'Standard' ? 512 : length === 'Detailed' ? 1024 : 2048,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate');
      }

      setOutput(data.output);
      incrementTasks();
    } catch (err) {
      console.error('Generation error:', err);
      setError(err instanceof Error ? err.message : 'An error occurred during generation');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSave = () => {
    addOutput({
      id: Date.now().toString(),
      agentId: agent.id,
      agentName: agent.name,
      content: output,
      createdAt: new Date().toISOString(),
      category: agent.category,
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const categoryColors: Record<string, string> = {
    writing: '#f59e0b',
    marketing: '#84cc16',
    social: '#06b6d4',
    email: '#a78bfa',
    coding: '#ec4899',
    business: '#14b8a6',
    translation: '#f97316',
    seo: '#6366f1',
    creative: '#eab308',
    education: '#22c55e',
    sales: '#ef4444',
    automation: '#8b5cf6',
  };

  const color = categoryColors[agent.category] || '#f59e0b';

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] mb-6 animate-fade-up">
        <Link href="/agents" className="hover:text-[var(--text-primary)] transition-colors">
          Agents
        </Link>
        <span>/</span>
        <span className="text-[var(--text-primary)]">{agent.name}</span>
      </div>

      {/* Agent Header */}
      <div className="card p-6 mb-8 animate-fade-up" style={{ animationDelay: '0.05s' }}>
        <div className="flex items-start gap-5">
          <span className="text-5xl">{agent.icon}</span>
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-2">{agent.name}</h1>
                <p className="text-[var(--text-secondary)] mb-4">{agent.description}</p>
              </div>
              <span 
                className="badge"
                style={{ backgroundColor: `${color}15`, color }}
              >
                {agent.category}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-6">Input Details</h2>
            
            <div className="space-y-5">
              {inputs.map((input) => (
                <div key={input.id}>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    {input.label}
                    {input.required && <span className="text-red-400 ml-1">*</span>}
                  </label>
                  {input.type === 'textarea' ? (
                    <textarea
                      placeholder={input.placeholder}
                      value={formData[input.id] || ''}
                      onChange={(e) => handleInputChange(input.id, e.target.value)}
                      className="textarea-field"
                      rows={4}
                    />
                  ) : input.type === 'select' && input.options ? (
                    <select
                      value={formData[input.id] || ''}
                      onChange={(e) => handleInputChange(input.id, e.target.value)}
                      className="input-field"
                    >
                      <option value="">Select...</option>
                      {input.options.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type="text"
                      placeholder={input.placeholder}
                      value={formData[input.id] || ''}
                      onChange={(e) => handleInputChange(input.id, e.target.value)}
                      className="input-field"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Options */}
          <div className="card p-6">
            <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-6">Options</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Tone
                </label>
                <select
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  className="input-field"
                >
                  {toneOptions.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Length
                </label>
                <select
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  className="input-field"
                >
                  {lengthOptions.map((l) => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="btn-primary w-full py-4 text-base"
          >
            {isGenerating ? (
              <>
                <span className="loader !w-5 !h-5 !border-2" />
                <span>Generating...</span>
              </>
            ) : (
              <>
                {Icons.sparkle}
                <span>Generate Output</span>
              </>
            )}
          </button>
        </div>

        {/* Output Section */}
        <div className="animate-fade-up" style={{ animationDelay: '0.15s' }}>
          <div className="card p-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-[var(--text-primary)]">Output</h2>
              {output && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopy}
                    className="btn-ghost !p-2"
                    title="Copy to clipboard"
                  >
                    {copied ? Icons.check : Icons.copy}
                  </button>
                  <button
                    onClick={handleSave}
                    className="btn-ghost !p-2"
                    title="Save output"
                  >
                    {saved ? Icons.check : Icons.save}
                  </button>
                  <button
                    onClick={handleGenerate}
                    className="btn-ghost !p-2"
                    title="Regenerate"
                    disabled={isGenerating}
                  >
                    {Icons.refresh}
                  </button>
                </div>
              )}
            </div>

            <div className="flex-1 min-h-[400px]">
              {error ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-red-500/5 rounded-xl border border-red-500/20">
                  <div className="text-5xl mb-4">⚠️</div>
                  <h3 className="text-lg font-medium text-red-400 mb-2">
                    Generation Failed
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] max-w-xs">
                    {error}
                  </p>
                  <button
                    onClick={handleGenerate}
                    className="btn-secondary mt-4"
                  >
                    Try Again
                  </button>
                </div>
              ) : output ? (
                <div className="output-box h-full overflow-auto whitespace-pre-wrap">
                  {output}
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-[var(--bg-surface)] rounded-xl border border-dashed border-[var(--border-default)]">
                  <div className="text-5xl mb-4 opacity-50">✨</div>
                  <h3 className="text-lg font-medium text-[var(--text-secondary)] mb-2">
                    Ready to Generate
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] max-w-xs">
                    Fill in the inputs on the left and click &quot;Generate Output&quot; to see the magic happen.
                  </p>
                </div>
              )}
            </div>

            {/* Status Messages */}
            {(copied || saved) && (
              <div className="mt-4 p-3 rounded-lg bg-[var(--accent-secondary)]/10 border border-[var(--accent-secondary)]/30 flex items-center gap-2 animate-fade-up">
                {Icons.check}
                <span className="text-sm text-[var(--accent-secondary)]">
                  {copied ? 'Copied to clipboard!' : 'Saved to your outputs!'}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
