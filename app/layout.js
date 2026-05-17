import './globals.css';

export const metadata = {
  title: 'CertHub CC — ISC2 Certified in Cybersecurity',
  description: 'Complete ISC2 CC exam prep: 17-day structured course, interactive quizzes, cheat sheets, and full domain coverage. Prepared by Sandaru Fernando — CertHub Cybersecurity @ NIBM.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
