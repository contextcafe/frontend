"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CaseDashboard() {
  const [cases, setCases] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/cases')
      .then(res => res.json())
      .then(data => {
        setCases(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch cases:", err);
        setLoading(false);
      });
  }, []);

  const getDcmBadgeClass = (track: string) => {
    switch(track) {
      case 'Urgent': return 'dcm-urgent';
      case 'Fast Track': return 'dcm-fast';
      case 'Complex': return 'dcm-complex';
      default: return 'dcm-normal';
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
        <div>
          <h1 className="features-title">Cases <em>Dashboard</em></h1>
          <p className="features-desc" style={{ marginTop: '12px' }}>Overview of all your active matters and AI-assigned DCM tracks.</p>
        </div>
        <button className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.85rem' }}>+ New Case</button>
      </div>

      {loading ? (
        <div style={{ color: 'var(--muted)', fontFamily: 'Space Mono' }}>Loading cases...</div>
      ) : (
        <div className="case-grid">
          {cases.map((c: any) => (
            <Link href={`/case/${c.id}`} key={c.id}>
              <div className="case-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div className={`dcm-badge ${getDcmBadgeClass(c.track)}`}>
                    <span style={{ marginRight: '6px' }}>●</span> {c.track || 'Normal'}
                  </div>
                  <span style={{ fontFamily: 'Space Mono', fontSize: '0.7rem', color: 'var(--muted)' }}>#{c.id}</span>
                </div>
                
                <h3 className="case-title">{c.caseNumber}</h3>
                <div className="case-meta">
                  {c.client} v. {c.oppositeParty}
                </div>
                
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span className="feat-tag">{c.court}</span>
                  <span className="feat-tag" style={{ borderColor: 'transparent', background: 'var(--bg-glass)', color: 'var(--muted)' }}>
                    {c.stage}
                  </span>
                </div>
              </div>
            </Link>
          ))}
          {cases.length === 0 && (
            <div style={{ color: 'var(--muted)' }}>No cases found.</div>
          )}
        </div>
      )}
    </div>
  );
}
