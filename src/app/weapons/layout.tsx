import { WeaponsPage } from "@/components/pages/weapons/weapons";
import { getWeapons } from "@/lib/fetch";
import { getQueryClient } from "@/lib/getQueryClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function WeaponsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["weapons"],
    queryFn: getWeapons,
  });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <WeaponsPage />
      </HydrationBoundary>
      {children}
    </>
  );
}
