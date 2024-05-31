'use client';

import { ArrowLeft } from '@/components//icons/ArrowLeft';
import { ArrowRight } from '@/components/icons/ArrowRight';
import { useAlbumsStore } from '@/providers/albums-store-provider';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { PER_PAGE } from '@/utils/data';
import cn from 'classnames';
import { useEffect } from 'react';
import { getFoundAlbums } from '@/helpers/getFoundAlbums';

export const AlbumsPagination = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { albums } = useAlbumsStore((state) => state);
  const foundAlbums = getFoundAlbums(albums, searchParams.get('query'));

  const activePage = Number(searchParams.get('page')) || 1;
  const isThereNextPage = foundAlbums.length > activePage * PER_PAGE;
  const isFirstPage = activePage === 1;

  const handleChangePage = (page: number) => {
    const params = new URLSearchParams(searchParams);

    params.set('page', String(page));
    router.push(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    if (foundAlbums.length <= (activePage - 1) * PER_PAGE) {
      const params = new URLSearchParams(searchParams);

      params.delete('page');
      router.replace(`${pathname}?${params.toString()}`);
    }
  }, [searchParams]);

  if (!foundAlbums.length) return null;

  return (
    <div className='flex items-center justify-center gap-5'>
      <button
        onClick={() => handleChangePage(activePage - 1)}
        disabled={isFirstPage}
      >
        <ArrowLeft
          className={cn('fill-[#292C4B]', {
            '!fill-[#75778A]': isFirstPage,
          })}
        />
      </button>
      <div className='text-[18px] font-medium tracking-[3%]'>
        <span className='text-[#292C4B]'>{activePage}</span>
        {isThereNextPage && (
          <span className='text-[#75778A]'>&nbsp;- {activePage + 1}</span>
        )}
      </div>
      <button
        onClick={() => handleChangePage(activePage + 1)}
        disabled={!isThereNextPage}
      >
        <ArrowRight
          className={cn('fill-[#292C4B]', {
            '!fill-[#75778A]': !isThereNextPage,
          })}
        />
      </button>
    </div>
  );
};
