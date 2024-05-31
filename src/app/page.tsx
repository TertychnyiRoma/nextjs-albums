import { AlbumInfo } from '@/components/AlbumInfo';
import { AlbumSearch } from '@/components/AlbumSearch';

const HomePage = () => (
  <div className='px-3 py-8'>
    <h1 className='mb-[18px] px-[10px] text-[18px] font-semibold'>Album</h1>
    <AlbumSearch />
    <AlbumInfo />
  </div>
);

export default HomePage;
