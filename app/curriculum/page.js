'use client';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { days, domains } from '@/data/curriculum';
import { useProgress } from '@/lib/progress';

const moduleNames = { 1: 'Module 1 — Security Principles', 2: 'Module 2 — BC/DR/IR', 3: 'Module 3 — Access Controls', 4: 'Module 4 — Network Security', 5: 'Module 5 — Security Operations' };
const moduleColors = { 1: 'var(--d1)', 2: 'var(--d2)', 3: 'var(--d3)', 4: 'var(--d4)', 5: 'var(--d5)' };

export default function CurriculumPage() {
  const { isDayDone, toggleDay, totalDaysDone, overallPct } = useProgress();

  let currentModule = 0;

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <div style={{ background: 'var(--bg2)', borderBottom: '1px solid var(--border)', padding: '5rem 0 3rem' }}>
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text3)', marginBottom: '1rem' }}>
              <Link href="/" style={{ color: 'var(--text3)' }}>Home</Link> <span>/</span> <span style={{ color: 'var(--text2)' }}>Curriculum</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}>
              <div>
                <h1 style={{ marginBottom: '0.5rem' }}>17-Day Curriculum</h1>
                <p style={{ color: 'var(--text2)', maxWidth: '500px', margin: 0 }}>50 hours across 5 ISC2 CC domains. Mark lessons complete to track your progress.</p>
              </div>
              <div style={{ background: 'var(--bg3)', borderRadius: 'var(--r2)', padding: '1.25rem 1.5rem', minWidth: '200px', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent)' }}>{totalDaysDone}<span style={{ color: 'var(--text3)', fontSize: '1.25rem' }}>/17</span></div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text2)', marginBottom: '0.75rem' }}>Days completed</div>
                <div className="progress-bar"><div className="progress-fill" style={{ width: `${overallPct}%` }} /></div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text3)', marginTop: '0.4rem' }}>{overallPct}% complete</div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="container" style={{ padding: '3rem 1.5rem' }}>
          {days.map((day) => {
            const isNewModule = day.module !== currentModule;
            if (isNewModule) currentModule = day.module;
            const done = isDayDone(day.day);
            const domain = domains[day.domain - 1];

            return (
              <div key={day.day}>
                {isNewModule && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: day.module === 1 ? '0 0 1.5rem' : '2rem 0 1.5rem' }}>
                    <div style={{ height: '2px', flex: 1, background: `linear-gradient(90deg, ${moduleColors[day.module]}, transparent)` }} />
                    <div style={{ background: moduleColors[day.module], color: '#fff', borderRadius: '99px', padding: '0.3rem 1rem', fontSize: '0.8rem', fontWeight: 700, whiteSpace: 'nowrap' }}>
                      {moduleNames[day.module]} — {domain.weight}%
                    </div>
                    <div style={{ height: '2px', flex: 1, background: `linear-gradient(270deg, ${moduleColors[day.module]}, transparent)` }} />
                  </div>
                )}
                <div style={{
                  display: 'flex', gap: '1rem', alignItems: 'stretch',
                  marginBottom: '0.75rem',
                  opacity: done ? 0.7 : 1, transition: 'opacity .2s',
                }}>
                  {/* Day number */}
                  <div style={{
                    width: '48px', flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px',
                  }}>
                    <div style={{
                      width: '48px', height: '48px', borderRadius: '50%', border: `2px solid ${done ? 'var(--emerald)' : 'var(--border2)'}`,
                      background: done ? 'rgba(16,185,129,0.15)' : 'var(--bg2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: 700, fontSize: '0.875rem', color: done ? 'var(--emerald)' : 'var(--text2)',
                    }}>
                      {done ? '✓' : day.day}
                    </div>
                    {day.day < 17 && <div style={{ width: '2px', flex: 1, background: 'var(--border)', minHeight: '20px' }} />}
                  </div>

                  {/* Card */}
                  <div className="card" style={{ flex: 1, padding: '1.25rem', marginBottom: 0, borderLeft: `3px solid ${moduleColors[day.module]}` }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem' }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text3)' }}>DAY {day.day}</span>
                          <span className={`badge badge-d${day.domain}`}>Domain {day.domain}</span>
                          {day.hasQuiz && <span className="badge badge-module">📝 Quiz</span>}
                        </div>
                        <h3 style={{ fontSize: '1rem', marginBottom: '0.35rem' }}>{day.title}</h3>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text2)', margin: '0 0 0.75rem' }}>{day.preview}</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                          {day.topics.slice(0, 4).map(t => <span key={t} className="tag">{t}</span>)}
                          {day.topics.length > 4 && <span className="tag">+{day.topics.length - 4} more</span>}
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexShrink: 0 }}>
                        <Link href={`/days/${day.day}`} className="btn btn-outline btn-sm">Study →</Link>
                        <button
                          onClick={() => toggleDay(day.day)}
                          className="btn btn-sm"
                          style={{
                            background: done ? 'rgba(16,185,129,0.15)' : 'var(--bg3)',
                            color: done ? 'var(--emerald)' : 'var(--text2)',
                            border: `1px solid ${done ? 'var(--emerald)' : 'var(--border)'}`,
                          }}
                        >
                          {done ? '✓ Done' : 'Mark Done'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
