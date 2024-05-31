import type { FC } from 'react';
import { useAlbumsStore } from '@/providers/albums-store-provider';
import { AlbumAction } from '@/types/AlbumAction';
import cn from 'classnames';

const ACTIONS: AlbumAction[] = Object.values(AlbumAction);

type Props = {
  albumId: number;
};

export const AlbumPopupActions: FC<Props> = ({ albumId }) => {
  const { albums, setAlbums, setAlbumIdWithOpenPopup } = useAlbumsStore(
    (state) => state,
  );

  const handleActionClick = (action: AlbumAction) => {
    if (action === AlbumAction.CHANGE_COVER) {
      // TODO: implement
    } else if (action === AlbumAction.RENAME) {
      // TODO: implement
    } else if (action === AlbumAction.DELETE) {
      const filteredAlbums = albums.filter((album) => album.id !== albumId);

      setAlbums(filteredAlbums);
    }

    setAlbumIdWithOpenPopup(null);
  };

  return (
    <ul className='flex flex-col'>
      {ACTIONS.map((action, i) => (
        <li key={action}>
          <button
            type='button'
            className={cn(
              'w-full px-[19px] py-[13px] text-start text-sm font-medium hover:bg-slate-100',
              {
                'text-[#FF0000]': i === ACTIONS.length - 1,
              },
            )}
            onClick={() => handleActionClick(action)}
          >
            {action}
          </button>
        </li>
      ))}
    </ul>
  );
};
