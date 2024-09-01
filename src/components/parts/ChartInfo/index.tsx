'use client';

import { cloneElement, ReactElement, useState } from 'react';

import { TrendingUp } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { formatIDR } from '@/lib/utils';

// will probably need prop for the date range select
export interface ChartInfoProps {
  children: ReactElement;
  transactionYears: number[];
  total: 'spendings' | 'cost';
}

const ChartInfo = ({ children, transactionYears, total }: ChartInfoProps) => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedYearTotal, setSelectedYearTotal] = useState(0);
  const [prevYearTotal, setPrevYearTotal] = useState(0);

  const handleSelectedYear = (year: string) => {
    setSelectedYear(+year);
  };

  const handleSelectedYearTotal = (total: number) => {
    setSelectedYearTotal(total);
  };

  const handlePrevYearTotal = (total: number) => {
    setPrevYearTotal(total);
  };

  return (
    <div className="bg-primary-0 p-5 mt-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col gap-2">
          <p className="font-medium text-primary-80 text-body-xs md:text-body-lg">Time Frame</p>
          <Select value={selectedYear.toString()} onValueChange={handleSelectedYear}>
            <SelectTrigger className="bg-muted">
              <SelectValue placeholder="This year" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {transactionYears.map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {`${year - 1}-${year}`}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {total === 'spendings' ? (
          <div className="flex gap-3 md:gap-7">
            <div>
              <p className="font-medium text-primary-50 text-[0.5rem] md:text-body-sm">Spent Last Year</p>
              <h4 className="font-semibold text-body-sm md:text-heading-4">{formatIDR(prevYearTotal)}</h4>
            </div>
            <div>
              <p className="font-medium text-primary-50 text-[0.5rem] md:text-body-sm">Spent This Year</p>
              <div className="flex justify-center items-center gap-2">
                <h4 className="font-semibold text-body-sm md:text-heading-4">{formatIDR(selectedYearTotal)}</h4>

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

      {cloneElement(children, {
        selectedYear: selectedYear,
        selectedYearTotalHandler: handleSelectedYearTotal,
        prevYearTotalHandler: handlePrevYearTotal
      })}
    </div>
  );
};

export default ChartInfo;
