'use client';

import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from 'recharts';

import { CostChartData } from '@/components/parts/ChartInfo/types';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

export interface CostChartProps {
  data?: CostChartData;
  costTimeframe?: 'month' | 'year';
  // eslint-disable-next-line no-unused-vars
  totalSubsHandler?: (total: number) => void;
}

const CostChart = ({ data, costTimeframe, totalSubsHandler }: CostChartProps) => {
  const subCount = data?.totals.find((data) => data.sortedBy === costTimeframe)?.count;

  // change the sub total in chart info
  totalSubsHandler && totalSubsHandler(subCount || 0);

  const top5Apps = data?.topApps.filter((app) => app.sortedBy === costTimeframe);

  const chartConfig = {
    cost: {
      label: 'Total Cost',
      color: '#4336F3'
    },

    label: {
      color: 'hsl(var(--background))'
    }
  } satisfies ChartConfig;

  return (
    <div className="flex flex-col gap-4">
      <ChartContainer config={chartConfig} className="h-[13rem] md:h-[22.8rem]">
        <BarChart
          accessibilityLayer
          data={top5Apps}
          layout="vertical"
          margin={{
            right: 16
          }}
        >
          <CartesianGrid horizontal={false} />
          <YAxis
            dataKey="appName"
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
            content={<ChartTooltipContent indicator="line" nameKey="appName" color="#4336F3" className="rounded-md" />}
          />
          <Bar
            dataKey="cost"
            layout="vertical"
            className="fill-secondary-40 rounded-md md:rounded-lg max-sm:max-h-[2.25rem]"
            radius={10}
          >
            <LabelList
              dataKey="appName"
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
