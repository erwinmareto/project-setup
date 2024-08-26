'use client';

import { useEffect, useState } from 'react';

import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

import { BackgroundSquares, CircleDollar } from '@/assets/icons';
import { Avatar } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

const SideAuth = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section
      className="min-h-[140vh] relative hidden bg-secondary-40 rounded-lg px-5 py-6 
    overflow-hidden lg:grid lg:col-span-6"
    >
      <BackgroundSquares />
      <div className="flex flex-col gap-[8.3rem]">
        <div className="flex gap-3">
          <Avatar className="w-12 h-12 bg-primary-0 flex justify-center items-center">
            <CircleDollar isAuth />
          </Avatar>
          <div>
            <p className="text-body-md font-semibold text-primary-0">Reminderoo</p>
            <p className="text-body-xs text-primary-0">by Loan Shark&trade;</p>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center gap-3 mx-auto">
          <Carousel
            opts={{
              loop: true
            }}
            plugins={[
              Autoplay({
                delay: 5000
              })
            ]}
            setApi={setApi}
            className="max-w-xl"
          >
            <CarouselContent>
              <CarouselItem>
                <h1 className="font-medium text-primary-0 text-heading-1">Timely Payment Reminders</h1>
                <p className="text-primary-0 text-body-md ">
                  Receive timely reminders before your subscription bills are due, so you never miss a payment.
                </p>
              </CarouselItem>
              <CarouselItem>
                <h1 className="font-medium text-primary-0 text-heading-1">Track all your Subscriptions</h1>
                <p className="text-primary-0 text-body-md ">
                  No more hassle of finding your subscriptions. You can manage all your subscriptions from a single,
                  easy-to-use dashboard.
                </p>
              </CarouselItem>
              <CarouselItem>
                <h1 className="font-medium text-primary-0 text-heading-1">Subscription Spending Analysis</h1>
                <p className="text-primary-0 text-body-md ">
                  See where your money goes. We provide detailed monthly spending reports to help you manage your
                  finances better.
                </p>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
          <div className="flex gap-2">
            <div
              className={cn(
                current === 1 ? 'w-6 h-2 bg-primary-0 rounded-full' : 'w-2 h-2 bg-primary-0/45 rounded-full',
                'transition-all'
              )}
            />
            <div
              className={cn(
                current === 2 ? 'w-6 h-2 bg-primary-0 rounded-full' : 'w-2 h-2 bg-primary-0/45 rounded-full',
                'transition-all'
              )}
            />
            <div
              className={cn(
                current === 3 ? 'w-6 h-2 bg-primary-0 rounded-full' : 'w-2 h-2 bg-primary-0/45 rounded-full',
                'transition-all'
              )}
            />
          </div>
        </div>
      </div>

      <Image
        src="/images/dashboard-page.png"
        alt="Dashboard"
        width={530}
        height={673}
        className="absolute right-0 bottom-0"
      />
    </section>
  );
};

export default SideAuth;
