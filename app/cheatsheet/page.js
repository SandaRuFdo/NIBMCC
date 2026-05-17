'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const data = {
  cia: {
    label: 'CIA Triad', domain: 1,
    table: {
      headers: ['Property','Protects Against','Key Controls','Example Violation'],
      rows: [
        ['Confidentiality','Unauthorized disclosure','Encryption, access controls, data masking','Data breach exposing customer records'],
        ['Integrity','Unauthorized modification','Hashing (SHA-256), digital signatures, checksums','Attacker modifies a bank transaction'],
        ['Availability','Disruption / downtime','Redundancy, backups, DDoS protection','DDoS attack takes down a website'],
      ]
    }
  },
  iaaa: {
    label: 'IAAA Framework', domain: 1,
    table: {
      headers: ['Step','Definition','Example'],
      rows: [
        ['Identification','Claiming an identity','Entering a username'],
        ['Authentication','Proving the identity','Entering a password or fingerprint'],
        ['Authorization','Granting appropriate access','RBAC file permissions'],
        ['Accountability','Logging all actions','Audit logs in SIEM'],
      ]
    }
  },
  risk: {
    label: 'Risk Treatment (MATA)', domain: 1,
    table: {
      headers: ['Treatment','Action','When to Use'],
      rows: [
        ['Mitigate','Reduce risk with controls (firewall, training)','Cost of control < ALE reduction'],
        ['Avoid','Eliminate the risky activity','Risk is too high to accept'],
        ['Transfer','Shift to third party (insurance)','Risk is real but uncontrollable'],
        ['Accept','Acknowledge and take no action','Risk is low; cost to fix > impact'],
      ]
    }
  },
  controls: {
    label: 'Security Controls Grid', domain: 1,
    table: {
      headers: ['Type \\ Function','Preventive','Detective','Corrective','Deterrent','Compensating'],
      rows: [
        ['Administrative','Policies, training','Audits, reviews','Lessons learned','Warning posters','Awareness training'],
        ['Technical','Firewalls, encryption','IDS, SIEM, logs','Patching, restore','Login banners','Additional auth factor'],
        ['Physical','Locks, fences, guards','CCTV, sensors','Fire suppression','"Beware of Dog" sign','Backup power'],
      ]
    }
  },
  ethics: {
    label: 'ISC2 Code of Ethics', domain: 1,
    table: {
      headers: ['Priority','Canon'],
      rows: [
        ['1 (Highest)','Protect society, the common good, necessary public trust, and the infrastructure'],
        ['2','Act honorably, honestly, justly, responsibly, and legally'],
        ['3','Provide diligent and competent service to principals'],
        ['4 (Lowest)','Advance and protect the profession'],
      ]
    }
  },
  mfa: {
    label: 'Authentication Factors', domain: 1,
    table: {
      headers: ['Factor','Type','Examples','Weakness'],
      rows: [
        ['Something you KNOW','Knowledge','Password, PIN, security question','Guessable, phishable, shareable'],
        ['Something you HAVE','Possession','Token, smart card, phone OTP','Lost or stolen'],
        ['Something you ARE','Biometric','Fingerprint, face, retina, voice','Irrevocable if compromised'],
      ]
    }
  },
  bcdr: {
    label: 'BCP / DR Quick Reference', domain: 2,
    table: {
      headers: ['Term','Definition'],
      rows: [
        ['BCP','Keep the whole business running during disruption'],
        ['DRP','Restore IT systems after disruption'],
        ['BIA','Identify critical functions and set recovery priorities (RTO/RPO)'],
        ['RTO','Max acceptable downtime'],
        ['RPO','Max acceptable data loss (measured in time)'],
        ['Hot Site','Fully equipped, operational in minutes (most expensive)'],
        ['Warm Site','Hardware ready, needs data restoration'],
        ['Cold Site','Empty facility only (cheapest, slowest)'],
      ]
    }
  },
  ir: {
    label: 'Incident Response Phases', domain: 2,
    table: {
      headers: ['Phase','Action','Key Point'],
      rows: [
        ['1. Preparation','Policies, tools, training ready','Before any incident occurs'],
        ['2. Detection & Analysis','Identify and triage the incident','What happened? How bad?'],
        ['3. Containment','Stop it spreading','HIGHEST PRIORITY after detection'],
        ['4. Eradication','Remove malware, patch vulnerability','Eliminate root cause'],
        ['5. Recovery','Restore systems to normal operations','Verify clean before restoring'],
        ['6. Lessons Learned','Post-incident review and improvement','Document everything'],
      ]
    }
  },
  backup: {
    label: 'Backup Types', domain: 2,
    table: {
      headers: ['Type','Backs Up','Backup Speed','Restore Speed','Needs'],
      rows: [
        ['Full','Everything','Slowest','Fastest','Just the latest full backup'],
        ['Incremental','Changes since last ANY backup','Fastest','Slowest','Last full + ALL incrementals'],
        ['Differential','Changes since last FULL backup','Medium','Medium','Last full + latest differential'],
      ]
    }
  },
  accessmodels: {
    label: 'Access Control Models', domain: 3,
    table: {
      headers: ['Model','Who Decides','Security','Example'],
      rows: [
        ['DAC (Discretionary)','Resource owner','Low — owner can over-share','Google Drive file sharing'],
        ['MAC (Mandatory)','System via sensitivity labels','Highest — users cannot override','Military classified documents'],
        ['RBAC (Role-Based)','Assigned job role','Strong — role defines permissions','Hospital: doctors see records, nurses see vitals'],
        ['ABAC (Attribute-Based)','Policy engine evaluating multiple attributes','Most flexible','Cloud: access if role=admin AND time=business hours AND location=office'],
      ]
    }
  },
  osi: {
    label: 'OSI Model (7 Layers)', domain: 4,
    table: {
      headers: ['#','Layer','Data Unit','Key Devices','Key Protocols','Security Attacks'],
      rows: [
        ['7','Application','Data','—','HTTP, DNS, FTP, SMTP, SSH','Phishing, SQL injection, XSS, DNS poisoning'],
        ['6','Presentation','Data','—','SSL/TLS, JPEG, MPEG, compression','SSL stripping, weak cipher attacks'],
        ['5','Session','Data','—','NetBIOS, PPTP, SIP, RPC','Session hijacking, replay attacks'],
        ['4','Transport','Segment','Stateful firewall','TCP, UDP, ports','SYN flood, port scanning, session hijacking'],
        ['3','Network','Packet','Router, L3 switch','IPv4, IPv6, ICMP, ARP','IP spoofing, DDoS, BGP hijacking'],
        ['2','Data Link','Frame','Switch, Bridge, NIC','Ethernet, Wi-Fi, ARP','MAC spoofing, ARP poisoning, VLAN hopping, CAM flood'],
        ['1','Physical','Bit','Hub, Repeater, NIC, WAP','Fiber, coaxial, DSL, radio','Cable tapping, jamming, keystroke loggers'],
      ]
    }
  },
  ports: {
    label: 'Common Ports', domain: 4,
    table: {
      headers: ['Port','Protocol','Service','Secure?','Notes'],
      rows: [
        ['20/21','TCP','FTP','❌','Port 20=data, 21=control. Use SFTP instead'],
        ['22','TCP','SSH / SFTP','✅','Secure remote access. Replaces Telnet'],
        ['23','TCP','Telnet','❌ Never','Sends everything plaintext including passwords'],
        ['25','TCP','SMTP','❌','Sending email. Use port 587 with TLS'],
        ['53','TCP/UDP','DNS','❌','Domain resolution. UDP for queries, TCP for zone transfers'],
        ['67/68','UDP','DHCP','❌','IP address assignment. 67=server, 68=client'],
        ['80','TCP','HTTP','❌','Unencrypted web. Never for sensitive data'],
        ['110','TCP','POP3','❌','Download email from server (deletes from server)'],
        ['143','TCP','IMAP','❌','Sync email (stays on server)'],
        ['443','TCP','HTTPS','✅','Encrypted web. HTTP + TLS'],
        ['445','TCP','SMB','⚠️','Windows file sharing. Target for WannaCry/EternalBlue'],
        ['3389','TCP','RDP','⚠️','Remote Desktop. High-value attack target. Use VPN'],
      ]
    }
  },
  firewall: {
    label: 'IDS vs IPS', domain: 4,
    table: {
      headers: ['','IDS','IPS'],
      rows: [
        ['Full Name','Intrusion Detection System','Intrusion Prevention System'],
        ['Action','Detect + Alert only','Detect + Block'],
        ['Position in network','Passive (monitors copy of traffic)','Inline (sits in the traffic path)'],
        ['Analogy','Security camera','Security guard'],
        ['False positive risk','Low impact — just an alert','High impact — blocks legitimate traffic'],
      ]
    }
  },
  wireless: {
    label: 'Wireless Security Standards', domain: 4,
    table: {
      headers: ['Standard','Encryption','Status','Notes'],
      rows: [
        ['WEP','RC4 (40-bit)','❌ Broken — NEVER use','Crackable in minutes'],
        ['WPA','TKIP','❌ Deprecated','Improved on WEP but still vulnerable'],
        ['WPA2','AES-CCMP','⚠️ Acceptable','KRACK vulnerability. Still widely used'],
        ['WPA3','SAE (Simultaneous Authentication of Equals)','✅ Current standard','Forward secrecy. Resist offline dictionary attacks'],
      ]
    }
  },
  encryption: {
    label: 'Encryption Reference', domain: 5,
    table: {
      headers: ['Type','Keys','Speed','Use Case','Example'],
      rows: [
        ['Symmetric','One shared key','Fast','Bulk data encryption','AES-256'],
        ['Asymmetric','Public + private key pair','Slow','Key exchange, digital signatures','RSA, ECC'],
        ['Hybrid','Both types','Best of both','TLS/HTTPS sessions','TLS 1.3'],
      ]
    }
  },
  hashing: {
    label: 'Hashing Algorithms', domain: 5,
    table: {
      headers: ['Algorithm','Output','Status','Use'],
      rows: [
        ['MD5','128-bit','❌ Broken (collisions)','Legacy only — do not use for security'],
        ['SHA-1','160-bit','❌ Deprecated','Legacy — avoid'],
        ['SHA-256','256-bit','✅ Current standard','File integrity, digital signatures, certificates'],
        ['SHA-512','512-bit','✅ Strongest common','High-security environments'],
        ['bcrypt/scrypt','Variable','✅ Recommended','Password hashing (includes salting)'],
      ]
    }
  },
  glossary: {
    label: 'Key Terminology', domain: 0,
    table: {
      headers: ['Term','Definition'],
      rows: [
        ['Asset','Anything of value to the organization'],
        ['Threat','Potential danger that could exploit a vulnerability'],
        ['Vulnerability','A weakness that can be exploited'],
        ['Risk','Likelihood × Impact of threat exploiting vulnerability'],
        ['Exploit','Attack that successfully leverages a vulnerability'],
        ['Non-repudiation','Proof someone cannot deny performing an action'],
        ['SLE','Single Loss Expectancy = AV × EF'],
        ['ALE','Annualized Loss Expectancy = SLE × ARO'],
        ['ARO','Annualized Rate of Occurrence'],
        ['DMZ','Network buffer zone between internet and internal network'],
        ['VPN','Encrypted tunnel over public internet'],
        ['SIEM','Central log collection, correlation, and alerting platform'],
        ['PAM','Privileged Access Management — protects admin accounts'],
        ['Zero Trust','"Never trust, always verify" — assume breach at all times'],
        ['DLP','Data Loss Prevention — monitors and prevents unauthorized data exfiltration'],
        ['NAC','Network Access Control — checks devices before granting network access'],
        ['AUP','Acceptable Use Policy — defines permitted use of company resources'],
        ['BYOD','Bring Your Own Device policy'],
        ['Phishing','Deceptive email/website to steal credentials or install malware'],
        ['MITM','Man-in-the-Middle — attacker intercepts and potentially alters communication'],
      ]
    }
  },
};

