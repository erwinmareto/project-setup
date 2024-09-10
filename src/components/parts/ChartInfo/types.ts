export interface MonthlySpending {
  month: string;
  [year: string]: string | number;
}

export interface YearlyTotal {
  year: number;
  total: number;
}

export interface TopApp {
  app: string;
  cost: number;
}

export interface SpendingsChartData {
  chartData: MonthlySpending[];
  totals: YearlyTotal[];
}

export interface CostChartData {
  chartData: TopApp[];
  totalSubscriptions: number;
}
