/* eslint-disable @next/next/no-img-element */
import { gilroy } from '@/app/fonts';
import { AlbumActionsPopup } from '../AlbumActionsPopup';
import { Album } from '@/types/Album';
import type { FC } from 'react';

type Props = {
  album: Album;
};

export const AlbumItem: FC<Props> = ({ album }) => {
  return (
    <>
      <div className='relative'>
        <img
          src={album.coverUrl}
          alt='album cover'
          className='mb-6 h-[153px] w-[146px] rounded-[22px] lg:mb-[30px] lg:h-[177px] lg:w-[170px]'
        />
        <AlbumActionsPopup />
      </div>
      <div
        className={`mb-[10px] font-semibold tracking-[3%]
        text-[#1D283D] lg:text-[18px] ${gilroy.className}`}
      >
        {album.title}
      </div>
      <span
        className={`font-medium tracking-[3%] text-[#818999] ${gilroy.className}`}
      >
        {album.artist.fullName}
      </span>
    </>
  );
};
