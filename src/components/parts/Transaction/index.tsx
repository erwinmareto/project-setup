import { format } from 'date-fns';

import AppIcons from '@/components/parts/AppIcons';
import { formatIDR } from '@/lib/utils';

// date should probably be type Date and icon is either a file path(string) or a ReactNode
export interface TransactionProps {
  icon: string;
  appName: string;
  date: string;
  pricing: number;
}

const Transaction = ({ icon, appName, date, pricing }: TransactionProps) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <AppIcons iconName={icon} width={52} height={52} className="rounded-xl" />
        <div>
          <p className="font-medium text-primary-80 text-body-lg">{appName}</p>
          <p className="font-medium text-primary-50 text-body-sm">{format(date, 'dd MMM yyyy')}</p>
        </div>
      </div>
      <h6 className="font-semibold text-primary-80 text-heading-6">- {formatIDR(pricing)}</h6>
    </div>
  );
};

export default Transaction;
