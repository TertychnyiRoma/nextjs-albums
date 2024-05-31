import type { ComponentProps, FC } from 'react';
import { AlbumItem } from '../AlbumItem';
import cn from 'classnames';

const DUMMY_ALBUMS = new Array(6).fill(0);

export const AlbumsList: FC<ComponentProps<'ul'>> = ({ className }) => {
  return (
    <ul
      className={cn(
        'flex list-none flex-wrap justify-center gap-x-10 gap-y-[50px] min-[390px]:justify-start',
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
