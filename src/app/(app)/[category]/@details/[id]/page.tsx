import { ItemsDetailsPage } from "@/components/pages/[category]/[id]/item-details-page";
import { getEntryById } from "@/lib/fetch";
import { ValidCategoryKey } from "@/lib/category-enum";
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
    queryFn: () => getEntryById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ItemsDetailsPage category={category} id={id} />
    </HydrationBoundary>
  );
}
