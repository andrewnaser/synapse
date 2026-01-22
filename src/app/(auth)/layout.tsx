export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[var(--bg-base)]">
      {/* Background Effects */}
      <div className="app-bg" />
      <div className="noise-overlay" />
      
      {children}
    </div>
  )
}
