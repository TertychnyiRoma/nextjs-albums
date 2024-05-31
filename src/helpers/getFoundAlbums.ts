import { Album } from '@/types/Album';

export const getFoundAlbums = (
  albums: Album[],
  searchValue: string | null,
): Album[] => {
  if (!searchValue) return albums;

  return albums.filter((album) => {
    if (searchValue) {
      const lowerCaseQuery = searchValue.toLowerCase();
      const lowerCaseTitle = album.title.toLowerCase();
      const lowerCaseArtistName = album.artist.fullName.toLowerCase();

      return (
        lowerCaseTitle.includes(lowerCaseQuery) ||
        lowerCaseArtistName.includes(lowerCaseQuery)
      );
    }

    return true;
  });
};
