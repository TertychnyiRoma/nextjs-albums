import { AlbumInfo } from '@/components/AlbumInfo';
import { AlbumSearch } from '@/components/AlbumSearch';

const HomePage = () => (
  <div className='min-h-screen px-3 pb-[100px] pt-8 lg:bg-[#F8F8F8] lg:px-12 lg:pb-[102px]'>
    <h1 className='mb-[18px] px-[10px] text-[18px] font-semibold lg:text-[24px] lg:text-[#151B35]'>
      Album
    </h1>
    <AlbumSearch />
    <AlbumInfo />
  </div>
);

export default HomePage;
