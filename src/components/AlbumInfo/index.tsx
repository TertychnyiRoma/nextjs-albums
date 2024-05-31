import { AlbumsList } from '../AlbumsList';
import { AlbumsPagination } from '../AlbumsPagination';

export const AlbumInfo = () => {
  return (
    <div className='rounded-[22px] border-[1px] border-[#E7EDF8] px-4 pb-6 pt-4'>
      <AlbumsList className='mb-12' />
      <AlbumsPagination />
    </div>
  );
};
