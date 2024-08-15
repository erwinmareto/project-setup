import { differenceInDays, format } from 'date-fns';

import { WalletWithCards } from '@/assets/icons';
import { SubscriptionCategory } from '@/components/parts/SubscriptionTable/types';
import { Badge } from '@/components/ui/badge';

export type SubCardProps = {
  history?: boolean;
  title: string;
  category: SubscriptionCategory;
  paymentDate: string;
};

const SubCard = ({ title, category, paymentDate, history }: SubCardProps) => {
  return (
    <article className="flex justify-between items-center gap-10">
      <section className="flex justify-center items-center gap-3 py-3">
        <div className="w-11 h-11 flex flex-shrink-0 justify-center items-center rounded-xl bg-red-500">
          <WalletWithCards />
        </div>
        <div>
          <p className="font-semibold text-body-md">{title}</p>
          <p className="font-semibold text-body-xs text-primary-50 capitalize">{category}</p>
        </div>
      </section>

      <section className="flex flex-col flex-shrink-0 justify-end items-center">
        <p className="font-semibold text-body-xs text-primary-55">{format(new Date(paymentDate), 'dd MMM yyyy')}</p>
        {history ? (
          <p className="font-semibold text-body-md text-primary-80">-Rp 20.000</p>
        ) : (
          <Badge className="bg-destructive text-destructive-foreground hover:bg-destructive-hover flex-initial">
            {differenceInDays(paymentDate, new Date())} Days Left
          </Badge>
        )}
      </section>
    </article>
  );
};

export default SubCard;
