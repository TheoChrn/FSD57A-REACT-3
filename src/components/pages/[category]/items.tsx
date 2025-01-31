"use client";

import { ItemsList } from "@/components/organisms/items-list";
import { EmptyList } from "@/components/templates/empty-list";
import { fetches, ValidCategoryKey } from "@/lib/fetch-mapping";
import { createChunk } from "@/lib/utils";
import { useSuspenseQuery } from "@tanstack/react-query";

export function ItemsPage({ category }: { category: string }) {
  const { data } = useSuspenseQuery({
    queryKey: [category],
    queryFn: fetches[category as ValidCategoryKey],
  });

  if (!data || (data && !data.length)) {
    return <EmptyList />;
  }

  const chunks = createChunk(data);

  return (
    <>
      {chunks.map((chunk, index) => (
        <ItemsList key={index} chunk={chunk} category={category} />
      ))}
    </>
  );
}
