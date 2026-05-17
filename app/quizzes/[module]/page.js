import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuizEngine from '@/components/QuizEngine';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import quizzes from '@/data/quizzes';

const validModules = ['module-1','module-2','module-3','module-4','module-5','practice-exam'];

export function generateStaticParams() {
  return validModules.map(m => ({ module: m }));
}

const domainColors = { 1:'var(--d1)', 2:'var(--d2)', 3:'var(--d3)', 4:'var(--d4)', 5:'var(--d5)', 0:'var(--accent)' };

export default async function QuizPage({ params }) {
  const { module: key } = await params;
  if (!validModules.includes(key)) notFound();
  const quiz = quizzes[key];
  if (!quiz) notFound();
  const color = domainColors[quiz.domain];

  return (
    <>
      <Navbar />
      <main>
        <div style={{ background: 'var(--bg2)', borderBottom: '1px solid var(--border)', padding: '5rem 0 3rem', borderTop: `4px solid ${color}` }}>
          <div className="container">
            <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text3)', marginBottom: '1rem' }}>
              <Link href="/" style={{ color: 'var(--text3)' }}>Home</Link>
              <span>/</span>
              <Link href="/quizzes" style={{ color: 'var(--text3)' }}>Quizzes</Link>
              <span>/</span>
              <span>{quiz.title}</span>
            </div>
            <h1 style={{ marginBottom: '0.5rem' }}>{quiz.title}</h1>
            <p style={{ color: 'var(--text2)', margin: 0 }}>{quiz.questions.length} questions · Passing: 70% · ISC2 CC Exam Prep</p>
          </div>
        </div>
        <div className="container" style={{ padding: '3rem 1.5rem' }}>
          <QuizEngine quiz={quiz} moduleKey={key} />
        </div>
      </main>
      <Footer />
    </>
  );
}
