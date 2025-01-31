"use client";
import { getQueryClient } from "@/lib/getQueryClient";

export default function Default() {
  const queryClient = getQueryClient();
  const favorites: CategorySchema[] | undefined = queryClient.getQueryData([
    "favorites",
  ]);

  return (
    <>
      {favorites?.length
        ? "Select an item to see its details."
        : "No items in your favorites."}
    </>
  );
}
