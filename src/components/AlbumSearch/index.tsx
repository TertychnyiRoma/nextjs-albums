'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Search } from '../icons/Search';
import { useEffect, useRef } from 'react';
import type { ChangeEvent } from 'react';
import debounce from 'lodash.debounce';

export const AlbumSearch = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const updateQueryParam = useRef(
    debounce((inputValue: string) => {
      const params = new URLSearchParams(searchParams);

      if (inputValue.trim()) {
        params.set('query', inputValue.trim());
      } else {
        params.delete('query');
      }

      router.replace(`${pathname}?${params.toString()}`);
    }, 300),
  ).current;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateQueryParam(e.target.value);
  };

  useEffect(() => {
    return () => {
      updateQueryParam.cancel();
    };
  }, [updateQueryParam]);

  return (
    <div className='relative flex w-full'>
      <Search className='absolute left-[18px] top-1/2 -translate-y-1/2' />
      <input
        type='text'
        placeholder='Search by track'
        className='border-lightSlateGray h-full w-full rounded-[80px] border-[1px] py-4 pl-[50px]
          pr-[18px] ring-slate-300 placeholder:text-sm
          placeholder:text-[#AEB9CC] focus:outline-none focus:ring'
        onChange={handleChange}
        defaultValue={searchParams.get('query') || ''}
      />
    </div>
  );
};
