import { DUMMY_ALBUMS } from '@/dummyAlbums';
import { createStore } from 'zustand';
import type { Album } from '@/types/Album';

export type AlbumsState = {
  albums: Album[];
};

export type AlbumsActions = {
  setAlbums: (albums: Album[]) => void;
};

export type AlbumsStore = AlbumsState & AlbumsActions;

export const defaultInitState: AlbumsState = {
  albums: DUMMY_ALBUMS,
};

export const createAlbumsStore = (
  initState: AlbumsState = defaultInitState,
) => {
  return createStore<AlbumsStore>()((set) => ({
    ...initState,
    setAlbums: (albums) => set((state) => ({ ...state, albums })),
  }));
};
