'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { days } from '@/data/curriculum';
import { dayContent } from '@/data/dayContent';
import { useProgress } from '@/lib/progress';

const domainColors = { 1:'var(--d1)', 2:'var(--d2)', 3:'var(--d3)', 4:'var(--d4)', 5:'var(--d5)' };

function ContentBlock({ block, domainColor }) {
  if (block.type === 'h3') return <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: domainColor }}>{block.text}</h3>;
  if (block.type === 'p') return <p>{block.text}</p>;
  if (block.type === 'ul') return (
    <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
      {block.items.map((item, i) => <li key={i} style={{ marginBottom: '0.4rem' }}>{item}</li>)}
    </ul>
  );
  if (block.type === 'analogy') return (
    <div className="callout callout-analogy" style={{ margin: '1.25rem 0' }}>
      <span className="callout-icon">💡</span>
      <div className="callout-body"><p>{block.text}</p></div>
    </div>
  );
  if (block.type === 'tip') return (
    <div className="callout callout-tip" style={{ margin: '1.25rem 0' }}>
      <span className="callout-icon">🎯</span>
      <div className="callout-body">
        <strong style={{ display: 'block', marginBottom: '0.25rem', color: 'var(--amber)' }}>Exam Tip</strong>
        <p>{block.text}</p>
      </div>
    </div>
  );
  if (block.type === 'realworld') return (
    <div style={{ background: 'var(--bg3)', borderRadius: 'var(--r)', padding: '1rem 1.25rem', margin: '1rem 0', borderLeft: '3px solid var(--emerald)' }}>
      <strong style={{ color: 'var(--emerald)', display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem' }}>🌍 Real-World Examples</strong>
      <ul style={{ paddingLeft: '1.25rem', margin: 0 }}>
        {block.items.map((item, i) => <li key={i} style={{ marginBottom: '0.3rem', fontSize: '0.9rem' }}>{item}</li>)}
      </ul>
    </div>
  );
  if (block.type === 'table') return (
    <div className="table-wrap" style={{ margin: '1.25rem 0' }}>
      <table>
        <thead><tr>{block.headers.map(h => <th key={h}>{h}</th>)}</tr></thead>
        <tbody>{block.rows.map((row, ri) => <tr key={ri}>{row.map((cell, ci) => <td key={ci}>{cell}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
  return null;
}

export default function DayPageClient({ dayNum }) {
  const [activeHour, setActiveHour] = useState(0);
  const { isDayDone, toggleDay } = useProgress();
  const done = isDayDone(dayNum);

  const dayMeta = days.find(d => d.day === dayNum);
  const content = dayContent[dayNum];

  if (!dayMeta) return notFound();

  const domainColor = domainColors[dayMeta.domain];
  const prevDay = dayNum > 1 ? dayNum - 1 : null;
  const nextDay = dayNum < 17 ? dayNum + 1 : null;

  if (!content) {
    return (
      <>
        <Navbar />
        <main>
          <div style={{ background: 'var(--bg2)', borderBottom: '1px solid var(--border)', padding: '5rem 0 3rem', borderTop: `4px solid ${domainColor}` }}>
            <div className="container">
              <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text3)', marginBottom: '1rem' }}>
                <Link href="/" style={{ color: 'var(--text3)' }}>Home</Link>
                <span>/</span><Link href="/curriculum" style={{ color: 'var(--text3)' }}>Curriculum</Link>
                <span>/</span><span>Day {dayNum}</span>
              </div>
              <span className={`badge badge-d${dayMeta.domain}`} style={{ marginBottom: '0.75rem', display: 'inline-block' }}>Domain {dayMeta.domain}</span>
              <h1 style={{ marginBottom: '0.5rem' }}>Day {dayNum}: {dayMeta.title}</h1>
              <p style={{ color: 'var(--text2)' }}>{dayMeta.preview}</p>
            </div>
          </div>
          <div className="container" style={{ padding: '3rem 1.5rem' }}>
            <div className="card" style={{ maxWidth: '600px', borderTop: `3px solid ${domainColor}` }}>
              <h3 style={{ marginBottom: '1rem' }}>Topics Covered</h3>
              <ul style={{ paddingLeft: '1.5rem' }}>
                {dayMeta.topics.map(t => <li key={t} style={{ marginBottom: '0.5rem' }}>{t}</li>)}
              </ul>
              {dayMeta.hasQuiz && (
                <Link href={`/quizzes/module-${dayMeta.domain}`} className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-flex' }}>
                  Take Module {dayMeta.domain} Quiz →
                </Link>
              )}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
              {prevDay ? <Link href={`/days/${prevDay}`} className="btn btn-outline">← Day {prevDay}</Link> : <span />}
              {nextDay && <Link href={`/days/${nextDay}`} className="btn btn-primary">Day {nextDay} →</Link>}
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <div style={{ background: 'var(--bg2)', borderBottom: '1px solid var(--border)', padding: '5rem 0 2rem', borderTop: `4px solid ${domainColor}` }}>
          <div className="container">
            <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text3)', marginBottom: '1rem' }}>
              <Link href="/" style={{ color: 'var(--text3)' }}>Home</Link>
              <span>/</span><Link href="/curriculum" style={{ color: 'var(--text3)' }}>Curriculum</Link>
              <span>/</span><span>Day {dayNum}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text3)' }}>DAY {dayNum} OF 17</span>
                  <span className={`badge badge-d${dayMeta.domain}`}>Domain {dayMeta.domain}</span>
                  <span className="badge badge-module">Module {dayMeta.module}</span>
                </div>
                <h1 style={{ marginBottom: '0.5rem' }}>{content.title}</h1>
                <p style={{ color: 'var(--text2)', maxWidth: '600px', margin: 0 }}>{content.intro}</p>
              </div>
              <button onClick={() => toggleDay(dayNum)} className="btn" style={{
                background: done ? 'rgba(16,185,129,0.15)' : 'var(--bg3)',
                color: done ? 'var(--emerald)' : 'var(--text2)',
                border: `1px solid ${done ? 'var(--emerald)' : 'var(--border)'}`,
              }}>
                {done ? '✓ Completed' : 'Mark Complete'}
              </button>
            </div>

            {/* Hour tabs */}
            {content.sections.length > 1 && (
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                {content.sections.map((sec, i) => (
                  <button key={i} onClick={() => setActiveHour(i)} className="btn btn-sm"
                    style={{ background: activeHour === i ? domainColor : 'var(--bg3)', color: activeHour === i ? '#fff' : 'var(--text2)', border: 'none' }}>
                    Hour {i + 1}: {sec.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="container" style={{ padding: '2.5rem 1.5rem', display: 'grid', gridTemplateColumns: '1fr 260px', gap: '2rem', alignItems: 'start' }}>
          <div>
            {content.sections[activeHour]?.content.map((block, i) => (
              <ContentBlock key={i} block={block} domainColor={domainColor} />
            ))}

            <div className="divider" />
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
              {prevDay ? <Link href={`/days/${prevDay}`} className="btn btn-outline">← Day {prevDay}</Link> : <span />}
              {nextDay && <Link href={`/days/${nextDay}`} className="btn btn-primary">Day {nextDay} →</Link>}
            </div>
          </div>

          <div style={{ position: 'sticky', top: '90px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="card">
              <h4 style={{ marginBottom: '0.75rem', fontSize: '0.875rem' }}>Topics</h4>
              {dayMeta.topics.map((t, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.4rem', fontSize: '0.8rem', color: 'var(--text2)' }}>
                  <span style={{ color: domainColor }}>•</span>{t}
                </div>
              ))}
            </div>
            {dayMeta.hasQuiz && (
              <Link href={`/quizzes/module-${dayMeta.module}`} className="btn btn-primary" style={{ justifyContent: 'center' }}>
                📝 Take Module {dayMeta.module} Quiz
              </Link>
            )}
            <Link href="/cheatsheet" className="btn btn-outline" style={{ justifyContent: 'center' }}>📋 Cheat Sheet</Link>
            <Link href={`/domains/${['','security-principles','bc-dr-ir','access-controls','network-security','security-operations'][dayMeta.domain]}`} className="btn btn-outline" style={{ justifyContent: 'center' }}>
              Domain {dayMeta.domain} Notes →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <style>{`@media(max-width:900px){.container{grid-template-columns:1fr!important;}}`}</style>
    </>
  );
}
