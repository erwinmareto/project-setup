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
            <SelectTrigger className="bg-muted max-sm:max-w-[4.75rem]">
              <SelectValue placeholder="This year" className="text-[0.65rem]" />
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
          <div className="flex gap-3 md:gap-7">
            <div>
              <p className="font-medium text-primary-50 text-[0.5rem] md:text-body-sm">Spent Last Year</p>
              <h4 className="font-semibold text-body-sm md:text-heading-4">Rp 575.000</h4>
            </div>
            <div>
              <p className="font-medium text-primary-50 text-[0.5rem] md:text-body-sm">Spent This Year</p>
              <div className="flex justify-center items-center gap-2">
                <h4 className="font-semibold text-body-sm md:text-heading-4">Rp 825.000</h4>

                <Badge
                  variant="active"
                  className="text-[0.25rem] h-2.5 border border-success-foreground 
                  md:h-5 sm:text-[0.5rem] max-sm:px-0.5"
                >
                  <TrendingUp className="w-1.5 h-1.5 md:w-3 md:h-3" /> + 20
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
