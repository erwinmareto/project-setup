import { Badge } from '@/components/ui/badge';

type Status = 'Active' | 'Upcoming' | 'Overdue' | 'Inactive';

const badgeStyles = (status: string) => {
  switch (status) {
    case 'Active':
      return 'bg-[#E3FFED] text-[#169946] hover:bg-[#D1F6C4] hover:text-[#138F2E]'; // Slightly darker green for hover
    case 'Upcoming':
      return 'bg-[#FFFCE3] text-[#C4910D] hover:bg-[#FDF3B0] hover:text-[#A67302]'; // Slightly darker yellow for hover
    case 'Overdue':
      return 'bg-[#FFE4E3] text-[#EB2525] hover:bg-[#FDDCDB] hover:text-[#C81C1C]'; // Slightly darker red for hover
    default:
      return 'bg-[#F3F3F2] text-[#7F7C7C] hover:bg-[#EAE9E7] hover:text-[#6E6B6B]'; // Slightly darker grey for hover
  }
};

const dotStyles = (status: string) => {
  switch (status) {
    case 'Active':
      return 'bg-[#169946] text-[#E3FFED]';
    case 'Upcoming':
      return 'bg-[#C4910D] text-[#FFFCE3]';
    case 'Overdue':
      return 'bg-[#EB2525] text-[#FFE4E3]';
    default:
      return 'bg-[#7F7C7C] text-[#F3F3F2]';
  }
};

const CustomBadges = ({ status }: { status: Status }) => {
  return (
    <Badge className={badgeStyles(status)}>
      <div className={`h-2 w-2 mr-3 rounded-full ${dotStyles(status)}`} />
      {status}
    </Badge>
  );
};
export default CustomBadges;
