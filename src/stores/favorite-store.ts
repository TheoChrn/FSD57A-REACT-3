import { createStore } from "zustand/vanilla";

export type FavoritesState = {
  favorites: number[];
};

export type FavoritesActions = {
  addToFavorites: (id: number) => void;
  removeFromFavorites: (id: number) => void;
};

export type FavoritesStore = FavoritesState & FavoritesActions;

export const defaultInitState: FavoritesState = {
  favorites: [],
};

export const createFavoritesStore = (
  initState: FavoritesState = defaultInitState
) => {
  return createStore<FavoritesStore>()((set) => ({
    ...initState,
    addToFavorites: (id) => {
      set((state) => ({
        favorites: [...state.favorites, id],
      }));
    },
    removeFromFavorites: (id) =>
      set((state) => ({
        favorites: state.favorites.filter((prevId) => prevId !== id),
      })),
  }));
};
