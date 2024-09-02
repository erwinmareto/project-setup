import { TrendingDown, TrendingUp } from 'lucide-react';

import { Badge } from '@/components/ui/badge';

export interface PercentBadgeProps {
  selectedYearTotal: number;
  prevYearTotal: number;
}

const PercentBadge = ({ selectedYearTotal, prevYearTotal }: PercentBadgeProps) => {
  const percentage = ((selectedYearTotal - prevYearTotal) / prevYearTotal) * 100;
  return (
    <>
      {percentage < 0 ? (
        <Badge
          variant="destructive"
          className="text-[0.25rem] h-2.5 border border-destructive-foreground 
                  md:h-5 sm:text-[0.5rem] max-sm:px-0.5"
        >
          <TrendingDown className="w-1.5 h-1.5 md:w-3 md:h-3" /> {`${percentage.toFixed(1)}%`}
        </Badge>
      ) : (
        <Badge
          variant="active"
          className="text-[0.25rem] h-2.5 border border-success-foreground 
                  md:h-5 sm:text-[0.5rem] max-sm:px-0.5"
        >
          <TrendingUp className="w-1.5 h-1.5 md:w-3 md:h-3" /> {`${percentage.toFixed(1)}%`}
        </Badge>
      )}
    </>
  );
};

export default PercentBadge;
