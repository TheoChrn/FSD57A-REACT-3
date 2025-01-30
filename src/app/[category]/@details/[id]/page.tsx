import { Weapon } from "@/components/pages/weapons/[id]/weapon";
import { getWeaponById } from "@/lib/fetch";
import { getQueryClient } from "@/lib/getQueryClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function WeaponPage(props: {
  params: {
    id: string;
  };
}) {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["weapon", props.params.id],
    queryFn: () => getWeaponById(props.params.id),
    staleTime: Infinity,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Weapon id={props.params.id} />
    </HydrationBoundary>
  );
}
