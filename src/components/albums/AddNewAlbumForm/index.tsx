/* eslint-disable @next/next/no-img-element */
'use client';

import { Button } from '@/components/forms/Button';
import { Input } from '@/components/forms/Input';
import { Label } from '@/components/forms/Label';
import { DropImage } from '@/components/icons/DropImage';
import { useAlbumsStore } from '@/providers/albums-store-provider';
import type { Album } from '@/types/Album';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

type FormData = {
  title: string;
  artistName: string;
  image: FileList;
};

export const AddNewAlbumForm = () => {
  const router = useRouter();
  const { albums, setAlbums } = useAlbumsStore((state) => state);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>();
  const image = watch('image');
  const imageSrc = image?.length ? URL.createObjectURL(image[0]) : null;

  const onSubmit = (data: FormData) => {
    const newAlbum: Album = {
      id: albums.length + 1,
      title: data.title,
      artist: {
        fullName: data.artistName,
      },
      coverUrl: URL.createObjectURL(data.image[0]),
    };

    setAlbums([...albums, newAlbum]);

    router.push('/');
  };

  return (
    <form
      method='GET'
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col'
    >
      <div
        className='relative mx-auto mb-[18px] flex h-[250px] w-[216px]
            flex-col items-center rounded-[13px] bg-[#F9F9FB]'
      >
        <div className='mb-8 mt-9'>
          {imageSrc ? (
            <img
              src={imageSrc}
              alt='image'
              className='h-20 w-[57px] rounded object-cover'
            />
          ) : (
            <DropImage />
          )}
        </div>
        <div className='px-[10px] text-center text-sm font-medium'>
          Drop your image here or <span className='text-[#0D4AB6]'>browse</span>
        </div>
        <input
          type='file'
          className='absolute left-0 top-0 h-full w-full opacity-0 file:hidden'
          {...register('image', { required: true })}
        />
      </div>
      {errors.image && (
        <span className='text-center text-red-500'>This field is required</span>
      )}
      <div className='mb-[60px] text-center font-medium'>
        Upload Music Artwork
      </div>
      <div className='mb-9 flex flex-col gap-5'>
        <Label htmlFor='title'>Title</Label>
        <Input
          id='title'
          placeholder='Enter Title'
          {...register('title', { required: true })}
        />
        {errors.title && (
          <span className='text-red-500'>This field is required</span>
        )}
      </div>
      <div className='mb-[68px] flex flex-col gap-5'>
        <Label htmlFor='artistName'>Author</Label>
        <Input
          id='artistName'
          placeholder='Enter Artist'
          {...register('artistName', { required: true })}
        />
        {errors.artistName && (
          <span className='text-red-500'>This field is required</span>
        )}
      </div>
      <Button className='self-center'>Release Now</Button>
    </form>
  );
};
