"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import CaseTimeline from '@/components/cases/CaseTimeline';
import CaseAiAssistant from '@/components/cases/CaseAiAssistant';

export default function CaseDetail() {
  const params = useParams();
  const caseId = Number(params.id);
  const [caseData, setCaseData] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('proceedings');
  const [aiOpen, setAiOpen] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/cases/${caseId}`)
      .then(res => res.json())
      .then(data => setCaseData(data))
      .catch(err => console.error("Failed to load case", err));
  }, [caseId]);

  const getDcmBadgeClass = (track: string) => {
    switch(track) {
      case 'Urgent': return 'dcm-urgent';
      case 'Fast Track': return 'dcm-fast';
      case 'Complex': return 'dcm-complex';
      default: return 'dcm-normal';
    }
  };

  if (!caseData) return <div style={{ color: 'var(--muted)', fontFamily: 'Space Mono' }}>Loading Case {caseId}...</div>;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <h1 className="features-title" style={{ fontSize: '2.5rem', marginBottom: 0 }}>{caseData.caseNumber}</h1>
            <span className={`dcm-badge ${getDcmBadgeClass(caseData.track)}`}>
              <span style={{ marginRight: '6px' }}>●</span> {caseData.track || 'Normal'}
            </span>
          </div>
          <p className="features-desc" style={{ marginTop: '4px', fontSize: '1rem' }}>
            {caseData.client} <em>vs</em> {caseData.oppositeParty}
          </p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
            <span className="feat-tag">{caseData.court}</span>
            <span className="feat-tag" style={{ borderColor: 'transparent', background: 'var(--bg-glass)' }}>Judge: {caseData.judge}</span>
          </div>
        </div>
        <button className="btn-primary" onClick={() => setAiOpen(true)}>✨ Ask AI</button>
      </div>

      <div style={{ display: 'flex', gap: '20px', borderBottom: '1px solid var(--border-subtle)', marginBottom: '30px' }}>
        {['overview', 'proceedings', 'documents', 'tasks', 'knowledge'].map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{ 
              background: 'none', border: 'none', 
              padding: '12px 0', cursor: 'pointer',
              color: activeTab === tab ? 'var(--primary-light)' : 'var(--muted)',
              borderBottom: activeTab === tab ? '2px solid var(--primary-light)' : '2px solid transparent',
              fontFamily: 'DM Sans', fontSize: '1rem', textTransform: 'capitalize'
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <div style={{ minHeight: '400px' }}>
        {activeTab === 'overview' && (
          <div className="case-card">
            <h3 className="case-title" style={{ fontSize: '1.2rem' }}>Case Details</h3>
            <p className="case-meta">Priority: {caseData.priority}</p>
            <p className="case-meta">Stage: {caseData.stage}</p>
            <p className="case-meta">Status: {caseData.status}</p>
            {caseData.tags && caseData.tags.length > 0 && (
              <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                {caseData.tags.map((tag: string, i: number) => <span key={i} className="feat-tag">{tag}</span>)}
              </div>
            )}
          </div>
        )}
        
        {activeTab === 'proceedings' && (
          <CaseTimeline proceedings={caseData.proceedings} />
        )}

        {activeTab === 'documents' && (
          <div>
            {caseData.documents?.length ? caseData.documents.map((doc: any, i: number) => (
              <div key={i} className="case-card" style={{ marginBottom: '16px', padding: '16px 24px', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <div className="timeline-title">{doc.title}</div>
                  <div className="timeline-desc">Type: {doc.type}</div>
                </div>
                <button className="btn-ghost" style={{ padding: '8px 16px', fontSize: '0.8rem' }}>View / Summarize</button>
              </div>
            )) : <p style={{ color: 'var(--muted)' }}>No documents uploaded.</p>}
          </div>
        )}

        {activeTab === 'tasks' && (
          <div>
            {caseData.tasks?.length ? caseData.tasks.map((task: any, i: number) => (
              <div key={i} className="case-card" style={{ marginBottom: '16px', padding: '16px 24px' }}>
                <div className="timeline-title">{task.title}</div>
                {task.dueDate && <div className="timeline-date">Due: {new Date(task.dueDate).toLocaleDateString()}</div>}
              </div>
            )) : <p style={{ color: 'var(--muted)' }}>No tasks or deadlines.</p>}
          </div>
        )}

        {activeTab === 'knowledge' && (
          <div>
            <h3 className="timeline-title" style={{ marginBottom: '20px' }}>Cited Legal Knowledge</h3>
            {caseData.acts?.map((a: any, i: number) => (
              <div key={i} className="feat-tag" style={{ marginRight: '10px' }}>Act: {a.act.title}</div>
            ))}
            {caseData.sections?.map((s: any, i: number) => (
              <div key={i} className="feat-tag" style={{ marginRight: '10px' }}>Section: {s.section.number}</div>
            ))}
            {caseData.judgments?.map((j: any, i: number) => (
              <div key={i} className="feat-tag" style={{ marginRight: '10px' }}>Judgment: {j.judgment.title}</div>
            ))}
            {(!caseData.acts?.length && !caseData.sections?.length && !caseData.judgments?.length) && (
              <p style={{ color: 'var(--muted)' }}>No knowledge links established yet.</p>
            )}
          </div>
        )}
      </div>

      <CaseAiAssistant caseId={caseId} isOpen={aiOpen} onClose={() => setAiOpen(false)} />
    </div>
  );
}
