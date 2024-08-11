import React from 'react';

import SideAuth from '@/components/parts/SideAuth';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-[#F4F3FB] grid grid-cols-12 p-3">
      <SideAuth />
      <section className="col-span-12 lg:col-span-6">{children}</section>
    </div>
  );
}
