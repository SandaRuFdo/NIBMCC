'use client';
import { useState, useEffect, useRef } from 'react';
import { useProgress } from '@/lib/progress';

export default function QuizEngine({ quiz, moduleKey }) {
  const [mode, setMode] = useState('select'); // select | study | exam | done
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [showExp, setShowExp] = useState(false);
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);
  const { saveQuizScore, getQuizBest } = useProgress();
  const best = getQuizBest(moduleKey);

  useEffect(() => {
    if (mode === 'exam') {
      timerRef.current = setInterval(() => setTime(t => t + 1), 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [mode]);

  const fmt = (s) => `${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`;

  const questions = quiz.questions;

  const handleSelect = (idx) => {
    if (selected !== null) return;
    setSelected(idx);
    if (mode === 'study') setShowExp(true);
  };

  const handleNext = () => {
    const newAnswers = [...answers, { selected, correct: questions[current].answer }];
    setAnswers(newAnswers);
    setSelected(null);
    setShowExp(false);
    if (current + 1 >= questions.length) {
      clearInterval(timerRef.current);
      const score = newAnswers.filter(a => a.selected === a.correct).length;
      saveQuizScore(moduleKey, score, questions.length);
      setMode('done');
    } else {
      setCurrent(c => c + 1);
    }
  };

  const score = answers.filter(a => a.selected === a.correct).length;
  const pct = Math.round((score / questions.length) * 100);

  if (mode === 'select') {
    return (
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>
        <h2 style={{ marginBottom: '0.5rem' }}>{quiz.title}</h2>
        <p style={{ color: 'var(--text2)', marginBottom: '2rem' }}>{questions.length} questions · Choose your mode below</p>
        {best && (
          <div className="card" style={{ marginBottom: '1.5rem', borderLeft: '3px solid var(--emerald)', display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <span style={{ fontSize: '1.5rem' }}>🏆</span>
            <div>
              <div style={{ fontWeight: 700 }}>Best score: {best.score}/{best.total} ({best.pct}%)</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text2)' }}>{best.pct >= 70 ? '✅ Passing' : '❌ Below passing (70%)'}</div>
            </div>
          </div>
        )}
        <div className="grid-2" style={{ gap: '1rem' }}>
          <button onClick={() => setMode('study')} className="card" style={{ cursor: 'pointer', textAlign: 'left', border: '2px solid var(--accent)' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📖</div>
            <h3 style={{ fontSize: '1rem' }}>Study Mode</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text2)', margin: 0 }}>See the correct answer + explanation after each question. Great for learning.</p>
          </button>
          <button onClick={() => { setMode('exam'); setTime(0); }} className="card" style={{ cursor: 'pointer', textAlign: 'left', border: '2px solid var(--amber)' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⏱️</div>
            <h3 style={{ fontSize: '1rem' }}>Exam Mode</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text2)', margin: 0 }}>No hints. No explanations until the end. Timed. Simulates the real exam.</p>
          </button>
        </div>
      </div>
    );
  }

  if (mode === 'done') {
    const pass = pct >= 70;
    return (
      <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{pass ? '🎉' : '📚'}</div>
        <h2 style={{ marginBottom: '0.5rem' }}>{pass ? 'Passed!' : 'Keep Studying'}</h2>
        <div style={{ fontSize: '3rem', fontWeight: 900, color: pass ? 'var(--emerald)' : 'var(--red)', marginBottom: '0.5rem' }}>{pct}%</div>
        <p style={{ color: 'var(--text2)', marginBottom: '2rem' }}>{score} / {questions.length} correct {time > 0 && `· ${fmt(time)}`}</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem', textAlign: 'left' }}>
          {answers.map((a, i) => (
            <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', padding: '0.75rem', borderRadius: 'var(--r)', background: 'var(--bg2)', border: `1px solid ${a.selected === a.correct ? 'var(--emerald)' : 'var(--red)'}` }}>
              <span style={{ fontSize: '1rem', flexShrink: 0 }}>{a.selected === a.correct ? '✅' : '❌'}</span>
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.2rem' }}>Q{i+1}: {questions[i].q}</div>
                {a.selected !== a.correct && <div style={{ fontSize: '0.8rem', color: 'var(--emerald)' }}>Correct: {questions[i].opts[a.correct]}</div>}
                {a.selected !== a.correct && <div style={{ fontSize: '0.8rem', color: 'var(--text2)', marginTop: '0.2rem' }}>{questions[i].exp}</div>}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button onClick={() => { setCurrent(0); setAnswers([]); setSelected(null); setMode('select'); }} className="btn btn-outline">Try Again</button>
        </div>
      </div>
    );
  }

  const q = questions[current];
  const isCorrect = selected === q.answer;

  return (
    <div style={{ maxWidth: '640px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div style={{ fontSize: '0.875rem', color: 'var(--text2)' }}>Question {current + 1} / {questions.length}</div>
        {mode === 'exam' && <div style={{ fontFamily: 'var(--mono)', color: 'var(--amber)', fontWeight: 700 }}>{fmt(time)}</div>}
        <div style={{ fontSize: '0.875rem', color: 'var(--text2)' }}>{mode === 'study' ? '📖 Study' : '⏱️ Exam'}</div>
      </div>

      <div className="progress-bar" style={{ marginBottom: '1.5rem' }}>
        <div className="progress-fill" style={{ width: `${(current / questions.length) * 100}%` }} />
      </div>

      <h3 style={{ marginBottom: '1.5rem', lineHeight: 1.4 }}>{q.q}</h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
        {q.opts.map((opt, i) => {
          let bg = 'var(--bg2)', border = 'var(--border)', color = 'var(--text)';
          if (selected !== null) {
            if (i === q.answer) { bg = 'rgba(16,185,129,0.15)'; border = 'var(--emerald)'; color = 'var(--emerald)'; }
            else if (i === selected && i !== q.answer) { bg = 'rgba(239,68,68,0.15)'; border = 'var(--red)'; color = 'var(--red)'; }
          } else if (selected === i) { bg = 'rgba(99,102,241,0.15)'; border = 'var(--accent)'; }
          return (
            <button key={i} onClick={() => handleSelect(i)} style={{
              background: bg, border: `1.5px solid ${border}`, borderRadius: 'var(--r)',
              padding: '0.9rem 1.25rem', textAlign: 'left', cursor: selected !== null ? 'default' : 'pointer',
              color, font: 'inherit', fontSize: '0.9rem', transition: 'all .15s', display: 'flex', gap: '0.75rem',
            }}>
              <span style={{ fontWeight: 700, flexShrink: 0 }}>{String.fromCharCode(65 + i)}.</span>
              {opt}
            </button>
          );
        })}
      </div>

      {showExp && selected !== null && (
        <div className={`callout ${isCorrect ? 'callout-success' : 'callout-danger'}`} style={{ marginBottom: '1.5rem' }}>
          <span className="callout-icon">{isCorrect ? '✅' : '❌'}</span>
          <div className="callout-body">
            <strong style={{ display: 'block', marginBottom: '0.25rem' }}>{isCorrect ? 'Correct!' : `Correct answer: ${q.opts[q.answer]}`}</strong>
            <p>{q.exp}</p>
          </div>
        </div>
      )}

      {mode === 'study' && selected !== null && !showExp && (
        <button onClick={() => setShowExp(true)} className="btn btn-outline" style={{ marginBottom: '1rem' }}>Show Explanation</button>
      )}

      {selected !== null && (
        <button onClick={handleNext} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
          {current + 1 >= questions.length ? 'Finish Quiz →' : 'Next Question →'}
        </button>
      )}
    </div>
  );
}
