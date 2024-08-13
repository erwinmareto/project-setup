import { Suspense } from 'react';

import MySubscriptions from '@/components/pages/MySubscriptions';

export default function MySubscriptionPage() {
  return (
    <Suspense>
      <MySubscriptions />
    </Suspense>
  );
}
