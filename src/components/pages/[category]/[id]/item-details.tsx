"use client";

import { Container } from "@/components/atoms/containers/container";
import { Paragraph } from "@/components/atoms/paragraph";
import { Title } from "@/components/atoms/title/title";
import { Details } from "@/components/organisms/details";
import { fetchesById, FetchesKey } from "@/lib/fetch-mapping";
import { getQueryClient } from "@/lib/getQueryClient";
import { useFavoritesStore } from "@/providers/favorites-store-provider";
import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import { PiHeartStraightFill } from "react-icons/pi";

export function ItemPage({ id, category }: { id: string; category: string }) {
  const queryClient = getQueryClient();
  const { favorites } = useFavoritesStore((state) => state);

  const isInFavs = favorites.includes(Number(id));

  const { data } = useSuspenseQuery({
    queryKey: [category, id],
    queryFn: () => fetchesById[category as FetchesKey](id),
    staleTime: Infinity,
  });

  const { mutate } = useMutation({
    mutationFn: async () => {
      await queryClient.cancelQueries({ queryKey: [category] });

      const optimisticItem = queryClient.setQueryData(
        [category, id],
        (old: CategorySchema) => {
          return {
            ...old,
            favorites: true,
          };
        }
      );

      // const optimisticList = queryClient.setQueryData(
      //   [category],
      //   (oldData: CategorySchema[]) => {
      //     return [...oldData, optimisticItem];
      //   }
      // );

      return { optimisticItem };
    },
    onSuccess: (result, variables, context) => {
      console.log(context);
      // queryClient.setQueryData([category, id], result);
      // queryClient.setQueryData([category], (old: CategorySchema[]) =>
      //   old.map((item) =>
      //     item.id === context.optimisticItem.id ? result : item
      //   )
      // );
    },
    onError: (error, newItems, context) => {
      console.log(context);
      console.log(error);
      // queryClient.setQueryData([category, id], context.optimisticItem);
      // queryClient.setQueryData([category], (old: CategorySchema[]) =>
      //   old.filter((item) => item.id !== context.optimisticItem.id)
      // );
    },
  });

  return (
    <>
      <Container className="flex gap-3 items-center pb-1 border-b-1 ">
        <Title>{data.name}</Title>
        <button onClick={() => mutate()} className="cursor-pointer">
          <PiHeartStraightFill
            size={20}
            aria-checked={isInFavs}
            className="hover:scale-102 active:scale-98 aria-checked:fill-red-500 duration-200 transition-all stroke-10 stroke-white fill-transparent aria-checked:stroke-red-500"
          />
        </button>
      </Container>
      <Details data={data} />
      <Paragraph>{data.description}</Paragraph>
    </>
  );
}
