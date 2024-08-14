import { ReactNode } from 'react';

import { TrendingUp } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';

// will probably need prop for the date range select
export interface ChartInfoProps {
  children?: ReactNode;
  total: 'spendings' | 'cost';
}

const ChartInfo = ({ children, total }: ChartInfoProps) => {
  return (
    <div className="bg-primary-0 p-5 mt-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col gap-2">
          <p className="font-medium text-primary-80 text-body-xs md:text-body-lg">Time Frame</p>
          <Select>
            <SelectTrigger className="bg-muted">
              <SelectValue placeholder="This year" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">2023-2024</SelectItem>
                <SelectItem value="banana">20222-2023</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {total === 'spendings' ? (
          <div className="flex gap-7">
            <div>
              <p className="font-medium text-primary-50 text-body-xs md:text-body-sm">Spent Last Year</p>
              <h4 className="font-semibold text-heading-6 md:text-heading-4">Rp 575.000</h4>
            </div>
            <div>
              <p className="font-medium text-primary-50 text-body-xs md:text-body-sm">Spent This Year</p>
              <div className="flex justify-center items-center gap-2">
                <h4 className="font-semibold text-heading-6 md:text-heading-4">Rp 825.000</h4>

                <Badge variant="active" className="text-[0.5rem] h-5 border-success-foreground">
                  <TrendingUp className="w-3 h-3" /> + 20
                </Badge>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-end">
            <div>
              <p className="font-medium text-primary-50 text-body-xs md:text-body-sm">Total Subscriptions</p>
              <h4 className="font-semibold text-heading-6 md:text-heading-4">12</h4>
            </div>
          </div>
        )}
      </div>

      <Separator className="my-4" />

      {children}
    </div>
  );
};

export default ChartInfo;
