import Image from 'next/image';

import { BackgroundSquares, CircleDollar } from '@/assets/icons';
import { Avatar } from '@/components/ui/avatar';

const SideAuth = () => {
  return (
    <section className="relative hidden lg:grid lg:col-span-6 bg-secondary-40 rounded-lg px-5 py-6 overflow-hidden">
      <BackgroundSquares />
      <div className="flex flex-col gap-16">
        <div className="flex gap-3">
          <Avatar className="w-12 h-12 bg-primary-0 flex justify-center items-center">
            <CircleDollar isAuth />
          </Avatar>
          <div>
            <p className="text-body-md font-semibold text-primary-0">Reminderoo</p>
            <p className="text-body-xs text-primary-0">by Loan Shark&trade;</p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="max-w-xl">
            <h1 className="font-medium text-primary-0 text-heading-1">Timely Payment Reminders</h1>
            <p className="text-primary-0 text-body-md ">
              Receive timely reminders before your subscription bills are due, so you never miss a
              payment.
            </p>
          </div>
        </div>
      </div>

      <Image
        src="/images/dashboard-page.png"
        alt="Dashboard"
        width={530}
        height={673}
        className="absolute right-0 -bottom-[10rem]"
      />
    </section>
  );
};

export default SideAuth;