const categories = [
  { key: 'all', label: 'All Domains' },
  { key: '1', label: 'Domain 1' },
  { key: '2', label: 'Domain 2' },
  { key: '3', label: 'Domain 3' },
  { key: '4', label: 'Domain 4' },
  { key: '5', label: 'Domain 5' },
];

export default function CheatSheetPage() {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = Object.entries(data).filter(([, v]) => {
    const domainMatch = filter === 'all' || String(v.domain) === filter;
    if (!domainMatch) return false;
    if (!search) return true;
    const q = search.toLowerCase();
    return v.label.toLowerCase().includes(q) ||
      v.table.rows.some(row => row.some(cell => cell.toLowerCase().includes(q)));
  });

  return (
    <>
      <Navbar />
      <main>
        <div style={{ background:'var(--bg2)', borderBottom:'1px solid var(--border)', padding:'5rem 0 3rem' }}>
          <div className="container">
            <div style={{ display:'flex', gap:'0.5rem', fontSize:'0.85rem', color:'var(--text3)', marginBottom:'1rem' }}>
              <Link href="/" style={{ color:'var(--text3)' }}>Home</Link> <span>/</span> <span>Cheat Sheet</span>
            </div>
            <h1 style={{ marginBottom:'0.5rem' }}>📋 Cheat Sheet</h1>
            <p style={{ color:'var(--text2)', marginBottom:'1.5rem' }}>All critical tables in one searchable place. Print this before your exam.</p>
            <div style={{ display:'flex', gap:'1rem', flexWrap:'wrap' }}>
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search topics, terms, protocols..." style={{ flex:'1', minWidth:'200px' }} />
              <div style={{ display:'flex', gap:'0.5rem', flexWrap:'wrap' }}>
                {categories.map(c => (
                  <button key={c.key} onClick={() => setFilter(c.key)} className={`btn btn-sm ${filter === c.key ? 'btn-primary' : 'btn-outline'}`}>{c.label}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="container" style={{ padding:'3rem 1.5rem' }}>
          {filtered.length === 0 && <p style={{ color:'var(--text2)' }}>No results for "{search}"</p>}
          {filtered.map(([key, section]) => (
            <div key={key} style={{ marginBottom:'2.5rem' }}>
              <div style={{ display:'flex', alignItems:'center', gap:'0.75rem', marginBottom:'1rem' }}>
                <h2 style={{ fontSize:'1.15rem', margin:0 }}>{section.label}</h2>
                {section.domain > 0 && <span className={`badge badge-d${section.domain}`}>Domain {section.domain}</span>}
              </div>
              <div className="table-wrap">
                <table>
                  <thead><tr>{section.table.headers.map(h => <th key={h}>{h}</th>)}</tr></thead>
                  <tbody>{section.table.rows.map((row, ri) => (
                    <tr key={ri}>{row.map((cell, ci) => <td key={ci}>{cell}</td>)}</tr>
                  ))}</tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
