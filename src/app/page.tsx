import { AlbumInfo } from '@/components/albums/AlbumInfo';
import { AlbumSearch } from '@/components/albums/AlbumSearch';
import { Button } from '@/components/forms/Button';
import Link from 'next/link';

const HomePage = () => (
  <div className='min-h-screen px-3 pb-[100px] pt-8 lg:bg-[#F8F8F8] lg:px-12 lg:pb-[102px]'>
    <div className='mx-auto max-w-screen-2xl'>
      <div className='mb-[18px] flex items-center justify-between'>
        <h1 className='px-[10px] text-[18px] font-semibold lg:text-[24px] lg:text-[#151B35]'>
          Album
        </h1>
        <Link href='/add-album'>
          <Button className='!p-[12px] text-sm' tabIndex={-1}>
            + New Release
          </Button>
        </Link>
      </div>
      <AlbumSearch />
      <AlbumInfo />
    </div>
  </div>
);

export default HomePage;
