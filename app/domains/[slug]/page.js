import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { domains, days } from '@/data/curriculum';
import { domainContent } from '@/data/domainContent';

export function generateStaticParams() {
  return domains.map(d => ({ slug: d.slug }));
}

export default async function DomainPage({ params }) {
  const { slug } = await params;
  const domain = domains.find(d => d.slug === slug);
  if (!domain) notFound();
  const content = domainContent[slug];
  const relatedDays = days.filter(d => d.domain === domain.id);

  return (
    <>
      <Navbar />
      <main>
        <div style={{ background: 'var(--bg2)', borderBottom: '1px solid var(--border)', padding: '5rem 0 3rem', borderTop: `4px solid ${domain.color}` }}>
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text3)', marginBottom: '1rem' }}>
              <Link href="/" style={{ color: 'var(--text3)' }}>Home</Link>
              <span>/</span>
              <Link href="/domains" style={{ color: 'var(--text3)' }}>Domains</Link>
              <span>/</span>
              <span>{domain.name}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <span className={`badge badge-d${domain.id}`} style={{ marginBottom: '0.75rem', display: 'inline-block' }}>Domain {domain.id}</span>
                <h1 style={{ marginBottom: '0.5rem' }}>{domain.name}</h1>
                <p style={{ color: 'var(--text2)', margin: 0 }}>{domain.hours} hours · {domain.weight}% of exam · {relatedDays.length} lessons</p>
              </div>
              <div style={{ textAlign: 'center', background: 'var(--bg3)', borderRadius: 'var(--r2)', padding: '1rem 1.5rem' }}>
                <div style={{ fontSize: '3rem', fontWeight: 900, color: domain.color, lineHeight: 1 }}>{domain.weight}%</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text3)', marginTop: '0.25rem' }}>of exam</div>
              </div>
            </div>
          </div>
        </div>

        <div className="container" style={{ padding: '3rem 1.5rem', display: 'grid', gridTemplateColumns: '1fr 300px', gap: '2rem', alignItems: 'start' }}>
          <div>
            {content && content.sections.map((sec, i) => (
              <div key={i} style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.35rem', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid var(--border)', color: domain.color }}>{sec.title}</h2>
                {sec.content.map((block, j) => {
                  if (block.type === 'p') return <p key={j} style={{ marginBottom: '0.75rem' }}>{block.text}</p>;
                  if (block.type === 'ul') return (
                    <ul key={j} style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                      {block.items.map((item, k) => <li key={k} style={{ marginBottom: '0.4rem', color: 'var(--text)' }}>{item}</li>)}
                    </ul>
                  );
                  if (block.type === 'table') return (
                    <div key={j} className="table-wrap">
                      <table>
                        <thead><tr>{block.headers.map(h => <th key={h}>{h}</th>)}</tr></thead>
                        <tbody>{block.rows.map((row, ri) => <tr key={ri}>{row.map((cell, ci) => <td key={ci}>{cell}</td>)}</tr>)}</tbody>
                      </table>
                    </div>
                  );
                  if (block.type === 'tip') return (
                    <div key={j} className="callout callout-tip">
                      <span className="callout-icon">🎯</span>
                      <div className="callout-body"><strong style={{ color: 'var(--amber)' }}>Exam Tip</strong><p>{block.text}</p></div>
                    </div>
                  );
                  if (block.type === 'analogy') return (
                    <div key={j} className="callout callout-analogy">
                      <span className="callout-icon">💡</span>
                      <div className="callout-body"><p>{block.text}</p></div>
                    </div>
                  );
                  return null;
                })}
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div style={{ position: 'sticky', top: '90px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="card">
              <h4 style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>Related Lessons</h4>
              {relatedDays.map(d => (
                <Link key={d.day} href={`/days/${d.day}`} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', padding: '0.6rem 0', borderBottom: '1px solid var(--border)', textDecoration: 'none' }}>
                  <span style={{ background: domain.color, color: '#fff', borderRadius: '6px', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, flexShrink: 0 }}>{d.day}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text2)' }}>{d.title}</span>
                </Link>
              ))}
            </div>
            <Link href={`/quizzes/module-${domain.id}`} className="btn btn-primary" style={{ justifyContent: 'center' }}>
              Take Module {domain.id} Quiz →
            </Link>
            <Link href="/cheatsheet" className="btn btn-outline" style={{ justifyContent: 'center' }}>
              📋 Cheat Sheet
            </Link>
          </div>
        </div>
      </main>
      <Footer />

      <style>{`@media(max-width:900px){.container{grid-template-columns:1fr!important;}}`}</style>
    </>
  );
}
