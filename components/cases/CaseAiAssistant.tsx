"use client";

import React, { useState } from 'react';

export default function CaseAiAssistant({ caseId, isOpen, onClose }: { caseId: number; isOpen: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState<{role: 'user'|'bot', text: string}[]>([
    { role: 'bot', text: 'Hello! I am your Private Case Assistant. I have context on all proceedings and uploaded documents for this matter. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async (presetInput?: string) => {
    const textToSend = presetInput || input;
    if (!textToSend.trim()) return;

    setMessages(prev => [...prev, { role: 'user', text: textToSend }]);
    setInput('');
    setLoading(true);

    try {
      // In a real app, you'd fetch from your backend
      const res = await fetch(`http://localhost:3000/cases/${caseId}/ai/ask`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: textToSend })
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'bot', text: data.answer }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'bot', text: 'Sorry, I encountered an error connecting to the AI.' }]);
    }
    setLoading(false);
  };

  return (
    <div className={`ai-panel ${isOpen ? 'open' : ''}`}>
      <div className="ai-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>Private RAG Assistant</span>
        <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--ivory)', fontSize: '1.5rem', cursor: 'pointer' }}>&times;</button>
      </div>
      
      <div className="ai-body">
        {messages.map((msg, idx) => (
          <div key={idx} className={`ai-msg ${msg.role}`}>
            {msg.text}
          </div>
        ))}
        {loading && <div className="ai-msg bot" style={{ fontStyle: 'italic', opacity: 0.7 }}>Thinking...</div>}
      </div>

      <div style={{ padding: '0 20px 10px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <button className="feat-tag" style={{ cursor: 'pointer', padding: '6px 12px' }} onClick={() => sendMessage("Summarize the latest hearing")}>Summarize Hearing</button>
        <button className="feat-tag" style={{ cursor: 'pointer', padding: '6px 12px' }} onClick={() => sendMessage("Draft an appeal for this case")}>Draft Appeal</button>
      </div>
      
      <div className="ai-input-area">
        <input 
          type="text" 
          className="ai-input" 
          placeholder="Ask a question..." 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button className="ai-btn" onClick={() => sendMessage()}>Send</button>
      </div>
    </div>
  );
}
