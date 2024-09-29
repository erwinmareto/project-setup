'use client';

import { useEffect, useState } from 'react';

import { LayoutDashboard, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { CircleDollar, WalletWithCards } from '@/assets/icons';
import RightContent from '@/components/parts/Navbar/RightContent';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

import MobileMenu from './MobileMenu';

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="bg-primary-0 mb-3">
      <nav className="container flex justify-between items-center py-4">
        <Link href="/dashboard" className="flex items-center gap-3">
          <Avatar className="w-12 h-12 bg-secondary-40 flex justify-center items-center">
            <CircleDollar />
          </Avatar>
          <div>
            <p className="text-body-sm font-semibold text-primary-70 md:text-body-md">Reminderoo</p>
            <p className="text-body-xs text-primary-45">by Loan Shark&trade;</p>
          </div>
        </Link>

        <RightContent />
        <Button variant="ghost" className="lg:hidden">
          {isOpen ? (
            <X className={'w-7 h-7 cursor-pointer'} onClick={handleIsOpen} />
          ) : (
            <Menu className="w-7 h-7 cursor-pointer" onClick={handleIsOpen} />
          )}
        </Button>
      </nav>

      <Separator />

      <nav className="container hidden gap-7 py-4 lg:flex">
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

      {isOpen && <MobileMenu handleIsOpen={handleIsOpen} />}
    </header>
  );
};

export default Navbar;
