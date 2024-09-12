export interface MonthlySpending {
  month: string;
  [year: string]: string | number;
}

export interface YearlyTotal {
  year: number;
  total: number;
}

// export interface TopApp {
//   app: string;
//   cost: number;
// }
export interface AppCount {
  sortedBy: 'month' | 'year';
  count: number;
}

export interface TopApp {
  sortedBy: 'month' | 'year';
  appName: string;
  cost: number;
}

export interface SpendingsChartData {
  chartData: MonthlySpending[];
  totals: YearlyTotal[];
}

// export interface CostChartData {
//   chartData: TopApp[];
//   totalSubscriptions: number;
// }

export interface CostChartData {
  totals: AppCount[];
  topApps: TopApp[];
}
