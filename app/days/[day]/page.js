import DayPageClient from './DayPageClient';
import { days } from '@/data/curriculum';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return days.map(d => ({ day: String(d.day) }));
}

export default async function DayPage({ params }) {
  const { day } = await params;
  const dayNum = parseInt(day);
  if (isNaN(dayNum) || dayNum < 1 || dayNum > 17) notFound();
  return <DayPageClient dayNum={dayNum} />;
}
