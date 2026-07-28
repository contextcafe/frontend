import React from 'react';
import Link from 'next/link';
import CustomCursor from "@/components/CustomCursor";

export default function CaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CustomCursor />
      <div className="cms-layout">
        {/* Sidebar Navigation */}
        <aside className="cms-sidebar">
          <Link href="/" className="nav-logo" style={{ marginBottom: '40px' }}>
            <div className="nav-logo-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
              </svg>
            </div>
            <span>Context<span className="nav-logo-accent">Cafe</span></span>
          </Link>
          
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
            <div className="section-label" style={{ marginTop: '0', marginBottom: '16px' }}>CMS v2</div>
            <Link href="/case" className="cms-nav-link active">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
              Dashboard
            </Link>
            <Link href="/case/calendar" className="cms-nav-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              Calendar
            </Link>
            <div style={{ marginTop: 'auto' }}>
              <Link href="/" className="cms-nav-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                Back to Main Site
              </Link>
            </div>
          </nav>
        </aside>
        
        {/* Main Content Area */}
        <main className="cms-main">
          {children}
        </main>
      </div>
    </>
  );
}
