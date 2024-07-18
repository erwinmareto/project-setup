'use client';

import HomePage from '@/components/pages/Home';
import Old from '@/components/pages/Old';
import Chart from '@/components/parts/Chart';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-4">
      <HomePage />

      <Chart />

      <Old />
    </main>
  );
}
