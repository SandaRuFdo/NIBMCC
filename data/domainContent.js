export const domainContent = {
  'security-principles': {
    sections: [
      {
        title: '🔐 The CIA Triad',
        content: [
          { type: 'p', text: 'The CIA Triad is the foundation of every cybersecurity decision. Every security control, policy, and technology exists to protect one or more of these three properties.' },
          { type: 'table', headers: ['Property', 'Protects Against', 'Key Controls', 'Analogy'], rows: [
            ['Confidentiality', 'Unauthorized disclosure', 'Encryption, access controls, data masking', 'Sealed envelope — only recipient opens it'],
            ['Integrity', 'Unauthorized modification', 'Hashing (SHA-256), digital signatures, checksums', 'Tamper-proof seal on medicine'],
            ['Availability', 'Disruption / downtime', 'Redundancy, backups, failover, DDoS protection', 'Spare tire — car keeps running after a flat'],
          ]},
          { type: 'tip', text: 'The exam tests all three. Always ask: "Which CIA property does this attack target or this control protect?"' },
        ]
      },
      {
        title: '🪪 IAAA Framework',
        content: [
          { type: 'p', text: 'The four-step framework behind every secure authentication system. Each step is distinct — confusing them is a common exam trap.' },
          { type: 'table', headers: ['Step', 'Definition', 'Example', 'Hotel Analogy'], rows: [
            ['Identification', 'Claiming an identity', 'Username, badge number', 'Saying your name at front desk'],
            ['Authentication', 'Proving the claimed identity', 'Password, fingerprint, OTP', 'Showing your passport'],
            ['Authorization', 'Granting appropriate access', 'File permissions, RBAC', 'Getting your room keycard'],
            ['Accountability', 'Logging and auditing actions', 'Audit logs, SIEM', 'Hotel recording your check-in'],
          ]},
          { type: 'p', text: 'Non-repudiation: proof someone did something — they cannot deny it. Achieved through digital signatures and audit logs.' },
          { type: 'tip', text: 'Username = Identification. Password = Authentication. Permissions = Authorization. Audit log = Accountability.' },
        ]
      },
      {
        title: '⚖️ Risk Management',
        content: [
          { type: 'p', text: 'Risk = the likelihood that a threat will exploit a vulnerability and cause harm to an asset. Quantitative risk uses numbers; qualitative uses categories.' },
          { type: 'table', headers: ['Formula', 'What It Means'], rows: [
            ['SLE = Asset Value × Exposure Factor', 'Cost of ONE occurrence'],
            ['ALE = SLE × ARO', 'Expected annual cost of this risk'],
            ['ARO', 'How many times per year the threat occurs'],
          ]},
          { type: 'analogy', text: 'Example: Server worth $10,000. 50% exposure factor (EF). Happens 2×/year. SLE = $5,000. ALE = $10,000/year.' },
          { type: 'table', headers: ['Treatment', 'Action', 'Analogy'], rows: [
            ['Mitigate', 'Reduce the risk (firewall, training)', 'Umbrella in rain'],
            ['Avoid', 'Eliminate the risky activity', 'Stay home to avoid rain'],
            ['Transfer', 'Shift risk to a third party (insurance)', 'Buy rain insurance'],
            ['Accept', 'Acknowledge and do nothing', 'Walk in the rain'],
          ]},
          { type: 'tip', text: 'Residual risk = risk remaining AFTER controls are applied. You can never reduce risk to zero.' },
        ]
      },
      {
        title: '🛡️ Security Controls',
        content: [
          { type: 'p', text: 'Controls are classified by two axes: TYPE (what it is) and FUNCTION (what it does). Any control fits in this 3×5 matrix.' },
          { type: 'table', headers: ['Type \\ Function', 'Preventive', 'Detective', 'Corrective', 'Deterrent', 'Compensating'], rows: [
            ['Administrative', 'Policies, training', 'Audits, reviews', 'Lessons learned', 'Warning posters', 'Awareness training'],
            ['Technical', 'Firewalls, encryption', 'IDS, SIEM, logs', 'Patching, restore', 'Login banners', 'Additional auth'],
            ['Physical', 'Locks, fences, guards', 'CCTV, motion sensors', 'Fire suppression', '"Beware of Dog" sign', 'Backup generator'],
          ]},
          { type: 'tip', text: 'Defense in Depth = stacking multiple control layers. If one fails, others compensate. Like a medieval castle: moat → walls → archers → inner keep.' },
        ]
      },
      {
        title: '📋 Governance & Ethics',
        content: [
          { type: 'table', headers: ['Level', 'Document', 'Analogy'], rows: [
            ['Policy', 'High-level mandatory direction', 'Constitution'],
            ['Standard', 'Specific mandatory requirements', 'Laws'],
            ['Procedure', 'Step-by-step instructions', 'Driver\'s manual'],
            ['Guideline', 'Recommended best practices', 'Advice from a friend'],
          ]},
          { type: 'p', text: 'ISC2 Code of Ethics — 4 Canons in ORDER (mnemonic: PAPA):' },
          { type: 'ul', items: [
            '1. Protect society, the common good, necessary public trust, and infrastructure',
            '2. Act honorably, honestly, justly, responsibly, and legally',
            '3. Provide diligent and competent service to principals',
            '4. Advance and protect the profession',
          ]},
          { type: 'tip', text: 'Canon 1 ALWAYS wins. If the exam presents a conflict between employer and public safety — public safety wins every time.' },
        ]
      },
    ]
  },
  'bc-dr-ir': {
    sections: [
      {
        title: '🏢 Business Continuity Planning',
        content: [
          { type: 'p', text: 'BCP keeps critical business functions running during a disaster. DRP restores IT systems after. BCP is broader; DRP is a subset.' },
          { type: 'analogy', text: 'BCP is a fire escape plan for the entire business. DRP is specifically for restarting the computers after the fire.' },
          { type: 'p', text: 'Business Impact Analysis (BIA) identifies which functions are most critical and sets recovery targets (RTO/RPO) for each.' },
          { type: 'table', headers: ['Metric', 'Definition', 'Analogy'], rows: [
            ['RTO', 'Max acceptable downtime before operations must resume', 'How fast do you need a new oven?'],
            ['RPO', 'Max acceptable data loss measured in time', 'How much cooking are you OK redoing?'],
            ['MTBF', 'Mean Time Between Failures — expected time between incidents', 'How often does the oven break?'],
            ['MTTR', 'Mean Time To Repair — expected time to fix', 'How long does repair take?'],
          ]},
        ]
      },
      {
        title: '🏗️ Recovery Sites',
        content: [
          { type: 'table', headers: ['Site Type', 'Equipment', 'Data', 'Activation Time', 'Cost'], rows: [
            ['Hot Site', 'Fully equipped', 'Continuously synced', 'Minutes', 'Highest $$$'],
            ['Warm Site', 'Hardware ready', 'Needs data restoration', 'Hours to days', 'Medium $$'],
            ['Cold Site', 'Empty facility only', 'Must install everything', 'Days to weeks', 'Lowest $'],
          ]},
          { type: 'tip', text: 'The exam will give scenarios and ask which site is most appropriate. Hot = fastest, most expensive. Cold = slowest, cheapest.' },
        ]
      },
      {
        title: '💾 Backup Types',
        content: [
          { type: 'table', headers: ['Type', 'Backs Up', 'Backup Speed', 'Restore Speed', 'Needs'], rows: [
            ['Full', 'Everything', 'Slowest', 'Fastest', 'Just the latest full'],
            ['Incremental', 'Changes since last ANY backup', 'Fastest', 'Slowest', 'Last full + ALL incrementals'],
            ['Differential', 'Changes since last FULL backup', 'Medium', 'Medium', 'Last full + latest differential'],
          ]},
        ]
      },
      {
        title: '🚨 Incident Response — 6 Phases',
        content: [
          { type: 'ul', items: [
            '1. Preparation — Have extinguisher ready (policies, tools, training)',
            '2. Detection & Analysis — See smoke (identify and triage the incident)',
            '3. Containment — Close the door (stop it spreading)',
            '4. Eradication — Put out fire (remove malware, patch vulnerability)',
            '5. Recovery — Clean up (restore systems to normal operations)',
            '6. Lessons Learned — Install better stove (post-incident review)',
          ]},
          { type: 'tip', text: 'Containment is the FIRST ACTION after detection. Stop the bleeding before treating the wound. The exam tests phase ORDER constantly.' },
        ]
      },
    ]
  },
  'access-controls': {
    sections: [
      {
        title: '🔑 Authentication Factors',
        content: [
          { type: 'table', headers: ['Factor', 'Type', 'Examples'], rows: [
            ['Something you KNOW', 'Knowledge', 'Password, PIN, security question'],
            ['Something you HAVE', 'Possession', 'Smart card, RSA token, phone OTP app'],
            ['Something you ARE', 'Biometric/Inherence', 'Fingerprint, face, retina, voice'],
          ]},
          { type: 'p', text: 'MFA requires 2+ factors from DIFFERENT categories. Same-category combos are NOT MFA.' },
          { type: 'table', headers: ['Combination', 'Valid MFA?', 'Why'], rows: [
            ['Password + fingerprint', '✅ Yes', 'Know + Are = different categories'],
            ['Password + security question', '❌ No', 'Know + Know = same category'],
            ['Token + smart card', '❌ No', 'Have + Have = same category'],
            ['PIN + face scan', '✅ Yes', 'Know + Are = different categories'],
          ]},
          { type: 'analogy', text: '"Wearing two helmets doesn\'t protect your legs." Two factors from the same category offer no additional security dimension.' },
        ]
      },
      {
        title: '🏛️ Access Control Models',
        content: [
          { type: 'table', headers: ['Model', 'Who Decides', 'How', 'Security Level', 'Best For'], rows: [
            ['DAC', 'Resource owner', 'Owner sets permissions', 'Low', 'Personal files, small teams'],
            ['MAC', 'System/admin', 'Sensitivity labels (Top Secret, Secret)', 'Highest', 'Military, classified gov'],
            ['RBAC', 'Role assignment', 'Job role = permissions set', 'Strong', 'Enterprise, most businesses'],
            ['ABAC', 'Policy engine', 'Multiple attributes (time, location, role)', 'Very flexible', 'Cloud, Zero Trust'],
          ]},
          { type: 'tip', text: 'MAC is most secure because users CANNOT override it — the system enforces labels. DAC is most flexible but least secure because owners can over-share.' },
        ]
      },
      {
        title: '⚡ Least Privilege & Related Principles',
        content: [
          { type: 'table', headers: ['Principle', 'Meaning', 'Example'], rows: [
            ['Least Privilege', 'Minimum access needed for the job', 'Hotel keycard opens your room only'],
            ['Need-to-Know', 'Even with clearance, only access what your job requires', 'CIA analyst with Secret clearance can\'t read unrelated Secret files'],
            ['Separation of Duties', 'Split critical tasks so no one person can commit fraud alone', 'Bank: one approves payment, different person sends it'],
            ['Dual Control', 'Two people physically present for high-risk action', 'Nuclear missile launch requires two keys turned simultaneously'],
          ]},
        ]
      },
      {
        title: '🌐 Zero Trust & PAM',
        content: [
          { type: 'analogy', text: '"Never trust, always verify." Zero Trust assumes the network is already compromised. Every request — internal or external — must be verified.' },
          { type: 'p', text: 'PAM (Privileged Access Management) protects admin accounts — the most powerful and targeted accounts in any organization. Key PAM controls:' },
          { type: 'ul', items: [
            'Vaulting — store admin credentials in a secure vault, not in admins\' heads',
            'Just-in-Time (JIT) access — grant admin rights only when needed, revoke immediately after',
            'Session recording — record all privileged sessions for audit',
            'Password rotation — automatically rotate admin passwords after each use',
          ]},
        ]
      },
      {
        title: '🔗 SSO & Federation',
        content: [
          { type: 'table', headers: ['Feature', 'SSO', 'Federation'], rows: [
            ['Scope', 'Within ONE organization', 'Across MULTIPLE organizations'],
            ['Example', 'Company laptop → all company apps', '"Login with Google" on Spotify'],
            ['Trust', 'Single identity provider', 'Trust agreements between separate IdPs'],
            ['Protocols', 'Kerberos, LDAP', 'SAML, OAuth 2.0, OpenID Connect'],
          ]},
          { type: 'tip', text: 'SAML = enterprise authentication. OAuth = authorization (grant permissions). OpenID Connect = authentication on the web (Login with Google).' },
        ]
      },
    ]
  },
  'network-security': {
    sections: [
      {
        title: '📡 OSI Model — 7 Layers',
        content: [
          { type: 'p', text: 'Mnemonic bottom→top: "Please Do Not Throw Sausage Pizza Away"' },
          { type: 'table', headers: ['#', 'Layer', 'Data Unit', 'Key Devices', 'Key Protocols', 'Security Attacks'], rows: [
            ['7', 'Application', 'Data', 'None (protocol level)', 'HTTP, DNS, FTP, SMTP, SSH', 'Phishing, SQL injection, XSS, DNS poisoning'],
            ['6', 'Presentation', 'Data', 'None', 'SSL/TLS, JPEG, MPEG', 'SSL stripping, weak encryption'],
            ['5', 'Session', 'Data', 'None', 'NetBIOS, PPTP, SIP', 'Session hijacking, replay attacks'],
            ['4', 'Transport', 'Segment', 'Firewall (stateful)', 'TCP, UDP', 'SYN flood, port scanning, session hijacking'],
            ['3', 'Network', 'Packet', 'Router, Layer 3 switch', 'IP, ICMP, ARP, routing protocols', 'IP spoofing, DDoS, BGP hijacking'],
            ['2', 'Data Link', 'Frame', 'Switch, Bridge', 'Ethernet, Wi-Fi, ARP', 'MAC spoofing, ARP poisoning, VLAN hopping'],
            ['1', 'Physical', 'Bit', 'Hub, Repeater, NIC', 'DSL, Fiber, coaxial', 'Cable tapping, jamming, keystroke loggers'],
          ]},
          { type: 'tip', text: 'Hub = Layer 1 (dumb). Switch = Layer 2 (MAC). Router = Layer 3 (IP). If the question says "frames" → Layer 2. "Packets" → Layer 3. "Segments" → Layer 4.' },
        ]
      },
      {
        title: '🔄 TCP vs UDP',
        content: [
          { type: 'table', headers: ['Feature', 'TCP', 'UDP'], rows: [
            ['Reliability', '✅ Guaranteed delivery', '❌ No guarantee'],
            ['Speed', 'Slower (overhead)', 'Faster (minimal overhead)'],
            ['Connection', 'Connection-oriented (3-way handshake)', 'Connectionless (fire and forget)'],
            ['Use cases', 'HTTP/S, email, SSH, file transfer', 'Video streaming, VoIP, DNS, gaming'],
          ]},
          { type: 'p', text: 'TCP 3-Way Handshake: SYN → SYN-ACK → ACK. Like a phone call: dial, they pick up, you confirm.' },
        ]
      },
      {
        title: '🔌 Critical Port Numbers',
        content: [
          { type: 'table', headers: ['Port', 'Protocol', 'Service', 'Secure?'], rows: [
            ['20/21', 'TCP', 'FTP', '❌'],
            ['22', 'TCP', 'SSH / SFTP', '✅'],
            ['23', 'TCP', 'Telnet', '❌ Never use'],
            ['25', 'TCP', 'SMTP (send email)', '❌'],
            ['53', 'TCP/UDP', 'DNS', '❌'],
            ['67/68', 'UDP', 'DHCP', '❌'],
            ['80', 'TCP', 'HTTP', '❌'],
            ['443', 'TCP', 'HTTPS', '✅'],
            ['3389', 'TCP', 'RDP', '⚠️'],
          ]},
        ]
      },
      {
        title: '🔥 Firewalls & IDS/IPS',
        content: [
          { type: 'table', headers: ['Type', 'What It Inspects', 'Intelligence'], rows: [
            ['Packet-filtering', 'Source/dest IP + port', 'Low — stateless'],
            ['Stateful', 'Connection state + session', 'Medium — tracks conversations'],
            ['Proxy (application)', 'Full application content', 'High — deep inspection'],
            ['NGFW', 'All layers + user identity + apps', 'Highest'],
          ]},
          { type: 'table', headers: ['', 'IDS', 'IPS'], rows: [
            ['Action', 'Detect + Alert', 'Detect + Block'],
            ['Position', 'Passive (copy of traffic)', 'Inline (in traffic path)'],
            ['Analogy', 'Security camera', 'Security guard'],
          ]},
        ]
      },
      {
        title: '🌐 Network Architecture',
        content: [
          { type: 'p', text: 'DMZ (Demilitarized Zone): A buffer network segment between the untrusted internet and the trusted internal network. Public-facing servers (web, email, DNS) live in the DMZ.' },
          { type: 'p', text: 'VPN creates an encrypted tunnel across public internet. IPSec operates at Layer 3. SSL/TLS VPN operates at Layer 6/7.' },
          { type: 'table', headers: ['Wireless Standard', 'Security', 'Status'], rows: [
            ['WEP', 'RC4 stream cipher', '❌ Completely broken — never use'],
            ['WPA', 'TKIP', '❌ Deprecated — vulnerable'],
            ['WPA2', 'AES-CCMP', '⚠️ Acceptable but aging'],
            ['WPA3', 'SAE (Simultaneous Authentication of Equals)', '✅ Current standard'],
          ]},
        ]
      },
    ]
  },
  'security-operations': {
    sections: [
      {
        title: '🔒 Encryption',
        content: [
          { type: 'table', headers: ['Type', 'Keys', 'Speed', 'Use Case', 'Example'], rows: [
            ['Symmetric', 'One shared key', 'Fast', 'Bulk data encryption', 'AES-256'],
            ['Asymmetric', 'Public + private key pair', 'Slow', 'Key exchange, digital signatures', 'RSA, ECC'],
            ['Hybrid', 'Both (asymmetric to share symmetric key)', 'Best of both', 'TLS/HTTPS sessions', 'TLS 1.3'],
          ]},
          { type: 'p', text: 'Data States: at rest (stored on disk), in transit (moving across network), in use (being processed in RAM).' },
          { type: 'tip', text: 'AES = symmetric. RSA = asymmetric. HTTPS uses hybrid: RSA to share an AES session key, then AES for the actual data.' },
        ]
      },
      {
        title: '#️⃣ Hashing',
        content: [
          { type: 'p', text: 'Hashing is one-way and irreversible. It creates a fixed-size fingerprint of data to verify integrity — not for confidentiality.' },
          { type: 'table', headers: ['Algorithm', 'Output Size', 'Status'], rows: [
            ['MD5', '128-bit', '❌ Broken — collision vulnerabilities'],
            ['SHA-1', '160-bit', '❌ Deprecated'],
            ['SHA-256', '256-bit', '✅ Current standard'],
            ['SHA-512', '512-bit', '✅ Strongest common option'],
          ]},
          { type: 'p', text: 'Digital signatures combine hashing + asymmetric encryption. They provide: Integrity (hash), Authentication (signed with private key), Non-repudiation (only the private key owner could have signed).' },
        ]
      },
      {
        title: '🖥️ SIEM & Monitoring',
        content: [
          { type: 'p', text: 'SIEM (Security Information and Event Management): Aggregates logs from across the environment, correlates events to detect patterns, and generates alerts.' },
          { type: 'table', headers: ['Direction', 'Type', 'Monitors For'], rows: [
            ['Ingress', 'Inbound traffic', 'Attacks entering the network'],
            ['Egress', 'Outbound traffic', 'Data exfiltration, C2 communication'],
          ]},
        ]
      },
      {
        title: '🔧 System Hardening & Patch Management',
        content: [
          { type: 'ul', items: [
            'Hardening: Remove unnecessary services, close unused ports, apply secure configuration baselines',
            'Patch management: Apply vendor-released fixes for known vulnerabilities in a timely manner',
            'Configuration management: Document and enforce approved system configurations',
            'Change management: Formal process for approving, testing, and documenting system changes',
          ]},
          { type: 'p', text: 'Data destruction methods:' },
          { type: 'table', headers: ['Method', 'How', 'Media Type'], rows: [
            ['Overwriting', 'Write random data over existing data', 'Magnetic / SSD'],
            ['Degaussing', 'Powerful magnet destroys magnetic storage', 'Magnetic only (tapes, HDD)'],
            ['Physical shredding', 'Physically destroy the media', 'Any media'],
            ['Crypto shredding', 'Destroy encryption key — data unreadable', 'Encrypted storage'],
          ]},
        ]
      },
      {
        title: '🎓 Security Awareness',
        content: [
          { type: 'p', text: 'The human element is the most exploited attack vector. Security awareness training reduces susceptibility to social engineering, phishing, and insider threats.' },
          { type: 'ul', items: [
            'Security awareness training: Annual mandatory training for all employees',
            'Phishing simulations: Test employees with fake phishing emails, train those who fail',
            'AUP (Acceptable Use Policy): Defines what employees can/cannot do with company resources',
            'Clean desk policy: No sensitive documents left visible when workstation is unattended',
            'BYOD policy: Rules for personal devices accessing company resources',
          ]},
        ]
      },
    ]
  },
};
