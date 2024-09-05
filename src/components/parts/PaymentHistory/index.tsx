'use client';

import { useState } from 'react';

import { getMonth, getYear } from 'date-fns';
import { ChevronDown } from 'lucide-react';

import { Transaction as TransactionType } from '@/components/parts/SubscriptionTable/types';
import Transaction from '@/components/parts/Transaction';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { formatIDR } from '@/lib/utils';

export interface PaymentHistoryProps {
  data: TransactionType[];
  currentSub: string;
}

const PaymentHistory = ({ data, currentSub }: PaymentHistoryProps) => {
  const [timeframe, setTimeframe] = useState('year');
  const [showAll, setShowAll] = useState(false);

  const allCurrentTransactions = data.filter((item) => item.appName === currentSub);

  // const years = [...new Set(allCurrentTransactions.map((item) => getYear(new Date(item.paymentDate))))];

  const transactionByCurrentYear = allCurrentTransactions
    .filter((item) => getYear(item.paymentDate) === getYear(new Date()))
    .sort((a, b) => new Date(b.paymentDate).getTime() - new Date(a.paymentDate).getTime());

  const transactionByCurrentMonth = allCurrentTransactions
    .filter(
      (item) => getMonth(item.paymentDate) === getMonth(new Date()) && getYear(item.paymentDate) === getYear(new Date())
    )
    .sort((a, b) => new Date(b.paymentDate).getTime() - new Date(a.paymentDate).getTime());

  const prices = allCurrentTransactions.map((item) => item.pricing);

  const totalPrice = prices.reduce((acc, current) => acc + current, 0);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section className="bg-primary-0 rounded-lg lg:col-span-4">
      <article className="flex flex-col gap-5 m-7">
        <h6 className="font-medium text-primary-80 text-body-md md:text-heading-6">Payment History</h6>
        <Card className="flex flex-col justify-center items-center text-center gap-4 py-10 px-24">
          <h1 className="font-semibold text-primary-80 text-heading-3 md:text-heading-1">{formatIDR(totalPrice)}</h1>
          <p className="font-medium text-primary-50 text-body-sm md:text-body-md">Total subscription cost</p>
          <Select onValueChange={setTimeframe}>
            <SelectTrigger className="max-w-[7.2rem]">
              <SelectValue placeholder="This Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="year">This Year</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              {/* {years.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year === getYear(new Date()) ? 'This Year' : year}
                </SelectItem>
              ))} */}
            </SelectContent>
          </Select>
        </Card>

        <Separator />

        {/* if there is a lot (like more than 5) it should be hidden either hide using state or make it scrollable */}
        <div className="flex flex-col gap-6">
          {showAll
            ? timeframe === 'year'
              ? transactionByCurrentYear.map((item: TransactionType) => (
                  // eslint-disable-next-line react/jsx-indent
                  <Transaction
                    key={item.id}
                    icon={item.icon}
                    appName={item.appName}
                    date={item.paymentDate}
                    pricing={item.pricing}
                  />
                ))
              : transactionByCurrentMonth.map((item: TransactionType) => (
                  // eslint-disable-next-line react/jsx-indent
                  <Transaction
                    key={item.id}
                    icon={item.icon}
                    appName={item.appName}
                    date={item.paymentDate}
                    pricing={item.pricing}
                  />
                ))
            : timeframe === 'year'
              ? transactionByCurrentYear.slice(0, 5).map((item: TransactionType) => (
                  // eslint-disable-next-line react/jsx-indent
                  <Transaction
                    key={item.id}
                    icon={item.icon}
                    appName={item.appName}
                    date={item.paymentDate}
                    pricing={item.pricing}
                  />
                ))
              : transactionByCurrentMonth.slice(0, 5).map((item: TransactionType) => (
                  // eslint-disable-next-line react/jsx-indent
                  <Transaction
                    key={item.id}
                    icon={item.icon}
                    appName={item.appName}
                    date={item.paymentDate}
                    pricing={item.pricing}
                  />
                ))}
        </div>
      </article>
      {((timeframe === 'year' && transactionByCurrentYear.length > 5) ||
        (timeframe === 'month' && transactionByCurrentMonth.length > 5)) && (
        // eslint-disable-next-line react/jsx-indent
        <div
          onClick={handleShowAll}
          className="flex justify-center items-center rounded-b-lg py-2 mt-5 
      transition-all duration-500 hover:bg-primary-20"
        >
          <ChevronDown className={`transition-transform ${showAll ? 'rotate-180' : 'rotate-0'}`} />
        </div>
      )}
    </section>
  );
};

export default PaymentHistory;
