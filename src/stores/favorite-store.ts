import { createStore } from "zustand/vanilla";

export type FavoritesState = {
  favorites: {
    title: string;
    description: string;
    properties: {
      attack: number;
      defense: number;
      effect: string;
      type: string;
    };
  } | null;
};

export type FavoritesActions = {
  setFavorites: (favorites: NonNullable<FavoritesState["favorites"]>) => void;
};

export type FavoritesStore = FavoritesState & FavoritesActions;

export const defaultInitState: FavoritesState = {
  favorites: null,
};

export const createFavoritesStore = (
  initState: FavoritesState = defaultInitState
) => {
  return createStore<FavoritesStore>()((set) => ({
    ...initState,
    setFavorites: () => set((state) => ({ favorites: state.favorites })),
  }));
};
