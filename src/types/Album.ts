export type Album = {
  id: number;
  title: string;
  artist: {
    fullName: string;
  };
  tracks: [
    {
      title: string;
    },
  ];
  coverUrl: string;
};
