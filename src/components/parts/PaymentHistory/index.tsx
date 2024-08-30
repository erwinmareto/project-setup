'use client';

import { useState } from 'react';

import { getYear } from 'date-fns';

import { Transaction as TransactionType } from '@/components/parts/SubscriptionTable/types';
import Transaction from '@/components/parts/Transaction';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { formatIDR } from '@/lib/utils';

export interface PaymentHistoryProps {
  data: TransactionType[];
}

const PaymentHistory = ({ data }: PaymentHistoryProps) => {
  const [selectedYear, setSelectedYear] = useState('');

  const years = [...new Set(data.map((item) => getYear(new Date(item.payment_date))))];

  const transactionByYear = data.filter((item) => getYear(item.payment_date) === +selectedYear);

  const prices = data.map((item) => +item.pricing);

  const totalPrice = prices.reduce((acc, current) => acc + current, 0);

  return (
    <section className="bg-primary-0 p-7 rounded-lg lg:col-span-4">
      <article className="flex flex-col gap-5">
        <h6 className="font-medium text-primary-80 text-body-md md:text-heading-6">Payment History</h6>
        <Card className="flex flex-col justify-center items-center text-center gap-4 py-10 px-24">
          <h1 className="font-semibold text-primary-80 text-heading-3 md:text-heading-1">{formatIDR(totalPrice)}</h1>
          <p className="font-medium text-primary-50 text-body-sm md:text-body-md">Total subscription cost</p>
          <Select onValueChange={setSelectedYear}>
            <SelectTrigger className="w-[6.9rem]">
              <SelectValue placeholder="This Year" />
            </SelectTrigger>
            <SelectContent>
              {years.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year === getYear(new Date()) ? 'This Year' : year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Card>

        <Separator />

        {/* if there is a lot (like more than 5) it should be hidden either hide using state or make it scrollable */}
        <div className="flex flex-col gap-6">
          {selectedYear
            ? // eslint-disable-next-line react/jsx-indent
              transactionByYear.map((item: TransactionType) => (
                <Transaction
                  key={item.id}
                  icon={item.icon}
                  appName={item.appName}
                  date={item.payment_date}
                  pricing={item.pricing}
                />
              ))
            : // eslint-disable-next-line react/jsx-indent
              data.map((item) => (
                <Transaction
                  key={item.id}
                  icon={item.icon}
                  appName={item.appName}
                  date={item.payment_date}
                  pricing={item.pricing}
                />
              ))}
        </div>
      </article>
    </section>
  );
};

export default PaymentHistory;
