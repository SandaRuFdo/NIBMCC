'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { domains, examStats } from '@/data/curriculum';
import ProgressRing from '@/components/ProgressRing';
import { useProgress } from '@/lib/progress';

function DomainDonut() {
  const size = 280;
  const cx = size / 2, cy = size / 2;
  const r = 90, stroke = 28;
  const total = 360;
  let offset = -90;

  return (
    <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width={size} height={size}>
        {domains.map((d) => {
          const deg = (d.weight / 100) * total;
          const start = offset;
          const end = offset + deg - 2;
          offset += deg;
          const startRad = (start * Math.PI) / 180;
          const endRad = (end * Math.PI) / 180;
          const x1 = cx + r * Math.cos(startRad);
          const y1 = cy + r * Math.sin(startRad);
          const x2 = cx + r * Math.cos(endRad);
          const y2 = cy + r * Math.sin(endRad);
          const large = deg > 180 ? 1 : 0;
          return (
            <path key={d.id} d={`M ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2}`}
              fill="none" stroke={d.color} strokeWidth={stroke} strokeLinecap="round"
              style={{ filter: `drop-shadow(0 0 8px ${d.color}66)` }} />
          );
        })}
      </svg>
      <div style={{ position: 'absolute', textAlign: 'center' }}>
        <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--heading)' }}>5</div>
        <div style={{ fontSize: '0.75rem', color: 'var(--text3)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Domains</div>
      </div>
    </div>
  );
}

export default function LandingClient() {
  const { totalDaysDone, overallPct } = useProgress();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <main>
      {/* Hero */}
      <section style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,0.18) 0%, transparent 70%), var(--bg)',
        padding: '8rem 0 6rem',
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="fade-up" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--bg3)', border: '1px solid var(--border2)', borderRadius: '99px', padding: '0.4rem 1rem', fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600, marginBottom: '2rem' }}>
            <span>🛡️</span> ISC2 Certified in Cybersecurity — CC Exam Prep
          </div>
          <h1 className="fade-up" style={{ animationDelay: '.1s', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Pass the ISC2 CC Exam<br />
            <span className="gradient-text">With Confidence</span>
          </h1>
          <p className="fade-up" style={{ animationDelay: '.2s', fontSize: 'clamp(1rem,2.5vw,1.2rem)', color: 'var(--text2)', maxWidth: '620px', margin: '0 auto 2.5rem' }}>
            17-day structured course covering all 5 domains. Full lecture notes, interactive quizzes, OSI visualizations, and the ALE calculator — everything to reach 700/1000.
          </p>
          <div className="fade-up" style={{ animationDelay: '.3s', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}>
            <Link href="/curriculum" className="btn btn-primary btn-lg">📅 Start Learning</Link>
            <Link href="/quizzes/practice-exam" className="btn btn-outline btn-lg">🎯 Practice Exam</Link>
          </div>

          {/* Stats */}
          <div className="fade-up" style={{ animationDelay: '.4s', display: 'flex', justifyContent: 'center', gap: 'clamp(2rem,5vw,4rem)', flexWrap: 'wrap' }}>
            {[
              { n: '17', l: 'Days' }, { n: '50h', l: 'Content' }, { n: '5', l: 'Domains' },
              { n: '200+', l: 'Questions' }, { n: '700', l: 'Pass Score' },
            ].map(({ n, l }) => (
              <div key={l} style={{ textAlign: 'center' }}>
                <div className="stat-number">{n}</div>
                <div className="stat-label">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Progress bar (if started) */}
      {mounted && totalDaysDone > 0 && (
        <div style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '1rem 0' }}>
          <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ color: 'var(--text2)', fontSize: '0.875rem', whiteSpace: 'nowrap' }}>Your progress</span>
            <div className="progress-bar" style={{ flex: 1 }}>
              <div className="progress-fill" style={{ width: `${overallPct}%` }} />
            </div>
            <span style={{ color: 'var(--accent)', fontWeight: 700, whiteSpace: 'nowrap', fontSize: '0.875rem' }}>{totalDaysDone}/17 days</span>
            <Link href="/curriculum" className="btn btn-sm btn-outline">Continue →</Link>
          </div>
        </div>
      )}

      {/* Exam weight section */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div className="section-header">
                <p style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Exam Blueprint</p>
                <h2>Know Where to Focus</h2>
                <p>Domains 1, 3, and 4 combined = <strong style={{ color: 'var(--heading)' }}>72% of the exam</strong>. Master those three and you're most of the way there.</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {domains.map(d => (
                  <div key={d.id} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: d.color, flexShrink: 0 }} />
                    <span style={{ flex: 1, fontSize: '0.875rem', color: 'var(--text)' }}>D{d.id}: {d.name}</span>
                    <div style={{ width: '120px' }}>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: `${d.weight}%`, background: d.color }} />
                      </div>
                    </div>
                    <span style={{ width: '36px', textAlign: 'right', fontWeight: 700, color: d.color, fontSize: '0.875rem' }}>{d.weight}%</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <DomainDonut />
            </div>
          </div>
        </div>
      </section>

      {/* Domain Cards */}
      <section className="section">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <p style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>5 Exam Domains</p>
            <h2>What You'll Master</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            {domains.map(d => (
              <Link key={d.id} href={`/domains/${d.slug}`} style={{ textDecoration: 'none' }}>
                <div className="card glow-hover" style={{ height: '100%', borderTop: `3px solid ${d.color}` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <span className={`badge badge-d${d.id}`}>Domain {d.id}</span>
                    <span style={{ fontSize: '1.5rem', fontWeight: 800, color: d.color }}>{d.weight}%</span>
                  </div>
                  <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{d.name}</h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text2)', margin: 0 }}>{d.hours} hours of instruction</p>
                  <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: d.color, fontWeight: 600 }}>Study notes →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <h2>Everything You Need to Pass</h2>
          </div>
          <div className="grid-3" style={{ gap: '1.5rem' }}>
            {[
              { icon: '📖', title: '17 Detailed Lessons', desc: 'Full BRIDGE-framework lecture notes with real-world analogies, tables, and step-by-step breakdowns for every topic.' },
              { icon: '🎯', title: '200+ Quiz Questions', desc: 'Module quizzes after each domain + a full 50-question practice exam. Study mode or timed exam mode.' },
              { icon: '📡', title: 'OSI Layer Visualizer', desc: 'Interactive 7-layer diagram. Click any layer to see protocols, devices, attacks, and exam tips.' },
              { icon: '🧮', title: 'ALE Calculator', desc: 'Input Asset Value, Exposure Factor, and ARO — instantly compute SLE and ALE. Exam math made simple.' },
              { icon: '📋', title: 'Searchable Cheat Sheet', desc: 'Every key table in one place: ports, protocols, CIA, IAAA, OSI layers, access models, backup types.' },
              { icon: '📈', title: 'Progress Tracking', desc: 'Mark lessons complete. Track quiz best scores. See your coverage across all 5 domains at a glance.' },
            ].map(f => (
              <div key={f.title} className="card">
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{f.icon}</div>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{f.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text2)', margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam details */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <div className="section-header">
                <p style={{ color: 'var(--amber)', fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>The Target</p>
                <h2>ISC2 CC Exam Details</h2>
                <p>100 questions. 2 hours. 700/1000 to pass. Computerized Adaptive Testing at Pearson VUE. No experience required.</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {[
                  ['Questions', '100 MCQ'], ['Duration', '2 hours'], ['Passing', '700 / 1000'], ['Format', 'CAT (Adaptive)'],
                  ['Experience', 'None required'], ['Testing', 'Pearson VUE'],
                ].map(([k, v]) => (
                  <div key={k} style={{ background: 'var(--bg2)', borderRadius: 'var(--r)', padding: '0.75rem 1rem' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text3)', marginBottom: '0.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{k}</div>
                    <div style={{ fontWeight: 700, color: 'var(--heading)', fontSize: '0.95rem' }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-glass" style={{ padding: '2rem', borderRadius: 'var(--r3)' }}>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🏆</div>
                <h3>ISC2 CC Strategy</h3>
              </div>
              {[
                ['Focus 72% of time on D1 + D3 + D4', 'var(--accent)'],
                ['Human safety > property > data', 'var(--emerald)'],
                ['Prevention > detection in ISC2 logic', 'var(--amber)'],
                ['Administrative controls are the foundation', 'var(--cyan)'],
                ['72 seconds per question — manage time', 'var(--accent2)'],
              ].map(([tip, color]) => (
                <div key={tip} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: color, flexShrink: 0 }} />
                  <span style={{ fontSize: '0.875rem', color: 'var(--text)' }}>{tip}</span>
                </div>
              ))}
              <Link href="/resources" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
                Full Exam Tips →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 0', background: 'linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.1) 100%)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1rem' }}>Ready to Get Certified?</h2>
          <p style={{ color: 'var(--text2)', marginBottom: '2rem', fontSize: '1.1rem' }}>Start with Day 1 and work through all 17 lessons. The ISC2 CC exam is waiting.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/days/1" className="btn btn-primary btn-lg">Begin Day 1 →</Link>
            <Link href="/cheatsheet" className="btn btn-outline btn-lg">📋 Cheat Sheet</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
