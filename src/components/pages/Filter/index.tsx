'use client';

import { useState } from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Button } from '@/components/ui/button';
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
      <Button onClick={handleNextPage} variant="outline">
        Next
      </Button>
    </section>
  );
};
export default Filter;
