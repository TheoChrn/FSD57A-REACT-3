"use client";

import { ItemsList } from "@/components/organisms/items-list";
import { EmptyList } from "@/components/templates/empty-list";
import { getCategoryList } from "@/lib/fetch";
import { ValidCategoryKey } from "@/lib/category-enum";
import { createChunk } from "@/lib/utils";
import { useSuspenseQuery } from "@tanstack/react-query";

export function ItemsPage({ category }: { category: string }) {
  const { data } = useSuspenseQuery({
    queryKey: [category],
    queryFn: () => getCategoryList(category as ValidCategoryKey),
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
