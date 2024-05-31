export type Album = {
  id: number;
  title: string;
  artist: {
    fullName: string;
  };
  coverUrl: string;
};
