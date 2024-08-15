'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Options = () => {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col gap-2 lg:col-span-3">
      <Link href="/profile" className="flex">
        <Button
          variant={pathname === '/profile' ? 'secondary' : 'ghost'}
          className={cn('flex-1 justify-start', pathname !== '/profile' && 'text-primary-50 hover:text-secondary-40')}
        >
          My Profile
        </Button>
      </Link>
      <Link href="/password" className="flex">
        <Button
          variant={pathname === '/password' ? 'secondary' : 'ghost'}
          className={cn('flex-1 justify-start', pathname !== '/password' && 'text-primary-50 hover:text-secondary-40')}
        >
          Password
        </Button>
      </Link>
      <Link href="/notifications" className="flex">
        <Button
          variant={pathname === '/notifications' ? 'secondary' : 'ghost'}
          className={cn(
            'flex-1 justify-start',
            pathname !== '/notifications' && 'text-primary-50 hover:text-secondary-40'
          )}
        >
          Notifications
        </Button>
      </Link>
      <Link href="/general" className="flex">
        <Button
          variant={pathname === '/general' ? 'secondary' : 'ghost'}
          className={cn('flex-1 justify-start', pathname !== '/general' && 'text-primary-50 hover:text-secondary-40')}
        >
          General
        </Button>
      </Link>
    </aside>
  );
};

export default Options;
