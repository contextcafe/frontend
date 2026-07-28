import React from 'react';

export default function CaseTimeline({ proceedings }: { proceedings: any[] }) {
  if (!proceedings || proceedings.length === 0) {
    return <div style={{ color: 'var(--muted)' }}>No proceedings recorded for this case.</div>;
  }

  // Sort chronologically descending
  const sorted = [...proceedings].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="timeline">
      {sorted.map((proc, idx) => (
        <div key={idx} className="timeline-item">
          <div className="timeline-date">{new Date(proc.date).toLocaleDateString('en-GB')}</div>
          <div className="timeline-title">{proc.stage}</div>
          <div className="timeline-desc">{proc.notes || "No detailed notes provided for this hearing."}</div>
        </div>
      ))}
    </div>
  );
}
