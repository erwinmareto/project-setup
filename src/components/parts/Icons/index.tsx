import { Tag } from 'lucide-react';
import Image from 'next/image';

import { CreativeAppIcon, EducationAppIcon, EntertainmentAppIcon, GamesAppIcon, HealthAppIcon } from '@/assets/icons';
import { cn } from '@/lib/utils';

export interface AppIconProps {
  className?: string;
  iconName: string;
  width?: number;
  height?: number;
}

const AppIcons = ({ iconName, width, height, className }: AppIconProps) => {
  if (iconName === 'others') return <Tag width={width} height={height} />;
  if (iconName === 'category-health') return <HealthAppIcon width={width} height={height} />;
  if (iconName === 'category-entertainment') return <EntertainmentAppIcon width={width} height={height} />;
  if (iconName === 'category-education') return <EducationAppIcon width={width} height={height} />;
  if (iconName === 'category-games') return <GamesAppIcon width={width} height={height} />;
  if (iconName === 'category-creative') return <CreativeAppIcon width={width} height={height} />;

  return (
    <Image
      src={`/app-icons/${iconName}.png`}
      width={width}
      height={height}
      alt={`${iconName}`}
      className={cn('rounded-sm', className)}
    />
  );
};

export default AppIcons;
