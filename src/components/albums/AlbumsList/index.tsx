'use client';

import type { ComponentProps, FC } from 'react';
import { AlbumItem } from '../AlbumItem';
import { useAlbumsStore } from '@/providers/albums-store-provider';
import cn from 'classnames';

export const AlbumsList: FC<ComponentProps<'ul'>> = ({ className }) => {
  const albums = useAlbumsStore((state) => state.albums);

  return (
    <ul
      className={cn(
        'grid place-content-center lg:grid-cols-[repeat(auto-fill,_170px)]',
        'list-none grid-cols-[repeat(auto-fill,_146px)] gap-x-10',
        'gap-y-[50px] lg:gap-x-[100px] lg:gap-y-14',
        className,
      )}
    >
      {albums.map((album, i) => (
        <li key={i}>
          <AlbumItem album={album} />
        </li>
      ))}
    </ul>
  );
};
