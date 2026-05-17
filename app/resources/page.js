import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ResourcesPage() {
  return (
    <>
      <Navbar />
      <main>
        <div style={{ background:'var(--bg2)', borderBottom:'1px solid var(--border)', padding:'5rem 0 3rem' }}>
          <div className="container">
            <div style={{ display:'flex', gap:'0.5rem', fontSize:'0.85rem', color:'var(--text3)', marginBottom:'1rem' }}>
              <Link href="/" style={{ color:'var(--text3)' }}>Home</Link> <span>/</span> <span>Resources</span>
            </div>
            <h1 style={{ marginBottom:'0.5rem' }}>Resources & Exam Tips</h1>
            <p style={{ color:'var(--text2)' }}>Official ISC2 resources, third-party study materials, and exam-day strategy.</p>
          </div>
        </div>
        <div className="container" style={{ padding:'3rem 1.5rem' }}>
          <div className="grid-2" style={{ gap:'2rem', marginBottom:'3rem' }}>

            {/* Exam details */}
            <div>
              <h2 style={{ marginBottom:'1.25rem' }}>ISC2 CC Exam Details</h2>
              <div className="card">
                {[
                  ['Exam Code','CC'],
                  ['Questions','100 multiple-choice'],
                  ['Duration','2 hours (120 minutes)'],
                  ['Passing Score','700 / 1000 (scaled) = 70%'],
                  ['Format','Computerized Adaptive Testing (CAT)'],
                  ['Testing Center','Pearson VUE'],
                  ['Experience','None required'],
                  ['Current Outline Until','August 31, 2026'],
                ].map(([k,v]) => (
                  <div key={k} style={{ display:'flex', justifyContent:'space-between', padding:'0.6rem 0', borderBottom:'1px solid var(--border)', gap:'1rem' }}>
                    <span style={{ color:'var(--text2)', fontSize:'0.875rem' }}>{k}</span>
                    <span style={{ fontWeight:600, fontSize:'0.875rem', textAlign:'right' }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Exam strategy */}
            <div>
              <h2 style={{ marginBottom:'1.25rem' }}>ISC2 Exam Thinking Rules</h2>
              <div style={{ display:'flex', flexDirection:'column', gap:'0.75rem' }}>
                {[
                  { icon:'🏥', rule:'Human safety ALWAYS comes first', detail:'Over property, data, or business continuity. If lives are at risk, that\'s the answer.' },
                  { icon:'🛡️', rule:'Prevention > Detection > Correction', detail:'ISC2 prefers stopping threats before they happen. Preventive controls are always preferred.' },
                  { icon:'📋', rule:'Administrative controls are the foundation', detail:'Policies and procedures guide everything. Technical controls implement them.' },
                  { icon:'🔒', rule:'Least privilege — nothing more', detail:'Always give minimum access. Never justify extra access "just in case".' },
                  { icon:'🧅', rule:'Defense in Depth over single solutions', detail:'Multiple layers > one strong control. Never rely on a single defense.' },
                  { icon:'⏱️', rule:'72 seconds per question — manage time', detail:'100 questions, 120 minutes. Flag difficult ones, return at the end.' },
                ].map(s => (
                  <div key={s.rule} className="card" style={{ padding:'0.875rem 1rem' }}>
                    <div style={{ display:'flex', gap:'0.75rem', alignItems:'flex-start' }}>
                      <span style={{ fontSize:'1.25rem', flexShrink:0 }}>{s.icon}</span>
                      <div>
                        <div style={{ fontWeight:600, fontSize:'0.9rem', marginBottom:'0.2rem' }}>{s.rule}</div>
                        <div style={{ fontSize:'0.8rem', color:'var(--text2)' }}>{s.detail}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Domain weight focus */}
          <div style={{ marginBottom:'3rem' }}>
            <h2 style={{ marginBottom:'1.25rem' }}>Study Priority by Domain Weight</h2>
            <div className="card" style={{ background:'var(--bg2)' }}>
              <div className="callout callout-tip" style={{ marginBottom:'1rem' }}>
                <span className="callout-icon">🎯</span>
                <div className="callout-body"><p>Domains 1 + 3 + 4 = <strong>72% of the exam</strong>. Master these three and you only need 28% from the remaining two domains to pass.</p></div>
              </div>
              {[
                { d:1, name:'Security Principles', weight:26, hours:14, color:'var(--d1)' },
                { d:4, name:'Network Security', weight:24, hours:12, color:'var(--d4)' },
                { d:3, name:'Access Controls', weight:22, hours:10, color:'var(--d3)' },
                { d:5, name:'Security Operations', weight:18, hours:6, color:'var(--d5)' },
                { d:2, name:'BC / DR / IR', weight:10, hours:5, color:'var(--d2)' },
              ].map(d => (
                <div key={d.d} style={{ display:'flex', alignItems:'center', gap:'1rem', marginBottom:'0.75rem' }}>
                  <span className={`badge badge-d${d.d}`} style={{ width:'90px', justifyContent:'center' }}>Domain {d.d}</span>
                  <span style={{ flex:1, fontSize:'0.875rem' }}>{d.name}</span>
                  <div style={{ width:'180px' }}>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width:`${d.weight}%`, background:d.color }} />
                    </div>
                  </div>
                  <span style={{ color:d.color, fontWeight:700, width:'36px', textAlign:'right' }}>{d.weight}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Official resources */}
          <div>
            <h2 style={{ marginBottom:'1.25rem' }}>Official & Recommended Resources</h2>
            <div className="grid-2" style={{ gap:'1.25rem' }}>
              {[
                { icon:'🌐', title:'ISC2 Official CC Page', url:'https://www.isc2.org/certifications/cc', desc:'Official certification page with exam outline and free training registration.' },
                { icon:'🆓', title:'Free CC Training + Exam Voucher', url:'https://www.isc2.org/candidate', desc:'ISC2 offers free self-paced CC training and exam vouchers through their 1M+ initiative.' },
                { icon:'📝', title:'ISC2 Practice Quiz (10 Qs)', url:'https://www.isc2.org/certifications/cc/cc-practice-quiz', desc:'Official sample questions from ISC2.' },
                { icon:'📚', title:'GitHub: ISC2-CC-Study-Material', url:'https://github.com/cyberfascinate/ISC2-CC-Study-Material', desc:'Community study notes and summaries.' },
                { icon:'🎓', title:'Coursera — ISC2 CC Course', url:'https://www.coursera.org/learn/isc2-certified-in-cybersecurity', desc:'Official ISC2 CC course on Coursera — free to audit, includes practice questions.' },
                { icon:'📖', title:'Mike Chapple — CC Study Guide', url:'https://www.wiley.com/en-us/ISC2+Certified+in+Cybersecurity+Study+Guide-p-9781394182794', desc:'Official Wiley textbook. Comprehensive domain coverage with practice questions.' },
              ].map(r => (
                <a key={r.title} href={r.url} target="_blank" rel="noopener noreferrer" className="card" style={{ textDecoration:'none', display:'block' }}>
                  <div style={{ fontSize:'1.5rem', marginBottom:'0.5rem' }}>{r.icon}</div>
                  <h3 style={{ fontSize:'0.95rem', marginBottom:'0.35rem' }}>{r.title}</h3>
                  <p style={{ fontSize:'0.8rem', color:'var(--text2)', margin:0 }}>{r.desc}</p>
                  <span style={{ fontSize:'0.8rem', color:'var(--accent)', marginTop:'0.5rem', display:'block' }}>Visit →</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
