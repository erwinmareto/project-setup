import { fetcher } from '@/lib/fetcher';

export const getSpendingsChartData = async () => {
  const response = await fetcher({
    url: '/charts/spending'
  });

  return response;
};

export const getCostChartData = async () => {
  const response = await fetcher({
    url: '/charts/cost'
  });

  return response;
};
