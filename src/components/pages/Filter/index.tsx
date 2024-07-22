'use client';

import { useState } from 'react';

import { Edit, Ellipsis, Trash } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Button } from '@/components/ui/button';
import {
  Pagination,
  PaginationContent,
  // PaginationEllipsis,
  PaginationItem,
  // PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { combineSearchParams, removeSearchParams } from '@/lib/url';

const Filter = () => {
  // const [filter, setFilter] = useState(true);
  // const [other, setOther] = useState('something');
  const [page, setPage] = useState(1);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // const addFilter = () => {
  //   const refreshed = removeSearchParams(searchParams, ['filter']);
  //   router.replace(`${pathname}?${combineSearchParams(refreshed, { filter })}`);
  // };

  const addAnother = () => {
    // const refreshed = removeSearchParams(searchParams, ['other']);
    const newParams = combineSearchParams(searchParams, { other: Math.floor(Math.random() * 10) });
    router.replace(`${pathname}?${newParams}`);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
    const refresh = removeSearchParams(searchParams, ['page']);
    const newParams = combineSearchParams(refresh, { page: page - 1 });
    router.push(`/filter?${newParams}`);
  };

  const handleNextPage = () => {
    setPage(page + 1);
    const refresh = removeSearchParams(searchParams, ['page']);
    const newParams = combineSearchParams(refresh, { page: page + 1 });
    router.push(`/filter?${newParams}`);
  };

  searchParams.forEach((param) => {
    console.log(param);
  });
  //   console.log(searchParams);

  return (
    <section className="bg-orange-500">
      <h1>Filter</h1>
      <h1>Filter</h1>
      <h1>Filter</h1>
      {/* <Button onClick={addFilter} variant="secondary">
        Filter
      </Button> */}
      <Button onClick={addAnother} variant="destructive">
        Another
      </Button>
      <Button onClick={handlePrevPage} disabled={page === 1} variant="ghost">
        Prev
      </Button>
      <Button onClick={handleNextPage}>Next</Button>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">
            <Ellipsis />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="flex flex-col gap-1 w-[170px] p-2">
          <Button
            variant="ghost"
            className="text-[#4336F3] flex justify-start gap-2 hover:bg-indigo-100 hover:text-[#4336F3]"
          >
            <Edit />
            Edit
          </Button>
          <Button
            variant="ghost"
            className="text-red-400 flex justify-start gap-2 hover:bg-red-100 hover:text-red-400"
          >
            <Trash />
            Delete
          </Button>
        </PopoverContent>
      </Popover>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              className="border border-slate-500 flex justify-center 
              items-center bg-white h-[36px] w-[42px] text-[#4336F3] "
            />
          </PaginationItem>
          {/* <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem> */}
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
};
export default Filter;
