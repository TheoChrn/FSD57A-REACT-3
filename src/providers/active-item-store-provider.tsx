// src/providers/counter-store-provider.tsx
"use client";

import {
  ActiveItemStore,
  createActiveItemStore,
} from "@/stores/active-item-store";
import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

export type ActiveItemStoreApi = ReturnType<typeof createActiveItemStore>;

export const ActiveItemStoreContext = createContext<
  ActiveItemStoreApi | undefined
>(undefined);

export interface ActiveItemStoreProviderProps {
  children: ReactNode;
}

export const ActiveItemStoreProvider = ({
  children,
}: ActiveItemStoreProviderProps) => {
  const storeRef = useRef<ActiveItemStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createActiveItemStore();
  }

  return (
    <ActiveItemStoreContext.Provider value={storeRef.current}>
      {children}
    </ActiveItemStoreContext.Provider>
  );
};

export const useActiveItemStore = <T,>(
  selector: (store: ActiveItemStore) => T
): T => {
  const activeItemStoreContext = useContext(ActiveItemStoreContext);

  if (!activeItemStoreContext) {
    throw new Error(`useActiveItemStore must be used within ActiveItemStoreProvider`);
  }

  return useStore(activeItemStoreContext, selector);
};
