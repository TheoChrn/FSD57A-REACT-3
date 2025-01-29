"use client";
import { getQueryClient } from "@/lib/getQueryClient";
import { ActiveItemStoreProvider } from "@/providers/active-item-store-provider";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import type * as React from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ActiveItemStoreProvider>{children}</ActiveItemStoreProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
