'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { formatSnakeCase } from '@/lib/utils';

/* eslint-disable no-unused-vars  */
export type FilterDropdownType = {
  filterFn: (selectedValue: string, title: string) => void;
  title: string;
  data: string[] | Record<string, number[]>;
};
/* eslint-enable no-unused-vars  */

const FilterDropdown = ({ filterFn, title, data }: FilterDropdownType) => {
  return (
    <div className="flex flex-col gap-2 lg:w-1/3 ">
      <p className="text-body-sm font-medium text-primary-80 capitalize">{formatSnakeCase(title)}</p>
      <Select onValueChange={(value) => filterFn(value, title)}>
        <SelectTrigger>
          <SelectValue placeholder={`All ${formatSnakeCase(title)}`} className="capitalize" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all" className="capitalize">
            All {formatSnakeCase(title)}
          </SelectItem>
          {Array.isArray(data)
            ? data.map((field: string) => (
                // eslint-disable-next-line react/jsx-indent
                <SelectItem key={field} value={field}>
                  {field}
                </SelectItem>
              ))
            : Object.keys(data).map((field: string) => (
                // eslint-disable-next-line react/jsx-indent
                <SelectItem key={field} value={field}>
                  {field}
                </SelectItem>
              ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FilterDropdown;
