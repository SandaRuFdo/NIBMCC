export const dayContent = {
  1: {
    title: 'CIA Triad — The Foundation of Cybersecurity',
    module: 1, domain: 1, hours: 3,
    intro: 'Day 1 of 17. The CIA Triad is the bedrock of every cybersecurity decision you will ever make. Every attack targets at least one of these three properties; every control protects at least one.',
    sections: [
      {
        hour: 1, label: 'Confidentiality',
        content: [
          { type: 'h3', text: 'What is Confidentiality?' },
          { type: 'p', text: 'Confidentiality ensures that information is only accessible to those who are authorized to access it. Unauthorized disclosure is the violation.' },
          { type: 'analogy', text: 'A sealed envelope — only the recipient is supposed to open it. If someone steams it open and reseals it, confidentiality has been violated even though the letter looks untouched.' },
          { type: 'ul', items: ['Encryption (data becomes unreadable without the key)', 'Access controls (only authorized accounts can open the file)', 'Data masking (show only last 4 digits of a credit card)', 'Classification (label data sensitivity: Public → Confidential → Secret → Top Secret)'] },
          { type: 'realworld', items: ['WhatsApp end-to-end encryption — even WhatsApp cannot read your messages', 'Hospital patient records — only treating physicians can view', 'Your bank shows only the last 4 digits of your card number'] },
          { type: 'tip', text: 'Confidentiality attacks: eavesdropping, shoulder surfing, data breaches, man-in-the-middle. The control: encryption.' },
        ]
      },
      {
        hour: 2, label: 'Integrity',
        content: [
          { type: 'h3', text: 'What is Integrity?' },
          { type: 'p', text: 'Integrity ensures that data has not been altered or tampered with — whether accidentally or maliciously. Unauthorized modification is the violation.' },
          { type: 'analogy', text: 'A tamper-proof seal on medicine. If the seal is broken when you buy it, you don\'t trust the contents — even if the pills look the same.' },
          { type: 'ul', items: ['Hashing (SHA-256 creates a unique fingerprint — any change alters the hash)', 'Digital signatures (mathematically prove who signed and that content is unchanged)', 'Checksums (file download verification)', 'Version control (track changes to documents)'] },
          { type: 'realworld', items: ['Bank statement — if someone alters a transaction amount, the totals won\'t match', 'Software download: SHA-256 hash on the website. Download the file, compute its hash. If different, file was tampered with', 'Blockchain: each block contains the hash of the previous block — tampering breaks the chain'] },
          { type: 'tip', text: 'Integrity attacks: man-in-the-middle (modifying data in transit), SQL injection (modifying database content), ransomware (encrypting files = denying access + modifying them).' },
        ]
      },
      {
        hour: 3, label: 'Availability',
        content: [
          { type: 'h3', text: 'What is Availability?' },
          { type: 'p', text: 'Availability ensures that systems and data are accessible when authorized users need them. Disruption or denial of access is the violation.' },
          { type: 'analogy', text: 'A spare tire. Your car keeps running even after a flat because you planned ahead. Availability is about planning for failures before they happen.' },
          { type: 'ul', items: ['Redundancy (duplicate systems — if one fails, another takes over)', 'Load balancing (distribute traffic across multiple servers)', 'Backups (restore data after loss)', 'DDoS protection (filter out attack traffic)', 'UPS/generators (power failure protection)'] },
          { type: 'realworld', items: ['Netflix has servers on multiple continents. If one data center goes down, traffic redirects automatically', 'The 2016 Dyn DDoS took down Twitter, Netflix, Reddit — availability was violated for millions of users', 'Hospital systems must be available 24/7 — downtime can cost lives (ISC2: availability = human safety)'] },
          { type: 'tip', text: 'DDoS = Availability attack. Ransomware = Integrity + Availability attack (data encrypted = can\'t access it). Data breach = Confidentiality attack.' },
          { type: 'table', headers: ['Attack', 'CIA Violated'], rows: [
            ['DDoS', 'Availability'],
            ['Data breach / eavesdropping', 'Confidentiality'],
            ['Data tampering / SQL injection', 'Integrity'],
            ['Ransomware', 'Integrity + Availability'],
            ['Man-in-the-Middle', 'Confidentiality + Integrity'],
          ]},
        ]
      },
    ]
  },
  2: {
    title: 'IAAA Framework',
    module: 1, domain: 1, hours: 3,
    intro: 'The IAAA framework is the 4-step process behind every secure authentication system. Each step is distinct — mixing them up is a common exam trap.',
    sections: [
      {
        hour: 1, label: 'Identification & Authentication',
        content: [
          { type: 'h3', text: 'Identification — Claiming an Identity' },
          { type: 'p', text: 'Identification is the act of claiming who you are. The system has no way to verify this claim yet — it just receives it.' },
          { type: 'ul', items: ['Entering a username', 'Swiping an employee badge', 'Presenting a student ID number'] },
          { type: 'h3', text: 'Authentication — Proving the Claim' },
          { type: 'p', text: 'Authentication is proving the identity claim is true. This is where credentials are verified against stored records.' },
          { type: 'ul', items: ['Entering a password (something you know)', 'Fingerprint scan (something you are)', 'OTP from authenticator app (something you have)'] },
          { type: 'analogy', text: 'Hotel check-in: You say "I have a reservation for Fernando" (Identification). You show your passport (Authentication). They confirm and give you a room keycard (Authorization). The hotel records your check-in time (Accountability).' },
        ]
      },
      {
        hour: 2, label: 'Authorization & Accountability',
        content: [
          { type: 'h3', text: 'Authorization — Granting Access' },
          { type: 'p', text: 'After authentication, the system determines what the verified user is allowed to do. This is authorization — mapping an identity to permissions.' },
          { type: 'ul', items: ['File permissions (read, write, execute)', 'RBAC (your job role determines your access)', 'ACLs (Access Control Lists on network devices)', 'Policy enforcement (firewall rules, conditional access)'] },
          { type: 'h3', text: 'Accountability — Logging Actions' },
          { type: 'p', text: 'Accountability ensures that every action can be traced back to the identity that performed it. This is achieved through logs and audit trails.' },
          { type: 'ul', items: ['Audit logs (who did what, when, from where)', 'SIEM (aggregates and correlates logs)', 'Non-repudiation (digital signatures prove authorship)'] },
          { type: 'tip', text: 'Non-repudiation is a key accountability mechanism. If you digitally sign a document, you CANNOT later claim you didn\'t sign it — the private key proves it was you.' },
        ]
      },
      {
        hour: 3, label: 'Authentication Factors',
        content: [
          { type: 'h3', text: '3 Authentication Factors' },
          { type: 'table', headers: ['Factor Type', 'What It Is', 'Examples', 'Weakness'], rows: [
            ['Something you KNOW', 'Knowledge', 'Password, PIN, passphrase, security question', 'Can be guessed, phished, or shared'],
            ['Something you HAVE', 'Possession', 'Smart card, RSA token, phone OTP app, USB key', 'Can be lost or stolen'],
            ['Something you ARE', 'Biometric', 'Fingerprint, face scan, retina, voice print', 'Cannot be changed if compromised'],
          ]},
          { type: 'h3', text: 'Multi-Factor Authentication (MFA)' },
          { type: 'p', text: 'MFA requires combining 2 or more factors from DIFFERENT categories. Using two factors from the same category provides no additional security dimension.' },
          { type: 'table', headers: ['Combination', 'Valid MFA?', 'Reason'], rows: [
            ['Password + OTP from phone', '✅ Yes', 'Know + Have = different categories'],
            ['Password + security question', '❌ No', 'Know + Know = same category'],
            ['Fingerprint + retina scan', '❌ No', 'Are + Are = same category'],
            ['PIN + fingerprint', '✅ Yes', 'Know + Are = different categories'],
          ]},
          { type: 'tip', text: 'The exam frequently presents invalid MFA combinations. Always check: are these from two DIFFERENT factor categories?' },
        ]
      },
    ]
  },
  3: {
    title: 'Risk Management',
    module: 1, domain: 1, hours: 3,
    intro: 'Risk = the likelihood that a threat exploits a vulnerability to cause harm. Risk management is how organizations identify, measure, and respond to risk systematically.',
    sections: [
      {
        hour: 1, label: 'Risk Terminology',
        content: [
          { type: 'h3', text: 'The Risk Chain' },
          { type: 'p', text: 'Asset → Vulnerability → Threat → Exploit → Risk → Impact. Each link in this chain must exist for risk to be realized.' },
          { type: 'table', headers: ['Term', 'Definition', 'Example'], rows: [
            ['Asset', 'Anything of value to the organization', 'Database server, customer data, employee laptops'],
            ['Vulnerability', 'A weakness that could be exploited', 'Unpatched Windows server, weak password policy'],
            ['Threat', 'A potential danger that could exploit a vulnerability', 'Ransomware, hackers, disgruntled employee, flood'],
            ['Threat Actor', 'The entity behind the threat', 'Nation-state hackers, criminal groups, insiders'],
            ['Exploit', 'An attack that successfully leverages a vulnerability', 'Hacker using EternalBlue exploit on unpatched server'],
            ['Risk', 'Likelihood × Impact of a threat exploiting a vulnerability', 'Probability of breach × Cost if it happens'],
          ]},
          { type: 'tip', text: 'Vulnerability ≠ Threat ≠ Risk. These three are different. A vulnerability without a threat = no risk. A threat with no vulnerability = no risk.' },
        ]
      },
      {
        hour: 2, label: 'Quantitative Risk — ALE Calculations',
        content: [
          { type: 'h3', text: 'The Three Formulas' },
          { type: 'table', headers: ['Formula', 'Meaning'], rows: [
            ['SLE = Asset Value (AV) × Exposure Factor (EF)', 'Single Loss Expectancy: cost of ONE occurrence'],
            ['ALE = SLE × Annualized Rate of Occurrence (ARO)', 'Annual cost of this risk to the organization'],
            ['Residual Risk = Risk after controls — controls\' cost offset', 'Remaining risk after safeguards applied'],
          ]},
          { type: 'analogy', text: 'Worked example: Server AV = $20,000. If stolen, 80% is lost (EF = 0.8). Theft occurs ~0.5 times/year (ARO). SLE = $20,000 × 0.8 = $16,000. ALE = $16,000 × 0.5 = $8,000/year. If a security control costs $5,000/year and reduces ALE to $1,000 → net benefit = $2,000/year.' },
          { type: 'tip', text: 'ALE answers: "How much should we budget for this risk per year?" If a control costs less than ALE reduction, implement it.' },
        ]
      },
      {
        hour: 3, label: 'Risk Treatment (MATA)',
        content: [
          { type: 'h3', text: 'Four Risk Responses' },
          { type: 'table', headers: ['Treatment', 'Action', 'When to Use', 'Analogy'], rows: [
            ['Mitigate', 'Reduce probability or impact (firewall, patching, training)', 'Risk is significant and cost of control < ALE', 'Bring an umbrella'],
            ['Avoid', 'Eliminate the risky activity entirely', 'Risk is too high; activity can be abandoned', 'Stay home to avoid rain'],
            ['Transfer', 'Shift financial risk to third party (cyber insurance)', 'Risk is real but organization can\'t fully mitigate', 'Buy rain insurance'],
            ['Accept', 'Acknowledge risk and take no action', 'Risk is low; cost to fix > potential impact', 'Walk in the rain'],
          ]},
          { type: 'p', text: 'Qualitative risk assessment uses categories: High, Medium, Low — based on subjective judgment and experience.' },
          { type: 'p', text: 'Quantitative risk uses numbers (ALE, SLE) — precise but requires reliable data.' },
          { type: 'tip', text: 'Residual risk: Risk remaining AFTER controls. You can never reduce to zero. The organization must formally ACCEPT residual risk.' },
        ]
      },
    ]
  },
  4: {
    title: 'Security Controls & Defense in Depth',
    module: 1, domain: 1, hours: 3,
    intro: 'Every security control fits into a 3×5 matrix of types and functions. Master this matrix and you can classify any control the exam throws at you — and understand why layering them creates true security.',
    sections: [
      {
        hour: 1, label: 'Control Types',
        content: [
          { type: 'h3', text: 'Three Control Types' },
          { type: 'table', headers: ['Type', 'Definition', 'Examples'], rows: [
            ['Administrative', 'People and process controls', 'Policies, procedures, training, background checks, separation of duties'],
            ['Technical (Logical)', 'Technology-based controls', 'Firewalls, encryption, IDS/IPS, MFA, access control lists'],
            ['Physical', 'Physical environment controls', 'Locks, fences, security guards, CCTV, mantraps, bollards'],
          ]},
          { type: 'analogy', text: 'A bank vault: Administrative = the policy that two employees must open it together. Technical = the electronic combination lock. Physical = the 3-ton steel door. All three layers working together.' },
          { type: 'tip', text: 'ISC2 prefers Administrative controls as the FOUNDATION — policies drive everything else. Technical and physical controls implement policies.' },
        ]
      },
      {
        hour: 2, label: 'Control Functions',
        content: [
          { type: 'h3', text: 'Five Control Functions' },
          { type: 'table', headers: ['Function', 'Goal', 'Examples'], rows: [
            ['Preventive', 'Stop the attack before it happens', 'Firewall, encryption, fence, security training'],
            ['Detective', 'Identify attacks in progress or after the fact', 'IDS, CCTV, audit logs, SIEM alerts'],
            ['Corrective', 'Fix damage and restore after an incident', 'Patching, system restore, fire suppression'],
            ['Deterrent', 'Discourage attackers from trying', 'Warning banners, "Beware of Dog" signs, visible cameras'],
            ['Compensating', 'Alternative control when primary is not feasible', 'Extra monitoring when MFA cannot be deployed'],
          ]},
          { type: 'tip', text: 'One control can have multiple functions. A CCTV camera is Physical + Detective. A warning banner is Technical + Deterrent. The exam tests both axes simultaneously.' },
        ]
      },
      {
        hour: 3, label: 'Defense in Depth',
        content: [
          { type: 'h3', text: 'The Full 3×5 Control Matrix' },
          { type: 'table', headers: ['Type \\ Function', 'Preventive', 'Detective', 'Corrective', 'Deterrent', 'Compensating'], rows: [
            ['Administrative', 'Policies, training', 'Audits, reviews', 'Lessons learned', 'Warning posters', 'Additional training'],
            ['Technical', 'Firewalls, MFA', 'IDS, SIEM, logs', 'Patching, restore', 'Login banners', 'Extra logging'],
            ['Physical', 'Locks, fences', 'CCTV, sensors', 'Fire suppression', 'Guard presence', 'Backup power'],
          ]},
          { type: 'h3', text: 'Defense in Depth' },
          { type: 'p', text: 'No single control is perfect. Defense in Depth stacks multiple independent layers so that if one fails, others compensate.' },
          { type: 'analogy', text: 'Medieval castle: moat (deter/prevent) → drawbridge (prevent) → outer walls (prevent) → archers (detect/deter) → inner keep (last resort). Each layer buys time and reduces attacker success probability.' },
          { type: 'realworld', items: [
            'Banking: chip card + PIN + SMS OTP + spending limit + fraud detection AI',
            'Corporate: perimeter firewall + network IDS + endpoint AV + MFA + SIEM + security training',
            'Hospital: badge access + CCTV + encrypted workstations + VPN + audit logs',
          ]},
        ]
      },
    ]
  },
  5: {
    title: 'Governance, Ethics & Module 1 Quiz',
    module: 1, domain: 1, hours: 3,
    intro: 'Day 5 closes Domain 1. Governance defines HOW an organization manages security through documents and roles. Ethics defines WHY — the ISC2 Code of Ethics is tested directly on the exam. Then: Module 1 Quiz.',
    sections: [
      {
        hour: 1, label: 'Governance Hierarchy',
        content: [
          { type: 'h3', text: 'The 4-Level Document Hierarchy' },
          { type: 'table', headers: ['Level', 'Document', 'Mandatory?', 'Detail Level', 'Analogy'], rows: [
            ['1 (Top)', 'Policy', 'Yes', 'High-level direction', 'Constitution'],
            ['2', 'Standard', 'Yes', 'Specific measurable requirements', 'Laws'],
            ['3', 'Procedure', 'Yes', 'Step-by-step instructions', 'Driver\'s manual'],
            ['4 (Bottom)', 'Guideline', 'No', 'Recommended best practices', 'Advice from a friend'],
          ]},
          { type: 'analogy', text: 'Policy: "All data must be encrypted." Standard: "AES-256 must be used for data at rest." Procedure: "Step 1: Install BitLocker. Step 2: Enable TPM..." Guideline: "Consider using a password manager."' },
          { type: 'tip', text: 'Only Guidelines are optional. Policy, Standard, and Procedure are all mandatory. The exam tests this distinction.' },
        ]
      },
      {
        hour: 2, label: 'Data Roles & Classification',
        content: [
          { type: 'h3', text: 'Data Roles' },
          { type: 'table', headers: ['Role', 'Responsibility'], rows: [
            ['Data Owner', 'Senior manager accountable for data. Determines classification and access levels.'],
            ['Data Custodian', 'IT team. Day-to-day management: storage, backup, encryption, access implementation.'],
            ['Data User', 'Anyone who accesses and uses the data in their job role.'],
            ['Data Processor', 'Third party that processes data on behalf of the owner (GDPR term).'],
          ]},
          { type: 'h3', text: 'Classification Levels' },
          { type: 'table', headers: ['Government', 'Corporate Equivalent', 'Description'], rows: [
            ['Top Secret', 'Confidential/Restricted', 'Highest sensitivity — serious damage if disclosed'],
            ['Secret', 'Private', 'Significant harm if disclosed'],
            ['Confidential', 'Internal', 'Limited internal distribution only'],
            ['Unclassified', 'Public', 'Safe for public disclosure'],
          ]},
          { type: 'tip', text: 'The DATA OWNER classifies data and sets access policy. The DATA CUSTODIAN implements it. Owners are business leaders; custodians are IT staff.' },
        ]
      },
      {
        hour: 3, label: 'ISC2 Code of Ethics',
        content: [
          { type: 'h3', text: '4 Canons — In Priority Order (PAPA)' },
          { type: 'table', headers: ['Priority', 'Canon', 'Mnemonic'], rows: [
            ['1 (Highest)', 'Protect society, the common good, necessary public trust, and infrastructure', 'P — Protect'],
            ['2', 'Act honorably, honestly, justly, responsibly, and legally', 'A — Act'],
            ['3', 'Provide diligent and competent service to principals', 'P — Provide'],
            ['4 (Lowest)', 'Advance and protect the profession', 'A — Advance'],
          ]},
          { type: 'analogy', text: 'Your employer asks you to conceal a data breach from regulators. Canon 1 (Protect society) overrides Canon 3 (Serve your employer). You must report it. Public safety always wins.' },
          { type: 'tip', text: 'When the exam presents a conflict: Society > Employer > Profession. Human safety > property > data. These two rules answer 90% of ethics questions.' },
          { type: 'realworld', items: [
            'Security researcher finds a critical vulnerability in hospital software. Ethics: disclose responsibly — patient safety (Canon 1) overrides keeping quiet to protect reputation (Canon 4)',
            'Boss tells you to skip the security audit to meet a deadline. Ethics: refuse — providing competent service (Canon 3) includes doing security properly',
          ]},
        ]
      },
    ]
  },
  6: {
    title: 'Disaster Recovery & Incident Response',
    module: 2, domain: 2, hours: 3,
    intro: 'Domain 2 is worth 10% of the exam but appears in scenario questions across all domains. BCP keeps the business alive. DRP restores IT systems. IR is what you do when it all goes wrong.',
    sections: [
      {
        hour: 1, label: 'BCP & Recovery Sites',
        content: [
          { type: 'h3', text: 'BCP vs DRP' },
          { type: 'p', text: 'BCP (Business Continuity Planning) keeps critical business functions running during any disruption. DRP (Disaster Recovery Plan) focuses specifically on restoring IT systems after a disaster. DRP is a subset of BCP.' },
          { type: 'h3', text: 'Key Recovery Metrics' },
          { type: 'table', headers: ['Metric', 'Definition', 'Analogy'], rows: [
            ['RTO', 'Recovery Time Objective — max acceptable downtime', 'How long can the restaurant stay closed before losing customers?'],
            ['RPO', 'Recovery Point Objective — max acceptable data loss', 'How much food can we afford to throw away and reorder?'],
            ['MTBF', 'Mean Time Between Failures', 'How often does the oven break on average?'],
            ['MTTR', 'Mean Time To Repair', 'How long does it take to fix it?'],
          ]},
          { type: 'h3', text: 'Recovery Sites' },
          { type: 'table', headers: ['Site', 'What\'s There', 'Time to Activate', 'Cost'], rows: [
            ['Hot Site', 'Fully equipped + live data sync', 'Minutes', 'Highest $$$'],
            ['Warm Site', 'Hardware ready + needs data restore', 'Hours to days', 'Medium $$'],
            ['Cold Site', 'Empty facility only', 'Days to weeks', 'Cheapest $'],
          ]},
          { type: 'tip', text: 'Scenario rule: If the question requires the fastest recovery, choose Hot Site. If cost is the priority, Cold Site. If it says "data restored from tape backups," that\'s a Cold or Warm site.' },
        ]
      },
      {
        hour: 2, label: 'Backup Types',
        content: [
          { type: 'h3', text: 'Three Backup Strategies' },
          { type: 'table', headers: ['Type', 'What It Backs Up', 'Backup Speed', 'Restore Speed', 'What You Need to Restore'], rows: [
            ['Full', 'Everything — complete copy', 'Slowest', 'Fastest', 'Just the most recent full backup'],
            ['Incremental', 'Changes since LAST ANY backup', 'Fastest', 'Slowest', 'Last full + every incremental since'],
            ['Differential', 'Changes since LAST FULL backup', 'Medium', 'Medium', 'Last full backup + latest differential only'],
          ]},
          { type: 'analogy', text: 'Homework analogy: Full = photocopy your entire notebook every night. Incremental = write only today\'s new notes. Differential = write everything you\'ve added since the last full photocopy.' },
          { type: 'tip', text: 'Incremental = fastest to create, slowest to restore (you need every piece). Differential = slower to create, faster to restore (only 2 pieces needed). Exam loves this comparison.' },
        ]
      },
      {
        hour: 3, label: 'Incident Response — 6 Phases',
        content: [
          { type: 'h3', text: 'The 6-Phase IR Lifecycle' },
          { type: 'table', headers: ['Phase', 'Action', 'Fire Analogy', 'Key Point'], rows: [
            ['1. Preparation', 'Policies, tools, training, IR team established', 'Install smoke detectors and extinguishers', 'Happens BEFORE any incident'],
            ['2. Detection & Analysis', 'Identify, triage, and classify the incident', 'Smell smoke — is it real?', 'Determine scope and severity'],
            ['3. Containment', 'Stop it spreading to more systems', 'Close doors to isolate fire', 'FIRST ACTION after detection'],
            ['4. Eradication', 'Remove malware, patch vulnerabilities, close entry points', 'Put the fire out', 'Eliminate root cause'],
            ['5. Recovery', 'Restore systems to verified clean state', 'Clean up and rebuild', 'Verify clean BEFORE restoring'],
            ['6. Lessons Learned', 'Post-incident review, update defenses', 'Improve the building\'s fire safety', 'Document everything'],
          ]},
          { type: 'tip', text: 'Containment is ALWAYS the first action after detection. Stop the bleeding before treating the wound. The exam tests phase ORDER repeatedly.' },
          { type: 'realworld', items: [
            '2017 WannaCry ransomware: Containment = immediately disconnect infected machines from the network. Eradication = patch MS17-010. Recovery = restore from backups.',
            'Credit card breach: Containment = isolate compromised servers. Eradication = remove skimmer malware. Recovery = issue new cards. Lessons Learned = quarterly PCI-DSS audits.',
          ]},
        ]
      },
    ]
  },
  7: {
    title: 'Module 2 Quiz & Begin Access Controls',
    module: 2, domain: 2, hours: 3,
    intro: 'Day 7 closes Domain 2 with the Module 2 Quiz, then pivots to Domain 3 — Access Controls (22% of exam). Access control answers the question: who gets in, to what, and how do we know it\'s really them?',
    sections: [
      {
        hour: 1, label: 'IR Tabletop Exercise',
        content: [
          { type: 'h3', text: 'Scenario: Ransomware Attack' },
          { type: 'p', text: 'Tabletop exercises simulate an incident in a meeting room — no real systems affected. Teams walk through their response plan and identify gaps.' },
          { type: 'table', headers: ['Time', 'Event', 'Correct Response', 'IR Phase'], rows: [
            ['09:00', 'SIEM alert: unusual file encryption activity on server', 'Investigate — is this real or false positive?', 'Detection'],
            ['09:15', 'Confirmed ransomware spreading across file shares', 'Isolate infected systems from network immediately', 'Containment'],
            ['09:30', 'Malware identified as LockBit variant', 'Remove malware, identify entry point (phishing email)', 'Eradication'],
            ['10:00', 'Systems clean, entry point patched', 'Restore from last clean backup, verify integrity', 'Recovery'],
            ['11:00', 'All systems operational', 'Document timeline, update IR plan, retraining', 'Lessons Learned'],
          ]},
          { type: 'tip', text: 'Module 2 Quiz follows this session. Review: RTO vs RPO, IR 6 phases in order, Hot/Warm/Cold sites, Full/Incremental/Differential backups.' },
        ]
      },
      {
        hour: 2, label: 'Access Control Fundamentals',
        content: [
          { type: 'h3', text: 'What is Access Control?' },
          { type: 'p', text: 'Access control is the process of granting or denying requests to use resources. It answers three questions: Who are you? What are you allowed to do? Did you actually do it?' },
          { type: 'h3', text: 'Identity Lifecycle' },
          { type: 'table', headers: ['Phase', 'Action', 'Example'], rows: [
            ['Provisioning', 'Create the account and assign permissions', 'New employee gets AD account + role-based access'],
            ['Management', 'Maintain access as roles change', 'Promotion = update role; transfer = update permissions'],
            ['Review', 'Periodic access certification', 'Quarterly: managers review team access reports'],
            ['Deprovisioning', 'Remove access immediately when no longer needed', 'Employee leaves → account disabled within hours'],
          ]},
          { type: 'tip', text: 'Deprovisioning must happen IMMEDIATELY upon termination. Active accounts of former employees are a top insider threat risk and a common exam scenario.' },
        ]
      },
      {
        hour: 3, label: 'Authentication Factors Deep Dive',
        content: [
          { type: 'h3', text: 'Factor Types Recap' },
          { type: 'table', headers: ['Factor', 'Category', 'Examples', 'Exam Trap'], rows: [
            ['Password', 'Know', 'Password, PIN, passphrase', 'Password + security question = NOT MFA (both Know)'],
            ['Security question', 'Know', '"Mother\'s maiden name?"', 'Know factor — NOT a second factor if combined with password'],
            ['OTP from app', 'Have', 'Google Authenticator, Authy', 'Valid second factor (different category from password)'],
            ['Smart card', 'Have', 'PIV card, CAC', 'Valid second factor'],
            ['Fingerprint', 'Are', 'Touch ID, Windows Hello', 'Valid second factor'],
            ['Face scan', 'Are', 'Face ID', 'Valid — are you + know you = MFA'],
          ]},
          { type: 'h3', text: 'Passwordless Authentication' },
          { type: 'p', text: 'Modern trend: eliminate passwords entirely. Use biometric (Are) + device (Have). FIDO2/WebAuthn standard. More secure than passwords — no credential to phish.' },
        ]
      },
    ]
  },
  8: {
    title: 'MFA & Access Control Models',
    module: 3, domain: 3, hours: 3,
    intro: 'Day 8 goes deep on the four access control models. These are not interchangeable — the exam will give you a scenario and ask which model is in use. Know the distinguishing features of each.',
    sections: [
      {
        hour: 1, label: 'MFA Deep Dive',
        content: [
          { type: 'h3', text: 'MFA Rule: Different Categories Required' },
          { type: 'table', headers: ['Combination', 'Categories', 'Valid MFA?'], rows: [
            ['Password + fingerprint', 'Know + Are', '✅ Yes'],
            ['Password + OTP app', 'Know + Have', '✅ Yes'],
            ['PIN + smart card', 'Know + Have', '✅ Yes'],
            ['Fingerprint + retina scan', 'Are + Are', '❌ No'],
            ['Password + security question', 'Know + Know', '❌ No'],
            ['Two different passwords', 'Know + Know', '❌ No'],
          ]},
          { type: 'analogy', text: '"Wearing two helmets doesn\'t protect your legs." Using two Know factors offers zero additional protection against an attacker who already knows your first password.' },
          { type: 'tip', text: 'The exam may say "the system requires a PIN and a security question." Is this MFA? NO — both are Knowledge factors.' },
        ]
      },
      {
        hour: 2, label: 'DAC, MAC, and RBAC',
        content: [
          { type: 'h3', text: 'DAC — Discretionary Access Control' },
          { type: 'p', text: 'The resource OWNER decides who gets access. Most flexible, least secure. Common in personal systems (Windows/Mac file sharing).' },
          { type: 'analogy', text: 'DAC: You own a house. You decide who gets a key. You can give a key to anyone you want — no one can stop you.' },
          { type: 'h3', text: 'MAC — Mandatory Access Control' },
          { type: 'p', text: 'The SYSTEM enforces access based on sensitivity labels (Top Secret, Secret, Confidential). Users cannot override. Most secure model. Used in military/government.' },
          { type: 'analogy', text: 'MAC: A military base with security clearance levels. Even if the general wants to share a Top Secret document with a Secret-cleared officer, the SYSTEM prevents it — no exceptions.' },
          { type: 'h3', text: 'RBAC — Role-Based Access Control' },
          { type: 'p', text: 'Access is assigned based on JOB ROLE. All users with the same role get the same access set. Most common in enterprise environments.' },
          { type: 'table', headers: ['Model', 'Who Controls Access', 'Security Level', 'Best Environment'], rows: [
            ['DAC', 'Resource owner', 'Low (owner can over-share)', 'Personal computers, small teams'],
            ['MAC', 'System via labels', 'Highest (immutable)', 'Military, government classified systems'],
            ['RBAC', 'IT assigns roles', 'Strong', 'Enterprise, hospitals, banks'],
            ['ABAC', 'Policy engine', 'Very flexible', 'Cloud, Zero Trust environments'],
          ]},
        ]
      },
      {
        hour: 3, label: 'ABAC & Access Control Lists',
        content: [
          { type: 'h3', text: 'ABAC — Attribute-Based Access Control' },
          { type: 'p', text: 'Access is granted based on multiple attributes evaluated together: user attributes (role, department, clearance) + resource attributes (classification, owner) + environment attributes (time, location).' },
          { type: 'analogy', text: 'ABAC: A smart building door that opens only if: you are a doctor (role) + you are trying to access the ICU (resource classification) + it is between 8am-8pm (time) + you are on-site (location). All four conditions must be true.' },
          { type: 'h3', text: 'Access Control Lists (ACLs)' },
          { type: 'p', text: 'An ACL is a table attached to a resource listing who can access it and what they can do. Common on network devices (router ACLs) and file systems.' },
          { type: 'table', headers: ['Subject', 'Permission'], rows: [
            ['Alice', 'Read, Write'],
            ['Bob', 'Read only'],
            ['IT_Admins group', 'Full control'],
            ['Everyone', 'No access'],
          ]},
          { type: 'tip', text: 'ACLs implement DAC. Firewall ACLs implement network access control. The model (DAC/MAC/RBAC) determines WHO controls the ACL; the ACL is the mechanism that enforces it.' },
        ]
      },
    ]
  },
  9: {
    title: 'Least Privilege, PAM, Zero Trust & Physical Controls',
    module: 3, domain: 3, hours: 3,
    intro: '"Never trust, always verify." Day 9 covers the operational principles that govern HOW access is managed day-to-day: Least Privilege, PAM, Zero Trust, and the physical controls that defend the building.',
    sections: [
      {
        hour: 1, label: 'Least Privilege & SoD',
        content: [
          { type: 'h3', text: 'Principle of Least Privilege' },
          { type: 'p', text: 'Every user, process, and system should have the MINIMUM access necessary to perform their job — nothing more, nothing less.' },
          { type: 'analogy', text: 'A hotel keycard opens only YOUR room, the gym, and the parking garage — not every room on every floor. Least privilege: access only what your role requires.' },
          { type: 'table', headers: ['Principle', 'Definition', 'Purpose'], rows: [
            ['Least Privilege', 'Minimum access needed for the job', 'Limits damage if account is compromised'],
            ['Need-to-Know', 'Access only what specific duties require (even if clearance allows more)', 'Prevents insider threats and accidental exposure'],
            ['Separation of Duties', 'Split critical tasks so no one person controls the whole process', 'Prevents fraud — no single point of corruption'],
            ['Dual Control', 'Two authorized people physically present for high-risk actions', 'Nuclear launch, vault access, wire transfers'],
            ['Job Rotation', 'Periodically rotate staff through different roles', 'Detects fraud, prevents single point of knowledge'],
          ]},
          { type: 'tip', text: 'Separation of Duties (SoD) is the primary control against FRAUD. The person who approves a payment should never be the same person who processes it.' },
        ]
      },
      {
        hour: 2, label: 'PAM & Zero Trust',
        content: [
          { type: 'h3', text: 'Privileged Access Management (PAM)' },
          { type: 'p', text: 'PAM protects administrator and privileged accounts — the most powerful and targeted accounts in any organization. A compromised admin account = game over.' },
          { type: 'ul', items: [
            'Credential Vaulting: Store admin passwords in an encrypted vault; admins never know the actual password',
            'Just-in-Time (JIT) Access: Grant admin rights only for the duration needed, auto-revoke after',
            'Session Recording: Record every privileged session for audit and forensics',
            'Password Rotation: Automatically rotate credentials after each privileged session',
            'Multi-party authorization: Require approval from a second admin before granting access',
          ]},
          { type: 'h3', text: 'Zero Trust Architecture' },
          { type: 'p', text: '"Never trust, always verify." Zero Trust assumes the network is already compromised. Every single access request — regardless of whether it comes from inside or outside the network — must be verified.' },
          { type: 'table', headers: ['Old Model (Castle & Moat)', 'Zero Trust'], rows: [
            ['Trust internal network users', 'Trust no one by default'],
            ['Verify at perimeter only', 'Verify every request, every time'],
            ['VPN = trusted access', 'VPN + MFA + device health + behavior analytics'],
            ['Implicit trust once inside', 'Continuous verification'],
          ]},
        ]
      },
      {
        hour: 3, label: 'Physical Access Controls',
        content: [
          { type: 'h3', text: 'Physical Security Controls' },
          { type: 'table', headers: ['Control', 'Type + Function', 'Purpose'], rows: [
            ['Security badges/cards', 'Physical + Preventive', 'Control who enters secure areas'],
            ['Mantrap/Vestibule', 'Physical + Preventive', 'Two-door airlock — one door must close before next opens. Prevents tailgating'],
            ['CCTV cameras', 'Physical + Detective', 'Record activity for forensics and deterrence'],
            ['Security guards', 'Physical + Preventive + Detective', 'Active monitoring and response'],
            ['Bollards', 'Physical + Preventive', 'Concrete posts prevent vehicle ramming attacks'],
            ['Motion sensors', 'Physical + Detective', 'Detect movement in restricted areas'],
            ['CPTED', 'Physical + Deterrent', 'Crime Prevention Through Environmental Design — lighting, sightlines, landscaping'],
            ['Faraday cage', 'Physical + Preventive', 'Blocks all electromagnetic signals — used in SCIF rooms'],
          ]},
          { type: 'analogy', text: 'A mantrap is like an airport gate: scan your boarding pass to enter the jetbridge (door 1 opens), then door 1 closes, and only then does door 2 (to the plane) open. No one can slip through behind you.' },
          { type: 'tip', text: 'Tailgating = following someone through a secure door without scanning. Piggybacking = with the person\'s knowledge/permission. Both are physical security violations.' },
        ]
      },
    ]
  },
  10: {
    title: 'SSO, Federation + Module 3 Quiz + Begin OSI',
    module: 3, domain: 3, hours: 3,
    intro: 'Day 10 is a milestone: close Domain 3 with SSO/Federation and the Module 3 Quiz, then enter Domain 4 (Network Security — 24% of exam). The OSI model is the framework for everything in Domain 4.',
    sections: [
      {
        hour: 1, label: 'SSO & Federation',
        content: [
          { type: 'h3', text: 'Single Sign-On (SSO)' },
          { type: 'p', text: 'SSO allows a user to authenticate ONCE and access multiple applications without re-authenticating. One login → all connected systems.' },
          { type: 'table', headers: ['SSO Benefit', 'SSO Risk'], rows: [
            ['Better user experience — one password', 'Single point of failure — one breach = all systems'],
            ['Fewer passwords = fewer weak passwords', 'Must pair with strong MFA to be safe'],
            ['Centralised authentication management', 'IdP becomes highest-value attack target'],
            ['Reduced help desk password resets', 'Session token theft can bypass authentication'],
          ]},
          { type: 'h3', text: 'Federation' },
          { type: 'p', text: 'Federation extends SSO ACROSS organizational boundaries. Your identity provider (IdP) is trusted by a third-party service provider (SP).' },
          { type: 'analogy', text: '"Login with Google" on Spotify = Federation. Spotify (SP) trusts Google (IdP). You authenticate to Google once; Google vouches for you to Spotify. No Spotify password needed.' },
          { type: 'table', headers: ['Protocol', 'Type', 'Used For'], rows: [
            ['SAML 2.0', 'XML-based', 'Enterprise SSO/Federation (corporate apps)'],
            ['OAuth 2.0', 'JSON/REST-based', 'Authorization delegation ("Login with X" — grants permissions)'],
            ['OpenID Connect', 'Built on OAuth 2.0', 'Authentication on the web (proves WHO you are)'],
            ['Kerberos', 'Ticket-based', 'Internal Windows domain SSO (Active Directory)'],
          ]},
          { type: 'tip', text: 'SAML = authentication for enterprise. OAuth = authorization (what can the app access?). OpenID Connect = authentication for web/mobile. The exam tests these distinctions.' },
        ]
      },
      {
        hour: 2, label: 'Module 3 Quiz Review',
        content: [
          { type: 'h3', text: 'Domain 3 Key Concepts to Verify' },
          { type: 'table', headers: ['Topic', 'Key Point'], rows: [
            ['Authentication factors', 'Know/Have/Are — different categories required for MFA'],
            ['DAC', 'Owner decides. Most flexible, least secure'],
            ['MAC', 'System enforces labels. Most secure. Users cannot override'],
            ['RBAC', 'Job role = permission set. Most common enterprise model'],
            ['Least privilege', 'Minimum access needed. Nothing more'],
            ['Need-to-Know', 'Even with clearance, only access what job requires'],
            ['SoD', 'Split tasks to prevent single-person fraud'],
            ['Zero Trust', 'Never trust, always verify. Assume breach'],
            ['PAM', 'Protect admin accounts: vault, JIT, session recording'],
            ['SSO risk', 'Single point of failure — must add MFA'],
            ['SAML vs OAuth', 'SAML = authentication. OAuth = authorization'],
          ]},
          { type: 'tip', text: 'Module 3 Quiz is 15 questions. Passing = 70%+ (11/15). Review any weak areas before moving to Domain 4.' },
        ]
      },
      {
        hour: 3, label: 'OSI Model Introduction',
        content: [
          { type: 'h3', text: 'Why the OSI Model Matters' },
          { type: 'p', text: 'The OSI model is a 7-layer conceptual framework that describes how data travels across a network. It is the backbone of Domain 4. Understanding which layer a protocol, device, or attack lives on determines which controls apply.' },
          { type: 'p', text: 'Mnemonic — top to bottom: "All People Seem To Need Data Processing"' },
          { type: 'table', headers: ['Layer', 'Name', 'Key Devices', 'Data Unit', 'Mnemonic Word'], rows: [
            ['7', 'Application', 'None (protocol)', 'Data', 'All'],
            ['6', 'Presentation', 'None', 'Data', 'People'],
            ['5', 'Session', 'None', 'Data', 'Seem'],
            ['4', 'Transport', 'Firewall', 'Segment', 'To'],
            ['3', 'Network', 'Router', 'Packet', 'Need'],
            ['2', 'Data Link', 'Switch', 'Frame', 'Data'],
            ['1', 'Physical', 'Hub, cables', 'Bit', 'Processing'],
          ]},
          { type: 'tip', text: 'Data unit vocabulary: "frame" → Layer 2. "packet" → Layer 3. "segment" → Layer 4. If the question mentions any of these words, you know what layer it\'s at.' },
        ]
      },
    ]
  },
  11: {
    title: 'TCP/IP, Wireshark & OSI Deep Dive',
    module: 4, domain: 4, hours: 3,
    intro: 'Day 11 goes deep on the OSI model — every layer, every attack, every protocol. Then TCP vs UDP, the 3-way handshake, and a live Wireshark demo. The most technical day of the course.',
    sections: [
      {
        hour: 1, label: 'OSI Full Breakdown',
        content: [
          { type: 'h3', text: 'OSI Model — All 7 Layers with Attacks' },
          { type: 'table', headers: ['Layer', 'Name', 'Protocols', 'Devices', 'Attacks'], rows: [
            ['7','Application','HTTP, HTTPS, DNS, FTP, SMTP, SSH','—','Phishing, SQL injection, XSS, DNS poisoning'],
            ['6','Presentation','SSL/TLS, JPEG, MPEG','—','SSL stripping, cipher downgrade attacks'],
            ['5','Session','NetBIOS, PPTP, SIP','—','Session hijacking, replay attacks'],
            ['4','Transport','TCP, UDP','Stateful firewall','SYN flood, port scanning'],
            ['3','Network','IP, ICMP, ARP','Router, L3 switch','IP spoofing, DDoS, BGP hijacking'],
            ['2','Data Link','Ethernet, Wi-Fi, ARP','Switch, bridge','ARP poisoning, MAC spoofing, VLAN hopping'],
            ['1','Physical','Fiber, coaxial, DSL','Hub, repeater, NIC','Cable tapping, jamming'],
          ]},
          { type: 'tip', text: 'Hub = Layer 1. Switch = Layer 2 (MAC). Router = Layer 3 (IP). Stateful firewall = Layer 4. Proxy firewall = Layer 7.' },
        ]
      },
      {
        hour: 2, label: 'TCP vs UDP',
        content: [
          { type: 'h3', text: 'TCP — Reliable, Ordered, Connected' },
          { type: 'table', headers: ['Feature','TCP','UDP'], rows: [
            ['Reliability','Guaranteed delivery + acknowledgments','No guarantee — fire and forget'],
            ['Connection','Connection-oriented (handshake first)','Connectionless'],
            ['Order','Maintains packet order','No ordering'],
            ['Speed','Slower (overhead)','Faster (minimal overhead)'],
            ['Use cases','HTTP/S, SSH, email, file transfer','DNS, VoIP, video streaming, gaming'],
          ]},
          { type: 'h3', text: 'TCP 3-Way Handshake' },
          { type: 'ul', items: [
            'Step 1 — SYN: Client → Server ("I want to connect")',
            'Step 2 — SYN-ACK: Server → Client ("OK, I acknowledge, are you ready?")',
            'Step 3 — ACK: Client → Server ("Yes, connection established")',
          ]},
          { type: 'analogy', text: 'Phone call: You dial (SYN). They answer "Hello?" (SYN-ACK). You say "Hi, it\'s me" (ACK). Connection established — conversation begins.' },
          { type: 'tip', text: 'SYN flood attack: Attacker sends thousands of SYN packets but never completes the handshake. Server resources exhausted waiting for ACKs. This is a DoS attack at Layer 4.' },
        ]
      },
      {
        hour: 3, label: 'Wireshark Demo',
        content: [
          { type: 'h3', text: 'Reading Packet Captures' },
          { type: 'p', text: 'Wireshark captures raw network traffic. Each row is one packet. You can filter by protocol, IP, port, or content.' },
          { type: 'table', headers: ['Wireshark Filter','Shows'], rows: [
            ['http','All HTTP traffic (Layer 7)'],
            ['tcp.port == 443','All HTTPS traffic (Layer 4 filter)'],
            ['ip.addr == 192.168.1.1','All traffic to/from a specific IP'],
            ['tcp.flags.syn == 1','TCP SYN packets (spot handshakes or SYN floods)'],
            ['dns','All DNS queries and responses'],
          ]},
          { type: 'tip', text: 'Wireshark is passive — it captures but does not inject or block. It is a Detective tool. For active blocking, use IPS or a firewall.' },
        ]
      },
    ]
  },
  12: {
    title: 'Ports, Protocols, Firewalls & IDS/IPS',
    module: 4, domain: 4, hours: 3,
    intro: 'Ports are pure memorisation — we make it systematic. Then understand exactly how firewalls filter traffic and how IDS/IPS detect and stop threats. Domain 4\'s most testable content.',
    sections: [
      {
        hour: 1, label: 'Critical Ports',
        content: [
          { type: 'h3', text: 'Must-Know Ports for the Exam' },
          { type: 'table', headers: ['Port','Protocol','Service','Secure?','Replacement'], rows: [
            ['20/21','TCP','FTP','❌','Use SFTP (port 22) or FTPS'],
            ['22','TCP','SSH / SFTP / SCP','✅','Replaces Telnet, FTP'],
            ['23','TCP','Telnet','❌ Never','SSH (22)'],
            ['25','TCP','SMTP (send email)','❌','SMTP+TLS port 587'],
            ['53','TCP/UDP','DNS','❌','DNS over HTTPS (DoH) port 443'],
            ['67/68','UDP','DHCP','❌','—'],
            ['80','TCP','HTTP','❌','HTTPS (443)'],
            ['110','TCP','POP3','❌','IMAPS (993)'],
            ['143','TCP','IMAP','❌','IMAPS (993)'],
            ['443','TCP','HTTPS','✅','—'],
            ['3389','TCP','RDP','⚠️','Use VPN + MFA'],
          ]},
          { type: 'tip', text: 'Memory trick: SSH=22, Telnet=23, SMTP=25, DNS=53, HTTP=80, HTTPS=443. If it\'s insecure, the secure version is almost always port 22 (SSH) or adds TLS.' },
        ]
      },
      {
        hour: 2, label: 'Firewall Types',
        content: [
          { type: 'table', headers: ['Firewall Type','What It Inspects','Intelligence','OSI Layer'], rows: [
            ['Packet-filtering','Source/dest IP + port only','Lowest — stateless, no context','Layer 3-4'],
            ['Stateful inspection','Full TCP session state','Medium — tracks connections','Layer 4'],
            ['Proxy / Application','Full application content','High — understands HTTP, FTP etc','Layer 7'],
            ['NGFW (Next-Gen)','All layers + user identity + application','Highest — DPI, malware scanning','All layers'],
          ]},
          { type: 'analogy', text: 'Packet-filter = security guard who checks your badge number. Stateful = guard who tracks your whole visit. Proxy = guard who reads your letter before passing it. NGFW = guard who knows who you are, where you\'ve been, and analyses your body language.' },
          { type: 'tip', text: 'Stateful firewalls remember the connection state — they know a packet is part of an established session vs a new unsolicited connection. Packet-filtering firewalls cannot tell the difference.' },
        ]
      },
      {
        hour: 3, label: 'IDS vs IPS',
        content: [
          { type: 'table', headers: ['','IDS','IPS'], rows: [
            ['Full name','Intrusion Detection System','Intrusion Prevention System'],
            ['Action','Detect + Alert only','Detect + Block traffic'],
            ['Position','Passive (gets a copy of traffic)','Inline (sits in traffic path)'],
            ['False positive impact','Just a noisy alert','Blocks legitimate traffic — business impact'],
            ['Analogy','Security camera','Security guard with authority to stop people'],
          ]},
          { type: 'h3', text: 'Detection Methods' },
          { type: 'table', headers: ['Method','How It Works','Strength','Weakness'], rows: [
            ['Signature-based','Compares traffic to known attack patterns','Very accurate for known attacks','Cannot detect new (zero-day) attacks'],
            ['Anomaly-based','Detects deviations from normal baseline','Can detect novel attacks','High false positive rate'],
            ['Heuristic','Rules-based pattern analysis','Balance of both','Requires tuning'],
          ]},
          { type: 'tip', text: 'Zero-day attacks bypass signature-based detection because no signature exists yet. Anomaly-based detection is the only approach that can catch truly new attacks.' },
        ]
      },
    ]
  },
  13: {
    title: 'DMZ, VPN & Wireless Security',
    module: 4, domain: 4, hours: 3,
    intro: 'Day 13 covers network architecture: how to design a secure network with DMZs and segmentation, how VPNs create encrypted tunnels, and why wireless security standards matter enormously.',
    sections: [
      {
        hour: 1, label: 'DMZ & Network Segmentation',
        content: [
          { type: 'h3', text: 'DMZ — Demilitarized Zone' },
          { type: 'p', text: 'A DMZ is a network segment that sits between the untrusted internet and the trusted internal network. Public-facing servers (web, email, DNS) live in the DMZ — exposed but isolated.' },
          { type: 'analogy', text: 'A bank\'s lobby vs. the vault. The lobby (DMZ) is open to the public — customers can enter. The vault (internal network) requires full verification. If a robber breaches the lobby, they still cannot access the vault.' },
          { type: 'table', headers: ['Zone','Access Level','Typical Services'], rows: [
            ['Internet (Untrusted)','No restrictions','—'],
            ['DMZ','Controlled from internet, controlled to internal','Web servers, email servers, DNS, reverse proxies'],
            ['Internal Network (Trusted)','Restricted — only authorised internal traffic','Databases, HR systems, finance, AD'],
          ]},
          { type: 'h3', text: 'Network Segmentation Benefits' },
          { type: 'ul', items: [
            'VLANs: Logical isolation on the same physical switch — limits broadcast domains',
            'Micro-segmentation: Isolate individual workloads (used in Zero Trust environments)',
            'Limits lateral movement: If one segment is breached, attacker cannot freely move to others',
            'Improves performance: Smaller broadcast domains = less unnecessary traffic',
          ]},
        ]
      },
      {
        hour: 2, label: 'VPN',
        content: [
          { type: 'h3', text: 'VPN — Virtual Private Network' },
          { type: 'p', text: 'A VPN creates an encrypted tunnel over the public internet, allowing remote users or offices to communicate as if they were on the same private network.' },
          { type: 'table', headers: ['VPN Type','Protocol','OSI Layer','Use Case'], rows: [
            ['IPSec VPN','IPSec','Layer 3','Site-to-site VPN between offices, traditional remote access'],
            ['SSL/TLS VPN','TLS','Layer 6-7','Browser-based remote access, clientless'],
            ['Split tunnel','Either','Either','Only VPN traffic goes through tunnel; internet stays local'],
            ['Full tunnel','Either','Either','ALL traffic goes through VPN — more secure, slower'],
          ]},
          { type: 'analogy', text: 'A VPN is like an armoured truck on a public highway. The highway (internet) is visible to everyone, but what\'s inside the truck is encrypted and only the sender and recipient have the keys.' },
          { type: 'tip', text: 'Split tunnelling is a security risk: corporate traffic is protected but internet traffic bypasses security controls. Full tunnelling is more secure. The exam may ask which is more secure.' },
        ]
      },
      {
        hour: 3, label: 'Wireless Security',
        content: [
          { type: 'table', headers: ['Standard','Encryption','Status','Notes'], rows: [
            ['WEP','RC4 (40/104-bit)','❌ Broken — NEVER use','Crackable in minutes with free tools'],
            ['WPA','TKIP','❌ Deprecated','Improved WEP but still vulnerable to attacks'],
            ['WPA2-Personal','AES-CCMP','⚠️ Acceptable','Vulnerable to KRACK attack. Still widely deployed'],
            ['WPA2-Enterprise','AES-CCMP + 802.1X','✅ Strong','Per-user authentication via RADIUS server'],
            ['WPA3-Personal','SAE (Dragonfly)','✅ Current standard','Forward secrecy. Resists offline dictionary attacks'],
            ['WPA3-Enterprise','AES-256 + SAE','✅ Strongest','For high-security environments'],
          ]},
          { type: 'h3', text: '802.1X — Network Access Control' },
          { type: 'p', text: '802.1X is a port-based authentication standard. Before a device can access the network, it must authenticate to a RADIUS server. Used with WPA2/3-Enterprise and wired networks.' },
          { type: 'tip', text: 'WPA3 uses SAE (Simultaneous Authentication of Equals) which provides forward secrecy — even if the password is later compromised, past session traffic cannot be decrypted.' },
        ]
      },
    ]
  },
  14: {
    title: 'Network Attacks, Cloud & Module 4 Quiz',
    module: 4, domain: 4, hours: 3,
    intro: 'Day 14 covers real-world network attacks you must recognise on the exam, cloud computing fundamentals, and the Module 4 Quiz — the heaviest quiz of the course at 15 questions on the most technical domain.',
    sections: [
      {
        hour: 1, label: 'Network Attacks',
        content: [
          { type: 'table', headers: ['Attack', 'Target Layer', 'How It Works', 'Defence'], rows: [
            ['DDoS', 'Layer 3-4', 'Overwhelms target with traffic from many sources', 'Traffic scrubbing, rate limiting, Cloudflare'],
            ['Man-in-the-Middle (MITM)', 'Layer 2-3', 'Intercepts communication between two parties', 'TLS/HTTPS, certificate pinning, VPN'],
            ['ARP Poisoning', 'Layer 2', 'Sends fake ARP replies to poison MAC-IP mapping tables', 'Dynamic ARP Inspection, static ARP entries'],
            ['DNS Spoofing', 'Layer 7', 'Returns fake DNS responses to redirect traffic', 'DNSSEC, encrypted DNS (DoH/DoT)'],
            ['SYN Flood', 'Layer 4', 'Sends many SYN packets without completing handshake', 'SYN cookies, rate limiting, IPS'],
            ['MAC Flooding', 'Layer 2', 'Fills switch CAM table — switch starts broadcasting', 'Port security, MAC limiting'],
            ['VLAN Hopping', 'Layer 2', 'Attacker accesses VLANs they should not reach', 'Disable dynamic trunking, dedicated native VLAN'],
            ['SQL Injection', 'Layer 7', 'Malicious SQL injected via input fields', 'Input validation, parameterised queries, WAF'],
          ]},
          { type: 'tip', text: 'ARP poisoning enables MITM — the attacker can now intercept, read, and modify traffic between two hosts. ARP operates at Layer 2 (Data Link) with no authentication mechanism.' },
        ]
      },
      {
        hour: 2, label: 'Cloud Computing',
        content: [
          { type: 'table', headers: ['Model', 'Full Name', 'You Manage', 'Provider Manages', 'Example'], rows: [
            ['IaaS', 'Infrastructure as a Service', 'OS, apps, data, runtime', 'Hardware, network, storage', 'AWS EC2, Azure VMs'],
            ['PaaS', 'Platform as a Service', 'Applications and data only', 'OS, runtime, middleware, hardware', 'Heroku, Google App Engine'],
            ['SaaS', 'Software as a Service', 'Your data and user access only', 'Everything else', 'Gmail, Salesforce, Office 365'],
          ]},
          { type: 'h3', text: 'Shared Responsibility Model' },
          { type: 'p', text: 'In cloud, security responsibility is SHARED. The provider secures the cloud (hardware, hypervisor, physical). The customer secures what is IN the cloud (data, access management, applications).' },
          { type: 'analogy', text: 'Apartment building: The landlord (cloud provider) secures the building — locks, cameras, fire systems. The tenant (customer) secures their apartment — their own lock, their belongings, their guests.' },
          { type: 'tip', text: 'Data classification and access control in the cloud are ALWAYS the customer\'s responsibility — even in SaaS. The provider never owns responsibility for your data security decisions.' },
        ]
      },
      {
        hour: 3, label: 'Module 4 Quiz Review',
        content: [
          { type: 'h3', text: 'Domain 4 Exam-Critical Points' },
          { type: 'table', headers: ['Topic', 'Key Point'], rows: [
            ['OSI Layers', 'Hub=L1, Switch=L2, Router=L3, Firewall=L4, Proxy=L7'],
            ['Data units', 'Bit=L1, Frame=L2, Packet=L3, Segment=L4'],
            ['TCP vs UDP', 'TCP=reliable/ordered. UDP=fast/connectionless'],
            ['3-way handshake', 'SYN → SYN-ACK → ACK'],
            ['Port 22/23', 'SSH(22) replaced Telnet(23). Always use SSH'],
            ['Stateful vs packet', 'Stateful tracks sessions. Packet-filter just checks IP/port'],
            ['IDS vs IPS', 'IDS=alert only. IPS=inline, blocks'],
            ['DMZ', 'Buffer zone between internet and internal network'],
            ['WPA3', 'Current wireless standard. SAE = forward secrecy'],
            ['ARP poisoning', 'Layer 2 attack. Enables MITM'],
            ['DDoS', 'Availability attack. Distributed flood of traffic'],
            ['Cloud responsibility', 'Provider=infrastructure. Customer=data+access'],
          ]},
        ]
      },
    ]
  },
  15: {
    title: 'Encryption & Hashing',
    module: 5, domain: 5, hours: 3,
    intro: 'Domain 5 — Security Operations (18% of exam). Day 15 covers cryptography: the engine of confidentiality (encryption) and integrity (hashing). Understanding when to use which is essential.',
    sections: [
      {
        hour: 1, label: 'Symmetric & Asymmetric Encryption',
        content: [
          { type: 'table', headers: ['Type', 'Keys', 'Speed', 'Key Problem', 'Example'], rows: [
            ['Symmetric', 'One shared key — same key encrypts and decrypts', 'Fast', 'How do you share the key securely?', 'AES-128/256'],
            ['Asymmetric', 'Key pair: public (share freely) + private (keep secret)', 'Slow (10-1000× slower)', 'None — public key is public by design', 'RSA, ECC, Diffie-Hellman'],
            ['Hybrid', 'Asymmetric to exchange a symmetric session key', 'Best of both', 'None', 'TLS 1.3 (HTTPS)'],
          ]},
          { type: 'analogy', text: 'Asymmetric keys: A padlock (public key) anyone can close, but only you have the key (private key) to open. To send me a secret, lock it with MY padlock. Only I can open it.' },
          { type: 'h3', text: 'How HTTPS (TLS) Works' },
          { type: 'ul', items: [
            '1. Server sends its public key (inside TLS certificate)',
            '2. Client verifies certificate is signed by a trusted CA',
            '3. Client generates a random symmetric session key',
            '4. Client encrypts the session key with the server\'s PUBLIC key → sends it',
            '5. Server decrypts with its PRIVATE key → now both share the session key',
            '6. All further communication uses fast AES symmetric encryption',
          ]},
          { type: 'tip', text: 'HTTPS uses hybrid encryption. RSA (asymmetric) for the key exchange. AES (symmetric) for the actual data. This gives security + performance.' },
        ]
      },
      {
        hour: 2, label: 'Hashing & Digital Signatures',
        content: [
          { type: 'h3', text: 'Hashing — One-Way Integrity Verification' },
          { type: 'p', text: 'A hash function takes input of any size and produces a fixed-size fingerprint. It is deterministic (same input = same hash), one-way (cannot reverse), and collision-resistant (different inputs should not produce the same hash).' },
          { type: 'table', headers: ['Algorithm', 'Output Size', 'Status', 'Use'], rows: [
            ['MD5', '128-bit (32 hex chars)', '❌ Broken — collisions found', 'Legacy checksums only'],
            ['SHA-1', '160-bit (40 hex chars)', '❌ Deprecated', 'Legacy — avoid'],
            ['SHA-256', '256-bit (64 hex chars)', '✅ Standard', 'File integrity, TLS, digital signatures'],
            ['SHA-512', '512-bit (128 hex chars)', '✅ Strong', 'High-security environments'],
            ['bcrypt', 'Variable', '✅ Recommended', 'Password storage (includes automatic salting)'],
          ]},
          { type: 'h3', text: 'Digital Signatures — 3-in-1 Security' },
          { type: 'p', text: 'A digital signature combines hashing + asymmetric encryption. The sender hashes the message, then encrypts the hash with their PRIVATE key. Anyone can verify with the sender\'s PUBLIC key.' },
          { type: 'table', headers: ['Property Provided', 'How'], rows: [
            ['Integrity', 'Hash verifies the message has not changed'],
            ['Authentication', 'Only the private key owner could have created the signature'],
            ['Non-repudiation', 'Sender cannot deny signing — only they have the private key'],
          ]},
          { type: 'tip', text: 'Encrypt with PRIVATE key = signature (anyone verifies with your public key). Encrypt with PUBLIC key = confidentiality (only private key holder can decrypt). Same keys, opposite uses.' },
        ]
      },
      {
        hour: 3, label: 'PKI & Data States',
        content: [
          { type: 'h3', text: 'PKI — Public Key Infrastructure' },
          { type: 'p', text: 'PKI is the framework of policies, processes, hardware, software, and people that manage digital certificates. The Certificate Authority (CA) vouches for the identity behind a public key.' },
          { type: 'table', headers: ['Component', 'Role'], rows: [
            ['CA (Certificate Authority)', 'Issues and signs digital certificates. Root of trust.'],
            ['RA (Registration Authority)', 'Verifies identity before CA issues a certificate'],
            ['Digital Certificate (X.509)', 'Binds a public key to an identity. Contains: public key, owner, CA signature, expiry'],
            ['CRL (Certificate Revocation List)', 'List of revoked certificates'],
            ['OCSP', 'Online check if a specific certificate is still valid'],
          ]},
          { type: 'h3', text: 'Three Data States' },
          { type: 'table', headers: ['State', 'When', 'Protection'], rows: [
            ['Data at Rest', 'Stored on disk, database, USB, backup tape', 'AES disk encryption (BitLocker, FileVault)'],
            ['Data in Transit', 'Moving across a network', 'TLS/HTTPS, VPN, SSH, SFTP'],
            ['Data in Use', 'Being processed in RAM/CPU', 'Secure enclaves, memory encryption (emerging)'],
          ]},
        ]
      },
    ]
  },
  16: {
    title: 'SIEM, Patching, Awareness & Module 5 Quiz',
    module: 5, domain: 5, hours: 3,
    intro: 'Day 16 closes Domain 5 with the operational heartbeat of security: monitoring (SIEM), hardening, patch management, and security awareness training. Then the final module quiz.',
    sections: [
      {
        hour: 1, label: 'SIEM & Monitoring',
        content: [
          { type: 'h3', text: 'SIEM — Security Information and Event Management' },
          { type: 'p', text: 'SIEM aggregates log data from across the entire environment (firewalls, endpoints, servers, cloud), correlates events to detect patterns, and generates alerts. It is the central nervous system of security operations.' },
          { type: 'table', headers: ['SIEM Function', 'What It Does'], rows: [
            ['Log collection', 'Centralises logs from all sources: firewalls, AV, servers, cloud'],
            ['Normalisation', 'Converts different log formats into a common schema'],
            ['Correlation', 'Detects patterns across multiple events that individually look innocent'],
            ['Alerting', 'Triggers alerts when correlation rules match attack patterns'],
            ['Forensics', 'Stores historical data for incident investigation'],
          ]},
          { type: 'analogy', text: 'SIEM = air traffic control. One failed login is noise. 500 failed logins from the same IP in 60 seconds = brute force attack. SIEM correlates these events across time and sources.' },
          { type: 'h3', text: 'Ingress vs Egress Monitoring' },
          { type: 'table', headers: ['Direction', 'Monitors', 'Detects'], rows: [
            ['Ingress', 'Traffic ENTERING the network', 'External attacks, malware delivery, port scanning'],
            ['Egress', 'Traffic LEAVING the network', 'Data exfiltration, C2 communication, malware beaconing'],
          ]},
          { type: 'tip', text: 'Egress monitoring is critical for detecting data exfiltration — attackers who breach a network will eventually try to move data OUT. Most organisations over-monitor ingress and under-monitor egress.' },
        ]
      },
      {
        hour: 2, label: 'Hardening & Patch Management',
        content: [
          { type: 'h3', text: 'System Hardening' },
          { type: 'p', text: 'Hardening reduces the attack surface by removing unnecessary services, closing unused ports, and applying secure configuration baselines.' },
          { type: 'ul', items: [
            'Remove/disable unnecessary services and software (smaller attack surface)',
            'Close unused ports (reduce exposure)',
            'Apply vendor security configuration baselines (CIS Benchmarks)',
            'Rename or disable default accounts (admin, root, guest)',
            'Enable host-based firewall',
            'Apply principle of least privilege to all service accounts',
          ]},
          { type: 'h3', text: 'Patch Management' },
          { type: 'table', headers: ['Step', 'Action'], rows: [
            ['1. Inventory', 'Know what software and versions are running'],
            ['2. Monitor', 'Subscribe to vendor security bulletins and CVE feeds'],
            ['3. Evaluate', 'Assess criticality and impact before patching'],
            ['4. Test', 'Test patches in non-production environment first'],
            ['5. Deploy', 'Roll out to production in maintenance windows'],
            ['6. Verify', 'Confirm patches applied successfully'],
          ]},
          { type: 'h3', text: 'Data Destruction Methods' },
          { type: 'table', headers: ['Method', 'How', 'Media'], rows: [
            ['Overwriting', 'Write random data multiple times', 'HDD, SSD'],
            ['Degaussing', 'Powerful magnetic field destroys data', 'Magnetic only (HDD, tape)'],
            ['Shredding', 'Physical destruction of media', 'Any'],
            ['Crypto shredding', 'Destroy the encryption key', 'Encrypted storage only'],
          ]},
        ]
      },
      {
        hour: 3, label: 'Security Awareness',
        content: [
          { type: 'h3', text: 'The Human Element' },
          { type: 'p', text: 'Humans are the most exploited attack vector in cybersecurity. Social engineering attacks target people, not technology. Security awareness training is the primary administrative control against this.' },
          { type: 'table', headers: ['Training Type', 'Purpose'], rows: [
            ['Annual security awareness', 'Baseline training for all employees — policies, threats, responsibilities'],
            ['Phishing simulations', 'Send fake phishing emails; train those who click'],
            ['Role-based training', 'Targeted training for high-risk roles (finance, IT, executives)'],
            ['Tabletop exercises', 'Simulate incidents to test response procedures'],
          ]},
          { type: 'table', headers: ['Policy', 'What It Covers'], rows: [
            ['AUP (Acceptable Use Policy)', 'What employees can and cannot do with company resources'],
            ['Clean Desk Policy', 'No sensitive documents visible when workstation unattended'],
            ['BYOD Policy', 'Rules for personal devices accessing corporate systems'],
            ['Social Media Policy', 'What employees can post publicly about the company'],
            ['Onboarding/Offboarding', 'Security procedures when staff join or leave'],
          ]},
          { type: 'tip', text: 'The exam treats security awareness training as an ADMINISTRATIVE control. It is also PREVENTIVE (stops phishing) and DETERRENT (employees know monitoring exists). Module 5 Quiz follows.' },
        ]
      },
    ]
  },
  17: {
    title: 'Full Review & Mock Exam',
    module: 5, domain: 5, hours: 3,
    intro: 'The final gauntlet. Day 17 is a complete 5-domain review, cheat sheet drill, exam strategy session, and a timed 50-question mock exam. Pass this and you are ready for the real ISC2 CC.',
    sections: [
      {
        hour: 1, label: '5-Domain Speed Review',
        content: [
          { type: 'h3', text: 'Domain 1 — Security Principles (26%)' },
          { type: 'ul', items: [
            'CIA Triad: Confidentiality (encryption), Integrity (hashing), Availability (redundancy)',
            'IAAA: Identify → Authenticate → Authorize → Accountable',
            'Risk = Likelihood × Impact. ALE = SLE × ARO. SLE = AV × EF',
            'Risk treatment: Mitigate/Avoid/Transfer/Accept (MATA)',
            'Controls: Admin/Technical/Physical × Preventive/Detective/Corrective/Deterrent/Compensating',
            'Ethics canons in order: Protect Society → Act Honorably → Provide Service → Advance Profession',
          ]},
          { type: 'h3', text: 'Domain 2 — BC/DR/IR (10%)' },
          { type: 'ul', items: [
            'RTO = max downtime. RPO = max data loss.',
            'Hot site = minutes. Warm = hours. Cold = days.',
            'Incremental = fast backup, slow restore. Differential = balance.',
            'IR phases: Prepare → Detect → Contain → Eradicate → Recover → Lessons Learned',
            'FIRST action after detection = CONTAINMENT',
          ]},
          { type: 'h3', text: 'Domain 3 — Access Controls (22%)' },
          { type: 'ul', items: [
            'MFA: factors must be from DIFFERENT categories',
            'DAC = owner decides. MAC = system labels. RBAC = job role. ABAC = attributes.',
            'Least privilege, Need-to-Know, SoD, Zero Trust',
            'SSO risk = single point of failure. Federation = SSO across orgs.',
            'SAML = authentication. OAuth = authorization. OIDC = web authentication.',
          ]},
          { type: 'h3', text: 'Domain 4 — Network Security (24%)' },
          { type: 'ul', items: [
            'OSI: Please Do Not Throw Sausage Pizza Away (7→1). Hub=L1, Switch=L2, Router=L3.',
            'TCP = reliable. UDP = fast. SYN → SYN-ACK → ACK.',
            'SSH=22, Telnet=23, SMTP=25, DNS=53, HTTP=80, HTTPS=443, RDP=3389.',
            'IDS = detect only. IPS = inline, blocks.',
            'DMZ = buffer zone. WPA3 = current wireless standard.',
          ]},
          { type: 'h3', text: 'Domain 5 — Security Operations (18%)' },
          { type: 'ul', items: [
            'AES = symmetric. RSA = asymmetric. HTTPS = hybrid.',
            'MD5 = broken. SHA-256 = current standard.',
            'Digital signature = integrity + authentication + non-repudiation.',
            'SIEM = central log correlation and alerting.',
            'Egress monitoring detects data exfiltration.',
            'Crypto shredding = destroy the key.',
          ]},
        ]
      },
      {
        hour: 2, label: 'Exam Strategy',
        content: [
          { type: 'h3', text: 'ISC2 Exam Mindset Rules' },
          { type: 'table', headers: ['Rule', 'Application'], rows: [
            ['Human safety first', 'Any answer that protects human life beats property and data'],
            ['Prevention > Detection > Correction', 'ISC2 always prefers stopping threats before they happen'],
            ['Administrative controls = foundation', 'Policies are the basis for all other controls'],
            ['Least privilege always', 'Never justify giving more access than minimum required'],
            ['Defence in depth', 'Multiple layers always beats one strong control'],
            ['Public interest > employer', 'Canon 1 overrides employer instructions when safety is at stake'],
          ]},
          { type: 'h3', text: 'Time Management' },
          { type: 'ul', items: [
            '100 questions, 120 minutes = 72 seconds per question',
            'Read ALL options before selecting — ISC2 loves "best" not just "correct"',
            'Flag difficult questions and return — never leave blank',
            'Eliminate obvious wrong answers first (usually 2 of 4)',
            'Trust your preparation — do not second-guess first instincts',
            'CAT format: difficulty adjusts — harder questions = doing well',
          ]},
          { type: 'tip', text: 'If two answers both seem correct, choose the one that is more PROACTIVE (prevents rather than detects), more ADMINISTRATIVE (policy over technology), and more HUMAN-SAFETY-FOCUSED.' },
        ]
      },
      {
        hour: 3, label: 'Mock Exam',
        content: [
          { type: 'h3', text: 'Full 50-Question Practice Exam' },
          { type: 'p', text: 'The mock exam below covers all 5 domains proportionally. Use Exam Mode (timed, no hints) to simulate the real test. Aim for 80%+ before sitting the real exam.' },
          { type: 'table', headers: ['Domain', 'Weight', 'Expected Questions on Real Exam'], rows: [
            ['Domain 1 — Security Principles', '26%', '~26 questions'],
            ['Domain 2 — BC/DR/IR', '10%', '~10 questions'],
            ['Domain 3 — Access Controls', '22%', '~22 questions'],
            ['Domain 4 — Network Security', '24%', '~24 questions'],
            ['Domain 5 — Security Operations', '18%', '~18 questions'],
          ]},
          { type: 'analogy', text: 'You have prepared for 17 days. 50 hours of instruction. 200+ practice questions. The ISC2 CC exam is 100 questions in 120 minutes. You have more preparation than most candidates. Trust the process.' },
          { type: 'tip', text: 'Scoring guide: 80%+ = very strong candidate. 70-79% = ready, minor review needed. 60-69% = review weak domains before scheduling exam. Below 60% = another week of study recommended.' },
        ]
      },
    ]
  },
};
