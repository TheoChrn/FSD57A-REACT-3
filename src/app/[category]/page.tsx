import { ItemsPage } from "@/components/pages/[category]/items";
import { fetches, FetchesKey } from "@/lib/fetch-mapping";

import { getQueryClient } from "@/lib/getQueryClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function CategoryPage({
  params: { category },
}: {
  params: {
    category: string;
  };
}) {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: [category],
    queryFn: fetches[category as FetchesKey],
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ItemsPage category={category} />
    </HydrationBoundary>
  );
}
