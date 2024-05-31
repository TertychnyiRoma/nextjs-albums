'use client';

import type { ComponentProps, FC } from 'react';
import { AlbumItem } from '../AlbumItem';
import { useAlbumsStore } from '@/providers/albums-store-provider';
import cn from 'classnames';
import { useSearchParams } from 'next/navigation';

export const AlbumsList: FC<ComponentProps<'ul'>> = ({ className }) => {
  const searchParams = useSearchParams();
  const albums = useAlbumsStore((state) => state.albums);

  const filteredAlbums = albums.filter((album) => {
    const query = searchParams.get('query');

    if (query) {
      const lowerCaseQuery = query.toLowerCase();
      const lowerCaseTitle = album.title.toLowerCase();
      const lowerCaseArtistName = album.artist.fullName.toLowerCase();

      return (
        lowerCaseTitle.includes(lowerCaseQuery) ||
        lowerCaseArtistName.includes(lowerCaseQuery)
      );
    }

    return true;
  });

  if (!filteredAlbums.length) {
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
      {filteredAlbums.map((album, i) => (
        <li key={i}>
          <AlbumItem album={album} />
        </li>
      ))}
    </ul>
  );
};
