import Image from 'next/image';
import { gilroy } from '@/app/fonts';
import { AlbumActionsPopup } from '../AlbumActionsPopup';

export const AlbumItem = () => {
  return (
    <>
      <div className='relative'>
        <Image
          src='/images/album-cover.png'
          alt='album cover'
          width={146}
          height={153}
          className='mb-6'
        />
        <AlbumActionsPopup />
      </div>
      <div
        className={`mb-[10px] font-semibold tracking-[3%] text-[#1D283D] ${gilroy.className}`}
      >
        Untitled Album
      </div>
      <span
        className={`text-sm font-medium tracking-[3%] text-[#818999] ${gilroy.className}`}
      >
        Jon Glo
      </span>
    </>
  );
};
