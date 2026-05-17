'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const nav = [
  { href: '/curriculum', label: 'Curriculum' },
  { href: '/domains', label: 'Domains' },
  { href: '/quizzes', label: 'Quizzes' },
  { href: '/cheatsheet', label: 'Cheat Sheet' },
  { href: '/resources', label: 'Resources' },
];

export default function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav style={{
      position:'fixed',top:0,left:0,right:0,zIndex:100,
      background:'rgba(10,10,15,0.85)',backdropFilter:'blur(16px)',
      borderBottom:'1px solid var(--border)',height:'72px',
      display:'flex',alignItems:'center',
    }}>
      <div className="container-wide" style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%'}}>
        <Link href="/" style={{display:'flex',alignItems:'center',gap:'10px',textDecoration:'none'}}>
          <div style={{width:36,height:36,borderRadius:10,background:'linear-gradient(135deg,var(--accent),var(--accent2))',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.1rem'}}>🛡️</div>
          <div>
            <div style={{fontWeight:800,fontSize:'1rem',color:'var(--heading)',lineHeight:1.1}}>CertHub CC</div>
            <div style={{fontSize:'0.65rem',color:'var(--text3)',lineHeight:1}}>ISC2 Certified in Cybersecurity</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div style={{display:'flex',alignItems:'center',gap:'0.25rem'}} className="desktop-nav">
          {nav.map(n => (
            <Link key={n.href} href={n.href} style={{
              padding:'0.4rem 0.9rem',borderRadius:'var(--r)',fontSize:'0.875rem',fontWeight:500,
              color: path.startsWith(n.href) ? 'var(--accent)' : 'var(--text2)',
              background: path.startsWith(n.href) ? 'rgba(99,102,241,0.1)' : 'transparent',
              transition:'all .2s',
            }}>{n.label}</Link>
          ))}
          <Link href="/quizzes/practice-exam" className="btn btn-primary btn-sm" style={{marginLeft:'0.5rem'}}>Practice Exam</Link>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} style={{display:'none',background:'none',border:'none',color:'var(--text)',fontSize:'1.5rem',cursor:'pointer'}} className="mobile-menu-btn">
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div style={{position:'absolute',top:'72px',left:0,right:0,background:'var(--bg2)',borderBottom:'1px solid var(--border)',padding:'1rem'}}>
          {nav.map(n => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)} style={{display:'block',padding:'0.75rem 1rem',color:'var(--text)',borderRadius:'var(--r)',marginBottom:'0.25rem'}}>{n.label}</Link>
          ))}
          <Link href="/quizzes/practice-exam" className="btn btn-primary" style={{width:'100%',justifyContent:'center',marginTop:'0.5rem'}} onClick={() => setOpen(false)}>Practice Exam</Link>
        </div>
      )}

      <style>{`
        @media(max-width:768px){ .desktop-nav{display:none!important;} .mobile-menu-btn{display:block!important;} }
      `}</style>
    </nav>
  );
}
