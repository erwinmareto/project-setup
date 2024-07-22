import { Suspense } from 'react';

import Filter from '@/components/pages/Filter';

export default function FilterPage() {
  return (
    <Suspense>
      <Filter />
    </Suspense>
  );
}
