'use client';
import { useState, useEffect } from 'react';

const STORAGE_KEY = 'certhubc_progress';

function getProgress() {
  if (typeof window === 'undefined') return {};
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch { return {}; }
}
function saveProgress(data) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function useProgress() {
  const [progress, setProgress] = useState({});
  useEffect(() => { setProgress(getProgress()); }, []);

  const toggleDay = (day) => {
    const p = getProgress();
    p[`day_${day}`] = !p[`day_${day}`];
    saveProgress(p);
    setProgress({...p});
  };

  const saveQuizScore = (module, score, total) => {
    const p = getProgress();
    const key = `quiz_${module}`;
    if (!p[key] || score > p[key].score) p[key] = { score, total, pct: Math.round(score/total*100) };
    saveProgress(p);
    setProgress({...p});
  };

  const isDayDone = (day) => !!progress[`day_${day}`];
  const getQuizBest = (module) => progress[`quiz_${module}`] || null;

  const totalDaysDone = Object.keys(progress).filter(k => k.startsWith('day_') && progress[k]).length;
  const overallPct = Math.round((totalDaysDone / 17) * 100);

  return { progress, toggleDay, saveQuizScore, isDayDone, getQuizBest, totalDaysDone, overallPct };
}
