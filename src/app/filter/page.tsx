import { Suspense } from 'react';

import Data from '@/components/pages/Datas';
import Filter from '@/components/pages/Filter';

export default function FilterPage() {
  return (
    <Suspense>
      <Filter />
      <Data />
    </Suspense>
  );
}
