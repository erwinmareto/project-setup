import { useQuery } from '@tanstack/react-query';

import { SpendingsChartData } from '@/components/parts/ChartInfo/types';
import { COST_CHART_KEY, SPENDINGS_CHART_KEY } from '@/lib/constants/queryKeys';
import { getCostChartData, getSpendingsChartData } from '@/repositories/charts';

export const useSpendingsChart = () => {
  const result = useQuery<SpendingsChartData>({
    queryKey: [SPENDINGS_CHART_KEY],
    queryFn: getSpendingsChartData
  });

  return result;
};

export const useCostChart = () => {
  const result = useQuery({
    queryKey: [COST_CHART_KEY],
    queryFn: getCostChartData
  });

  return result;
};
