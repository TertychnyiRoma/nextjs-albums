import { useRef, type FC, type ChangeEvent } from 'react';
import { useAlbumsStore } from '@/providers/albums-store-provider';
import { AlbumAction } from '@/types/AlbumAction';
import cn from 'classnames';

const ACTIONS: AlbumAction[] = Object.values(AlbumAction);

type Props = {
  albumId: number;
};

export const AlbumPopupActions: FC<Props> = ({ albumId }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { albums, setAlbums, setAlbumIdWithOpenPopup, setEditingAlbumId } =
    useAlbumsStore((state) => state);

  const handleActionClick = (action: AlbumAction) => {
    if (action === AlbumAction.CHANGE_COVER) {
      fileInputRef.current?.click();
    } else if (action === AlbumAction.RENAME) {
      setEditingAlbumId(albumId);
      setAlbumIdWithOpenPopup(null);
    } else if (action === AlbumAction.DELETE) {
      const filteredAlbums = albums.filter((album) => album.id !== albumId);

      setAlbums(filteredAlbums);
      setAlbumIdWithOpenPopup(null);
    }
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    setAlbumIdWithOpenPopup(null);

    if (e.target.files?.length) {
      const file = e.target.files[0];

      const updatedAlbums = albums.map((album) => {
        if (album.id === albumId) {
          return {
            ...album,
            coverUrl: URL.createObjectURL(file),
          };
        }

        return album;
      });

      setAlbums(updatedAlbums);
    }
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
      <input
        type='file'
        className='hidden'
        ref={fileInputRef}
        onChange={handleFileUpload}
      />
    </ul>
  );
};
