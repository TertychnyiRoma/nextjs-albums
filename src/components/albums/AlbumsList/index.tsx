'use client';

import type { ComponentProps, FC } from 'react';
import { AlbumItem } from '../AlbumItem';
import { useAlbumsStore } from '@/providers/albums-store-provider';
import cn from 'classnames';
import { useSearchParams } from 'next/navigation';
import { PER_PAGE } from '@/utils/data';
import { getFoundAlbums } from '@/helpers/getFoundAlbums';

export const AlbumsList: FC<ComponentProps<'ul'>> = ({ className }) => {
  const searchParams = useSearchParams();
  const albums = useAlbumsStore((state) => state.albums);
  const activePage = Number(searchParams.get('page')) || 1;
  const foundAlbums = getFoundAlbums(albums, searchParams.get('query'));
  const paginatedAlbums = foundAlbums.slice(
    (activePage - 1) * PER_PAGE,
    activePage * PER_PAGE,
  );

  if (!foundAlbums.length) {
    return (
      <div className='my-12 text-center text-2xl font-medium lg:mt-0'>
        No albums found.
      </div>
    );
  }

  return (
    <ul
      className={cn(
        'grid place-content-center lg:grid-cols-[repeat(auto-fill,_170px)]',
        'list-none grid-cols-[repeat(auto-fill,_146px)] gap-x-10',
        'gap-y-[50px] lg:gap-x-[100px] lg:gap-y-14',
        className,
      )}
    >
      {paginatedAlbums.map((album, i) => (
        <li key={i}>
          <AlbumItem album={album} />
        </li>
      ))}
    </ul>
  );
};
