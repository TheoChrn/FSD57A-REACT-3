"use client";

import { ItemsDetails } from "@/components/organisms/items-details";
import { getEntryById } from "@/lib/fetch";
import { getQueryClient } from "@/lib/getQueryClient";
import { useMutation, useSuspenseQuery } from "@tanstack/react-query";

export function ItemsDetailsPage({
  id,
  category,
}: {
  id: string;
  category: string;
}) {
  const queryClient = getQueryClient();

  const { data } = useSuspenseQuery({
    queryKey: [category, id],
    queryFn: () => getEntryById(id),
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

      // Return promise to satisfie mutationFn types
      return Promise.resolve(data);
    },

    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: [category] });

      const previousFavorites: CategorySchema[] | undefined =
        queryClient.getQueryData(["favorites"]);

      return { previousFavorites };
    },

    // Update favorites properties and create/remove a favorite item cache
    onSuccess: (result) => {
      // Update Current Item
      queryClient.setQueryData([category, id], result);

      // Update Favorite Item
      if (result.favorites) {
        queryClient.setQueryData(["favorites", id], result);
      } else {
        queryClient.removeQueries({ queryKey: ["favorites", id] });
      }

      //Update items in list
      queryClient.setQueryData([category], (old: CategorySchema[]) =>
        old.map((item) => (item.id === result.id ? result : item))
      );
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(
        ["favorites"],
        context?.previousFavorites ?? null
      );
    },
  });

  return (
    <ItemsDetails
      item={data}
      onClick={() =>
        mutate({ ...data, favorites: data.favorites ? false : true })
      }
    />
  );
}
