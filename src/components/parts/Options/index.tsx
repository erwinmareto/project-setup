import Link from 'next/link';

import { Button } from '@/components/ui/button';

const Options = () => {
  return (
    <aside className="flex flex-col gap-2 lg:col-span-3">
      <Link href="/profile" className="flex">
        <Button variant="secondary" className="flex-1 justify-start">
          My Profile
        </Button>
      </Link>
      <Link href="/password" className="flex">
        <Button variant="ghost" className="flex-1 justify-start text-primary-50">
          Password
        </Button>
      </Link>
      <Link href="/notifications" className="flex">
        <Button variant="ghost" className="flex-1 justify-start text-primary-50">
          Notifications
        </Button>
      </Link>
      <Link href="/general" className="flex">
        <Button variant="ghost" className="flex-1 justify-start text-primary-50">
          General
        </Button>
      </Link>
    </aside>
  );
};

export default Options;
