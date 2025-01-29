// src/stores/counter-store.ts
import { createStore } from "zustand/vanilla";

export type ActiveItemState = {
  item: {
    title: string;
    desription: string;
  } | null;
};

export type ActiveItemActions = {
  setItem: (item: { title: string; desription: string }) => void;
};

export type ActiveItemStore = ActiveItemState & ActiveItemActions;

export const defaultInitState: ActiveItemState = {
  item: null,
};

export const createActiveItemStore = (
  initState: ActiveItemState = defaultInitState
) => {
  return createStore<ActiveItemStore>()((set) => ({
    ...initState,
    setItem: () => set((state) => ({ item: state.item })),
  }));
};
