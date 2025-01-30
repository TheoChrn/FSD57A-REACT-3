"use client";
import { getQueryClient } from "@/lib/getQueryClient";
import { FavoritesStoreProvider } from "@/providers/favorites-store-provider";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import type * as React from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <FavoritesStoreProvider>{children}</FavoritesStoreProvider>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}
