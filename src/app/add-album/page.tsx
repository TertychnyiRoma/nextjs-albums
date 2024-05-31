/* eslint-disable @next/next/no-img-element */
import { gilroy } from '../fonts';
import { AddNewAlbumForm } from '@/components/albums/AddNewAlbumForm';

const AddAlbumPage = () => {
  return (
    <div className={`pb-12 ${gilroy.className}`}>
      <div
        className='border-b border-[#E2E2E2] bg-[#E2E2E2] py-5
          text-center text-xl font-semibold'
      >
        New Release
      </div>
      <div className='mx-auto max-w-screen-2xl'>
        <div className='px-4 pt-3'>
          <div className='mb-9 text-[18px] font-semibold text-[#323232]'>
            Release Info
          </div>
          <AddNewAlbumForm />
        </div>
      </div>
    </div>
  );
};

export default AddAlbumPage;
