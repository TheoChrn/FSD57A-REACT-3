import { ItemsPage } from "@/components/pages/[category]/items";
import {
  fetches,
  ValidCategoryKey,
  validsCategories,
} from "@/lib/fetch-mapping";

import { getQueryClient } from "@/lib/getQueryClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function CategoryPage({
  params: { category },
}: {
  params: {
    category: string;
  };
}) {
  if (!validsCategories.includes(category as ValidCategoryKey)) return;

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: [category],
    queryFn: fetches[category as ValidCategoryKey],
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ItemsPage category={category} />
    </HydrationBoundary>
  );
}
