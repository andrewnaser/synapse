'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  HelpCircle, 
  MessageCircle, 
  Book, 
  Mail, 
  ChevronDown, 
  ChevronUp,
  CheckCircle,
  AlertCircle,
  Send
} from 'lucide-react'
import Header from '@/components/Header'

const faqs = [
  {
    question: 'How do I get started with Synapse AI?',
    answer: 'Simply browse our Agents directory, select an agent that matches your task, fill in the input fields, and click Generate. Your AI-powered output will appear instantly.',
  },
  {
    question: 'What are the different agent categories?',
    answer: 'We have 12 categories: Writing, Marketing, Social Media, Email, Coding, Business, Translation, SEO, Creative, Education, Sales, and Automation. Each contains specialized agents for specific tasks.',
  },
  {
    question: 'How do I save my generated outputs?',
    answer: 'After generating content, click the "Save" button next to the output. All saved outputs can be found in the Saved Outputs section, where you can organize, copy, or delete them.',
  },
  {
    question: 'What is 10X Mode?',
    answer: '10X Mode generates 10 variations of your content with a single click. Perfect for A/B testing, brainstorming, or when you need multiple options to choose from.',
  },
  {
    question: 'How does the Automation feature work?',
    answer: 'Automation allows you to chain multiple agents together. For example, you can create a workflow that takes an idea, generates a script, creates a caption, and produces a CTA - all automatically.',
  },
  {
    question: 'Can I customize the AI prompts?',
    answer: 'The base plan uses our pre-optimized prompts for best results. Premium plans may include prompt customization features for advanced users.',
  },
  {
    question: 'What happens to my data?',
    answer: 'Your inputs and outputs are processed securely. Saved outputs are stored in your account. We do not use your content to train AI models.',
  },
  {
    question: 'How do I get better results from agents?',
    answer: 'Be specific in your inputs, provide context, and use the available options (tone, length, style) to guide the output. Check our Training Center for detailed tips.',
  },
]

const systemStatus = [
  { name: 'API Services', status: 'operational' },
  { name: 'Authentication', status: 'operational' },
  { name: 'Agent Processing', status: 'operational' },
  { name: 'Data Storage', status: 'operational' },
]

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setContactForm({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <>
      <Header title="Support" />
      
      <div className="p-6 max-w-5xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl font-bold mb-3">How Can We Help?</h1>
          <p className="text-[var(--text-secondary)] text-lg">
            Find answers, get support, or contact our team
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10"
        >
          <a href="#faq" className="glass-card glass-card-hover p-5 text-center">
            <HelpCircle size={32} className="mx-auto mb-3 text-[var(--neon-blue)]" />
            <h3 className="font-semibold mb-1">FAQ</h3>
            <p className="text-sm text-[var(--text-secondary)]">Quick answers to common questions</p>
          </a>
          
          <a href="/training" className="glass-card glass-card-hover p-5 text-center">
            <Book size={32} className="mx-auto mb-3 text-[var(--neon-purple)]" />
            <h3 className="font-semibold mb-1">Training Center</h3>
            <p className="text-sm text-[var(--text-secondary)]">Learn how to use Synapse AI</p>
          </a>
          
          <a href="#contact" className="glass-card glass-card-hover p-5 text-center">
            <MessageCircle size={32} className="mx-auto mb-3 text-green-400" />
            <h3 className="font-semibold mb-1">Contact Us</h3>
            <p className="text-sm text-[var(--text-secondary)]">Get in touch with our team</p>
          </a>
        </motion.div>

        {/* System Status */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mb-10"
        >
          <h2 className="text-xl font-semibold mb-4">System Status</h2>
          <div className="glass-card p-5">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle size={20} className="text-green-400" />
              <span className="font-medium text-green-400">All Systems Operational</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {systemStatus.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-sm text-[var(--text-secondary)]">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          id="faq"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-10"
        >
          <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
          
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.03 }}
                className="glass-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-5 flex items-center justify-between text-left hover:bg-[var(--bg-tertiary)]/50 transition-colors"
                >
                  <span className="font-medium pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp size={20} className="flex-shrink-0 text-[var(--neon-blue)]" />
                  ) : (
                    <ChevronDown size={20} className="flex-shrink-0 text-[var(--text-muted)]" />
                  )}
                </button>
                
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-5 pb-5"
                  >
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Form */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          
          <div className="glass-card p-6">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <CheckCircle size={48} className="mx-auto mb-4 text-green-400" />
                <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                <p className="text-[var(--text-secondary)]">
                  We'll get back to you as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="Your name"
                      className="input-field"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      placeholder="you@example.com"
                      className="input-field"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                    Subject
                  </label>
                  <select
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    className="input-field"
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Question</option>
                    <option value="technical">Technical Issue</option>
                    <option value="billing">Billing Inquiry</option>
                    <option value="feature">Feature Request</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                    Message
                  </label>
                  <textarea
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="Describe your question or issue..."
                    className="textarea-field"
                    rows={5}
                    required
                  />
                </div>
                
                <button type="submit" className="btn-primary flex items-center gap-2">
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </motion.section>
      </div>
    </>
  )
}
