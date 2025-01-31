"use client";

import { EmptyList } from "@/components/templates/empty-list";
import { ItemsList } from "@/components/organisms/items-list";
import { getQueryClient } from "@/lib/getQueryClient";
import { createChunk } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";

export default function FavoritePage() {
  const queryClient = getQueryClient();
  const { data } = useQuery({
    queryKey: ["favorites"],
    queryFn: async () => {
      const favorites: CategorySchema[] | undefined =
        await queryClient.getQueryData(["favorites"]);

      return favorites;
    },
  });

  if (!data || (data && !data.length)) {
    return <EmptyList />;
  }

  const chunks = createChunk(data);

  return (
    <>
      {chunks.map((chunk, index) => (
        <ItemsList key={index} chunk={chunk} />
      ))}
    </>
  );
}
