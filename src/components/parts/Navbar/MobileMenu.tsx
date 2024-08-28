'use client';

import { deleteCookie } from 'cookies-next';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ACCESS_TOKEN_KEY } from '@/lib/constants/storageKeys';

const MobileMenu = ({ handleIsOpen }: { handleIsOpen: () => void }) => {
  const router = useRouter();

  const logout = () => {
    deleteCookie(ACCESS_TOKEN_KEY as string);

    handleIsOpen();

    router.replace('/login');
  };

  return (
    <nav className="flex flex-col justify-center items-center gap-6 py-7 lg:hidden">
      <div className="focus:bg-primary-30">
        <Link href="/dashboard" className="font-medium text-body-md text-primary-50">
          Dashboard
        </Link>
      </div>
      <Link href="/my-subscriptions" className="font-medium text-body-md text-primary-50">
        My Subscriptions
      </Link>
      <Link href="/profile" className="font-medium text-body-md text-primary-50">
        My Profile
      </Link>
      <Link href="/settings" className="font-medium text-body-md text-primary-50">
        General Settings
      </Link>

      <div className="flex justify-between gap-[6.25rem]">
        <div className="flex gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-body-sm">John Doe</p>
            <p className="font-medium text-body-xs">johndoe@mail.com</p>
          </div>
        </div>

        <Button variant="destructive" onClick={logout}>
          Sign out
        </Button>
      </div>
    </nav>
  );
};

export default MobileMenu;
