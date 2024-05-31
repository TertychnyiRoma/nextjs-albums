import type { ComponentProps, FC } from 'react';
import { AlbumItem } from '../AlbumItem';
import cn from 'classnames';

const DUMMY_ALBUMS = new Array(6).fill(0);

export const AlbumsList: FC<ComponentProps<'ul'>> = ({ className }) => {
  return (
    <ul
      className={cn(
        'grid place-content-center lg:grid-cols-[repeat(auto-fill,_170px)]',
        'list-none grid-cols-[repeat(auto-fill,_146px)] gap-x-10',
        'gap-y-[50px] lg:gap-x-[100px] lg:gap-y-14',
        className,
      )}
    >
      {DUMMY_ALBUMS.map((album, i) => (
        <li key={i}>
          <AlbumItem />
        </li>
      ))}
    </ul>
  );
};
