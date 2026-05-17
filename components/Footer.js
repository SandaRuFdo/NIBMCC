import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{background:'var(--bg2)',borderTop:'1px solid var(--border)',padding:'3rem 0 2rem'}}>
      <div className="container-wide">
        <div className="grid-3" style={{gap:'2rem',marginBottom:'2rem'}}>
          <div>
            <div style={{display:'flex',alignItems:'center',gap:'10px',marginBottom:'1rem'}}>
              <div style={{width:36,height:36,borderRadius:10,background:'linear-gradient(135deg,var(--accent),var(--accent2))',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.1rem'}}>🛡️</div>
              <div style={{fontWeight:800,fontSize:'1rem',color:'var(--heading)'}}>CertHub CC</div>
            </div>
            <p style={{color:'var(--text2)',fontSize:'0.875rem',marginBottom:'0.5rem'}}>ISC2 Certified in Cybersecurity exam preparation. 17-day structured program covering all 5 domains.</p>
            <p style={{color:'var(--text3)',fontSize:'0.8rem',margin:0}}>Prepared by <strong style={{color:'var(--text2)'}}>Sandaru Fernando</strong><br/>Consultant – CertHub Cybersecurity | NIBM</p>
          </div>
          <div>
            <h4 style={{marginBottom:'1rem',fontSize:'0.9rem',textTransform:'uppercase',letterSpacing:'0.05em',color:'var(--text3)'}}>Course</h4>
            {[['/',  'Home'], ['/curriculum', 'Curriculum'], ['/domains', 'Domains'], ['/cheatsheet', 'Cheat Sheet']].map(([href,label]) => (
              <Link key={href} href={href} style={{display:'block',color:'var(--text2)',fontSize:'0.875rem',marginBottom:'0.5rem'}}>{label}</Link>
            ))}
          </div>
          <div>
            <h4 style={{marginBottom:'1rem',fontSize:'0.9rem',textTransform:'uppercase',letterSpacing:'0.05em',color:'var(--text3)'}}>Quizzes</h4>
            {[
              ['/quizzes/module-1','Module 1 Quiz'],
              ['/quizzes/module-2','Module 2 Quiz'],
              ['/quizzes/module-3','Module 3 Quiz'],
              ['/quizzes/module-4','Module 4 Quiz'],
              ['/quizzes/module-5','Module 5 Quiz'],
              ['/quizzes/practice-exam','Full Practice Exam'],
            ].map(([href,label]) => (
              <Link key={href} href={href} style={{display:'block',color:'var(--text2)',fontSize:'0.875rem',marginBottom:'0.5rem'}}>{label}</Link>
            ))}
          </div>
        </div>
        <div className="divider"/>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'1rem'}}>
          <p style={{color:'var(--text3)',fontSize:'0.8rem',margin:0}}>© 2026 CertHub Cybersecurity — ISC2 CC is a registered trademark of ISC2.</p>
          <div style={{display:'flex',gap:'0.5rem',flexWrap:'wrap'}}>
            {['26% D1','10% D2','22% D3','24% D4','18% D5'].map((l,i) => (
              <span key={i} className={`badge badge-d${i+1}`}>{l}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
