'use client';

import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarWidth, setSidebarWidth] = useState(260);
  
  // Listen for sidebar collapse state
  useEffect(() => {
    const checkSidebar = () => {
      const sidebar = document.querySelector('aside');
      if (sidebar) {
        setSidebarWidth(sidebar.offsetWidth);
      }
    };
    
    // Initial check
    checkSidebar();
    
    // Watch for changes
    const observer = new MutationObserver(checkSidebar);
    const sidebar = document.querySelector('aside');
    if (sidebar) {
      observer.observe(sidebar, { attributes: true, attributeFilter: ['class', 'style'] });
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-base)]">
      {/* Background Effects */}
      <div className="app-bg" />
      <div className="noise-overlay" />
      
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div 
        className="min-h-screen transition-all duration-300"
        style={{ marginLeft: sidebarWidth }}
      >
        <Header />
        <main className="p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
