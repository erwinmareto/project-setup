'use client';

import * as React from 'react';

import { Calendar } from '@/components/ui/calendar';

export default function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    // <div className="bg-pink-200  flex justify-center items-center">
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border max-w-[17rem]"
    />
    // </div>
  );
}
