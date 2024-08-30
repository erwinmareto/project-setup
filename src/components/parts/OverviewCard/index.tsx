import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

import { OverviewCardProps } from './types';

const OverviewCard = ({ icon, totalSubscriptions, status, title, description, link }: OverviewCardProps) => {
  return (
    <Card className="border-none">
      <CardContent className="py-5">
        <CardTitle className="flex justify-between font-semibold text-primary-90 text-heading-5 md:text-heading-3">
          {totalSubscriptions}
          <div
            className={cn(
              'w-10 h-10 flex justify-center items-center rounded-md',
              `bg-${status} text-${status}-foreground`
            )}
          >
            {icon}
          </div>
        </CardTitle>
        <p className="font-medium text-body-md text-primary-80 md:text-body-lg">{title}</p>
        <p className="text-body-sm text-primary-55">{description}</p>
      </CardContent>
      <CardFooter>
        <Link href={`/my-subscriptions${link}`} className="link">
          <p>See subscription details</p>
          <ArrowUpRight />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default OverviewCard;
