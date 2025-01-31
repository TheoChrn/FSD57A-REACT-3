"use client";

import { Container } from "@/components/atoms/containers/container";
import { Paragraph } from "@/components/atoms/paragraph";
import { Title } from "@/components/atoms/title/title";
import { Details } from "@/components/templates/details";
import { fetchesById, ValidCategoryKey } from "@/lib/fetch-mapping";
import { getQueryClient } from "@/lib/getQueryClient";
import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import { PiHeartStraightFill } from "react-icons/pi";

export function ItemPage({ id, category }: { id: string; category: string }) {
  const queryClient = getQueryClient();

  const { data } = useSuspenseQuery({
    queryKey: [category, id],
    queryFn: () => fetchesById[category as ValidCategoryKey](id),
  });

  const { mutate } = useMutation({
    mutationFn: (data: CategorySchema) => {
      queryClient.setQueryData(["favorites"], (old: CategorySchema[] = []) => {
        const existingItemIndex = old.findIndex((item) => item.id === data.id);

        // remove from favorites or add
        if (existingItemIndex !== -1) {
          return old.filter((item) => item.id !== data.id);
        }
        return [...old, data];
      });
      return Promise.resolve(data);
    },

    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: [category] });

      const previousFavorites: CategorySchema[] | undefined =
        queryClient.getQueryData(["favorites"]);

      return { previousFavorites };
    },
    onSuccess: (result) => {
      // Update Current Item
      queryClient.setQueryData([category, id], result);

      // Update Favorite Item
      result.favorites
        ? queryClient.setQueryData(["favorites", id], result)
        : queryClient.removeQueries({ queryKey: ["favorites", id] });

      //Update items in list
      queryClient.setQueryData([category], (old: CategorySchema[]) =>
        old.map((item) => (item.id === result.id ? result : item))
      );
    },
    onError: (error, variables, context) => {
      queryClient.setQueryData(
        ["favorites"],
        context?.previousFavorites ?? null
      );
    },
  });

  return (
    <>
      <Container className="flex gap-3 items-center pb-1 border-b-1 ">
        <Title>{data.name}</Title>
        <button
          onClick={() =>
            mutate({ ...data, favorites: data.favorites ? false : true })
          }
          className="cursor-pointer"
        >
          <PiHeartStraightFill
            size={20}
            aria-checked={data.favorites}
            className="hover:scale-102 active:scale-98 aria-checked:fill-red-500 duration-200 transition-all stroke-10 stroke-white fill-transparent aria-checked:stroke-red-500"
          />
        </button>
      </Container>
      <Details data={data} />
      <Paragraph>{data.description}</Paragraph>
    </>
  );
}
