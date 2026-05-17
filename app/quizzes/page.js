import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const quizList = [
  { key:'module-1', title:'Module 1 Quiz', subtitle:'Security Principles', domain:1, questions:34, weight:'26%' },
  { key:'module-2', title:'Module 2 Quiz', subtitle:'BC / DR / IR', domain:2, questions:19, weight:'10%' },
  { key:'module-3', title:'Module 3 Quiz', subtitle:'Access Controls', domain:3, questions:24, weight:'22%' },
  { key:'module-4', title:'Module 4 Quiz', subtitle:'Network Security', domain:4, questions:15, weight:'24%' },
  { key:'module-5', title:'Module 5 Quiz', subtitle:'Security Operations', domain:5, questions:10, weight:'18%' },
  { key:'practice-exam', title:'Full Practice Exam', subtitle:'All 5 Domains', domain:0, questions:51, weight:'100%' },
];
const colors = { 1:'var(--d1)', 2:'var(--d2)', 3:'var(--d3)', 4:'var(--d4)', 5:'var(--d5)', 0:'var(--accent)' };

export default function QuizzesPage() {
  return (
    <>
      <Navbar />
      <main>
        <div style={{ background:'var(--bg2)', borderBottom:'1px solid var(--border)', padding:'5rem 0 3rem' }}>
          <div className="container">
            <div style={{ display:'flex', gap:'0.5rem', fontSize:'0.85rem', color:'var(--text3)', marginBottom:'1rem' }}>
              <Link href="/" style={{ color:'var(--text3)' }}>Home</Link> <span>/</span> <span>Quizzes</span>
            </div>
            <h1 style={{ marginBottom:'0.5rem' }}>Practice Quizzes</h1>
            <p style={{ color:'var(--text2)' }}>Module quizzes after each domain + a full 50-question practice exam. Study mode or timed exam mode.</p>
          </div>
        </div>
        <div className="container" style={{ padding:'3rem 1.5rem' }}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'1.25rem' }}>
            {quizList.map(q => (
              <Link key={q.key} href={`/quizzes/${q.key}`} style={{ textDecoration:'none' }}>
                <div className="card glow-hover" style={{ borderTop:`3px solid ${colors[q.domain]}`, height:'100%' }}>
                  <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'0.75rem' }}>
                    {q.domain > 0 ? <span className={`badge badge-d${q.domain}`}>Domain {q.domain}</span> : <span className="badge badge-module">All Domains</span>}
                    <span style={{ fontSize:'1.25rem', fontWeight:800, color:colors[q.domain] }}>{q.weight}</span>
                  </div>
                  <h3 style={{ marginBottom:'0.25rem', fontSize:'1.05rem' }}>{q.title}</h3>
                  <p style={{ color:'var(--text2)', fontSize:'0.85rem', margin:'0 0 1rem' }}>{q.subtitle}</p>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                    <span style={{ fontSize:'0.8rem', color:'var(--text3)' }}>{q.questions} questions</span>
                    <span style={{ color:colors[q.domain], fontWeight:600, fontSize:'0.875rem' }}>Start →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="card" style={{ marginTop:'2rem', background:'var(--bg3)', maxWidth:'600px' }}>
            <h3 style={{ marginBottom:'0.5rem' }}>📝 Passing Score</h3>
            <p style={{ color:'var(--text2)', margin:0 }}>Aim for 70%+ on each module quiz and 80%+ on the practice exam to be confident for the real ISC2 CC. The real exam requires 700/1000 (70%).</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
