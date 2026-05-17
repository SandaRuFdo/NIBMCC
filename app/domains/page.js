import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { domains } from '@/data/curriculum';

export default function DomainsPage() {
  return (
    <>
      <Navbar />
      <main>
        <div style={{ background: 'var(--bg2)', borderBottom: '1px solid var(--border)', padding: '5rem 0 3rem' }}>
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text3)', marginBottom: '1rem' }}>
              <Link href="/" style={{ color: 'var(--text3)' }}>Home</Link> <span>/</span> <span>Domains</span>
            </div>
            <h1 style={{ marginBottom: '0.5rem' }}>5 ISC2 CC Domains</h1>
            <p style={{ color: 'var(--text2)' }}>Comprehensive study notes for every exam domain.</p>
          </div>
        </div>
        <div className="container" style={{ padding: '3rem 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '1.5rem' }}>
            {domains.map(d => (
              <Link key={d.id} href={`/domains/${d.slug}`} style={{ textDecoration: 'none' }}>
                <div className="card glow-hover" style={{ borderTop: `3px solid ${d.color}`, height: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span className={`badge badge-d${d.id}`}>Domain {d.id}</span>
                    <span style={{ fontSize: '2rem', fontWeight: 800, color: d.color }}>{d.weight}%</span>
                  </div>
                  <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{d.name}</h2>
                  <p style={{ color: 'var(--text2)', fontSize: '0.875rem', marginBottom: '1rem' }}>{d.hours} hours of instruction content</p>
                  <div style={{ color: d.color, fontWeight: 600, fontSize: '0.875rem' }}>Study this domain →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
