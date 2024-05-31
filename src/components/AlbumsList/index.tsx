import { AlbumItem } from '../AlbumItem';

const DUMMY_ALBUMS = new Array(6).fill(0);

export const AlbumsList = () => {
  return (
    <ul
      className='flex list-none flex-wrap justify-center
        gap-x-10 gap-y-[50px] min-[390px]:justify-start'
    >
      {DUMMY_ALBUMS.map((album, i) => (
        <li key={i}>
          <AlbumItem />
        </li>
      ))}
    </ul>
  );
};
