import { ItemPage } from "@/components/pages/[category]/[id]/item-details";
import { fetchesById, ValidCategoryKey } from "@/lib/fetch-mapping";
import { getQueryClient } from "@/lib/getQueryClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function WeaponPage({
  params: { id, category },
}: {
  params: {
    id: string;
    category: string;
  };
}) {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: [category, id],
    queryFn: () => fetchesById[category as ValidCategoryKey](id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ItemPage category={category} id={id} />
    </HydrationBoundary>
  );
}
