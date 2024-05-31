import Image from 'next/image';
import { More } from '../icons/More';
import { gilroy } from '@/app/fonts';

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
        <More className='absolute right-[3px] top-[8px]' />
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
