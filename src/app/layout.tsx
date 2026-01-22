import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
})

export const metadata: Metadata = {
  title: 'Synapse AI - Your AI Workforce',
  description: 'Access 100+ specialized AI agents for writing, marketing, coding, and more. One click. One agent. One perfect result.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={inter.className}>
        <div className="animated-bg grid-pattern" />
        {children}
      </body>
    </html>
  )
}
