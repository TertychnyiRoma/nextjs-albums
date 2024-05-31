import { ArrowLeft } from '@/components//icons/ArrowLeft';
import { ArrowRight } from '@/components/icons/ArrowRight';

export const AlbumsPagination = () => {
  return (
    <div className='flex items-center justify-center gap-5'>
      <ArrowLeft />
      <div className='text-[18px] font-medium tracking-[3%]'>
        <span className='text-[#292C4B]'>1</span>
        &nbsp;
        <span className='text-[#75778A]'>- 2</span>
      </div>
      <ArrowRight />
    </div>
  );
};
