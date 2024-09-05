import { differenceInDays, format } from 'date-fns';
import Link from 'next/link';

import AppIcons from '@/components/parts/AppIcons';
import { SubscriptionCategory } from '@/components/parts/SubscriptionTable/types';
import { Badge } from '@/components/ui/badge';
import { formatIDR } from '@/lib/utils';

export type SubCardProps = {
  isHistory?: boolean;
  id?: string;
  icon: string;
  title: string;
  category: SubscriptionCategory;
  paymentDate?: string;
  price?: number;
};

const SubCard = ({ id, icon, title, category, paymentDate, isHistory, price }: SubCardProps) => {
  return (
    <article className="flex justify-between items-center gap-10">
      <section className="flex justify-center items-center gap-3 py-3">
        {id ? (
          <>
            <Link href={`/subscriptions/${id}`} className="flex justify-center items-center gap-3">
              <AppIcons iconName={icon} width={42} height={42} className="rounded-lg" />
            </Link>
            <div>
              <Link href={`/subscriptions/${id}`} className="flex justify-center items-center gap-3">
                <p className="font-medium text-body-sm md:text-body-md hover:underline">{title}</p>
              </Link>
              <p className="font-semibold text-body-xs text-primary-50 capitalize">{category}</p>
            </div>
          </>
        ) : (
          <>
            <AppIcons iconName={icon} width={42} height={42} className="rounded-lg" />

            <div>
              <p className="font-medium text-body-sm md:text-body-md">{title}</p>
              <p className="font-semibold text-body-xs text-primary-50 capitalize">{category}</p>
            </div>
          </>
        )}
      </section>

      <section className="flex flex-col flex-shrink-0 justify-end items-center">
        <p className="font-medium text-body-xs text-primary-55">{format(paymentDate as string, 'dd MMM yyyy')}</p>
        {isHistory ? (
          <p className="font-semibold text-body-sm text-primary-80 md:text-body-md">-{formatIDR(price as number)}</p>
        ) : (
          <Badge
            className="flex-initial font-medium bg-destructive text-destructive-foreground 
          hover:bg-destructive-hover"
          >
            {differenceInDays(paymentDate as string, new Date())} Days Left
          </Badge>
        )}
      </section>
    </article>
  );
};

export default SubCard;
