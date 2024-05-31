'use client';

import { type ReactNode, createContext, useRef, useContext } from 'react';
import { type StoreApi, useStore } from 'zustand';
import { type AlbumsStore, createAlbumsStore } from '@/stores/albums-store';

export const AlbumsStoreContext = createContext<StoreApi<AlbumsStore> | null>(
  null,
);

export type AlbumsStoreProviderProps = {
  children: ReactNode;
};

export const AlbumsStoreProvider = ({ children }: AlbumsStoreProviderProps) => {
  const storeRef = useRef<StoreApi<AlbumsStore>>();

  if (!storeRef.current) {
    storeRef.current = createAlbumsStore();
  }

  return (
    <AlbumsStoreContext.Provider value={storeRef.current}>
      {children}
    </AlbumsStoreContext.Provider>
  );
};

export const useAlbumsStore = <T,>(selector: (store: AlbumsStore) => T): T => {
  const albumsStoreContext = useContext(AlbumsStoreContext);

  if (!albumsStoreContext) {
    throw new Error(`useAlbumsStore must be used within AlbumsStoreProvider`);
  }

  return useStore(albumsStoreContext, selector);
};
