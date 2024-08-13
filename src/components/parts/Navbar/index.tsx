'use client';

import { LayoutDashboard } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { CircleDollar, WalletWithCards } from '@/assets/icons';
import RightContent from '@/components/parts/Navbar/RightContent';
import { Avatar } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="bg-primary-0 mb-3">
      <nav className="container flex justify-between py-4">
        <div className="flex gap-3">
          <Avatar className="w-12 h-12 bg-secondary-40 flex justify-center items-center">
            <CircleDollar />
          </Avatar>
          <div>
            <p className="text-body-md font-semibold text-primary-70">Reminderoo</p>
            <p className="text-body-xs text-primary-45">by Loan Shark&trade;</p>
          </div>
        </div>

        <RightContent />
      </nav>

      <Separator />

      <nav className="container flex gap-7 py-4">
        <Link
          href="/dashboard"
          className={cn(
            'flex justify-center items-center gap-2 font-medium text-body-lg',
            pathname === '/dashboard'
              ? 'text-secondary-40'
              : 'text-primary-50 transition-colors hover:text-secondary-40'
          )}
        >
          <LayoutDashboard />
          Dashboard
        </Link>
        <Link
          href="/my-subscriptions"
          className={cn(
            'flex justify-center items-center gap-2 font-medium text-body-lg',
            pathname === '/my-subscriptions'
              ? 'text-secondary-40'
              : 'text-primary-50 transition-colors hover:text-secondary-40'
          )}
        >
          <WalletWithCards />
          My Subscriptions
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
