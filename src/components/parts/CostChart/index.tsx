'use client';

import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from 'recharts';

import { Transaction } from '@/components/parts/SubscriptionTable/types';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

export interface CostChartProps {
  data?: Transaction[];
  selectedYear?: number;
  // eslint-disable-next-line no-unused-vars
  totalSubsHandler?: (total: number) => void;
}

const CostChart = ({ data, selectedYear, totalSubsHandler }: CostChartProps) => {
  const selectedYearData = data?.filter(
    (transaction) => new Date(transaction.paymentDate).getFullYear() === selectedYear
  );

  totalSubsHandler && totalSubsHandler(selectedYearData?.length || 0);

  const chartData = [
    { app: 'Netflix', cost: 186, category: 'Entertainment' },
    { app: 'Creative Cloud', cost: 305, category: 'Work' },
    { app: 'Youtube', cost: 237, category: 'Entertainment' },
    { app: 'Spotify', cost: 73, category: 'Entertainment' },
    { app: 'Dribbble', cost: 209, category: 'work' }
  ];

  const chartConfig = {
    cost: {
      label: 'Total Cost',
      color: '#4336F3'
    },

    label: {
      color: 'hsl(var(--background))'
    },
    netflix: {
      label: 'Entertainment'
    },
    youtube: {
      label: 'Entertainment'
    },
    spotify: {
      label: 'Entertainment'
    },
    creativecloud: {
      label: 'Work'
    },
    dribbble: {
      label: 'Work'
    }
  } satisfies ChartConfig;
  return (
    <div className="flex flex-col gap-4">
      <ChartContainer config={chartConfig} className="h-[13rem] md:h-[22.8rem]">
        <BarChart
          accessibilityLayer
          data={chartData}
          layout="vertical"
          margin={{
            right: 16
          }}
        >
          <CartesianGrid horizontal={false} />
          <YAxis
            dataKey="app"
            type="category"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
            hide
          />
          <XAxis dataKey="cost" type="number" hide />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" nameKey="app" color="#4336F3" className="rounded-md" />}
          />
          <Bar
            dataKey="cost"
            layout="vertical"
            className="fill-secondary-40 rounded-md md:rounded-lg max-sm:max-h-[2.25rem]"
            radius={10}
          >
            <LabelList
              dataKey="app"
              position="insideLeft"
              offset={8}
              className="fill-[--color-label] font-medium text-body-lg 
              md:p-4 max-sm:text-[0.65rem]"
            />
          </Bar>
        </BarChart>
      </ChartContainer>
      <div className="flex flex-col items-start gap-2 text-sm">
        <h5 className="font-medium text-primary-80 text-body-md md:text-heading-5">Total Subscription Cost</h5>
        <p className="font-medium text-primary-50 text-[0.65rem] md:text-body-md">
          Showing total subscription costsfor the 5 highest spending
        </p>
      </div>
    </div>
  );
};

export default CostChart;
