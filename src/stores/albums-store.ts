import { DUMMY_ALBUMS } from '@/dummyAlbums';
import { createStore } from 'zustand';
import type { Album } from '@/types/Album';

export type AlbumsState = {
  editingAlbumid: number | null;
  albumIdWithOpenPopup: number | null;
  albums: Album[];
};

export type AlbumsActions = {
  setAlbums: (albums: Album[]) => void;
  setAlbumIdWithOpenPopup: (albumId: number | null) => void;
  setEditingAlbumId: (id: number | null) => void;
};

export type AlbumsStore = AlbumsState & AlbumsActions;

export const defaultInitState: AlbumsState = {
  editingAlbumid: null,
  albumIdWithOpenPopup: null,
  albums: DUMMY_ALBUMS,
};

export const createAlbumsStore = (
  initState: AlbumsState = defaultInitState,
) => {
  return createStore<AlbumsStore>()((set) => ({
    ...initState,
    setAlbums: (albums) => set((state) => ({ ...state, albums })),
    setAlbumIdWithOpenPopup: (id: number | null) =>
      set((state) => ({ ...state, albumIdWithOpenPopup: id })),
    setEditingAlbumId: (id: number | null) =>
      set((state) => ({
        ...state,
        editingAlbumid: id,
      })),
  }));
};
