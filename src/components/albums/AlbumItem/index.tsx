/* eslint-disable @next/next/no-img-element */
import { gilroy } from '@/app/fonts';
import { AlbumActionsPopup } from '../AlbumActionsPopup';
import { Album } from '@/types/Album';
import {
  useEffect,
  useRef,
  type FC,
  type FocusEvent,
  type KeyboardEvent,
} from 'react';
import { useAlbumsStore } from '@/providers/albums-store-provider';

type Props = {
  album: Album;
};

export const AlbumItem: FC<Props> = ({
  album: { id, title, artist, coverUrl },
}) => {
  const isInitialBlur = useRef(true);
  const titleInputRef = useRef<HTMLInputElement | null>(null);
  const { albums, editingAlbumid, setEditingAlbumId, setAlbums } =
    useAlbumsStore((state) => state);

  const isTitleBeingEdited = id === editingAlbumid;

  const updateTitle = (inputValue: string) => {
    setEditingAlbumId(null);

    if (!inputValue.trim()) return;

    const updatedAlbums = albums.map((album) => {
      if (id === album.id) {
        return { ...album, title: inputValue };
      }

      return album;
    });

    setAlbums(updatedAlbums);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (isInitialBlur.current) {
      titleInputRef.current?.focus();
      isInitialBlur.current = false;
    } else {
      updateTitle(e.target.value);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === 'Escape') {
      updateTitle(e.currentTarget.value);
    }
  };

  useEffect(() => {
    if (isTitleBeingEdited && titleInputRef.current) {
      isInitialBlur.current = true;
      titleInputRef.current.focus();
    }
  }, [titleInputRef.current, editingAlbumid]);

  return (
    <>
      <div className='relative'>
        <img
          src={coverUrl}
          alt='album cover'
          className='mb-6 h-[153px] w-[146px] rounded-[22px] lg:mb-[30px] lg:h-[177px] lg:w-[170px]'
        />
        <AlbumActionsPopup albumId={id} />
      </div>
      <div
        className={`mb-[10px] overflow-hidden text-ellipsis whitespace-nowrap font-semibold tracking-[3%]
        text-[#1D283D] lg:text-[18px] ${gilroy.className}`}
      >
        {isTitleBeingEdited ? (
          <input
            type='text'
            defaultValue={title}
            className='w-full'
            ref={titleInputRef}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
          />
        ) : (
          title
        )}
      </div>
      <span
        className={`font-medium tracking-[3%] text-[#818999] ${gilroy.className}`}
      >
        {artist.fullName}
      </span>
    </>
  );
};
