"use client";

import { createFavoritesStore, FavoritesStore } from "@/stores/favorite-store";
import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

export type FavoritesStoreApi = ReturnType<typeof createFavoritesStore>;

export const FavoritesStoreContext = createContext<
  FavoritesStoreApi | undefined
>(undefined);

export interface FavoritesStoreProviderProps {
  children: ReactNode;
}

export const FavoritesStoreProvider = ({
  children,
}: FavoritesStoreProviderProps) => {
  const storeRef = useRef<FavoritesStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createFavoritesStore();
  }

  return (
    <FavoritesStoreContext.Provider value={storeRef.current}>
      {children}
    </FavoritesStoreContext.Provider>
  );
};

export const useFavoritesStore = <T,>(
  selector: (store: FavoritesStore) => T
): T => {
  const favoritesStoreContext = useContext(FavoritesStoreContext);

  if (!favoritesStoreContext) {
    throw new Error(
      `useFavoritesStore must be used within FavoritesStoreProvider`
    );
  }

  return useStore(favoritesStoreContext, selector);
};
