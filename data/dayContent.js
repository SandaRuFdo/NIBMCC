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
};
